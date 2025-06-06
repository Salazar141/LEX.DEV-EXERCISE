# 🧪 Quality Assurance - Basic Level

## 📋 Gambaran Umum Latihan

Selamat datang di latihan Quality Assurance tingkat dasar! Latihan ini dirancang untuk memperkenalkan Anda pada konsep fundamental pengujian perangkat lunak dan praktik QA yang essential dalam industri teknologi.

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan latihan ini, Anda akan mampu:
- Memahami konsep dasar Quality Assurance dan pengujian perangkat lunak
- Menulis test case yang efektif dan terstruktur
- Melakukan pengujian manual pada aplikasi web
- Mengidentifikasi, mendokumentasikan, dan melaporkan bug
- Menggunakan tools dasar untuk bug tracking

## 📚 Pengetahuan Prasyarat

- Pemahaman dasar tentang aplikasi web (HTML, CSS, JavaScript)
- Familiarity dengan browser web dan developer tools
- Konsep dasar tentang user experience

## 🛠 Tools yang Dibutuhkan

- **Browser**: Chrome/Firefox dengan Developer Tools
- **Bug Tracking**: JIRA (trial) atau alternatif gratis seperti Trello/Asana
- **Text Editor**: VS Code atau editor pilihan Anda
- **Screenshot Tool**: Built-in screenshot tools atau Lightshot
- **Document**: Google Docs/Microsoft Word untuk dokumentasi

---

## 🚀 Latihan 1: Pemahaman Konsep QA Dasar

### 📝 Tugas 1.1: Analisis Peran QA
**Durasi**: 30 menit

Buat dokumen yang menjelaskan:
1. **Definisi Quality Assurance** menurut pemahaman Anda
2. **Perbedaan antara QA, QC, dan Testing**
3. **Peran QA dalam Software Development Life Cycle (SDLC)**
4. **3 jenis pengujian yang paling penting** dan kapan dilakukan

**Kriteria Penerimaan**:
- Penjelasan jelas dan terstruktur
- Menggunakan contoh nyata
- Menunjukkan pemahaman konsep dasar

---

## 🧪 Latihan 2: Menulis Test Case

### 📝 Tugas 2.1: Test Case untuk Fitur Login
**Durasi**: 45 menit

Buat test case untuk fitur login dengan skenario berikut:

