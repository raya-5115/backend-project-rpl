import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "../model/userModel.js";

dotenv.config();

// Koneksi ke database
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected for user initialization"))
  .catch(err => console.error("Connection error:", err));

const createUsers = async () => {
  try {
    // Hapus akun dosen dan mitra yang sudah ada (opsional)
    await User.deleteMany({ role: { $in: ['dosen', 'mitra'] } });
    
    // Data untuk dosen
    const dosenList = [
      { name: "Dr. Budi Santoso", email: "budi.dosen@example.com", password: "dosen123", role: "dosen" },
      { name: "Prof. Ani Wijaya", email: "ani.dosen@example.com", password: "dosen123", role: "dosen" }
    ];
    
    // Data untuk mitra
    const mitraList = [
      { name: "PT Maju Sejahtera", email: "info@majusejahtera.com", password: "mitra123", role: "mitra" },
      { name: "CV Teknologi Nusantara", email: "admin@teknonusantara.com", password: "mitra123", role: "mitra" }
    ];
    
    // Gabungkan list
    const allUsers = [...dosenList, ...mitraList];
    
    // Hash password dan buat user
    for (const userData of allUsers) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      
      const newUser = new User({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        role: userData.role
      });
      
      await newUser.save();
      console.log(`Created ${userData.role}: ${userData.name}`);
    }
    
    console.log("Initial users created successfully");
    mongoose.disconnect();
    
  } catch (error) {
    console.error("Error creating initial users:", error);
    mongoose.disconnect();
  }
};

createUsers();