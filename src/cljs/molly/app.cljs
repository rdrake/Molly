(ns molly.app
  (:use-macros [dommy.macros :only [node sel sel1 deftemplate]])
  (:require-macros [shoreleave.remotes.macros :as macros])
  (:require [dommy.utils :as utils]
            [dommy.core :as dommy]
            [dommy.attrs :as attrs]
            [dommy.template :as template]
            [shoreleave.remotes.http-rpc :refer [remote-callback]]
            [clojure.walk :refer [keywordize-keys]]
            [strokes :refer [d3]]))

(strokes/bootstrap)

(def width 960)
(def height 500)

(def svg (-> d3
             (.select "#span-graph")
             (.append "svg")
             (.attr {:width width :height height})))

; (pr-str obj) is a wonderful debug tool.

(def top-k-values 5)
(def top-k-entities 5)

(def source-entity (atom nil))
(def target-entity (atom nil))

(declare autosuggest widget create-widget) ; Suppress warnings

(defn populate-entity [target-node id]
  (remote-callback
    :get-entity
    [id]
    (fn [entities]
      (let [entity (first entities)]
        (dommy/replace-contents!
          target-node
          (node [:.need-background
                 (create-widget entity)])))

      (let [span-button (sel1 :#span-it)]
        (if (or (nil? @source-entity)
                (nil? @target-entity)
                (= @source-entity @target-entity))
          (attrs/set-attr! span-button :disabled)
          (attrs/remove-attr! span-button :disabled))))))

(defn set-source! [s]
  (swap! source-entity (fn [_] s))

  (populate-entity (sel1 :#source) s))

(defn set-target! [t]
  (swap! target-entity (fn [_] t))
  
  (populate-entity (sel1 :#target) t))

(deftemplate select-button [text id]
  (->
    (node [:button.small.secondary])
    (dommy/set-text! text)
    (dommy/listen!
      :click
      (fn [e]
        (condp = text
          "Source"  (set-source! id)
          "Target"  (set-target! id))))))

(deftemplate widget [title data]
  [:.widget
   [:h3 (title (:results data))]
   [:h6.subheader (:class (:meta data))]
   [:table
    [:thead
     [:tr
      [:th "Attribute"]
      [:th "Value"]]]
    [:tbody
     (for [[k v] (:results data)]
       [:tr
        [:td (name k)]
        [:td v]])]]])

(defn q []
  (let [q-elem (sel1 :#q)]
    [q-elem (dommy/value q-elem)]))

(defn populate-suggestions [values]
  (let [container (sel1 :#suggested-values)]
    (dommy/clear! container)

    (doseq [value (take top-k-values values)]
      (let [value-str ((value :results) :value)
            elem (node [:li [:a value-str]])
            [q-elem _] (q)]
        (dommy/append! container elem)
        (dommy/listen! elem
                       :click (fn [e]
                                (dommy/set-value!
                                  q-elem
                                  value-str)
                                (autosuggest nil)))))))

(defn create-widget [data]
  (widget
    (condp = (:class (:meta data))
      "course"      :title
      "instructor"  :name
      "location"    :name
      "subject"     :name
      "campus"      :name
      "term"        :name
      "section"     :crn
      "schedule"    :days)
    data))

(defn create-result-widget [data]
  (node [:.result-widget.row
         [:.large-8.columns
          (create-widget data)]
         [:.large-4.columns
          [:ul.button-group
           [:li
            (select-button "Source" (:id (:meta data)))
            (select-button "Target" (:id (:meta data)))]]]]))

(defn populate-entities [entities]
  (let [container (sel1 :#entities)]
    (dommy/clear! container)
    
    (doseq [entity (take top-k-entities entities)]
      (dommy/append! container (create-result-widget entity)))))

(defn autosuggest [_]
  (let [[_ value] (q)]
    (remote-callback :get-value [value] populate-suggestions)))

(defn find-entities [e]
  (.preventDefault e)
  (let [[_ value] (q)]
    (remote-callback :get-entities [value] populate-entities)))

(defn process-span [results]
  (let [prev      (keywordize-keys (:prev results))
        entities  (:entities results)]
    (loop [eid    @target-entity
           path   []]
      (let [eid-key (keyword eid)]
        (if (nil? eid)
          [(reverse path) entities]
          (recur (eid-key prev) (conj path eid-key)))))))

(defn populate-span [results]
  (let [container       (sel1 :#span-results)
        [path entities] results]
    (dommy/clear! container)
    
    (doseq [eid path]
      (if (not (nil? eid))
        (let [entity (first (eid entities))]
          (if (not (nil? entity))
            (dommy/append! container (create-widget entity))
  
            (if (not (= (name eid) @target-entity))
              (dommy/append! container
                             (node [:i.fi-arrow-right])))))))))

(defn compute-span [e]  
  (let [step-1 (sel1 :section#step-1)
        step-2 (sel1 :section#step-2)
        preloader (sel1 :.preloader)]
    (attrs/remove-class! preloader :hidden)
    (attrs/remove-class! step-1 :active)
    (attrs/add-class! step-2 :active)

    (remote-callback
      :get-span
      [@source-entity
       @target-entity
       (dommy/value (sel1 :#search-method))]
      (fn [results]
        (let [debug (:debug results)
              t     (/ (:time debug) 1000 1000 1000)
              mem   (/ (:mem_used debug) 1024 1024)]
          (dommy/set-text! (sel1 :#span-results-info)
                           (str "Took " t "s and used "
                                mem " MB of memory"))
          (attrs/remove-class! (sel1 :.alert-box) :hidden)
          (attrs/add-class! preloader :hidden))
        (populate-span (process-span results))))))

(defn ^:export init []
  (let [q-elem (sel1 :#q)
        search-form (sel1 :#search-form)
        span-it (sel1 :#span-it)]
    (dommy/listen! q-elem :keyup autosuggest)
    (dommy/listen! search-form :submit find-entities)
    (dommy/listen! span-it :click compute-span)))
