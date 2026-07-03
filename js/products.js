// Pharmaceutical Product Catalog Database
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Satipara-650 Tablets",
    category: "pain-relief",
    categoryLabel: "Pain Relief",
    description: "Highly effective paracetamol tablets for rapid relief from mild to moderate pain, including headache, muscle ache, arthritis, backache, toothache, and reducing fever.",
    dosageForm: "Tablet",
    packaging: "10 x 15 Tablets (Blister Pack)",
    image: "assets/images/tablets.jpg"
  },
  {
    id: 2,
    name: "Saticlav-625 Tablets",
    category: "antibiotics",
    categoryLabel: "Antibiotics",
    description: "Amoxycillin and Potassium Clavulanate tablet IP, a broad-spectrum antibiotic indicated for bacterial infections of the respiratory tract, urinary tract, skin, and soft tissue.",
    dosageForm: "Tablet",
    packaging: "10 x 1 x 6 Alu-Alu Pack",
    image: "assets/images/antibiotics.jpg"
  },
  {
    id: 3,
    name: "Satik-DSR Capsules",
    category: "gastro",
    categoryLabel: "Gastro Medicines",
    description: "Rabeprazole Sodium & Domperidone Sustained Release Capsules. Used for treating gastroesophageal reflux disease (GERD), acid peptic disorders, and severe heartburn.",
    dosageForm: "Capsule (Sustained Release)",
    packaging: "10 x 10 Alu-Alu Pack",
    image: "assets/images/capsules.jpg"
  },
  {
    id: 4,
    name: "Satiplex-Z Capsules",
    category: "vitamins",
    categoryLabel: "Vitamins & Supplements",
    description: "B-Complex vitamins fortified with Zinc and Vitamin C. Essential multivitamin capsule to boost daily immunity, promote cell repair, and combat general fatigue.",
    dosageForm: "Capsule",
    packaging: "10 x 15 Capsules Strip Pack",
    image: "assets/images/supplements.jpg"
  },
  {
    id: 5,
    name: "Saticof-LS Syrup",
    category: "syrups",
    categoryLabel: "Syrups",
    description: "Levosalbutamol, Ambroxol Hydrochloride, and Guaiphenesin expectorant syrup. Formulated for quick relief from productive cough, chest congestion, and bronchospasms.",
    dosageForm: "Liquid Expectorant Syrup",
    packaging: "100 ml Bottle with Measuring Cap",
    image: "assets/images/syrups.jpg"
  },
  {
    id: 6,
    name: "Saticef-O 200 Tablets",
    category: "antibiotics",
    categoryLabel: "Antibiotics",
    description: "Cefixime Dispersible Tablets IP 200mg. Highly effective cephalosporin antibiotic targeting typhoid fever, urinary tract, and respiratory tract infections.",
    dosageForm: "Tablet",
    packaging: "10 x 10 Alu-Alu Pack",
    image: "assets/images/antibiotics.jpg"
  },
  {
    id: 7,
    name: "Satiliv-Active Syrup",
    category: "ayurvedic",
    categoryLabel: "Ayurvedic Products",
    description: "An all-natural Ayurvedic liver tonic enriched with Bhuiamla, Kalmegh, and Punarnava. Optimizes liver function, improves digestion, and protects against hepatotoxins.",
    dosageForm: "Ayurvedic Liquid Syrup",
    packaging: "200 ml Bottle in Attractive Carton",
    image: "assets/images/ayurvedic.jpg"
  },
  {
    id: 8,
    name: "Satipred-8 Tablets",
    category: "pediatric",
    categoryLabel: "Pediatric Medicines",
    description: "Methylprednisolone Tablets IP 8mg. A corticosteroid used to manage inflammation, pediatric asthma, allergy flare-ups, and severe skin disorders under specialist supervision.",
    dosageForm: "Tablet",
    packaging: "10 x 10 Alu-Alu Pack",
    image: "assets/images/pediatric.jpg"
  },
  {
    id: 9,
    name: "Satizith-500 Tablets",
    category: "antibiotics",
    categoryLabel: "Antibiotics",
    description: "Azithromycin Tablets IP 500mg. A powerful macrolide antibiotic with a convenient 3-day course, targeting throat infections, tonsillitis, and community-acquired pneumonia.",
    dosageForm: "Tablet",
    packaging: "10 x 3 Tablets Blister Pack",
    image: "assets/images/antibiotics.jpg"
  },
  {
    id: 10,
    name: "Satider-KT Cream",
    category: "dermatology",
    categoryLabel: "Dermatology Products",
    description: "Ketoconazole, Neomycin Sulfate, Iodochlorhydroxyquin, and Clobetasol Propionate cream. Broad-spectrum skin ointment for treating eczema, psoriasis, and fungal skin infections.",
    dosageForm: "Topical Cream",
    packaging: "15g Laminated Tube",
    image: "assets/images/dermatology.jpg"
  },
  {
    id: 11,
    name: "Satibion-Plus Injection",
    category: "injections",
    categoryLabel: "Injections",
    description: "Methylcobalamin, Pyridoxine Hydrochloride, and Niacinamide injection. High-potency multivitamin injection designed for neurological health, sciatica pain, and severe vitamin deficiencies.",
    dosageForm: "Injectable Solution (I.M./I.V.)",
    packaging: "5 x 2 ml Ampoules",
    image: "assets/images/injections.jpg"
  },
  {
    id: 12,
    name: "Satiglip-M 50/500 Tablets",
    category: "diabetes",
    categoryLabel: "Diabetes Medicines",
    description: "Vildagliptin and Metformin Hydrochloride Tablets. A highly stable combination therapy designed to regulate glycemic levels in patients with Type-2 Diabetes Mellitus.",
    dosageForm: "Tablet",
    packaging: "10 x 15 Tablets Blister Pack",
    image: "assets/images/diabetes.jpg"
  },
  {
    id: 13,
    name: "Satitel-AM Tablets",
    category: "cardiac",
    categoryLabel: "Cardiac Medicines",
    description: "Telmisartan and Amlodipine Tablets. Highly recommended prescription drug for managing hypertension (high blood pressure) and reducing cardiac risks.",
    dosageForm: "Tablet",
    packaging: "10 x 10 Alu-Alu Pack",
    image: "assets/images/cardiac.jpg"
  },
  {
    id: 14,
    name: "Satipod-100 Dry Syrup",
    category: "pediatric",
    categoryLabel: "Pediatric Medicines",
    description: "Cefpodoxime Proxetil Oral Suspension. Formulated specifically for pediatric patients to treat acute otitis media, pharyngitis, and skin structure infections.",
    dosageForm: "Dry Powder Syrup for Suspension",
    packaging: "30 ml Bottle with Sterile Water",
    image: "assets/images/pediatric.jpg"
  },
  {
    id: 15,
    name: "Satiprot-DHA Powder",
    category: "nutraceuticals",
    categoryLabel: "Nutraceutical Products",
    description: "Premium protein powder enriched with DHA, Methylcobalamin, vitamins, and essential minerals. Excellent health supplement for pregnant women, recovering patients, and growing children.",
    dosageForm: "Nutraceutical Powder",
    packaging: "200g Food-grade Tin Container",
    image: "assets/images/nutraceuticals.jpg"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('products-grid');
  const catalogStatus = document.getElementById('catalog-status-text');
  const searchInput = document.getElementById('filter-search');
  const categoryItems = document.querySelectorAll('.category-item');

  let activeCategory = 'all';
  let activeSearch = '';

  // Render product grid
  const renderProducts = () => {
    if (!productsGrid) return;
    
    // Filter array
    const filtered = PRODUCTS_DATA.filter(prod => {
      const matchCategory = activeCategory === 'all' || prod.category === activeCategory;
      const matchSearch = prod.name.toLowerCase().includes(activeSearch.toLowerCase()) || 
                          prod.description.toLowerCase().includes(activeSearch.toLowerCase()) ||
                          prod.dosageForm.toLowerCase().includes(activeSearch.toLowerCase()) ||
                          prod.categoryLabel.toLowerCase().includes(activeSearch.toLowerCase());
      return matchCategory && matchSearch;
    });

    // Update Status Label
    if (catalogStatus) {
      catalogStatus.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} products`;
    }

    // Generate HTML
    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-products">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:1rem; opacity:0.6;">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          <p>No products found matching your criteria. Try adjusting your filter or search query.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(prod => `
      <div class="product-card">
        <div class="product-image-box">
          <span class="product-category-tag">${prod.categoryLabel}</span>
          <img src="${prod.image}" alt="${prod.name}" loading="lazy">
        </div>
        <div class="product-info-box">
          <h3 class="product-title">${prod.name}</h3>
          <p class="product-desc">${prod.description}</p>
          <div class="product-specs">
            <div class="product-spec-item"><strong>Dosage Form:</strong> ${prod.dosageForm}</div>
            <div class="product-spec-item"><strong>Packaging:</strong> ${prod.packaging}</div>
          </div>
          <button class="btn btn-primary open-inquiry" data-product="${prod.name}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Inquire Now
          </button>
        </div>
      </div>
    `).join('');

    // Rebind Modal events on newly generated elements
    bindInquiryModalEvents();
  };

  // Bind inquiry buttons in catalog to open global modal
  const bindInquiryModalEvents = () => {
    const openInquiryBtns = productsGrid ? productsGrid.querySelectorAll('.open-inquiry') : [];
    const inquiryModal = document.getElementById('inquiry-modal');
    
    if (inquiryModal) {
      const subjectInput = document.getElementById('inquiry-subject');
      const messageInput = document.getElementById('inquiry-message');

      openInquiryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const productName = btn.getAttribute('data-product') || '';
          
          inquiryModal.classList.add('active');
          if (productName && subjectInput) {
            subjectInput.value = `Business Inquiry: ${productName}`;
            if (messageInput) {
              messageInput.value = `Hello Satik Pharmaceuticals,\n\nWe are interested in purchasing or distributing your product: "${productName}". Please send us details, packaging rates, and PCD Franchise terms.\n\nThank you.`;
            }
          }
        });
      });
    }
  };

  // Sidebar Category Filter Clicks
  categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      categoryItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      activeCategory = item.getAttribute('data-category');
      renderProducts();
    });
  });

  // Search input typing
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearch = e.target.value.trim();
      renderProducts();
    });
  }

  // Parse Query Parameters (from Global Header Search redirect or Category quicklinks)
  const parseParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const categoryParam = urlParams.get('category');

    if (searchParam) {
      activeSearch = decodeURIComponent(searchParam);
      if (searchInput) searchInput.value = activeSearch;
    }

    if (categoryParam) {
      activeCategory = decodeURIComponent(categoryParam);
      categoryItems.forEach(item => {
        if (item.getAttribute('data-category') === activeCategory) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  };

  // Initial Run
  parseParams();
  renderProducts();
});
