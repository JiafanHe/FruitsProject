const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('fruitsDB');
    const fruit = database.collection("fruit");

    const doc = [
      {
        name: "Apple",
        score: 8,
        review: "Great fruit"
      },
      {
        name: "Orange",
        score: 6,
        review: "Kinda sour"
      },
      {
        name: "Banana",
        score: 9,
        review: "Great stuff"
      }
    ]

    // const result = await fruit.insertMany(doc);

    // console.log(`A document was inserted with the _id: ${result.insertedId}`);

    const query ={};
    const cursor = fruit.find(query);
    // print a message if no documents were found
  	if ((await cursor.count()) === 0) {
  	    console.log("No documents found!");
  	}

  	    // replace console.dir with your callback to access individual elements
  	await cursor.forEach(console.dir);


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
console.log("Connected successfully to server");
run().catch(console.dir);
