-- create function get_all_customers()
-- returns table (
-- 	id int,
-- 	email varchar,
-- 	age int) as $$
-- 	begin
-- 		return query select * from customers;
-- 	end;
-- $$ language plpgsql;
-- plpgsql - postgressql

-- select * from get_all_customers();

-- create or replace function get_sum_orders(customer_id_arg int)
-- returns int 
-- as $$
-- declare 
-- 	total_amount integer;
-- begin
-- 	select sum(amount) into total_amount from orders where customer_id = customer_id_arg;
-- 	return total_amount;
-- end;
-- $$ language plpgsql;

select * from get_sum_orders(1);