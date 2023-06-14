const mongoose=require("mongoose")
const {Schema} = mongoose

const StudentSchema = new Schema({
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

    bookings: [{
      teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
      },
      startTime: Date,
      endTime: Date
    }],
    
     isVerified:{type:Boolean, default:false}
  },
  {versionKey:false});

  const StudentModel= mongoose.model("student",StudentSchema)
  module.exports={StudentModel}