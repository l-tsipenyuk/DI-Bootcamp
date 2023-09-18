-- xp gold exercises
-- Fetch the first four students. You have to order the four students alphabetically by last_name.
-- select * from students where id < 5 order by last_name;

-- Fetch the details of the youngest student.
-- select * from students where birth_date = (select max(birth_date) from students);

-- Fetch three students skipping the first two students.
-- select id, first_name, last_name from students where id > 2 and id < 6;