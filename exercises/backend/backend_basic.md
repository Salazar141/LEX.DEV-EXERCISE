# 🔰 Backend Exercise - Basic Level

## 🧾 Judul
Membangun REST API Katalog Menu BobaKu

## 📌 Deskripsi Tugas

BobaKu baru saja mendapatkan investasi dan berencana mengembangkan aplikasi pemesanan online. Sebagai langkah awal, mereka membutuhkan API untuk mengelola katalog menu minuman dan topping.

### 🌟 Skenario Bisnis
Brand Manager BobaKu ingin dapat menambahkan menu baru dengan mudah saat ada promosi musiman, mengubah harga saat ada kenaikan bahan baku, dan menghapus menu yang kurang diminati berdasarkan laporan penjualan.

### ✨ Fitur Utama:
- **CRUD Menu Minuman**: 
  - Informasi produk mencakup: nama, harga dasar, deskripsi, kategori (Signature/Fruit Tea/Milk Tea/Coffee), level kemanisan (0-100%), level es (0-100%), gambar URL, status ketersediaan
  - Filter menu berdasarkan kategori atau ketersediaan
  - Sorting menu berdasarkan harga atau popularitas
  
- **CRUD Topping**:
  - Nama, harga tambahan, deskripsi, status ketersediaan

### 🔌 Endpoint Minimum:
- `GET /menu` (dengan query parameter untuk filter & sort)
- `GET /menu/:id`
- `POST /menu`
- `PUT /menu/:id`
- `DELETE /menu/:id`
- `GET /toppings`
- `POST /toppings`
- (dan endpoint lainnya untuk CRUD topping)

## 🎯 Tujuan Skill
- Memahami konsep dasar REST API
- Implementasi routing dan HTTP methods
- Penerapan query parameters untuk filter dan sorting
- Pengelolaan data dengan database sederhana atau penyimpanan lokal
- Basic error handling

## ✅ Kriteria Penyelesaian
- API berjalan dengan lancar di localhost
- Semua endpoint berfungsi dan mengembalikan response dalam format JSON standar
- Implementasi minimal 2 query parameters untuk filter atau sorting
- Status code HTTP yang tepat (200, 201, 400, 404, 500, dll)
- Struktur folder yang rapi dan mudah dipahami
- Dokumentasi API yang jelas (README.md dan Postman Collection/Swagger)

## 🧰 Teknologi yang Dapat Digunakan
Pilih salah satu stack yang kamu kuasai:

### JavaScript/TypeScript:
- Express.js + MongoDB (Mongoose)
- Express.js + PostgreSQL (Sequelize/Prisma)
- NestJS + Database pilihan
- Fastify + Database pilihan

### Python:
- Flask + SQLAlchemy
- Django REST Framework
- FastAPI + SQLAlchemy/Tortoise ORM

### PHP:
- Laravel + Eloquent
- Symfony + Doctrine

