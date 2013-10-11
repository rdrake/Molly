INSERT INTO Planet VALUES ('Krypton', 0, 8700, TRUE, 'Andromeda');
INSERT INTO Planet VALUES ('Earth', 12742, 4540, FALSE, 'Milky Way');

INSERT INTO Person VALUES ('Superman', 33, 'Krypton');
INSERT INTO Person VALUES ('Batman', 30, 'Earth');
INSERT INTO Person VALUES ('Flash', 53, 'Earth');
INSERT INTO Person VALUES ('Wonder Woman', 28, 'Krypton');
INSERT INTO Person VALUES ('General Zod', 42, 'Krypton');

INSERT INTO Superhero VALUES ('Superman', 'flying');
INSERT INTO Superhero VALUES ('Superman', 'strength');
INSERT INTO Superhero VALUES ('Superman', 'speed');
INSERT INTO Superhero VALUES ('Batman', 'genius');
INSERT INTO Superhero VALUES ('Batman', 'strength');
INSERT INTO Superhero VALUES ('Flash', 'speed');
INSERT INTO Superhero VALUES ('Wonder Woman', 'strength');
INSERT INTO Superhero VALUES ('Wonder Woman', 'speed');
INSERT INTO Superhero VALUES ('Wonder Woman', 'flying');
INSERT INTO Superhero VALUES ('General Zod', 'flying');
INSERT INTO Superhero VALUES ('General Zod', 'speed');
INSERT INTO Superhero VALUES ('General Zod', 'strength');
INSERT INTO Superhero VALUES ('General Zod', 'hearing');

INSERT INTO Link VALUES ('Superman', 'Wonder Woman', 'friend');
INSERT INTO Link VALUES ('Superman', 'Batman', 'friend');
INSERT INTO Link VALUES ('Superman', 'General Zod', 'foe');
INSERT INTO Link VALUES ('Batman', 'Superman', 'friend');
INSERT INTO Link VALUES ('Batman', 'Wonder Woman', 'friend');
INSERT INTO Link VALUES ('Flash', 'Batman', 'friend');
INSERT INTO Link VALUES ('Flash', 'Superman', 'friend');
INSERT INTO Link VALUES ('Wonder Woman', 'Batman', 'friend');
INSERT INTO Link VALUES ('Wonder Woman', 'Superman', 'friend');
INSERT INTO Link VALUES ('General Zod', 'Wonder Woman', 'foe');