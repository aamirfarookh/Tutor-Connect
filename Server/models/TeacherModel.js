const mongoose=require("mongoose")

const TeacherSchema =mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    subjects: {type:[String], required:true},
    qualification: {type:String, required:true},

    availability: {
      type: [String],
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    hourlyRate: {
      type: Number,
      required: true
    }
  });

  const TeacherModel=mongoose.model("teacher",TeacherSchema)
  module.exports={TeacherModel}
