# ⚙️ Latihan Intermediate - Frontend Developer

Latihan pada level ini fokus pada penguasaan framework, state management, integrasi API, modern tooling, dan pembuatan komponen reusable dengan pengalaman pengguna yang lebih dalam.

---

## 🎯 [Latihan 1] E-Commerce "BobaKu Online Shop"

### 🗂 Konteks Kasus
Setelah mengalami pertumbuhan signifikan, **BobaKu** ingin meluncurkan toko online mereka sendiri yang memungkinkan pelanggan membeli produk mereka langsung melalui website. Project ini memiliki tingkat prioritas tinggi karena kompetitor mereka mulai mengadopsi strategi serupa. Kamu diminta untuk membuat versi prototype fungsional yang bisa digunakan sebagain MVP (Minimum Viable Product).

### 🎯 Deskripsi Tugas
- Buat toko online dengan React
- Fitur: daftar produk, detail produk, keranjang belanja, checkout
- User dapat memilih produk, mengatur jumlah, menambahkan/menghapus dari keranjang
- Checkout akan menampilkan ringkasan order dan form pengiriman sederhana

### 🎯 Skill yang Dilatih
- React (functional components, hooks)
- State management (useState, useReducer, Context API)
- Component reusability
- Custom hooks
- Form handling
- Conditional rendering
- Router untuk multi-page SPA

### 📦 Tools
- React + Vite
- React Router
- CSS-in-JS (Styled Components/Emotion) atau TailwindCSS
- React Icons / Phosphor Icons
- VS Code dengan ESLint & Prettier

### ✅ Kriteria Done
- Minimal 4 halaman: Home, Products, Product Detail, Cart
- Fetch produk dari API (mock atau gunakan Firebase/Supabase)
- Filter dan search produk berfungsi
- Keranjang persisten (menggunakan localStorage)
- UI responsif dengan atomic design elements
- Komponen reusable (Button, Card, Input, dll)
- Clean code dengan proper error handling
- Push ke GitHub + deploy (Vercel/Netlify)

### ⏱ Estimasi Waktu
8–12 jam

---

## 🎯 [Latihan 2] Dashboard Analytics untuk Owner BobaKu

### 🗂 Konteks Kasus
Pemilik BobaKu meminta dashboard analytics sederhana untuk memantau performa penjualan dan insight pelanggan. Dashboard ini akan membantu tim marketing dan manajemen untuk mengambil keputusan strategis berdasarkan data. Data tersedia dari API yang telah disediakan oleh tim backend.

### 🎯 Deskripsi Tugas
- Buat dashboard dengan beberapa chart/grafik:
  - Grafik penjualan (harian/mingguan/bulanan)
  - Top 5 produk terlaris
  - Segmentasi pelanggan
  - Perbandingan cabang
- Implementasikan filter data berdasarkan periode waktu
- Buat layout UI yang clean dan profesional

### 🎯 Skill yang Dilatih
- Data fetching dan error handling (React Query/SWR)
- Data visualization (recharts/Chart.js/D3.js)
- Dashboard layout dan UI
- Filter dan manipulasi data
- Loading states dan skeletons

### 📦 Tools
- React
- Recharts / Chart.js
- React Query / SWR (opsional)
- TailwindCSS / MUI / Chakra UI
- Mock API (json-server, Mirage JS, MSW)

### ✅ Kriteria Done
- Minimal 4 jenis visualisasi data berbeda
- Filter periode waktu berfungsi
- Data fetch yang optimal dengan caching
- Loading dan error states ditangani dengan baik
- UI dashboard responsif
- Dokumentasi cara menggunakan dashboard
- Code splitting untuk optimasi

### ⏱ Estimasi Waktu
6–10 jam

---

## 🎯 [Latihan 3] BobaKu Menu Builder

### 🗂 Konteks Kasus
BobaKu ingin meluncurkan fitur "Build Your Own Boba" yang memungkinkan pelanggan untuk membuat minuman custom mereka sendiri. Pelanggan dapat memilih base (tea/milk), level gula, topping, dan ukuran. Tantangannya adalah UI harus interaktif dan memberikan preview visual dari minuman yang dibuat.

