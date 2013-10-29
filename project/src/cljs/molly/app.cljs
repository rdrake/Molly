(ns molly.app
  (:require-macros [shoreleave.remotes.macros :as macros])
  (:require [shoreleave.remotes.http-rpc :refer [remote-callback]]))

(remote-callback :get-value ["ken"] #(.log js/console %))
