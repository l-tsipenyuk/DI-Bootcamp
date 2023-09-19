-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- );

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Matt','Damon','08/10/1970', 5),
-- ('George','Clooney','06/05/1961', 2),
-- ('Brad', 'Pitt', '1980-04-22', 1),
-- ('Matt', 'Damon', '1982-11-22', 2),
-- ('Patrick', 'Jolie', '1980-04-22', 1),
-- ('Marc', 'Benichou', '1998-11-02',0), 
-- ('Yoan', 'Cohen', '2010-12-03',0), 
-- ('Lea',	'Benichou', '1987-07-27',0), 
-- ('Amelia', 'Dux', '1996-04-07',0), 
-- ('David', 'Grez', '2003-06-14',0), 
-- ('Omer', 'Simpson', '1980-10-03',1);

-- Get the average number of oscars in the table:
-- select avg(number_oscars) as avg_oscars from actors;

-- Get distinct actors depending on their number of oscars:
-- SELECT first_name, last_name, sum(number_oscars) FROM actors GROUP BY first_name, last_name 
-- ORDER BY min(number_oscars);
-- select distinct(first_name), number_oscars from actors order by number_oscars;

-- Get the actors born after 01/01/1970
-- SELECT * FROM actors WHERE age > '1970-01-01';
-- select * from actors where age > '01/01/1970';

-- Get the actors which names are 'David', 'Morgan' or 'Will'
-- select * from actors where first_name = 'David' or first_name = 'Morgan' or first_name = 'Will';
-- select * from actors where first_name in ('David', 'Morgan','Will');