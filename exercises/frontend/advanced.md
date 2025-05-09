# 🚀 Latihan Advanced - Frontend Developer

Level ini ditujukan untuk FD yang ingin mendalami aplikasi web kompleks, arsitektur skala besar, optimasi performa, aksesibilitas, dan kolaborasi multi-tim dalam konteks pengembangan enterprise.

---

## 🎯 [Latihan 1] Enterprise Platform "BobaKu Management System"

### 🗂 Konteks Kasus
BobaKu telah berkembang menjadi brand dengan 20+ cabang di seluruh Indonesia. Mereka membutuhkan sistem manajemen terpusat yang dapat digunakan oleh berbagai stakeholder (owner, manajer cabang, staff, supplier). Backend API telah dikembangkan oleh tim backend. Tantangannya adalah membangun frontend dengan arsitektur yang skalabel dan maintainable untuk jangka panjang, serta dapat diakses oleh role pengguna yang berbeda.

### 🎯 Deskripsi Tugas
- Buat sistem management frontend dengan React/Next.js
- Implementasi arsitektur monorepo dengan multiple modules
- Sistem role-based authentication & authorization
- Halaman: Dashboard Analytics, Inventory Management, Order Management, User Management, Reports, Settings
- Buat component library yang reusable dan terdokumentasi
- Implementasi state global dengan middleware dan logging

### 🎯 Skill yang Dilatih
- Arsitektur frontend skala besar
- Advanced state management (Redux Toolkit/Zustand)
- Authentication/Authorization flow
- Code splitting dan lazy loading
- Component composition patterns
- Optimasi performa dan profiling
- Kolaborasi dengan tim backend

### 📦 Tools
- Next.js/Remix atau React + Vite
- TypeScript (wajib)
- Tanstack Query (React Query v4+)
- Redux Toolkit/Zustand/Jotai
- Storybook untuk component docs
- Cypress untuk E2E testing
- Monorepo (NX/Turborepo)

### ✅ Kriteria Done
- Minimal 6 halaman fungsional dengan data dari API
- Authentication flow (login, logout, protected routes)
- Dashboard dengan minimal 5 jenis chart/visualisasi
- CRUD operations pada minimal 3 entity
- Loading/error state handling komprehensif
- Component library terorganisir (atomic design)
- Build optimized dengan proper chunking
- Performance audit (Lighthouse score > 90)
- Unit test untuk minimal 5 komponen utama
- Deploy ke Vercel/Netlify

### ⏱ Estimasi Waktu
18-24 jam (dikerjakan dalam periode 7-14 hari)

---

## 🎯 [Latihan 2] Progressive Web App "BobaKu Customer App"

### 🗂 Konteks Kasus
BobaKu ingin membuat pengalaman mobile-first untuk pelanggan setia mereka. Mereka ingin PWA yang memungkinkan pelanggan menelusuri menu, memesan, melacak pesanan, dan mendapatkan rewards point. PWA ini harus berfungsi bahkan dalam kondisi offline terbatas dan memberikan UX seperti aplikasi native. Tim UI/UX telah menyiapkan desain mobile yang modern.

### 🎯 Deskripsi Tugas
- Buat Progressive Web App dengan React/Next.js
- Implementasi offline support dengan service workers
- Fitur: menu browser, ordering, order tracking, rewards, user profile
- Animasi dan transisi yang smooth seperti native app
- Push notifications untuk status order
- Geolocation untuk menemukan cabang terdekat

### 🎯 Skill yang Dilatih
- PWA development
- Service workers dan caching strategies
- Optimasi untuk mobile experience
- Advanced animations
- Offline data handling
- Push notifications API
- Geolocation API
- Touch gestures

### 📦 Tools
- Next.js/Vite + PWA plugin
- Workbox
- React Navigation/TanStack Router
- IndexedDB/local storage untuk offline data
- Framer Motion/GSAP untuk animasi
- Lighthouse untuk PWA audit

### ✅ Kriteria Done
- Installable sebagai PWA di mobile device
- Works offline untuk fitur utama
- Animasi dan transisi smooth (60fps)
- Push notification berhasil terkirim
- Geolocation untuk cabang terdekat
- UI/UX responsif dan sesuai dengan prinsip mobile-first
- Build optimized (<200kb initial load)
- Lighthouse PWA score > 95

### ⏱ Estimasi Waktu
12-16 jam

---

## 🎯 [Latihan 3] Internasionalisasi & Aksesibilitas "BobaKu Global"