### 🎯 Deskripsi Tugas
- Buat UI interaktif untuk menu builder
- Pelanggan dapat memilih komponen minuman step-by-step
- Preview visual berubah sesuai pilihan
- Harga update otomatis berdasarkan pilihan
- Buat animasi transisi antar step

### 🎯 Skill yang Dilatih
- React form complex
- State machine (opsional: XState)
- Wizard/stepped UI
- Dynamic styling
- SVG/Canvas manipulation (untuk preview visual)

### 📦 Tools
- React
- Framer Motion / React Spring
- CSS Modules / Styled Components
- Formik / React Hook Form (opsional)

### ✅ Kriteria Done
- UI wizard yang intuitif
- Preview visual yang akurat
- Perhitungan harga yang tepat
- Animasi transisi yang smooth
- Responsive design
- Handling error state dan validasi
- Hasil dapat dibagikan (link/gambar)

### ⏱ Estimasi Waktu
8–12 jam

---

## 🎓 Referensi Belajar

### React Fundamentals & Hooks
- [React Official Docs](https://reactjs.org/docs/getting-started.html) - Dokumentasi resmi (versi baru: [beta.reactjs.org](https://beta.reactjs.org))
- [Epic React by Kent C. Dodds](https://epicreact.dev/) - Kursus mendalam tentang React
- [Jack Herrington: Blue Collar Coder](https://www.youtube.com/c/JackHerrington) - Tutorial React pattern modern
- [React Hooks Explained](https://www.youtube.com/watch?v=TNhaISOUy6Q) - Video tutorial tentang hooks
- [useHooks](https://usehooks.com/) - Kumpulan custom hooks

### State Management
- [React State Management in 2023](https://www.freecodecamp.org/news/react-state-management-in-2023/) - Perbandingan approach state management
- [Redux Toolkit Tutorial](https://redux-toolkit.js.org/tutorials/overview) - Dokumentasi official
- [Zustand Tutorial](https://docs.pmnd.rs/zustand/getting-started/introduction) - State management minimalis
- [Context API Deep Dive](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/) - Panduan lengkap

### UI & Component Design
- [Component Driven User Interfaces](https://www.componentdriven.org/) - Metodologi UI development
- [Storybook Learn](https://storybook.js.org/tutorials/) - Tutorial membuat component library
- [Josh Comeau's CSS for JS Devs](https://css-for-js.dev/) - Kursus CSS untuk React devs
- [Material UI](https://mui.com/material-ui/getting-started/) - Component library populer
- [TailwindCSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Framer Motion Docs](https://www.framer.com/motion/) - Library animasi untuk React

### API & Data Fetching
- [React Query Overview](https://tanstack.com/query/latest/docs/react/overview) - Data fetching library
- [SWR by Vercel](https://swr.vercel.app/) - React hooks untuk data fetching
- [Axios Tutorial](https://blog.logrocket.com/axios-or-fetch-api/) - HTTP client perbandingan
- [Web Dev Simplified: Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0) - Video tutorial fetch API

### Testing & Performance
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Library testing komponen
- [Testing JavaScript](https://testingjavascript.com/) - Kursus testing oleh Kent C. Dodds
- [Web Vitals & React](https://web.dev/vitals-spa/) - Metrics performa
- [React Performance Optimization](https://reactjs.org/docs/optimizing-performance.html) - Dokumentasi official

### Videos & Courses
- [Fireship.io React in 100 Seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM) - Pengenalan singkat
- [Scrimba Learn React for Free](https://scrimba.com/learn/learnreact) - Kursus interaktif
- [Theodorus Course: Complete React Developer](https://www.youtube.com/watch?v=4UZrsTqkcW4) - Video tutorial lengkap
- [Egghead.io React Courses](https://egghead.io/q/react) - Tutorial singkat dan praktis
- [Dave Gray: Full React Tutorial](https://www.youtube.com/watch?v=RVFAyFWO4go) - Tutorial React dari dasar hingga advance
