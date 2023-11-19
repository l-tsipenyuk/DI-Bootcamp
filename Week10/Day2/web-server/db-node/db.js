const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    },
});

// db("products")
//     .select("id", "name", "price")
//     // .where({id: 1})
//     .orderBy("name")
//     .where("id", '>', 1)
//     .then((rows) => {
//         console.log(rows);
//     })
//     .catch((e) => {
//         console.log(e);
//     });


// SELECT
// let id =1
// // db.raw("select id,name,price from products where id > ?", [1])
// db.raw("select id,name,price from products where id > ?" + id, [1])
// .then((data)=>{
//     console.log(data.rows);
// })

// INSERT
// db('products')

// for one

// .insert({
//     name: 'iCar',
//     price: 5000,
// })

// for several

// .insert([
//     { name: 'iCoffee', price: 555, },
//     { name: 'iKey', price: 777, },
// ])

// or

// .insert([{name: "iPhone15", price: 5555}], ['id','name'])
// .then((data) => {
//     console.log(data.rows);
// })
// .catch((e) => {
//     console.log(e);
// });

// UPDATE

// db('products')
// .update({ price: 789 },['id','name','price'])
// .where({ id: 2 })
// .then((data) => {
//     console.log(data.rows);
// })
// .catch((e) => {
//     console.log(e);
// });

// DELETE

db('products')
    .where({ id: 7 })
    .del()
    .returning(['id', 'name', 'price'])
    .then((data) => {
        console.log(data.rows);
    })
    .catch((e) => {
        console.log(e);
    });