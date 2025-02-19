const mongoose = require("mongoose")


const adminschema = mongoose.Schema({

})

const Admin = mongoose.model("Admin" ,adminschema)


module.exports = Admin