-- create table customer (
-- 	customer_id serial,
-- 	first_name varchar(50),
-- 	last_name varchar(50) not null,
-- 	primary key (customer_id)
-- );

-- create table customer_profile (
-- 	pk_customer_id integer not null,
-- 	is_logged_in boolean default false,
-- 	primary key (pk_customer_id),
-- 	constraint fk_customer_id foreign key (pk_customer_id) references customer (customer_id)
-- );

-- insert into customer(first_name, last_name) values
-- ('John','Doe'),
-- ('Jerome','Lalu'),
-- ('Lea','Rive');

-- insert into customer_profile(pk_customer_id, is_logged_in) values
-- ((select customer_id from customer where first_name = 'John'),
-- false),
-- ((select customer_id from customer where first_name = 'Jerome'),
-- true);

-- The first_name of the LoggedIn customers
-- select customer.first_name, customer_profile.is_logged_in 
-- from customer 
-- right join customer_profile
-- on customer.customer_id = customer_profile.pk_customer_id
-- where customer_profile.is_logged_in = true;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
-- select customer.first_name, customer_profile.is_logged_in 
-- from customer 
-- full outer join customer_profile
-- on customer.customer_id = customer_profile.pk_customer_id;

-- The number of customers that are not LoggedIn
-- select count(customer_profile.is_logged_in)  
-- from customer 
-- right join customer_profile
-- on customer.customer_id = customer_profile.pk_customer_id
-- where customer_profile.is_logged_in = true;