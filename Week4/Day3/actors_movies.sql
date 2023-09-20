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

-- select producers2.first_name, producers2.last_name, movies.movie_title
-- from producers2
-- join movies
-- on producers2.movie_id = movies.movie_id;

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



-- for multiple connections! many to many relationship
-- create table actors_movies (
-- movie_id integer not null,
-- actor_id integer not null,
	
-- 	foreign key (movie_id) references movies(movie_id),
-- 	foreign key (actor_id) references actors(actor_id)
-- );


-- insert into actors_movies (movie_id, actor_id)
-- values 
-- (
-- (select movie_id from movies where movie_title = 'Oppenheimer'),
-- (select actor_id from actors where first_name = 'George')
-- );

-- to change the structure of the table:
-- alter table producers2 drop column movie_id;

-- many to many relationship between producers and movies
-- create table producers_movies (
-- movie_id integer not null,
-- producer_id integer not null,
	
-- 	foreign key (movie_id) references producers2(producer_id),
-- 	foreign key (producer_id) references movies(movie_id)
-- );

-- one to one connection
-- create table scenarios (
-- 	movie_id int primary key,
-- 	short_text text not null,
	
-- 	foreign key (movie_id) references movies(movie_id)
-- );

-- insert into scenarios (movie_id, short_text)
-- values
-- (
-- (select movie_id from movies where movie_title = 'Oppenheimer'),
-- 'Some text'
-- );

select * from scenarios;