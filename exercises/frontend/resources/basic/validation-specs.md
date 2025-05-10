# Spesifikasi Validasi Form Pre-Order BobaKu

Dokumen ini menjelaskan spesifikasi untuk validasi client-side pada form pre-order BobaKu.

## Spesifikasi Per Field

### 1. Full Name
- **Tipe**: Text input
- **Required**: Ya
- **Validasi**:
  - Tidak boleh kosong
  - Minimal 3 karakter
  - Maksimal 50 karakter
  - Hanya boleh berisi huruf, spasi, dan tanda titik (untuk nama dengan gelar)
  - Tidak boleh hanya terdiri dari spasi atau karakter khusus
- **Error Message**:
  - "Nama lengkap harus diisi"
  - "Nama terlalu pendek (minimal 3 karakter)"
  - "Nama terlalu panjang (maksimal 50 karakter)"
  - "Nama hanya boleh terdiri dari huruf, spasi, dan titik"

### 2. Email Address
- **Tipe**: Email input
- **Required**: Ya
- **Validasi**:
  - Tidak boleh kosong
  - Harus mengikuti format email yang valid (nama@domain.tld)
  - Maksimal 100 karakter
- **Error Message**:
  - "Alamat email harus diisi"
  - "Format email tidak valid"
  - "Email terlalu panjang (maksimal 100 karakter)"

### 3. Phone Number
- **Tipe**: Tel input
- **Required**: Ya
- **Validasi**:
  - Tidak boleh kosong
  - Hanya boleh berisi angka, tanda plus di awal (opsional), dan tanda hubung (-)
  - Minimal 9 karakter
  - Maksimal 15 karakter
  - Harus diawali dengan 0, 62, atau +62 (nomor Indonesia)
- **Error Message**:
  - "Nomor telepon harus diisi"
  - "Nomor telepon hanya boleh berisi angka, +, dan -"
  - "Nomor telepon terlalu pendek (minimal 9 karakter)"
  - "Nomor telepon terlalu panjang (maksimal 15 karakter)"
  - "Nomor telepon harus dimulai dengan 0, 62, atau +62"

### 4. Pick-up Date
- **Tipe**: Date input
- **Required**: Ya
- **Validasi**:
  - Tidak boleh kosong
  - Tidak boleh tanggal lampau (minimal hari ini + 1 hari)
  - Maksimal 30 hari dari hari ini
- **Error Message**:
  - "Tanggal pengambilan harus diisi"
  - "Tanggal harus minimal 1 hari dari sekarang"
  - "Tanggal maksimal 30 hari dari sekarang"

### 5. Pick-up Time
- **Tipe**: Time input
- **Required**: Ya
- **Validasi**:
  - Tidak boleh kosong
  - Harus dalam rentang jam operasional: 10:00 - 20:00
  - Interval 30 menit (10:00, 10:30, 11:00, dst.)
- **Error Message**:
  - "Waktu pengambilan harus diisi"
  - "Waktu harus dalam jam operasional (10:00 - 20:00)"

### 6. Number of Drinks
- **Tipe**: Number input
- **Required**: Ya
- **Validasi**:
  - Tidak boleh kosong
  - Minimal 5 minuman untuk pre-order
  - Maksimal 100 minuman per order
  - Harus bilangan bulat positif
- **Error Message**:
  - "Jumlah minuman harus diisi"
  - "Minimal pemesanan 5 minuman"
  - "Maksimal pemesanan 100 minuman"
  - "Jumlah harus berupa bilangan bulat positif"

### 7. Pick-up Location
- **Tipe**: Select dropdown
- **Required**: Ya
- **Validasi**:
  - Harus memilih salah satu opsi yang tersedia
  - Tidak boleh memilih opsi default ("Select store location")
- **Error Message**:
  - "Lokasi pengambilan harus dipilih"

### 8. Special Request
- **Tipe**: Textarea
- **Required**: Tidak
- **Validasi**:
  - Opsional
  - Maksimal 200 karakter
- **Error Message**:
  - "Permintaan khusus terlalu panjang (maksimal 200 karakter)"

## Validasi Form Keseluruhan

- Form tidak dapat disubmit jika ada field yang tidak valid
- Validasi dilakukan saat:
  1. Field kehilangan fokus (blur event)
  2. User mengetik (untuk validasi realtime pada beberapa field seperti email)
  3. Form disubmit

## Visual Feedback

- Field valid: Border berwarna hijau muda atau default (sesuai design system)
- Field tidak valid: Border berwarna merah
- Pesan error: Text berwarna merah di bawah field yang tidak valid
- Submit button:
  - Disabled jika form tidak valid
  - Animasi loading saat proses submit
  - Feedback sukses setelah submit berhasil

## Implementasi Validasi

- Gunakan HTML5 validation attributes (`required`, `pattern`, `min`, `max`)
- Implementasikan custom validation dengan JavaScript
- Tampilkan pesan error yang spesifik dan membantu pengguna
