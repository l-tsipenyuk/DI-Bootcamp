-- CREATE TABLE countries(
--  country_id SERIAL PRIMARY KEY,
--  country_name VARCHAR (100)
-- );

-- insert into countries (country_name)
-- values
-- ('USA'),
-- ('France');

-- create table movies(
-- 	movie_id serial primary key,
-- 	movie_title varchar(50) not null,
-- 	movie_story text,

-- 	country_id integer,
	
-- 	foreign key(country_id) references countries(country_id));

-- insert into movies (movie_title, movie_story, country_id)
-- values
-- (
-- 	'Oppenheimer',
-- 	'Some biographical drama written by Cr. Nolan.',
-- 	(select country_id from countries where country_name = 'USA')
-- );

-- insert into movies (movie_title, movie_story, country_id)
-- values
-- (
-- 	'Amelie',
-- 	'One of the most famous romantic comedy films directed by Jean-Pierre Jeunet.',
-- 	(select country_id from countries where country_name = 'France')
-- );

-- select m.movie_title, c.country_name 
-- from movies as m
-- join countries as c
-- on m.country_id = c.country_id;

-- insert into movies (movie_title, movie_story, country_id)
-- values
-- (
-- 	'LOL',
-- 	'LOL (Laughing Out Loud) is a 2008 French comedy film directed by Lisa Azuelos and starring Sophie Marceau, Christa Theret, and Alexandre Astier.',
-- 	(select country_id from countries where country_name = 'France')
-- );

-- select m.movie_title, c.country_name 
-- from movies as m
-- full join countries as c
-- on m.country_id = c.country_id;

-- CREATE TABLE producers2(
--  id serial primary key,
--  first_name VARCHAR (50),
--  last_name VARCHAR (50),
--  movie_id integer,
	
-- 	foreign key(movie_id) references movies(movie_id));

-- insert into producers2 (first_name, last_name, movie_id)
-- values
-- ('Lisa', 'Azuelos', (select movie_id from movies where movie_title = 'Amelie'));

-- insert into producers2 (first_name, last_name, movie_id)
-- values
-- ('Charles', 'Roven', (select movie_id from movies where movie_title = 'Oppenheimer'));

-- insert into producers2 (first_name, last_name, movie_id)
-- values
-- ('Romain', 'Le Grand', (select movie_id from movies where movie_title = 'LOL'));

select producers2.first_name, producers2.last_name, movies.movie_title
from producers2
join movies
on producers2.movie_id = movies.movie_id;
