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

-- calling all the items:
-- select item_name from items;

-- calling all the items with a price above 80 (80 not included): 
-- select item_name from items where price > 80;

-- calling all the items with a price below 300. (300 included):
-- select item_name from items where price <= 300;

-- calling all customers whose last name is ‘Smith’ (there are no Smiths so we see nothing):
-- select first_name from customers where last_name = 'Smith';

-- calling all customers whose last name is ‘Jones’:
-- select first_name from customers where last_name = 'Jones';

-- calling all customers whose firstname is not ‘Scott’:
-- select first_name, last_name from customers where last_name != 'Scott';