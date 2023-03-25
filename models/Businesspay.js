let mongoose = require("mongoose");
let Schema = mongoose.Schema

let schema = new Schema({

    businessid: {type : String, required : true},
    planid: {type : String, required : true},
    paymentdate: {type : String, required : true},
    amount: {type : String, required : true},
    paymentmethod: {type : String, required : true},

})
let Businesspay = mongoose.model("businesspay" , schema);

module.exports = Businesspay;