### Lainnya:
- Spring Boot (Java/Kotlin)
- ASP.NET Core (C#)
- Ruby on Rails
- Go (Gin/Echo/Fiber)

## ⏳ Estimasi Waktu
4–8 jam (tergantung familiaritas dengan teknologi yang dipilih)

## 💡 Contoh Output

```json
// GET /menu
{
  "status": "success",
  "count": 2,
  "data": [
    {
      "id": "m001",
      "nama": "Brown Sugar Boba Milk Tea",
      "harga_dasar": 28000,
      "deskripsi": "Signature milk tea dengan brown sugar dan pearl yang chewy",
      "kategori": "Signature",
      "level_manis_default": 70,
      "level_es_default": 50,
      "gambar_url": "https://bobaku.com/img/brown-sugar.jpg",
      "tersedia": true,
      "created_at": "2023-09-15T07:30:00Z",
      "updated_at": "2023-09-15T07:30:00Z"
    },
    {
      "id": "m002",
      "nama": "Taro Milk Tea",
      "harga_dasar": 25000,
      "deskripsi": "Milk tea dengan rasa taro yang khas dan creamy",
      "kategori": "Milk Tea",
      "level_manis_default": 50,
      "level_es_default": 30,
      "gambar_url": "https://bobaku.com/img/taro.jpg",
      "tersedia": true,
      "created_at": "2023-09-15T08:15:00Z",
      "updated_at": "2023-09-15T08:15:00Z"
    }
  ]
}

// GET /toppings
{
  "status": "success",
  "count": 3,
  "data": [
    {
      "id": "t001",
      "nama": "Pearl",
      "harga_tambahan": 5000,
      "deskripsi": "Pearl dengan tekstur chewy",
      "tersedia": true
    },
    {
      "id": "t002",
      "nama": "Grass Jelly",
      "harga_tambahan": 6000,
      "deskripsi": "Cincau segar dengan tekstur lembut",
      "tersedia": true
    },
    {
      "id": "t003",
      "nama": "Cheese Foam",
      "harga_tambahan": 8000,
      "deskripsi": "Foam keju creamy dengan sedikit rasa asin",
      "tersedia": true
    }
  ]
}
```

## 📁 Struktur Folder Rekomendasi
```
backend-basic/
├── src/ (atau app/)
│   ├── controllers/
│   │   ├── menuController.js
│   │   └── toppingController.js
│   ├── routes/
│   │   ├── menuRoutes.js
│   │   └── toppingRoutes.js
│   ├── models/ (jika menggunakan database)
│   │   ├── menuModel.js
│   │   └── toppingModel.js
│   ├── data/ (jika menggunakan penyimpanan lokal)
│   │   ├── menu.json
│   │   └── toppings.json
│   ├── utils/ (helper functions)
│   └── app.js (atau index.js/server.js)
├── package.json (atau requirements.txt/composer.json)
├── .env.example
├── README.md
└── docs/
    └── api-collection.json (Postman/Insomnia collection)
```

## 🚀 Tantangan Ekstra (Opsional)
- Implementasi pagination di endpoint GET `/menu` dan `/toppings`
- Tambahkan fitur search berdasarkan nama menu
- Implementasi soft delete (tidak benar-benar menghapus data)
- Tambahkan validasi input dengan library seperti Joi, Yup, atau class-validator

## 📚 Referensi Belajar

### Video Tutorials
- 📹 [RESTful API Design | Best Practices & Examples](https://www.youtube.com/watch?v=MpLDULJ1GFQ) - Hussein Nasser
- 📹 [Express JS Crash Course](https://www.youtube.com/watch?v=SccSCuHhOw0) - Traversy Media
- 📹 [REST API with Node.js, Express & MongoDB](https://www.youtube.com/watch?v=vjf774RKrLc) - DevEd
- 📹 [Django REST Framework Complete Course](https://www.youtube.com/watch?v=B38aDwUpcFc) - Very Academy
- 📹 [Laravel API Tutorial](https://www.youtube.com/watch?v=YGqCZjdgJJk) - Laracasts

### Dokumentasi & Artikel
- 📖 [RESTful Web API Design](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design) - Microsoft
- 📖 [REST API Tutorial](https://restfulapi.net/) - Comprehensive guide
- 📖 [Express.js Documentation](https://expressjs.com/)
- 📖 [MongoDB CRUD Operations](https://www.mongodb.com/docs/manual/crud/)
- 📖 [Sequelize ORM Documentation](https://sequelize.org/)
- 📖 [Django REST Framework Documentation](https://www.django-rest-framework.org/)

### Courses
- 🎓 [API & Web Service Introduction](https://www.codecademy.com/learn/apis-and-rest) - Codecademy
- 🎓 [Building RESTful APIs with Express](https://www.linkedin.com/learning/building-restful-apis-with-express) - LinkedIn Learning
- 🎓 [RESTful Web Services](https://www.coursera.org/learn/web-services) - Coursera

### Tools
- 🛠️ [Postman Learning Center](https://learning.postman.com/docs/getting-started/introduction/)
- 🛠️ [Swagger Documentation](https://swagger.io/docs/)
- 🛠️ [JSON Server](https://github.com/typicode/json-server) - Fake REST API for prototyping

---

📝 Simpan hasilmu di folder `submission/backend/[namamu]/backend-basic/` dan pastikan untuk menyertakan dokumentasi API yang jelas.
