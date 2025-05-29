document.addEventListener('DOMContentLoaded', () => {
    // --- DATA PRODUCT ---
    const allProductsData = [
        {
            "id": 1,
            "name": "Brown Sugar Boba Milk",
            "image": "https://takestwoeggs.com/wp-content/uploads/2021/04/Brown-Sugar-Milk-Tea-Boba-Recipe-Takestwoeggs-Easy-Asian-Inspired-Recipes-sq.jpg",
            "description": "Susu segar, gula aren premium, boba kenyal.",
            "fullDescription": "Perpaduan klasik susu segar pilihan dengan manisnya gula aren asli Indonesia dan boba yang dimasak sempurna hingga kenyal. Minuman favorit sepanjang masa!",
            "price": 25000,
            "category": "Milk Tea"
        },
        {
            "id": 2,
            "name": "Matcha Boba Latte",
            "image": "https://greenheartlove.com/wp-content/uploads/2023/05/matcha-boba-tea-5.jpg",
            "description": "Matcha premium, susu creamy, boba.",
            "fullDescription": "Nikmati sensasi otentik matcha Jepang berkualitas tinggi yang dipadukan dengan susu creamy dan boba lembut. Memberikan keseimbangan rasa pahit dan manis yang pas.",
            "price": 28000,
            "category": "Latte"
        },
        {
            "id": 3,
            "name": "Taro Boba Delight",
            "image": "https://i.pinimg.com/736x/df/1a/7f/df1a7f6353113880d6258a5aa9e60763.jpg",
            "description": "Taro lembut, susu segar, boba manis.",
            "fullDescription": "Rasa unik dan manis dari talas (taro) pilihan yang dihaluskan, dicampur dengan susu segar dan boba kenyal. Pilihan yang memanjakan lidah.",
            "price": 27000,
            "category": "Milk Tea"
        },
        {
            "id": 4,
            "name": "Choco Lava Boba",
            "image": "https://myveganminimalist.com/wp-content/uploads/2022/02/Chocolate-Bubble-Milk-Tea-13.jpg",
            "description": "Cokelat kental premium, susu, boba.",
            "fullDescription": "Untuk para pecinta cokelat! Terbuat dari cokelat premium yang kental dan kaya rasa, dipadukan dengan susu dan boba. Manisnya pas dan bikin nagih.",
            "price": 29000,
            "category": "Chocolate"
        },
        {
            "id": 5,
            "name": "Strawberry Kiss Boba",
            "image": "https://myveganminimalist.com/wp-content/uploads/2022/04/Strawberry-Milk-Tea-Boba-20.jpg",
            "description": "Puree strawberry, yogurt, boba.",
            "fullDescription": "Kesegaran buah strawberry asli yang dijadikan puree, dicampur dengan yogurt plain yang sedikit asam dan boba. Kombinasi segar dan sehat.",
            "price": 30000,
            "category": "Fruit Tea"
        },
        {
            "id": 6,
            "name": "Mango Tango Boba",
            "image": "https://www.chinasichuanfood.com/wp-content/uploads/2023/07/how-to-cook-boba-pearls-16.jpg",
            "description": "Jus mangga segar, nata de coco, boba.",
            "fullDescription": "Ledakan rasa tropis dari jus mangga segar ditambah dengan kenyalnya nata de coco dan boba. Pilihan sempurna untuk hari yang panas.",
            "price": 28000,
            "category": "Fruit Tea"
        },
        {
            "id": 7,
            "name": "Classic Pearl Milk Tea",
            "image": "https://assets.epicurious.com/photos/5953ca064919e41593325d97/1:1/w_2560%2Cc_limit/bubble_tea_recipe_062817.jpg",
            "description": "Teh hitam klasik, susu, boba pearl.",
            "fullDescription": "Kembali ke dasar dengan teh hitam klasik yang diseduh sempurna, dicampur dengan susu dan boba pearl original. Rasa yang tidak pernah salah.",
            "price": 22000,
            "category": "Milk Tea"
        },
        {
            "id": 8,
            "name": "Oreo Crumble Boba",
            "image": "https://tyberrymuch.com/wp-content/uploads/2022/07/oreo-milk-tea-boba-front-straw-870x1305.jpg",
            "description": "Susu vanilla, biskuit Oreo, boba.",
            "fullDescription": "Manjakan diri Anda dengan susu rasa vanilla yang lembut, taburan biskuit Oreo yang renyah, dan boba. Perpaduan tekstur yang menyenangkan.",
            "price": 32000,
            "category": "Special"
        },
        {
            "id": 9,
            "name": "Coffee Jelly Boba",
            "image": "https://i.ytimg.com/vi/c4RMun3de-U/maxresdefault.jpg",
            "description": "Kopi dingin, susu, coffee jelly, boba.",
            "fullDescription": "Bagi pecinta kopi, minuman ini wajib dicoba! Kopi dingin yang nikmat, susu, ditambah dengan coffee jelly dan boba untuk sensasi ganda.",
            "price": 29000,
            "category": "Coffee"
        },
        {
            "id": 10,
            "name": "Sakura Lychee Fizz",
            "image": "https://i.pinimg.com/736x/f1/5d/a3/f15da36bfc155413ec73da42489cd4c6.jpg",
            "description": "Sirup leci & mawar, soda.",
            "fullDescription": "Minuman soda menyegarkan dengan aroma khas leci dan mawar, ditambah bunga sakura yang membuat tampilannya lebih aesthetic. Sensasi unik dan menyenangkan!",
            "price": 26000,
            "category": "Fruit Tea"
        }
    ];

    // --- GLOBAL DATA ---
    let allProducts = []; // Akan diisi dari allProductsData

    // --- UI ELEMENTS ---
    const navToggle = document.querySelector('.top-navbar .nav-toggle');
    const navLinksUl = document.querySelector('.top-navbar .nav-links ul');
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    const sections = document.querySelectorAll('main section[id]');
    const topNavLinks = document.querySelectorAll('.top-navbar .nav-links ul li a');
    const currentYearSpan = document.getElementById('currentYear');

    const productMenuGrid = document.getElementById('product-menu-grid');
    const filterContainer = document.querySelector('.filter-container');
    
    const productModal = document.getElementById('product-modal');
    const modalOverlay = productModal.querySelector('.modal-overlay');
    const modalCloseBtn = productModal.querySelector('.modal-close');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalCategory = document.getElementById('modal-category');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalOrderBtn = productModal.querySelector('.modal-order-btn');

    const preorderForm = document.getElementById('preorder-form');
    const formSubmissionMessage = document.getElementById('form-submission-message');
    const productChoiceSelect = document.getElementById('product-choice');


    // --- NAVBAR & SCROLLSPY ---
    function setupNavbar() {
        if (navToggle && navLinksUl) {
            navToggle.addEventListener('click', () => {
                const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
                navToggle.setAttribute('aria-expanded', !isExpanded);
                navLinksUl.classList.toggle('active');
            });
            document.querySelectorAll('.top-navbar .nav-links ul a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinksUl.classList.contains('active')) {
                        navToggle.setAttribute('aria-expanded', 'false');
                        navLinksUl.classList.remove('active');
                    }
                });
            });
        }
    }

    function setupScrollSpy() {
        const topNavbar = document.querySelector('.top-navbar.sticky');
        const getTopNavbarHeight = () => (topNavbar && window.getComputedStyle(topNavbar).display !== 'none') ? topNavbar.offsetHeight : 0;

        function updateActiveLink(navItems, activeClass, hrefPrefix = '#') {
            let currentSectionId = 'hero';
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const topNavbarHeight = getTopNavbarHeight();

            if (scrollPosition + windowHeight >= docHeight - 50) {
                const lastSection = sections[sections.length - 1];
                if (lastSection) currentSectionId = lastSection.id;
            } else {
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - topNavbarHeight - 70; // Adjusted buffer
                    if (scrollPosition >= sectionTop) {
                        currentSectionId = section.getAttribute('id');
                    }
                });
            }
            
            navItems.forEach(item => {
                item.classList.remove(activeClass);
                if (item.getAttribute('href') === `${hrefPrefix}${currentSectionId}`) {
                    item.classList.add(activeClass);
                }
            });
            
            if (!document.querySelector(`.${activeClass}`) && navItems.length > 0) {
                const heroLink = Array.from(navItems).find(item => item.getAttribute('href') === `${hrefPrefix}hero`);
                if(heroLink) heroLink.classList.add(activeClass);
            }
        }

        if (bottomNavItems.length > 0 && sections.length > 0) {
            window.addEventListener('scroll', () => updateActiveLink(bottomNavItems, 'active'));
            updateActiveLink(bottomNavItems, 'active'); 

            bottomNavItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    smoothScrollToTarget(e, this, getTopNavbarHeight());
                });
            });
        }
        
        if (topNavLinks.length > 0 && sections.length > 0) {
            window.addEventListener('scroll', () => updateActiveLink(topNavLinks, 'active-link'));
            updateActiveLink(topNavLinks, 'active-link'); 
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            if (!anchor.classList.contains('bottom-nav-item')) { 
                anchor.addEventListener('click', function(e) {
                    smoothScrollToTarget(e, this, getTopNavbarHeight());
                });
            }
        });
    }

    function smoothScrollToTarget(event, linkElement, navbarHeight) {
        const href = linkElement.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            const targetElement = document.getElementById(href.substring(1));
            if (targetElement) {
                event.preventDefault();
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight - 20; 
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    }
    
    function setYear() {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }

    // --- PRODUCT GALERI & FILTER ---
    function loadProducts() { // Nama fungsi diubah dari fetchProducts
        allProducts = allProductsData; // Langsung gunakan data yang sudah di-embed
        if (allProducts && allProducts.length > 0) {
            renderProducts(allProducts);
            populateFilterButtons();
            populateProductChoicesForForm();
        } else {
            console.error("Data produk tidak ditemukan atau kosong.");
            if(productMenuGrid) productMenuGrid.innerHTML = "<p class='error-message' style='display:block; text-align:center;'>Gagal memuat menu. Data tidak tersedia.</p>";
        }
    }

    function formatPrice(price) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
    }

    function renderProducts(productsToRender) {
        if (!productMenuGrid) return;
        productMenuGrid.innerHTML = ''; 

        if (productsToRender.length === 0) {
            productMenuGrid.innerHTML = "<p style='text-align:center; grid-column: 1 / -1;'>Tidak ada produk yang cocok dengan filter ini.</p>";
            return;
        }

        productsToRender.forEach(product => {
            const card = document.createElement('article');
            card.className = 'menu-card';
            card.dataset.productId = product.id; 
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <span class="category-label">${product.category}</span>
                <div class="menu-card-content">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="menu-card-footer">
                        <span class="price">${formatPrice(product.price)}</span>
                        <button class="add-to-cart-btn" aria-label="Lihat detail ${product.name}">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => openProductModal(product.id));
            productMenuGrid.appendChild(card);
        });
    }

    function populateFilterButtons() {
        if (!filterContainer || allProducts.length === 0) return;

        const categories = ['all', ...new Set(allProducts.map(p => p.category))];
        filterContainer.innerHTML = '';

        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.dataset.category = category.toLowerCase();
            button.textContent = category === 'all' ? 'Semua' : category;
            if (category === 'all') {
                button.classList.add('active');
            }
            button.addEventListener('click', handleFilterClick);
            filterContainer.appendChild(button);
        });
    }

    function handleFilterClick(event) {
        const selectedCategory = event.target.dataset.category;
        
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        if (selectedCategory === 'all') {
            renderProducts(allProducts);
        } else {
            const filteredProducts = allProducts.filter(product => product.category.toLowerCase() === selectedCategory);
            renderProducts(filteredProducts);
        }
    }

    // --- PRODUCT MODAL ---
    function openProductModal(productId) {
        const product = allProducts.find(p => p.id === parseInt(productId));
        if (!product || !productModal) return;

        modalImg.src = product.image;
        modalImg.alt = product.name;
        modalName.textContent = product.name;
        modalCategory.textContent = product.category;
        modalDescription.textContent = product.fullDescription || product.description; 
        modalPrice.textContent = formatPrice(product.price);
        
        modalOrderBtn.onclick = () => {
            closeProductModal();
            const preorderSection = document.getElementById('preorder');
            if (preorderSection) {
                const topNavbar = document.querySelector('.top-navbar.sticky');
                const topNavbarHeight = (topNavbar && window.getComputedStyle(topNavbar).display !== 'none') ? topNavbar.offsetHeight : 0;
                const elementPosition = preorderSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - topNavbarHeight - 20;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                
                if(productChoiceSelect) {
                    productChoiceSelect.value = product.id;
                }
            }
        };

        productModal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }

    function closeProductModal() {
        if (!productModal) return;
        productModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function setupModalEventListeners() {
        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
        if (modalOverlay) modalOverlay.addEventListener('click', closeProductModal);
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && productModal && productModal.classList.contains('active')) {
                closeProductModal();
            }
        });
    }

    // --- PRE-ORDER ---
    function populateProductChoicesForForm() {
        if (!productChoiceSelect || allProducts.length === 0) return;
        
        while (productChoiceSelect.options.length > 1) {
            productChoiceSelect.remove(1);
        }

        allProducts.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id; 
            option.textContent = `${product.name} (${formatPrice(product.price)})`;
            productChoiceSelect.appendChild(option);
        });
    }

    function validateField(field, validatorFn, errorMessage) {
        const errorElement = document.getElementById(`${field.id}-error`);
        if (!validatorFn(field.value.trim())) {
            field.classList.add('invalid');
            if (errorElement) {
                errorElement.textContent = errorMessage;
                errorElement.style.display = 'block';
            }
            return false;
        } else {
            field.classList.remove('invalid');
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
            return true;
        }
    }

    function validatePreorderForm() {
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const datetimeInput = document.getElementById('datetime');
        const productChoiceInput = document.getElementById('product-choice');
        const quantityInput = document.getElementById('quantity');

        isValid = validateField(nameInput, value => value.length >= 3, 'Nama minimal 3 karakter.') && isValid;
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = validateField(emailInput, value => emailRegex.test(value), 'Format email tidak valid.') && isValid;

        const phoneRegex = /^(08|\+628)\d{8,12}$/; 
        isValid = validateField(phoneInput, value => phoneRegex.test(value), 'Format nomor telepon tidak valid (cth: 08123456789 atau +628123456789).') && isValid;

        isValid = validateField(datetimeInput, value => {
            if (!value) return false;
            const selectedDate = new Date(value);
            const now = new Date();
            now.setHours(now.getHours() + 1); 
            return selectedDate > now;
        }, 'Tanggal & waktu minimal 1 jam dari sekarang.') && isValid;
        
        isValid = validateField(productChoiceInput, value => value !== "", 'Silakan pilih produk.') && isValid;

        isValid = validateField(quantityInput, value => {
            const num = parseInt(value, 10);
            return !isNaN(num) && num >= 1;
        }, 'Jumlah pesanan minimal 1.') && isValid;

        return isValid;
    }

    function handlePreorderSubmit(event) {
        event.preventDefault();
        if (!formSubmissionMessage) return;

        formSubmissionMessage.style.display = 'none'; 

        if (validatePreorderForm()) {
            const formData = new FormData(preorderForm);
            const data = {};
            formData.forEach((value, key) => data[key] = value);
            console.log('Pre-order Data:', data);

            formSubmissionMessage.textContent = 'Pre-order Anda berhasil dikirim! Kami akan segera menghubungi Anda.';
            formSubmissionMessage.className = 'form-submission-message success';
            formSubmissionMessage.style.display = 'block';
            preorderForm.reset();
            
            document.querySelectorAll('.error-message').forEach(el => {
                el.textContent = '';
                el.style.display = 'none';
            });
            document.querySelectorAll('.form-group input.invalid, .form-group select.invalid').forEach(el => {
                el.classList.remove('invalid');
            });

            setTimeout(() => {
                formSubmissionMessage.style.display = 'none';
            }, 5000); 
        } else {
            formSubmissionMessage.textContent = 'Gagal mengirim. Harap periksa kembali isian form Anda.';
            formSubmissionMessage.className = 'form-submission-message error';
            formSubmissionMessage.style.display = 'block';
            const firstError = preorderForm.querySelector('.invalid');
            if (firstError) {
                firstError.focus();
                const topNavbar = document.querySelector('.top-navbar.sticky');
                const topNavbarHeight = (topNavbar && window.getComputedStyle(topNavbar).display !== 'none') ? topNavbar.offsetHeight : 0;
                const elementPosition = firstError.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - topNavbarHeight - 40; 
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    }
    
    function setupPreorderForm() {
        if (preorderForm) {
            preorderForm.addEventListener('submit', handlePreorderSubmit);

            ['name', 'email', 'phone', 'datetime', 'product-choice', 'quantity'].forEach(id => {
                const input = document.getElementById(id);
                if (input) {
                    input.addEventListener('blur', () => {
                        if(input.value.trim() !== "" || input.required) { // Validasi jika ada isi atau fieldnya required
                           if (id === 'name') validateField(input, value => value.length >= 3, 'Nama minimal 3 karakter.');
                           if (id === 'email') validateField(input, value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), 'Format email tidak valid.');
                           if (id === 'phone') validateField(input, value => /^(08|\+628)\d{8,12}$/.test(value), 'Format nomor telepon tidak valid.');
                           if (id === 'datetime') validateField(input, value => { if (!value) return false; const selectedDate = new Date(value); const now = new Date(); now.setHours(now.getHours() + 1); return selectedDate > now; }, 'Tanggal & waktu minimal 1 jam dari sekarang.');
                           if (id === 'product-choice') validateField(input, value => value !== "", 'Silakan pilih produk.');
                           if (id === 'quantity') validateField(input, value => { const num = parseInt(value, 10); return !isNaN(num) && num >= 1; }, 'Jumlah pesanan minimal 1.');
                        } else { // Jika field tidak required dan kosong, hapus error
                            const errorElement = document.getElementById(`${input.id}-error`);
                            if(errorElement) {
                                errorElement.textContent = '';
                                errorElement.style.display = 'none';
                            }
                            input.classList.remove('invalid');
                        }
                    });
                }
            });
        }
    }

    // --- INISIALISASI ---
    function init() {
        setupNavbar();
        setupScrollSpy();
        setYear();
        loadProducts(); 
        setupModalEventListeners();
        setupPreorderForm();
    }

    init();
});
