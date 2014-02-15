LEIN=/usr/local/bin/lein
JAVA=/usr/bin/java
LATEXMK=/usr/texbin/latexmk

IDENT=
JAR=target/molly-1.0.0-standalone.jar
CONFIG=config/benchmark.ini
PROPS=config/molly$(IDENT).properties
OUT_FILE=gathered$(IDENT).json
OUT_DIR=thesis/document/figures/charts
DOC_DIR=thesis/document

TOPK_VALUE=50
TOPK_ENTITIES=10
TOPK_ENTITY=5

build-jar : 
	$(LEIN) uberjar

build-document:
	cd $(DOC_DIR) && $(LATEXMK) -pvc- Thesis

index : build-jar
	$(JAVA) -jar $(JAR) -c $(PROPS) --index

benchmark : clean index
	./src/python/molly/performance/gather.py \
	  --config $(CONFIG) --output $(OUT_FILE) \
	  --properties $(PROPS) --topk-entity $(TOPK_ENTITY) \
	  --topk-entities $(TOPK_ENTITIES) --topk-value $(TOPK_VALUE)

postprocess : 
	./src/python/molly/performance/postprocess.py \
	  --results $(OUT_FILE) --output $(OUT_DIR)

clean : 
	rm -Rf mycampus.idx target
	cd $(DOC_DIR) && $(LATEXMK) -c -pvc- Thesis
