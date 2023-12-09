const mongoose = require('mongoose');
const{Schema} = mongoose;

const UserSchema = new Schema({
    username: {type: String, required}
})