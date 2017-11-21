const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    title: String,
    recipes: [{
        name: String,
        ingredients: [{
            name: String,
            weight: Number,
            price: String
        }]
    }]

  

}, {
    timestamps: true
});


const User = mongoose.model('user', UserSchema);

// Add a 'dummy' user (every time you require this file!)
const user = new User({
    name: 'Joe',
    title: 'Mr.',
    recipes: [
        {name: 'pasta bolognaise', ingredients: [
        {name: 'Tomaten', weight: 200, price:'1,20'}   ]
        },
        {
            name: 'spaghetti carbonara',
            ingredients:[]
        },
        {
            name: 'pizza'
        }
    ]

});//.save();

module.exports = User;