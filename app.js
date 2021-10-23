const mongoose = require('mongoose');
const { Schema } = mongoose;
// Connect to fruitsDB database, if it doesn't exist, it will create one.
mongoose.connect('mongodb://localhost:27017/fruitsDB');

// Define your schema. Everything in Mongoose starts with a schema
//Add some built-in data validation
const fruitSchema = new Schema({
  name:{
    type:String,
    required: [true, "Please check your data entry, no name specified."]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
})

// Creating a model

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name: "Pineapple",
  score: 8,
  review: "Great fruit"
})

// fruit.save();




// Delete data by .deleteOne(filter,callback)
// Fruit.deleteOne({name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully delete");
//   }
// })

// Embed fruit document into person document
const personSchema = new Schema({
  name:String,
  age:Number,
  favoriteFruit:fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const person = new Person({
  name: "Amy",
  age:12,
  favoriteFruit:fruit
})

// person.save();
// Delete a number of documents by .deleteMany()
// Person.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully delete many Johns!");
//   }
// })

const watermelon = new Fruit({
  name: "Watermelon",
  score: 9,
  review: "Awsome"
})

watermelon.save();

const banana = new Fruit({
  name: "Banana",
  score: 9,
  review: "Great stuff"
})

// Fruit.insertMany([orange,banana],function(err,docs){
//   if(err){
//     console.log("There is an error");
//   }else{
//     console.log("Successfully add two fruits!");
//   }
// })

//Model.find()
// Reading from your database with mongoose

Fruit.find({},function(err,docs){
  docs.forEach((doc)=>{
    console.log(doc.name);
  })
  // Close the connection inside the callback function.
  // mongoose.disconnect(function(err){
  //   if(err){
  //     console.log("Error");
  //   }else{
  //     console.log("Successfully close the connection");
  //   }
  // })
});

const res = Person.updateOne({name:"John"},{favoriteFruit:watermelon},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully updated the document");
  }
});









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
