var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {
        type : String,
        required : true

    },
    phone : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    place : {
        type : String,
        required : true
    },
    sex : {
        type : String
    },
    group : {
        type : String,
        required : true
    }

});

module.exports = mongoose.model('blood',schema);