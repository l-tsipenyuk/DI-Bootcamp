-- create table house_expenses (
-- id serial primary key,
-- date_paid date,
-- electricity float,
-- water float,
-- paid_by varchar(50)
-- );

-- insert into house_expenses (date_paid, electricity, water, paid_by)
-- values 
-- ('2023-01-01', 55.5, 66.7, 'James');

-- insert into house_expenses (date_paid, electricity, water, paid_by)
-- values 
-- ('2023-02-01', 58.9, 62.1, 'John'),
-- ('2023-03-01', 60.0, 67.8, 'James'),
-- ('2023-04-01', 50.3, 70.1, 'John')
-- ;

-- insert into house_expenses (date_paid, electricity, water, paid_by)
-- values 
-- ('2023-05-01', 70.9, 62.1, 'James'),
-- ('2023-06-01', 63.6, 69.8, 'James'),
-- ('2023-07-01', 59.3, 75.1, 'John'),
-- ('2023-08-01', 71.3, 79.1, 'James'),
-- ('2023-09-01', 68.5, 68.3, 'John')
-- ;

-- select * from house_expenses;
-- select paid_by from house_expenses;
-- select electricity, paid_by from house_expenses;
-- select electricity, water from house_expenses;

-- delete from house_expenses where id=3
-- returning id, date_paid, electricity, water, paid_by;

-- insert into house_expenses (id, date_paid, electricity, water, paid_by)
-- values 
-- (3, '2023-02-05', 5, 30.2, 'James');

-- select * from house_expenses
-- order by id;

-- select * from house_expenses where id = 2;

-- select id, date_paid, water from house_expenses where id != 3;

-- select * from house_expenses where id = 1 or id = 2;

-- select * from house_expenses where id in (2, 3);

-- select count(paid_by) from house_expenses where paid_by = 'John';


-- select * from house_expenses

-- select max(electricity) from house_expenses where paid_by = 'John';
-- select min(electricity) from house_expenses;
-- select avg(electricity) from house_expenses where paid_by != 'James';
-- select sum(water) as sum_water_James from house_expenses where paid_by = 'James';

-- select * from house_expenses

-- select paid_by, count(electricity), min(electricity) as min_elec, avg(electricity) as avg_elec from house_expenses
-- group by paid_by;

-- select paid_by, sum(electricity + water) as total_sum from house_expenses
-- group by paid_by;

-- select paid_by, max(electricity + water) as max_amount from house_expenses
-- group by paid_by;

-- update house_expenses
-- set electricity = 33, water = 25 where id = 2;

-- select * from house_expenses;

-- update house_expenses
-- set electricity = 0 where paid_by = 'John';

-- update house_expenses
-- set paid_by = 'Joanna' where id = 1;

-- select * from house_expenses order by id;

-- delete from house_expenses where electricity < 56;
delete from house_expenses where date_paid < '2023-05-01';
select * from house_expenses order by id;
