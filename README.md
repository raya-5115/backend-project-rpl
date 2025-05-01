# Overview
This repository contains the backend code for a Role-Based Access Control (RBAC) system designed for a university application. The system supports three user roles: mahasiswa (student), dosen (lecturer), and mitra (partner).

# Technologies Used
Node.js with Express.js framework
MongoDB for database storage
Mongoose for MongoDB object modeling
JWT for authentication
bcrypt for password hashing
dotenv for environment variables management

# Project Structure
```
backend-project-rpl/
│
├── config/                        # Konfigurasi umum proyek
│   └── db.js                      # Koneksi ke MongoDB dengan Mongoose
│
├── controller/                    # Logika utama untuk setiap route (API handler)
│   ├── parkController.js          # Menangani operasi CRUD data taman nasional
│   ├── floraController.js         # Menangani operasi CRUD data flora
│   ├── faunaController.js         # Menangani operasi CRUD data fauna
│   └── authController.js          # Menangani login, register, dan autentikasi user
│
├── middleware/                    # Fungsi perantara (middleware) untuk request
│   ├── auth.js                    # Mengecek dan memvalidasi token JWT user
│   ├── errorHandler.js            # Menangani error dari route/controller
│   └── validate.js                # Validasi data input dari user (body/params/query)
│
├── model/                         # Definisi schema Mongoose (struktur data MongoDB)
│   ├── User.js                    # Schema untuk data user/admin
│   ├── Park.js                    # Schema untuk data taman nasional
│   ├── Flora.js                   # Schema untuk data flora (nama, habitat, status, dll)
│   ├── Fauna.js                   # Schema untuk data fauna
│   └── ScanResult.js              # Schema untuk menyimpan hasil deteksi AI SmartScan
│
├── routes/                        # Routing endpoint API
│   ├── parkRoutes.js              # Route endpoint `/api/parks`
│   ├── floraRoutes.js             # Route endpoint `/api/flora`
│   ├── faunaRoutes.js             # Route endpoint `/api/fauna`
│   ├── authRoutes.js              # Route login dan register `/api/auth`
│   └── smartScanRoutes.js         # Route untuk kirim gambar dan terima hasil SmartScan
│
├── scripts/                       # Script dev seperti seeding, backup, dll
│   └── seedDatabase.js            # Script isi awal database dengan data default
│
├── utils/                         # Fungsi bantu (helper) yang digunakan di banyak tempat
│   ├── generateSlug.js            # Buat slug URL dari nama spesies/taman nasional
│   └── cloudUpload.js             # Fungsi upload gambar ke layanan cloud (Cloudinary/S3)
│
├── test/                          # Pengujian unit atau integrasi API
│   └── flora.test.js              # Contoh testing untuk endpoint flora
│
├── .env                           # File variabel lingkungan (PORT, DB_URI, JWT_SECRET, dll)
├── .gitignore                     # Daftar file/folder yang tidak di-commit ke Git (termasuk `.env`)
├── README.md                      # Dokumentasi proyek (instalasi, struktur, endpoint, dll)
├── index.js                       # Entry point utama aplikasi Express.js
├── package.json                   # Info proyek, dependensi, dan script npm
├── package-lock.json              # Lock versi pasti dari dependensi untuk konsistensi
└── AI-smartscan/                  # (Opsional) Kode deteksi AI jika langsung terintegrasi
    └── inference.js               # Fungsi untuk menjalankan inferensi dari gambar input

```
## Setup and Installation
## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd backend-poject-rpl
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```