### 🗂 Konteks Kasus
BobaKu berencana ekspansi ke pasar internasional dan ingin website mereka accessible untuk semua pengguna, termasuk yang memiliki disabilitas. Website harus mendukung minimal 3 bahasa (Indonesia, Inggris, Mandarin) dan memenuhi standar WCAG 2.1 level AA. Project ini adalah kunci untuk ekspansi global mereka.

### 🎯 Deskripsi Tugas
- Upgrade existing BobaKu website dengan i18n support
- Implementasi full accessibility compliance
- Tambahkan dark mode toggle
- Optimasi untuk screen readers dan keyboard navigation
- Pastikan responsive untuk semua device termasuk TV interfaces

### 🎯 Skill yang Dilatih
- Internationalization (i18n)
- Web Accessibility (a11y)
- Semantic HTML dan ARIA roles
- Theming kompleks (dark/light) 
- RTL support
- Keyboard navigation dan focus management
- High-contrast mode

### 📦 Tools
- React/Next.js
- i18next/react-intl
- Theme UI/CSS Variables
- Axe DevTools
- NVDA/VoiceOver screen readers
- WCAG guidelines

### ✅ Kriteria Done
- Support 3 bahasa dengan language switcher
- Dark mode toggle yang menyimpan preferensi user
- WCAG 2.1 AA compliance (verified dengan tools)
- Keyboard navigation lengkap
- Optimasi untuk screen readers
- Pass all automated a11y tests
- Responsive di semua device size
- RTL text support

### ⏱ Estimasi Waktu
10-14 jam

---

## 🎯 [Latihan 4] Microfrontend Architecture "BobaKu Ecosystem"

### 🗂 Konteks Kasus
Sebagai bagian dari ekspansi digital, BobaKu ingin membagi aplikasi utama mereka menjadi beberapa microfrontend yang dapat dikembangkan, di-deploy, dan diskalakan secara independen oleh tim yang berbeda. Kamu diminta untuk membuat arsitektur dan proof of concept untuk transisi ini.

### 🎯 Deskripsi Tugas
- Design microfrontend architecture
- Implementasikan shell application dengan Module Federation
- Buat 3 microfrontend yang terpisah: Home/Marketing, Online Shop, dan Account/Profile
- Shared state dan authentication antar microfrontends
- Design system terpusat yang digunakan semua microfrontend

### 🎯 Skill yang Dilatih
- Microfrontend architecture
- Webpack Module Federation
- Shared dependencies management
- Cross-team collaboration
- Monorepo or polyrepo management
- CI/CD for microfrontends
- Design system implementation

### 📦 Tools
- Webpack/Module Federation
- NX/Lerna/Rush
- Design system tools
- TypeScript
- GitHub Actions/CircleCI
- Container orchestration concepts

### ✅ Kriteria Done
- Working shell application yang mengintegrasikan 3+ microfrontends
- Shared auth dan state antar apps
- Design system konsisten
- Independent deployment capabilities
- Documentation architecture dan decisions
- CI/CD pipelines setup
- Performance tidak terpengaruh (benchmark)

### ⏱ Estimasi Waktu
20-30 jam (dapat dikerjakan dalam 2-3 minggu)

---

## 🎓 Referensi Belajar

