const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = '1native';

// Create a new MongoClient
const client = new MongoClient(url,{ useUnifiedTopology: true } );

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // insertDocuments(db, function() {
  //  client.close();
  //    });
  findDocuments(db, function() {
        client.close();
      });


});
const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('col1');
  // Insert some documents
  collection.insertMany([
    {
      a : 1,b : 1
    },{
      a : 2,b : 2
    },{
      a : 3,b : 3
    },
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('col1');
  // Find some documents
  collection.find({}).toArray(function(err, col1) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(col1)
    callback(col1);
  });
}
