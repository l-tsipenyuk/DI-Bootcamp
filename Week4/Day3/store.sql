-- create table customers (
-- id serial primary key,
-- email varchar(100) unique,
-- age int default 18
-- );

-- insert into customers (email) values
-- ('someone@gmail.com')

-- insert into customers (email) values
-- ('another@gmail.com');

-- select * from customers;

-- create table orders (
-- 	id serial primary key,
-- 	customer_id int,
-- 	amount int check(amount > 0),
	
-- 	foreign key (customer_id) references customers(id) on delete cascade
-- );

-- insert into orders (customer_id, amount)
-- values 
-- (
-- 	(select id from customers where email = 'another@gmail.com'), 5
-- );

-- delete from customers where email = 'another@gmail.com';

-- restrict - prevents parent from deletion