**Aplikasi Target**: [JSONPlaceholder Todo App](https://jsonplaceholder.typicode.com/) atau aplikasi web publik pilihan Anda

**Komponen yang Diuji**: Form Login/Registration

**Format Test Case**:
```
Test Case ID: TC_LOGIN_001
Test Case Title: [Judul yang deskriptif]
Preconditions: [Kondisi awal]
Test Steps: 
1. [Langkah 1]
2. [Langkah 2]
...
Expected Result: [Hasil yang diharapkan]
Test Data: [Data yang digunakan]
Priority: [High/Medium/Low]
```

**Skenario yang Harus Dicakup**:
1. **Positive Test Cases** (3-5 skenario)
   - Login dengan kredensial valid
   - Login dengan remember me
   - Redirect setelah login sukses

2. **Negative Test Cases** (5-8 skenario)
   - Login dengan password salah
   - Login dengan email tidak terdaftar
   - Login dengan field kosong
   - Login dengan format email tidak valid

3. **Edge Cases** (2-3 skenario)
   - Login dengan password yang sangat panjang
   - Login dengan karakter khusus

**Kriteria Penerimaan**:
- Minimal 10 test case
- Format konsisten dan jelas
- Mencakup semua skenario yang diminta
- Test data yang realistis

---

## 🔍 Latihan 3: Pengujian Manual & Bug Reporting

### 📝 Tugas 3.1: Pengujian Eksploratori
**Durasi**: 60 menit

Lakukan pengujian eksploratori pada salah satu website berikut:
- [TodoMVC](https://todomvc.com/examples/react/#/) (React version)
- [The Internet - Herokuapp](https://the-internet.herokuapp.com/)
- [Automation Practice](http://automationpractice.com/index.php)

**Fokus Area Pengujian**:
1. **Fungsionalitas Dasar**
   - Semua tombol dan link berfungsi
   - Form submission bekerja dengan baik
   - Navigation antar halaman

2. **User Interface**
   - Layout responsif di berbagai ukuran layar
   - Konsistensi desain
   - Readability text dan kontras warna

3. **Usability**
   - Ease of use
   - Intuitive navigation
   - Error messages yang jelas

### 📝 Tugas 3.2: Bug Report
**Durasi**: 45 menit

Dokumentasikan minimal **5 bug/issue** yang Anda temukan dalam format berikut:

**Template Bug Report**:
```
Bug ID: BUG_001
Title: [Judul singkat dan deskriptif]
Environment: [Browser, OS, Screen Resolution]
Priority: [Critical/High/Medium/Low]
Severity: [Critical/High/Medium/Low]
Status: [New/Open/In Progress/Resolved]

Description:
[Deskripsi detail masalah]

Steps to Reproduce:
1. [Langkah 1]
2. [Langkah 2]
...

Expected Result:
[Apa yang seharusnya terjadi]

Actual Result:
[Apa yang benar-benar terjadi]

Attachments:
[Screenshot atau video jika ada]

Additional Notes:
[Informasi tambahan jika diperlukan]
```

**Kriteria Penerimaan**:
- Minimal 5 bug report
- Langkah reproduksi yang jelas dan dapat diikuti
- Screenshot untuk setiap bug
- Prioritas dan severity yang tepat

---

## 📊 Latihan 4: Test Execution & Tracking

### 📝 Tugas 4.1: Membuat Test Plan
**Durasi**: 40 menit

Buat test plan sederhana untuk aplikasi yang Anda uji sebelumnya:

**Template Test Plan**:
```
1. Test Plan Overview
   - Objective
   - Scope (In Scope & Out of Scope)
   - Test Approach

2. Test Environment
   - Hardware requirements
   - Software requirements
   - Test data requirements

3. Test Schedule
   - Test preparation timeline
   - Test execution timeline
   - Test reporting timeline

4. Test Deliverables
   - Test cases
   - Test execution reports
   - Bug reports

5. Entry and Exit Criteria
   - Entry criteria (when to start testing)
   - Exit criteria (when to stop testing)

6. Risk Assessment
   - Potential risks
   - Mitigation strategies
```

### 📝 Tugas 4.2: Test Execution Report
**Durasi**: 30 menit

Jalankan test case yang telah Anda buat dan dokumentasikan hasilnya:

**Metrics yang Harus Dilaporkan**:
- Total test cases: X
- Passed: X
- Failed: X  
- Blocked: X
- Pass Rate: X%
- Bugs Found: X

**Kriteria Penerimaan**:
- Test plan lengkap dan realistis
- Execution report dengan metrics yang jelas
- Summary dan recommendation

---

## 🎯 Deliverables Akhir

Kumpulkan semua hasil kerja Anda dalam struktur folder berikut:

```
submission/qa/[nama_anda]/basic/
├── README.md                    # Overview dan instruksi
├── 01_qa_concepts/
│   └── qa_fundamentals.md       # Tugas 1.1
├── 02_test_cases/
│   └── login_test_cases.xlsx    # Tugas 2.1
├── 03_manual_testing/
│   ├── exploratory_notes.md     # Tugas 3.1
│   ├── bug_reports.md           # Tugas 3.2
│   └── screenshots/             # Bug screenshots
├── 04_test_planning/
│   ├── test_plan.md            # Tugas 4.1
│   └── execution_report.md     # Tugas 4.2
└── reflection.md               # Reflection dan lessons learned
```

## ✅ Kriteria Kelulusan

Untuk lulus dari latihan Basic QA, Anda harus:

- [ ] **Completeness**: Menyelesaikan semua tugas (100%)
- [ ] **Quality**: Dokumentasi jelas dan terstruktur
- [ ] **Understanding**: Menunjukkan pemahaman konsep QA dasar
- [ ] **Practical Skills**: Dapat melakukan pengujian manual dan bug reporting
- [ ] **Documentation**: Semua deliverables sesuai format yang diminta

## 📈 Langkah Selanjutnya

Setelah menyelesaikan latihan Basic:
1. **Review feedback** dari mentor atau peers
2. **Praktek lebih lanjut** dengan aplikasi yang berbeda
3. **Pelajari tools otomasi** seperti Selenium untuk persiapan ke level Intermediate
4. **Join QA communities** untuk networking dan knowledge sharing

## 🔗 Sumber Belajar Tambahan

### 📚 Reading Materials
- [ISTQB Foundation Level Syllabus](https://www.istqb.org/)
- [Software Testing Help - Testing Basics](https://www.softwaretestinghelp.com/software-testing-basics/)
- [Guru99 - Software Testing Tutorial](https://www.guru99.com/software-testing.html)

### 🎥 Video Resources
- [Software Testing Explained in 5 Minutes](https://youtu.be/Rg84LzEy2e4)
- [Manual Testing Full Course](https://www.youtube.com/playlist?list=PLUDwpEzHYYLseflPNg0bUKfLmAbO2JnE9)

### 🛠 Practice Platforms
- [The Internet - Herokuapp](https://the-internet.herokuapp.com/)
- [TodoMVC](https://todomvc.com/)
- [Automation Practice](http://automationpractice.com/)

---

**Selamat berlatih dan semoga sukses dalam journey QA Anda! 🚀**

*Estimated Total Time: 4-6 hours*