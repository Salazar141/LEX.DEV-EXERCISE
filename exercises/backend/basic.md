# 🔰 Backend Exercise - Basic Level

## 🧾 Judul
Membangun REST API Dasar untuk Menu Minuman Boba

## 📌 Deskripsi Tugas
Buat backend sederhana menggunakan Express.js (atau framework lain yang kamu kuasai) untuk fitur manajemen menu minuman.

### Fitur utama:
- CRUD Menu: Nama, harga, kategori, dan deskripsi
- Endpoint:
  - `GET /menu`
  - `GET /menu/:id`
  - `POST /menu`
  - `PUT /menu/:id`
  - `DELETE /menu/:id`

## 🎯 Tujuan Skill
- Memahami konsep REST API
- Implementasi HTTP method dan routing
- CRUD dengan data dummy atau database lokal

## ✅ Kriteria Penyelesaian
- API berjalan lokal di port 3000 atau 5000
- Semua endpoint berfungsi dan mengembalikan JSON sesuai standar
- Struktur folder backend rapi (separate route/controller optional)
- Dokumentasi singkat API (README atau Postman Collection)

## 🧰 Tools yang Digunakan
- Node.js + Express.js (atau Fastify/NestJS/Adonis)
- (Opsional) MongoDB/SQLite/JSON file
- Postman / Insomnia (untuk uji API)

## ⏳ Estimasi Waktu
4–6 jam

## 💡 Contoh Output
```json // GET /menu

[
  {
    "id": 1,
    "nama": "Brown Sugar Milk Tea",
    "harga": 28000,
    "kategori": "Signature",
    "deskripsi": "Brown sugar dengan susu segar dan pearl chewy"
  }
]

```
---
## Structure File
    backend-basic/
    ├── routes/
    │   └── menu.js
    ├── data/
    │   └── menu.json
    ├── app.js
    ├── README.md
    └── package.json

---
## 📚 Referensi Belajar
     Express.js Crash Course (Traversy Media)

     REST API Concepts (YouTube)

     Postman Guide
