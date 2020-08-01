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

const fruit_ = new Fruit({
  name : "Papaya",
  rating : 7,
  review : "ok"
});
fruit_.save()

const person = new Person({
  name: "Rui",
  age: "18",
  favfruit: fruit_
});
person.save()

Fruit.find(function(err , var_fruits){
  if(err){
    console.log(err);
  }
  else{
  console.log(var_fruits);
 mongoose.connection.close();
  var_fruits.forEach(function(var_fruits){
    console.log(var_fruits.name);
  })
}
});
