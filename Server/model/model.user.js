var mongoose = require("mongoose");
var UserSchema = mongoose.Schema;

mongoose.pluralize(null);

var SchemaRef = new UserSchema({
    username:String,
    password:String,
    firstName:String,
    lastName:String,
    email:String
});

var UserModel = mongoose.model("user",SchemaRef);
module.exports = UserModel;