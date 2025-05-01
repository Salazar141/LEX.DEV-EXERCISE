
# 🚧 Backend Exercise - Intermediate Level

## 🧾 Judul
Membangun Sistem Autentikasi & Relasi Data Pemesanan

## 📌 Deskripsi Tugas
Kembangkan API backend BobaKu agar mendukung:
1. **Autentikasi pengguna dengan JWT**
2. **Fitur pemesanan minuman**
3. **Relasi user ↔ order ↔ menu**

### Fitur utama:
- Register & login (`/register`, `/login`)
- Setiap user hanya bisa mengakses data pemesanannya sendiri
- Endpoint:
  - `POST /orders`
  - `GET /orders` (hanya milik sendiri)
  - `GET /orders/:id`
- Validasi input & error handling

## 🎯 Tujuan Skill
- Autentikasi dan otorisasi dengan JWT
- Relasi antar entitas (User, Order, Menu)
- Implementasi protected route
- Middleware dan validasi data

## ✅ Kriteria Penyelesaian
- Sistem register/login dengan hash password (bcrypt)
- Token JWT disimpan di header dan digunakan untuk akses order
- Minimal 2 relasi data: User-Order & Order-Menu
- Dokumentasi endpoint lengkap
- Struktur kode modular dan bersih

## 🧰 Tools yang Digunakan
- Node.js + Express
- MongoDB / PostgreSQL / SQLite
- JWT, bcrypt
- Postman / Insomnia

## ⏳ Estimasi Waktu
8–10 jam

## 💡 Contoh Output // POST /orders
```json

{
  "user_id": "u01",
  "menu_id": "m03",
  "qty": 2,
  "total_harga": 56000,
  "status": "pending"
}
```

---

##📁 Struktur Folder Contoh
```
backend-intermediate/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── app.js
└── README.md

```
---

##📚 Referensi Belajar
```
JWT Auth Tutorial - Node.js (Dev.to)

MongoDB Relationship

Validasi Input dengan Joi
```
---

##📝 Simpan hasilmu di folder submission/backend/[namamu]/backend-intermediate/
