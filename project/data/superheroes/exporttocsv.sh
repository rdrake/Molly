#!/usr/local/bin/zsh
sqlite3 superheroes.sq3 <<EOF
.headers on
.mode csv
.output Person.csv
select * from Person;
EOF

sqlite3 superheroes.sq3 <<EOF
.headers on
.mode csv
.output Link.csv
select * from Link;
EOF

sqlite3 superheroes.sq3 <<EOF
.headers on
.mode csv
.output Planet.csv
select * from Planet;
EOF

sqlite3 superheroes.sq3 <<EOF
.headers on
.mode csv
.output Superhero.csv
select * from Superhero;
EOF
