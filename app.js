const mongoose = require('mongoose');
const { Schema } = mongoose;
// Connect to fruitsDB database, if it doesn't exist, it will create one.
mongoose.connect('mongodb://localhost:27017/fruitsDB');

// Define your schema. Everything in Mongoose starts with a schema

const fruitSchema = new Schema({
  name:String,
  rating:Number,
  review:String
})

// Creating a model

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  score: 8,
  review: "Great fruit"
})

// fruit.save();

const personSchema = new Schema({
  name:String,
  age:Number
})

const Person = mongoose.model("Person",personSchema);

const person = new Person({
  name: "John",
  age:37
})

// person.save();

const orange = new Fruit({
  name: "Orange",
  score: 6,
  review: "Kinda sour"
})

const banana = new Fruit({
  name: "Banana",
  score: 9,
  review: "Great stuff"
})

Fruit.insertMany([orange,banana],function(err,docs){
  if(err){
    console.log("There is an error");
  }else{
    console.log("Successfully add two fruits!");
  }
})


// const { MongoClient } = require("mongodb");
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb://localhost:27017";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db('fruitsDB');
//     const fruit = database.collection("fruit");
//
//     const doc = [
//       {
//         name: "Apple",
//         score: 8,
//         review: "Great fruit"
//       },
//       {
//         name: "Orange",
//         score: 6,
//         review: "Kinda sour"
//       },
//       {
//         name: "Banana",
//         score: 9,
//         review: "Great stuff"
//       }
//     ]
//
//     // const result = await fruit.insertMany(doc);
//
//     // console.log(`A document was inserted with the _id: ${result.insertedId}`);
//
//     const query ={};
//     const cursor = fruit.find(query);
//     // print a message if no documents were found
//   	if ((await cursor.count()) === 0) {
//   	    console.log("No documents found!");
//   	}
//
//   	    // replace console.dir with your callback to access individual elements
//   	await cursor.forEach(console.dir);
//
//
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// console.log("Connected successfully to server");
// run().catch(console.dir);
