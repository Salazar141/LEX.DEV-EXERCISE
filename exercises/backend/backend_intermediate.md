# 🚧 Backend Exercise - Intermediate Level

## 🧾 Judul
Sistem Pemesanan dan Manajemen Pelanggan BobaKu

## 📌 Deskripsi Tugas

BobaKu kini memiliki katalog produk yang lengkap dan siap untuk mengembangkan sistem pemesanan online dengan manajemen pelanggan terintegrasi. Mereka ingin membangun aplikasi yang aman, dengan relasi data yang terstruktur, dan sistem loyalty yang bisa mendorong pembelian berulang.

### 🌟 Skenario Bisnis
CEO BobaKu meminta tim teknologi untuk membuat sistem yang melacak semua pesanan customer, preferensi minuman, dan loyalty points. Sistem ini akan digunakan oleh pelanggan (untuk memesan) dan barista (untuk melihat pesanan yang masuk).

### ✨ Fitur Utama:

1. **Autentikasi & Otorisasi Pengguna**
   - Register dengan validasi email & password
   - Login dengan JWT token
   - Password hashing
   - Role-based access (Customer & Staff)
   - Forgot password flow (opsional)

2. **Sistem Pemesanan**
   - Buat pesanan baru dengan multiple items
   - Pilih menu dan customize (level manis, es, topping)
   - Track status pesanan (Pending → Processed → Ready → Completed)
   - Riwayat pesanan untuk user

3. **Manajemen Profil & Loyalty**
   - CRUD profil user (nama, alamat, nomor telepon, dll)
   - Sistem loyalty points (setiap pembelian mendapat poin)
   - Redeem poin untuk diskon atau free items

### 🔌 Endpoint Minimum:

#### Authentication
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh-token`

#### User & Profile
- `GET /users/me`
- `PUT /users/me`
- `GET /users/me/points`

#### Orders
- `POST /orders`
- `GET /orders` (dengan filter & pagination)
- `GET /orders/:id`
- `PUT /orders/:id/status` (staff only)

#### Loyalty
- `GET /rewards`
- `POST /rewards/:id/redeem`

## 🎯 Tujuan Skill
- Implementasi autentikasi dan otorisasi dengan JWT
- Pengelolaan relasi database yang kompleks
- Middleware untuk protected routes
- Validasi data komprehensif
- Error handling yang robust
- Implementasi role-based access control

## ✅ Kriteria Penyelesaian
- Sistem autentikasi dan otorisasi yang aman
- Relasi data yang terstruktur (User-Order-Menu-Topping)
- Endpoint terlindungi dengan middleware JWT
- Validasi input yang komprehensif
- Error handling yang konsisten dan informatif
- Dokumentasi API yang lengkap (README dan Postman/Swagger)
- Unit testing untuk minimal 3 endpoint penting
- Kode terstruktur dengan prinsip clean code

## 🧰 Teknologi yang Dapat Digunakan
Pilih stack yang kamu kuasai:

### JavaScript/TypeScript:
- Express + Mongoose/MongoDB
- Express + Sequelize/TypeORM + SQL Database
- NestJS + Database pilihan
- Fastify + Prisma + SQL Database

### Python:
- Django REST Framework + PostgreSQL
- FastAPI + SQLAlchemy + PostgreSQL/MySQL

### PHP:
- Laravel + MySQL/PostgreSQL
- Symfony + Doctrine

### Lainnya:
- Spring Boot (Java/Kotlin)
- ASP.NET Core (C#)
- Go (Gin/Echo) + GORM

### Library Pendukung:
- JWT Authentication (jsonwebtoken, passport-jwt, etc.)
- Validation (joi, class-validator, yup)
- Password hashing (bcrypt, argon2)
- Testing (jest, mocha, pytest, phpunit)

## ⏳ Estimasi Waktu
10–15 jam (tergantung familiaritas dengan teknologi yang dipilih)

## 💡 Contoh Output dan Format Data

```json
// POST /auth/register Response
{
  "status": "success",
  "message": "User registered successfully",
  "data": {
    "id": "u123",
    "name": "Maya Putri",
    "email": "maya@example.com",
    "role": "customer",
    "created_at": "2023-10-01T08:30:00Z"
  }
}

// POST /orders Request
{
  "items": [
    {
      "menu_id": "m001",
      "quantity": 2,
      "sugar_level": 50,
      "ice_level": 70,
      "toppings": ["t001", "t003"]
    },
    {
      "menu_id": "m003",
      "quantity": 1,
      "sugar_level": 30,
      "ice_level": 30,
      "toppings": []
    }
  ],
  "payment_method": "cash",
  "note": "Extra chewy pearls please!",
  "pickup_time": "2023-10-01T16:30:00Z"
}

