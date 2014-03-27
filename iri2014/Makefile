all:
	pdflatex main

pdf: 
	latex main
	bibtex main
	pdflatex main
	pdflatex main

clean:
	rm -f main.aux main.log *.bbl *.blg *.dvi
