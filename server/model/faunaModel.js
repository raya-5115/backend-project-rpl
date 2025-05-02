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
  jenis_makanan:{
    type: String,
    required: true
  },
  status_konservasi: {
    type: String,
    enum: ['Punah', 'Terancam Punah', 'Rentan', 'Hampir Terancam', 'Berisiko Rendah']
  },
  gambar: {
    type: String  // URL to image
  },
  populasi: {
    type: Number
  },

},)

export default mongoose.model("faunas", faunaSchema)