CREATE TABLE Planet (
	name varchar(255) not null primary key,
	size integer not null, -- km
	age integer not null, -- millions of years
	destroyed boolean default FALSE,
	galaxy varchar(255) not null
);

CREATE TABLE Person (
	name varchar(255) not null primary key,
	age integer not null,
	birthplace varchar(255) not null,
	foreign key (birthplace) references Planet(name)
);

CREATE TABLE Superhero (
	name varchar(255) not null,
	power varchar(255) not null,
	foreign key (name) references Person(name)
);

CREATE TABLE Link (
	name varchar(255) not null,
	peer varchar(255) not null,
	relationtype varchar(255) not null,
	foreign key (name) references Person(name),
	foreign key (peer) references Person(name)
);