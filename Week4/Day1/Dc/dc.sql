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
-- ('Omer', 'Simpson', '1980-10-03',1)

-- select * from actors;

-- Count how many actors are in the table.
-- select count(first_name) as actors_amount from actors;

-- Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- I think there'll be an eror since we specified NOT NULL at start.
-- insert into actors (first_name, last_name, age, number_oscars) 
-- values 
-- ('Jennifer', 'Aniston', '1969-02-11', null);
-- select * from actors;
-- If we add a random number the error disappears.
-- insert into actors (first_name, last_name, age, number_oscars) 
-- values 
-- ('Jennifer', 'Aniston', '1969-02-11', 1);
-- select * from actors;

-- I forgot to comment once so I had to delete one extra row
-- delete from actors where actor_id = 14
-- RETURNING actor_id, first_name, last_name, age, number_oscars;

-- select * from actors;

