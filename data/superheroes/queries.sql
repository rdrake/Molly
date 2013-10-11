SELECT Person.name FROM Person JOIN Planet on Person.birthplace = Planet.name WHERE NOT Planet.destroyed;

WITH friends AS	(
	SELECT name, peer FROM Link WHERE relationtype = 'friend')
SELECT DISTINCT S1.name, S2.name, S3.name
FROM superhero S1, superhero S2, superhero S3
WHERE --DISTINCT (S1.name, S2.name, S3.name) and
	S1.power = 'flying' and S2.power = 'speed' and S3.power = 'strength'
	and
	ALL (S1.name, S2.name) IN friends;
	--(S2.name, S3.name) IN friends and
	--(S1.name, S3.name) IN friends;