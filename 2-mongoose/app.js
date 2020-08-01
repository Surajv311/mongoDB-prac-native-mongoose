const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/2mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
// RELATIONS IN MONGOOSE
name : {
  type: String,
  required : [true , "No name specified!"]
},

rating : {
type : Number ,
min : 1 ,
max : 10 ,
},

review : String
});

const Fruit = mongoose.model("Fruit",fruitSchema)

const fruit = new Fruit({
  name : "Mango",
  rating : 7,
  review : "good"
});

//fruit.save();

const personSchema = new mongoose.Schema({
  name : String,
  age:Number,
  favfruit : fruitSchema,
  // embedding fruit schema in this   
});

const Person = mongoose.model("Person" , personSchema);

const person = new Person({
  name: "Rui",
  age: "18"
});
// const fruit2 = new Fruit({
//   name : "Leechi",
//   rating : 8,
//   review : "better"
// });
// const fruit3 = new Fruit({
//   name : "Orange",
//   rating : 6,
//   review : "ok"
// });
//
// Fruit.insertMany([fruit2,fruit3] , function(err){
//   if(err)
//   console.log(err); // to check for error
//   else
//   console.log("running");
// })
// Fruit.find(function(err , var_fruits){
//   if(err){
//     console.log(err);
//   }
//   else{
//   console.log(var_fruits);
// mongoose.connection.close();
//   var_fruits.forEach(function(var_fruits){
//     console.log(var_fruits.name);
//   })
// }
// });
