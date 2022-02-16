const mongoose= require('mongoose');
const imageSchema=  new mongoose.Schema({

image: {
    type: String,
    required: true,
},
description: {
    type: String,
    required: true
},
title: {
    type: String,
    required: true
},
})
module.exports = mongoose.model('image', imageSchema);