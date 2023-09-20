-- create table book (
-- 	book_id serial primary key,
-- 	title varchar(100) not null,
-- 	author varchar(100) not null
-- );

-- insert into book (title, author) values
-- ('Alice In Wonderland','Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird','Harper Lee');

-- create table student2 (
-- 	student_id serial primary key,
-- 	name varchar(50) not null unique,
-- 	age int,
-- 	check (age<=15)
-- );

-- insert into student2 (name,age) values
-- ('John',12),
-- ('Lera',11),
-- ('Patrick',10),
-- ('Bob',14);

-- create table library2 (
-- 	book_id int,
-- 	student_id int,
-- 	borrowed_date date,
-- 	primary key (book_id, student_id),
-- 	foreign key (book_id) references book(book_id) on delete cascade on update cascade,
-- 	foreign key (student_id) references student2(student_id) on delete cascade on update cascade
-- );

-- insert into library2(book_id, student_id, borrowed_date) values
-- ((select student_id from student2 where name = 'John'),
--  (select book_id from book where title = 'Alice In Wonderland'),'2022-02-15');

-- insert into library2(book_id, student_id, borrowed_date) values
-- ((select book_id from book where title = 'To kill a mockingbird'),
--   (select student_id from student2 where name = 'Bob'),'2021-03-03');

-- insert into library2(book_id, student_id, borrowed_date) values
-- ((select book_id from book where title = 'Alice In Wonderland'),
--   (select student_id from student2 where name = 'Lera'),'2021-05-23');
  
-- insert into library2(book_id, student_id, borrowed_date) values
-- ((select book_id from book where title = 'Harry Potter'),
--   (select student_id from student2 where name = 'Bob'),'2021-08-12');

-- select * from library2;

-- select book.title, student2.name
-- from (student2 join library2 on student2.student_id = library2.student_id)
-- join book on book.book_id = library2.book_id;

-- select avg(student2.age) 
-- from (student2 join library2 on student2.student_id = library2.student_id)
-- join book on book.book_id = library2.book_id
-- where book.title = 'Alice In Wonderland';

-- select * from student2;
-- delete from student2 where name = 'Lera';
-- When I deleted one student the average age of students who borrowed Alice in WonderLand increased. There was no error since I applied delete cascade on update cascade 

