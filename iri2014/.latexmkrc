# Generate a PDF
$pdf_mode = 1;

# Don't generate PS or DVI
$postscript_mode = $dvi_mode = 0;

# Turn off preview mode
$preview_continuous_mode = 0;

# Clean *.bbl files
$bibtex_use = 2;

# Demand silence
$pdflatex_silent_switch = '--interaction=batchmode';
$biber_silent_switch = '--onlylog';
$bibtex_silent_switch = '-quiet';
