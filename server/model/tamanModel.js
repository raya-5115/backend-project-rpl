import mongoose from "mongoose";

const tamanNasionalSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  lokasi: {
    type: String,
    required: true
  },
  luas: {
    type: Number,
    required: true
  },
  jumlah_jenis_flora: {
    type: Number
  },
  jumlah_jenis_fauna: {
    type: Number
  },
  deskripsi: {
    type: String,
    required: true
  },
});

export default mongoose.model("TamanNasional", tamanNasionalSchema);