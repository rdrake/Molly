LEIN=/usr/local/bin/lein
JAVA=/usr/bin/java
LATEXMK=/usr/texbin/latexmk

JAR=target/molly-1.0.0-standalone.jar
CONFIG=config/benchmark.ini
PROPS=config/molly.properties
DOC_DIR=thesis/document

build-jar : 
	$(LEIN) uberjar

build-document:
	cd $(DOC_DIR) && $(LATEXMK) -pvc- Thesis

index : build-jar
	$(JAVA) -jar $(JAR) -c $(PROPS) --index

benchmark : index
	./src/python/molly/performance/gather.py \
	  --config $(CONFIG) --output gathered.json

postprocess : 
	./src/python/molly/performance/postprocess.py \
	  --results gathered.json --output thesis/document/figures/images

clean :
	rm -Rf mycampus.idx target
	cd $(DOC_DIR) && $(LATEXMK) -c -pvc- Thesis
