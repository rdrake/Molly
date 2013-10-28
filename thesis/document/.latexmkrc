# Use XeLaTeX and pop open Preview.app.
$pdflatex = 'xelatex --shell-escape %O %S';
$pdf_mode = 1;
$postscript_mode = $dvi_mode = 0;
$preview_continuous_mode = 1;

# Demand silence.
$pdflatex_silent_switch = '--interaction=batchmode';
$biber_silent_switch = '--onlylog';
$bibtex_silent_switch = '-quiet';

add_cus_dep('glo', 'gls', 0, 'run_makeglossaries');
add_cus_dep('acn', 'acr', 0, 'run_makeglossaries');

sub run_makeglossaries {
  if ( $silent ) {
    system "makeglossaries -q '$_[0]'";
  }
  else {
    system "makeglossaries '$_[0]'";
  };
}

push @generated_exts, 'glo', 'gls', 'glg';
push @generated_exts, 'acn', 'acr', 'alg';
$clean_ext .= ' %R.ist %R.xdy';
