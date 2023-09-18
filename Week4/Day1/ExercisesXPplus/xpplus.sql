-- create table students (
-- id serial primary key,
-- first_name varchar(50),
-- last_name varchar(50),
-- birth_date date
-- );

-- insert into students (first_name, last_name, birth_date)
-- values 
-- ('Marc','Benichou','1998-11-02'),
-- ('Yoan','Cohen','2010-12-03'),
-- ('Lea','Benichou','1987-07-27'),
-- ('Amelia','Dux','1996-04-07'),
-- ('David','Grez','2003-06-14'),
-- ('Omer','Simpson','1980-10-03'),
-- ('Liya','Tsipenyuk','1997-09-30')
-- ;

-- 1. Fetch all of the data from the table.
-- select * from students;

-- 2. Fetch the student whose last_name is Benichou AND first_name is Marc.
-- select first_name, last_name from students where last_name = 'Benichou' and first_name = 'Marc';

-- 3. Fetch the students whose last_names are Benichou OR first_names are Marc.
-- select first_name, last_name from students where last_name = 'Benichou' or first_name = 'Marc';

-- 4. Fetch the students whose first_names contain the letter a.
-- select first_name, last_name from students where first_name like '%a%'

-- 5. Fetch the students whose first_names start with the letter a
-- select first_name, last_name from students where first_name like 'a%'

-- 6. Fetch the students whose first_names end with the letter a
-- select first_name, last_name from students where first_name like '%a'

-- 7. Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- select first_name, last_name from students where first_name like '%a%' and first_name not like 'a%';

-- 8. Fetch the students whose id’s are equal to 1 AND 3 .
-- select first_name, last_name from students where id = 1 or id = 3;

-- 4. (9) Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
-- select * from students where birth_date >= '2000-01-01';
