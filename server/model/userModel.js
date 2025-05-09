import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  role:{
    type: String,
    enum: ['mahasiswa', 'dosen', 'mitra'],
    default: 'mahasiswa'
  }
}, { timestamps: true })

export default mongoose.model("Users", userSchema)