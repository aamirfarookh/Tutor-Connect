const mongoose=require("mongoose")

const AdminSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
          type: String,
          required: true,
        },
        designation:{
            type:String, 
            required:true
        }
})

const AdminModel=mongoose.model("admin",AdminSchema)
module.exports={AdminModel}