// POST /orders Response
{
  "status": "success",
  "data": {
    "order_id": "ord-20231001-001",
    "user_id": "u123",
    "items": [
      {
        "menu": {
          "id": "m001",
          "name": "Brown Sugar Boba Milk Tea",
          "price": 28000
        },
        "quantity": 2,
        "sugar_level": 50,
        "ice_level": 70,
        "toppings": [
          {
            "id": "t001",
            "name": "Pearl",
            "price": 5000
          },
          {
            "id": "t003",
            "name": "Cheese Foam",
            "price": 8000
          }
        ],
        "subtotal": 82000
      },
      {
        "menu": {
          "id": "m003",
          "name": "Matcha Latte",
          "price": 32000
        },
        "quantity": 1,
        "sugar_level": 30,
        "ice_level": 30,
        "toppings": [],
        "subtotal": 32000
      }
    ],
    "total_price": 114000,
    "payment_method": "cash",
    "status": "pending",
    "points_earned": 11,
    "note": "Extra chewy pearls please!",
    "pickup_time": "2023-10-01T16:30:00Z",
    "created_at": "2023-10-01T09:15:00Z"
  }
}

// GET /users/me/points Response
{
  "status": "success",
  "data": {
    "user_id": "u123",
    "total_points": 235,
    "points_history": [
      {
        "order_id": "ord-20231001-001",
        "points": 11,
        "type": "earned",
        "date": "2023-10-01T09:15:00Z"
      },
      {
        "reward_id": "r002",
        "points": -50,
        "type": "redeemed",
        "date": "2023-09-28T14:20:00Z"
      }
    ],
    "redeemable_rewards": [
      {
        "id": "r001",
        "name": "Free Topping",
        "points_required": 100,
        "description": "Free topping for any drink"
      },
      {
        "id": "r003",
        "name": "Medium Size Upgrade",
        "points_required": 150,
        "description": "Upgrade any drink to medium size"
      }
    ]
  }
}
```

## 📁 Struktur Folder Rekomendasi

```
backend-intermediate/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── jwt.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── orderController.js
│   │   ├── userController.js
│   │   └── rewardController.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   ├── validate.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Order.js
│   │   ├── OrderItem.js
│   │   ├── Menu.js
│   │   ├── Topping.js
│   │   └── Reward.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── userRoutes.js
│   │   └── rewardRoutes.js
│   ├── services/ (business logic)
│   │   ├── authService.js
│   │   ├── orderService.js
│   │   └── loyaltyService.js
│   ├── utils/
│   │   ├── jwt.js
│   │   ├── validation.js
│   │   └── errorResponse.js
│   └── app.js
├── tests/
│   ├── auth.test.js
│   ├── orders.test.js
│   └── users.test.js
├── .env.example
├── package.json
└── README.md
```

## 🚀 Tantangan Ekstra (Opsional)
- Implementasi notifikasi email saat status pesanan berubah
- Fitur favorit menu dan rekomendasi berdasarkan riwayat pesanan
- Implementasi promo code dengan validasi tanggal
- Rate limiting untuk mencegah abuse
- Fitur lokasi outlet dan pemilihan outlet untuk pickup

## 📚 Referensi Belajar

### Video Tutorials
- 📹 [JWT Authentication Tutorial](https://www.youtube.com/watch?v=7nafaH9SddU) - Web Dev Simplified
- 📹 [Node.js Auth with JWT and Refresh Tokens](https://www.youtube.com/watch?v=Ud5xKCYQTjM) - Ania Kubów
- 📹 [Role Based Access Control | RBAC Tutorial](https://www.youtube.com/watch?v=jI4K7L-LI58) - Sam Meech-Ward
- 📹 [Mongoose Relations Tutorial](https://www.youtube.com/watch?v=5izGzakVNXM) - Net Ninja
- 📹 [API Security Best Practices](https://www.youtube.com/watch?v=F89xIUzCp9w) - Hussein Nasser

### Dokumentasi & Artikel
- 📖 [JWT Introduction](https://jwt.io/introduction/)
- 📖 [Best Practices for JWT Authentication](https://blog.logrocket.com/jwt-authentication-best-practices/)
- 📖 [Node.js Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- 📖 [MongoDB Schema Design Best Practices](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design)
- 📖 [RESTful API Authentication Basics](https://stackoverflow.blog/2021/10/06/best-practices-for-authentication-and-authorization-for-rest-apis/)
- 📖 [NestJS Authentication Documentation](https://docs.nestjs.com/security/authentication)
- 📖 [Django REST Framework Authentication](https://www.django-rest-framework.org/api-guide/authentication/)

### Courses
- 🎓 [Authentication & Security](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/) - Jonas Schmedtmann
- 🎓 [Advanced Node.js: Securing RESTful APIs](https://www.linkedin.com/learning/advanced-node-js-securing-restful-apis-2) - LinkedIn Learning
- 🎓 [Web Authentication APIs](https://developers.google.com/web/fundamentals/security/credential-management) - Google Developers

### GitHub Repositories
- 🔧 [node-express-jwt-auth](https://github.com/iamshaunjp/node-express-jwt-auth) - JWT Auth Example
- 🔧 [node-role-based-authorization-api](https://github.com/cornflourblue/node-role-based-authorization-api) - Role Based Auth Example
- 🔧 [NestJS JWT Auth Example](https://github.com/nestjs/jwt-example) - Official NestJS Example

---

📝 Simpan hasilmu di folder `submission/backend/[namamu]/backend-intermediate/` dan pastikan untuk menyertakan dokumentasi API yang lengkap serta test cases yang kamu buat.
