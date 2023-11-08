import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const test = async () => {
  const trx = await db.transaction();
  try {
    const product = await db("products")
      .insert({ name: "iIsrael", price: 55555 }, ["id", "name", "price"])
      .transacting(trx);
      const product = await db("products")
      .insert({ name: "iIsrael", price: 55555 }, ["id", "name", "price"])
      .transacting(trx);
      const product = await db("products")
      .insert({ name: "iIsrael", price: 55555 }, ["id", "name", "price"])
      .transacting(trx);
      const product = await db("products")
      .insert({ name: "iIsrael", price: 55555 }, ["id", "name", "price"])
      .transacting(trx);

    console.log(product);

    await trx.commit();
  } catch (e) {
    console.log(e);
    await trx.rollback();
  }
};

test();
//DELETE
// db("products")
//   .where({ id: 7 })
//   .del()
//   .returning(["id", "name", "price"])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// UPDATE
// db("products")
//   .update({ price: 789 }, ["id", "name", "price"])
//   .where({ id: 2 })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// INSERT;
// db("products")
//   .insert([{ name: "iPhone15",  price: 5555 }],['id','name'])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// SELECT
// db("products")
//   .where("id", ">", 1)
//   .select("id", "name", "price")
//   .orderBy("name")
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// db.raw("select id,name,price from products where id > ?", [2])
//   .then((data) => {
//     console.log(data.rows);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
