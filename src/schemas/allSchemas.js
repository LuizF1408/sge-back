const mongoose = require('mongoose');
const sellerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    user:{
username: String,
password: String
    }
})
const Seller = mongoose.model('Seller',sellerSchema);

const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    user:{
        email:{
            type: String,
            required: true
        },
        password: String
    }
})
const Customer = mongoose.model('Customer',customerSchema)

module.exports ={ Seller,Customer}

