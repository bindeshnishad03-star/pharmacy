document.addEventListener('DOMContentLoaded', () => {
  // --- Loading Screen Animation ---
  const loader = document.getElementById('loader-wrapper');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }, 300); // Small delay for smooth fadeout
    });
    // Fallback if load event already fired
    if (document.readyState === 'complete') {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }, 300);
    }
  }

  // --- Sticky Header Logic ---
  const header = document.querySelector('.main-header');
  const stickyPoint = header ? header.offsetTop + 100 : 100;
  
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > stickyPoint) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }

    // --- Back to Top Button Logic ---
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    }
  });

  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- Mobile Navigation Menu Toggler ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when links are clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- Global Search Overlay ---
  const searchToggle = document.getElementById('search-toggle');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-overlay-close');
  const searchInput = document.getElementById('search-input');
  const searchForm = document.getElementById('search-form');

  if (searchToggle && searchOverlay && searchClose) {
    searchToggle.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      setTimeout(() => searchInput.focus(), 300);
    });

    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });

    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
      }
    });

    if (searchForm && searchInput) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
          // Redirect to products catalog with query parameter
          window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
      });
    }
  }

  // --- Inquiry Modal Overlay Controller ---
  const inquiryModal = document.getElementById('inquiry-modal');
  const modalClose = document.getElementById('modal-close');
  const openInquiryBtns = document.querySelectorAll('.open-inquiry');

  if (inquiryModal && modalClose) {
    const openModal = (productName = '') => {
      inquiryModal.classList.add('active');
      const subjectInput = document.getElementById('inquiry-subject');
      const messageInput = document.getElementById('inquiry-message');
      
      if (productName && subjectInput) {
        subjectInput.value = `Business Inquiry: ${productName}`;
        if (messageInput) {
          messageInput.value = `Hello Satik Pharmaceuticals,\n\nWe are interested in purchasing or distributing your product: "${productName}". Please send us details, packaging rates, and PCD Franchise terms.\n\nThank you.`;
        }
      }
    };

    const closeModal = () => {
      inquiryModal.classList.remove('active');
    };

    openInquiryBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productName = btn.getAttribute('data-product') || '';
        openModal(productName);
      });
    });

    modalClose.addEventListener('click', closeModal);
    inquiryModal.addEventListener('click', (e) => {
      if (e.target === inquiryModal) {
        closeModal();
      }
    });

    // Handle generic modal form submissions
    const modalForm = document.getElementById('modal-inquiry-form');
    if (modalForm) {
      modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        closeModal();
        showToast('Thank you! Your business inquiry has been submitted successfully.');
        modalForm.reset();
      });
    }
  }

  // --- Toast Success Alerts ---
  const showToast = (message) => {
    let toast = document.getElementById('success-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'success-toast';
      toast.className = 'success-popup';
      toast.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span id="toast-text"></span>
      `;
      document.body.appendChild(toast);
    }
    
    document.getElementById('toast-text').innerText = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  // Bind toast global function for other scripts
  window.showFormSuccessToast = showToast;

  // --- Newsletter Form Handler ---
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('.newsletter-input');
      if (emailInput && emailInput.value) {
        showToast('Thank you for subscribing to our corporate newsletter!');
        emailInput.value = '';
      }
    });
  });

  // --- FAQ Accordion Logic ---
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all FAQs first
      document.querySelectorAll('.faq-item').forEach(faqItem => {
        faqItem.classList.remove('active');
        const body = faqItem.querySelector('.faq-body');
        if (body) body.style.maxHeight = '0px';
      });

      // If clicked item wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
        const body = item.querySelector('.faq-body');
        if (body) body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // --- Generic Contact Forms (Embedded in Contact and Career pages) ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
      contactForm.reset();
    });
  }

  const careerForm = document.getElementById('career-form');
  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Application submitted successfully! Our HR department will contact you soon.');
      careerForm.reset();
    });
  }
});