### Enterprise React Architecture
- [Enterprise React Patterns](https://www.patterns.dev/posts/react-patterns) - Patterns untuk aplikasi skala besar
- [Bulletproof React](https://github.com/alan2207/bulletproof-react) - Arsitektur dan best practices
- [Micro-Frontends by Martin Fowler](https://martinfowler.com/articles/micro-frontends.html) - Konsep dan implementasi
- [Module Federation Explained](https://www.youtube.com/watch?v=D3XYAx30CNc) - Video konsep Module Federation
- [Enterprise React State Management](https://blog.openreplay.com/enterprise-react-state-management/) - Guide state management untuk enterprise

### Performance & Optimization
- [Advanced React Performance Optimization](https://reactjs.org/docs/optimizing-performance.html) - Dokumentasi resmi
- [Web Performance Fundamentals](https://web.dev/learn-web-vitals/) - Panduan Core Web Vitals
- [The Cost of JavaScript](https://v8.dev/blog/cost-of-javascript-2019) - Memahami overhead JavaScript
- [Fast Load Times](https://web.dev/fast/) - Teknik optimasi loading
- [WebPageTest](https://www.webpagetest.org/) - Tool analisis performa website
- [Addy Osmani: JavaScript Performance](https://addyosmani.com/blog/javascript-performance-optimization/) - Best practices
- [Build Performant React Apps - YouTube](https://youtu.be/t61nHc1eA38) - Video tips performa React

### Progressive Web Apps
- [Progressive Web Apps Training - Google](https://web.dev/learn/pwa/) - Panduan lengkap PWA
- [Workbox Documentation](https://developers.google.com/web/tools/workbox) - Library untuk service worker
- [PWA with React](https://blog.logrocket.com/building-pwa-react/) - Tutorial implementasi PWA di React
- [Offline First Apps](https://offline-first.org/) - Prinsip desain offline-first
- [Service Worker Cookbook](https://serviceworke.rs/) - Koleksi resep service worker
- [PWA Stats](https://www.pwastats.com/) - Studi kasus keberhasilan PWA

### Accessibility (a11y)
- [WebAIM](https://webaim.org/) - Resource lengkap tentang web accessibility
- [A11y Project Checklist](https://www.a11yproject.com/checklist/) - Checklist untuk accessibility
- [React Accessibility](https://reactjs.org/docs/accessibility.html) - Guidelines official React
- [Deque University](https://dequeuniversity.com/resources/) - Free resources dan tools
- [Inclusive Components](https://inclusive-components.design/) - Panduan komponen accessible
- [Stark Library](https://www.getstark.co/library/) - Alat dan resource untuk a11y
- [W3C WCAG Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) - Standar internasional

### Testing Advanced
- [Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) - Strategi modern testing
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices) - Panduan untuk E2E testing
- [React Testing Library Cookbook](https://testing-library.com/docs/react-testing-library/example-intro) - Pattern testing React
- [Jest Documentation](https://jestjs.io/docs/getting-started) - Unit testing framework
- [Visual Regression Testing](https://storybook.js.org/tutorials/visual-testing-handbook/) - Visual testing dengan Storybook
- [TestingJavaScript.com](https://testingjavascript.com/) - Kursus komprehensif

### Internationalization & Localization
- [i18next Documentation](https://www.i18next.com/) - Framework i18n populer
- [React-Intl](https://formatjs.io/docs/react-intl/) - API untuk internationalization
- [Microsoft World-Ready Programming](https://learn.microsoft.com/en-us/globalization/design/internationalization) - Best practices
- [Google I18n Guide](https://developers.google.com/international) - Guidelines internationalization
- [RTL Styling Guide](https://rtlstyling.com/posts/rtl-styling) - Panduan styling RTL

### Advanced UI & Animation
- [Motion One](https://motion.dev/) - Library animasi web modern
- [Framer Motion Examples](https://www.framer.com/motion/examples/) - Demo interaktif
- [GSAP vs Framer Motion](https://greensock.com/react-basics/) - Perbandingan library animasi
- [Three.js Journey](https://threejs-journey.com/) - 3D di web dengan Three.js
- [UI Animation Principles](https://www.youtube.com/watch?v=8FvCrKx0T4A) - Animation UX oleh Google

### Cloud & Deployment
- [Vercel Documentation](https://vercel.com/docs) - Deployment platform untuk React
- [Netlify Learn](https://www.netlify.com/blog/categories/tutorials/) - Tutorial deployment dan CI/CD
- [AWS Amplify](https://docs.amplify.aws/) - Full stack deployment di AWS
- [GitHub Actions for Frontend](https://www.smashingmagazine.com/2021/09/automated-testing-frontend-github-actions/) - CI/CD untuk frontend
- [Containerized Frontend Apps](https://blog.logrocket.com/containerizing-react-applications-docker/) - Docker untuk React

### Video Courses & Series
- [Epic React by Kent C. Dodds](https://epicreact.dev/) - Kursus advanced React terlengkap
- [Frontend Masters: Enterprise Apps](https://frontendmasters.com/courses/enterprise-patterns/) - Kursus pattern enterprise
- [React Advanced Patterns - YouTube Playlist](https://www.youtube.com/playlist?list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf) - Seri video pattern kompleks
- [Theo's React Masterclass](https://www.youtube.com/c/TheoT) - Video tutorial advanced React
- [Lee Robinson's Next.js Series](https://www.youtube.com/playlist?list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR) - Next.js deep dive
---

## 🚨 Catatan Tambahan
- Gunakan struktur folder komponen yang rapi
- Setiap tugas bisa dibuat dalam repo terpisah atau mono repo
- Buat dokumentasi tugas dalam `README.md` masing-masing
