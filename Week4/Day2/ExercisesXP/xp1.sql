-- create table items (
-- id serial primary key,
-- item_name varchar(50),
-- price float
-- );

-- insert into items (item_name, price)
-- values 
-- ('Small Desk', 100),
-- ('Large desk', 300),
-- ('Fan', 80)
-- ;

-- select * from items;

-- create table customers (
-- id serial primary key,
-- first_name varchar(50),
-- last_name varchar(50)
-- );

-- insert into customers (first_name, last_name)
-- values 
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson')
-- ;

-- All items, ordered by price (lowest to highest).
-- select * from items order by price;

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- select * from items where price >= 80 order by price desc;

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- select first_name, last_name from customers where id <= 3;

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
-- select last_name from customers order by last_name desc;
