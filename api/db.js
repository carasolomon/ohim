// database 

// using mongoose to connect to mongodb 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://PLACE URL HERE');

// database schema
const userSchema = new Schema({
    email: String,
    inventoryItems: [
        {
        itemType: String, 
        cost: String,
        quantity: String, 
        dateacquired: String, 
        condition: String
        }]
    });
    

const User = mongoose.model('User', userSchema);


