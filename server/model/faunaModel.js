import mongoose from "mongoose";

const faunaSchema = new mongoose.Schema({
  nama_ilmiah:{
    type: String,
    required: true
  },
  nama_lokal:{
    type: String,
    required: true
  },
  habitat:{
    type: String,
    required: true
  },
  deskripsi:{
    type: String,
    required: true
  },

},)

export default mongoose.model("faunas", faunaSchema)