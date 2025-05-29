const slides = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const menuSection = document.querySelector('.menu');
const filterBtns = menuSection.querySelectorAll('.filter-buttons button');

const filterWrapper = document.querySelector('.filter-wrapper');
const filterToggle = document.getElementById('filter-toggle');
const filterOptions = document.querySelectorAll('.filter-options button');

const filterOptionButtons = document.querySelectorAll('.filter-options button');
const menuCards = document.querySelectorAll('.menu .card');

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const modalConfirm = document.getElementById('modal-confirmation');
const closeBtn = document.getElementById('closeModal');
const modalForm = document.getElementById('modal-order-form');

let currentSlide = 0;
const totalSlides = slides.length;

function updateSlidePosition() {
  const offset = currentSlide * 100;
  slideContainer.style.transform = `translateX(-${offset}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoplay();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoplay();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentSlide = i;
    updateSlidePosition();
    resetAutoplay();
  });
});

let slideInterval = setInterval(nextSlide, 5000);
function resetAutoplay() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

  //Tampilkan pertama kali
updateSlidePosition();

filterBtns.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

    menuCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
            card.style.display = 'block';
        }else{
            card.style.display = 'none';
        }

filterBtns.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    });
  });
});

filterToggle.addEventListener('click', () => {
    filterWrapper.classList.toggle('active');
});

filterOptionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

    filterOptionButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

    menuCards.forEach(card => {
        const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            }else{
                card.style.display = 'none';
            }
        });
    });
});

  //Deskripsi produk
const productDescriptions = {
  "Clasic Milk Tea": "Teh susu, teh pake susu.",
  "Taro Milk Tea": "Minuman ungu rasa ubi enak.",
  "Brown Sugar Boba": "Boba karamel, dengan gula aren.",
  "Matcha Latte": "Matcha premium Jepang dengan susu segar.",
  "Chocolate Boba": "Cokelat pekat dengan topping boba yang kenyal.",
  "Passion Fruit Tea": "Teh tropikal segar dengan rasa menyegarkan."
};

  //Buka modal/tab(?) saat klik produk
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.card-title').textContent;
    const price = card.querySelector('.card-price').textContent;
    const img = card.querySelector('img').src;

    modalTitle.textContent = title;
    modalPrice.textContent = price;
    modalImg.src = img;
    modalDesc.textContent = productDescriptions[title] || "Deskripsi produk tidak tersedia.";
    
    modalConfirm.classList.add('hidden');
    modal.style.display = 'flex';
  });
});

  //Tutup modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

  //Kirim form
modalForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = modalForm.name.value.trim();
  const email = modalForm.email.value.trim();
  const phone = modalForm.phone.value.trim();
  const datetime = modalForm.datetime.value;
  const quantity = parseInt(modalForm.quantity.value);
  const request = modalForm.request.value.trim();

  let errorMsg = "";

  //Validasi user:
    //Validasi nama
  if (!name) {
    errorMsg = "Nama tidak boleh kosong.";
  }

    //Validasi email
  else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    errorMsg = "Email tidak valid.";
  }

    //Validasi nomor telepon
  else if (!/^\d{10,15}$/.test(phone)) {
    errorMsg = "No. Telepon harus berupa angka (10-15 digit).";
  }

    //Validasi tanggal & waktu
  else if (!datetime) {
    errorMsg = "Tanggal & waktu wajib diisi.";
  }

    //Validasi jumlah
  else if (!quantity || quantity < 1) {
    errorMsg = "Jumlah pesanan minimal 1.";
  }

if (errorMsg !== "") {
  alert("⚠️ " + errorMsg);
  return;
}

modalConfirm.classList.remove('hidden');
modalForm.reset();
showToast("🎉 Pesanan berhasil dikirim!");
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 3000);
}

setTimeout(() => {
  modal.style.display = 'none';
}, 3500);
