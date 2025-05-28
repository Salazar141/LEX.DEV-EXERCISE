// Smooth Scroll untuk semua anchor di navbar
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// ORDER NOW button scroll ke menu
document.querySelector('#orderBtn')?.addEventListener('click', () => {
  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
});

// LEARN MORE button scroll ke about
document.querySelector('#learnMoreBtn')?.addEventListener('click', () => {
  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
});

// Highlight navbar saat section aktif (scrollspy mini versi)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// === KERANJANG ===

// Simpan keranjang sebagai array objek
let cart = [];

const orderModal = document.getElementById('orderModal');
const cartModal = document.getElementById('cartModal');
const modalProductName = document.getElementById('modalProductName');
const quantityInput = document.getElementById('quantityInput');
const toppingCheckboxes = document.querySelectorAll('.topping-checkbox');
const paymentRadios = document.getElementsByName('paymentMethod');
const cartItemsDiv = document.getElementById('cartItems');
const cartTotalDiv = document.getElementById('cartTotal');
const cartPaymentMethodDiv = document.getElementById('cartPaymentMethod');

let currentOrder = {
  name: '',
  price: 0,
  qty: 1,
  toppings: [],
  paymentMethod: 'COD',
};

// Buka popup order, isi nama produk & harga dari tombol
function openOrderPopup(button) {
  const name = button.getAttribute('data-name');
  const price = parseInt(button.getAttribute('data-price'));

  currentOrder = {
    name,
    price,
    qty: 1,
    toppings: [],
    paymentMethod: 'COD',
  };

  modalProductName.textContent = name;
  quantityInput.value = 1;

  // reset topping dan metode bayar
  toppingCheckboxes.forEach(cb => (cb.checked = false));
  paymentRadios[0].checked = true;

  orderModal.style.display = 'block';
}

// Tutup popup order
function closeOrderPopup() {
  orderModal.style.display = 'none';
}

// Quantity controls
function increaseQty() {
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQty() {
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
}

// Ambil topping yang dipilih dan total harga toppingnya
function getSelectedToppings() {
  let selected = [];
  toppingCheckboxes.forEach(cb => {
    if (cb.checked) {
      selected.push({
        name: cb.getAttribute('data-name'),
        price: parseInt(cb.getAttribute('data-price')),
      });
    }
  });
  return selected;
}

// Ambil metode pembayaran yang dipilih
function getSelectedPaymentMethod() {
  for (const radio of paymentRadios) {
    if (radio.checked) return radio.value;
  }
  return 'COD'; // default
}

// Tambah item ke keranjang
function addToCart() {
  currentOrder.qty = parseInt(quantityInput.value);
  currentOrder.toppings = getSelectedToppings();
  currentOrder.paymentMethod = getSelectedPaymentMethod();

  cart.push({ ...currentOrder });

  showCustomAlert(`Yay! ${currentOrder.name} sudah masuk ke keranjang kamu!`);

  closeOrderPopup();
}

// Buka modal keranjang
function openCart() {
  renderCart();
  cartModal.style.display = 'block';
}

// Tutup modal keranjang
function closeCart() {
  cartModal.style.display = 'none';
}

// Render isi keranjang di modal
function renderCart() {
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Keranjang onii-chan kosong, silahkan memesan terlebih dahulu onii-chan!</p>';
    cartTotalDiv.textContent = '';
    cartPaymentMethodDiv.textContent = '';
    return;
  }

  cartItemsDiv.innerHTML = '';
  let total = 0;
  let paymentMethodsSet = new Set();

  cart.forEach((item, index) => {
    // Hitung harga topping total per item
    const toppingTotal = item.toppings.reduce((sum, t) => sum + t.price, 0);
    const itemPrice = (item.price + toppingTotal) * item.qty;
    total += itemPrice;
    paymentMethodsSet.add(item.paymentMethod);

    // Render tiap item
    let toppingsText = item.toppings.length > 0 ? item.toppings.map(t => t.name).join(', ') : 'Tidak ada topping';
    cartItemsDiv.innerHTML += `
      <div class="cart-item" style="border-bottom:1px solid #ccc; padding:8px 0;">
        <b>${item.name}</b> x${item.qty} <br/>
        Topping: ${toppingsText} <br/>
        Harga: Rp${itemPrice.toLocaleString()} <br/>
        Metode Bayar: ${item.paymentMethod} <br/>
        <button onclick="removeCartItem(${index})" style="color:red; cursor:pointer; border:none; background:none;">Hapus ❌</button>
      </div>
    `;
  });

  cartTotalDiv.innerHTML = `<b>Total Harga: Rp${total.toLocaleString()}</b>`;

  // Kalau metode bayar beda-beda, kasih info gini
  if (paymentMethodsSet.size === 1) {
    cartPaymentMethodDiv.textContent = `Metode Pembayaran: ${[...paymentMethodsSet][0]}`;
  } else {
    cartPaymentMethodDiv.textContent = `Metode Pembayaran: Beragam (cek item)`;
  }
}

// Hapus item dari keranjang
function removeCartItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// Checkout langsung dari popup order
function checkoutNow() {
  currentOrder.qty = parseInt(quantityInput.value);
  currentOrder.toppings = getSelectedToppings();
  currentOrder.paymentMethod = getSelectedPaymentMethod();

  // Simple alert checkout (bisa dikembangin ke payment gateway)
  showCustomAlert(`Checkout berhasil!\nProduk: ${currentOrder.name}\nQty: ${currentOrder.qty}\nMetode Bayar: ${currentOrder.paymentMethod}\nTotal: Rp${calculateOrderTotal(currentOrder).toLocaleString()}`);
  closeOrderPopup();
}

// Checkout dari keranjang
function checkoutCart() {
  if (cart.length === 0) {
    showCustomAlert('Keranjang kosong, silakan pesan dulu!');
    return;
  }

  // Hitung total semua item
  let total = 0;
  cart.forEach(item => {
    total += calculateOrderTotal(item);
  });

  showCustomAlert(`Checkout berhasil!\nTotal Harga: Rp${total.toLocaleString()}\nTerima kasih sudah pesan di BobaKu!`);
  cart = [];
  closeCart();
}

// Fungsi hitung total 1 order item
function calculateOrderTotal(order) {
  let toppingTotal = order.toppings.reduce((sum, t) => sum + t.price, 0);
  return (order.price + toppingTotal) * order.qty;
}

// Tutup modal kalau klik luar modal
window.onclick = function(event) {
  if (event.target === orderModal) {
    closeOrderPopup();
  }
  if (event.target === cartModal) {
    closeCart();
  }
};

// filter produk berdasarkan kategori
function filterProducts(category) {
  const allProducts = document.querySelectorAll('.product-card');

  allProducts.forEach(card => {
    const cardCategory = card.getAttribute('data-category');

    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

const filterButtons = document.querySelectorAll('.category-filter button');
function filterProducts(category) {
  const allProducts = document.querySelectorAll('.product-card');

  allProducts.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    card.style.display = (category === 'all' || cardCategory === category) ? 'block' : 'none';
  });

  filterButtons.forEach(btn => btn.classList.remove('active'));
  const activeBtn = [...filterButtons].find(btn => btn.textContent.toLowerCase().includes(category));
  activeBtn?.classList.add('active');
}

// Munculin alert 
function showCustomAlert(message) {
  const alertBox = document.getElementById('customAlert');
  const alertMessage = document.getElementById('alertMessage');
  alertMessage.textContent = message;
  alertBox.style.display = 'flex';
}

// Nutupin alert 
function closeCustomAlert() {
  document.getElementById('customAlert').style.display = 'none';
}
