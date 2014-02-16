LEIN=/usr/local/bin/lein
JAVA=/usr/bin/java
LATEXMK=/usr/texbin/latexmk

JAR=target/molly-1.0.0-standalone.jar
CONFIG=config/benchmark.ini

DOC_DIR=thesis/document
OUT_DIR=$(DOC_DIR)/figures/charts

TOPK_VALUE=50
TOPK_ENTITIES=10
TOPK_ENTITY=5

IDENT=tkv-$(TOPK_VALUE)-tkes-$(TOPK_ENTITIES)-tke-$(TOPK_ENTITY)
PROPS=config/molly-$(IDENT).properties
OUT_FILE=gathered-$(IDENT).json

build-jar : 
	$(LEIN) uberjar

build-document:
	cd $(DOC_DIR) && $(LATEXMK) -pvc- Thesis

index : build-jar
	$(JAVA) -jar $(JAR) -c $(PROPS) --index

benchmark : 
	./src/python/molly/performance/gather.py \
	  --config $(CONFIG) --output $(OUT_FILE) \
	  --properties $(PROPS) --topk-entity $(TOPK_ENTITY) \
	  --topk-entities $(TOPK_ENTITIES) --topk-value $(TOPK_VALUE)

boxplots : 
	./src/python/molly/performance/boxplot.py \
	  --results $(OUT_FILE) --output $(OUT_DIR) \
	  --ident $(IDENT)

lineplots : 
	./src/python/molly/performance/lineplot.py \
	  --results $(OUT_FILE) --output $(OUT_DIR) \
	  --ident $(IDENT)

plots : boxplots lineplots
	

postprocess : 
	./src/python/molly/performance/postprocess.py \
	  --results $(OUT_FILE) --output $(OUT_DIR)

clean : 
	rm -Rf mycampus.idx target
	cd $(DOC_DIR) && $(LATEXMK) -c -pvc- Thesis
