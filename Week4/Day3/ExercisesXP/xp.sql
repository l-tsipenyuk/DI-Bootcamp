-- 1. Get a list of all the languages, from the language table.
-- select name from language;

-- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name.
-- select language.name, film.title, film.description
-- from film
-- inner join language
-- on film.language_id = language.language_id
-- group by film.title, film.description, language.name;

-- 3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
-- select language.name, film.title, film.description
-- from film
-- full join language
-- on film.language_id = language.language_id
-- group by film.title, film.description, language.name;

-- 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- create table new_film (
-- 	film_id serial primary key,
-- 	film_name varchar(50)
-- );

-- insert into new_film (film_name) values
-- ('Amelie'),
-- ('Golda'),
-- ('Barbie');

-- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- create table customer_review (
-- 	review_id serial primary key not null,
-- 	film_id int references new_film.film_id on delete cascade,
-- 	language_id int references language.language_id,
-- 	title varchar(50),
-- 	score int check (score >= 1 and score <= 10),
-- 	review_text text,
-- 	last_update date
-- );

-- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- insert into customer_review (film_id, language_id, title, score, review_text, last_update) values
-- (1, 1, 'Good', 9, 'Good movie', '2023-09-20');
-- insert into customer_review (film_id, language_id, title, score, review_text, last_update) values
-- (2, 1, 'Average', 5, 'Not so good movie', '2023-05-10');

-- select * from customer_review;

-- select * from new_film;
-- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- delete from new_film where film_name = 'Amelie';

-- I deleted Amelie (with film_id = 1), so now review of this film also disappeared from the customer_review table. 

-- Exercise 2

-- 1.Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- update customer_review 
-- set language_id = 2 where film_id = 2;
-- select * from customer_review;

-- 2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- customer_id. We should insert values with existing customer_id

-- 3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- drop table customer_review;
-- It was easy to drop this table, but I believe if any table used something from this table as a foreign key and we didn't specify delete cascade, there would be an error.

-- 4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- select count (*)
-- from inventory
-- full join rental
-- on rental.inventory_id = inventory.inventory_id
-- where return_date is null;

-- 5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- select film.rental_rate, film.title 
-- from (rental join inventory on rental.inventory_id = inventory.inventory_id)
-- join film on inventory.film_id = film.film_id
-- where return_date is null
-- order by rental_rate desc
-- limit 30;

-- 6. Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
-- select film.title
-- from (actor join film_actor on actor.actor_id = film_actor.actor_id)
-- join film on film_actor.film_id = film.film_id
-- where description like '%Sumo%' and first_name = 'Penelope' and last_name = 'Monroe';

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- select film.title
-- from (category join film_category on category.category_id = film_category.category_id)
-- join film on film_category.film_id = film.film_id
-- where category.name = 'Documentary' and film.length < 60 and film.rating = 'R';

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005
-- select film.title, rental.return_date, film.rental_rate
-- from (customer join rental on customer.customer_id = rental.rental_id)
-- join inventory on rental.inventory_id = inventory.inventory_id
-- join film on inventory.film_id = film.film_id
-- where customer.first_name = 'Matthew' and customer.last_name = 'Mahan';

-- The output doesn't fully meet the requirements, but seems like the customer with the given name has rented only this movie on this exact date (in May) and paying this price. This also proves the query below:
-- select return_date
-- from (customer join rental on customer.customer_id = rental.rental_id)
-- where customer.first_name = 'Matthew' and customer.last_name = 'Mahan';

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
-- select film.title, replacement_cost
-- from (actor join film_actor on actor.actor_id = film_actor.actor_id)
-- join film on film_actor.film_id = film.film_id
-- where film.description like '%Boat%' or film.title like '%Boat%' order by replacement_cost desc;

-- As in previous task seems like Matthew Mahan ordered only 1 movie (without 'boat'). So I sorted films meeting other condition with respect to their replacement cost.