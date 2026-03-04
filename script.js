// ============================================
// OC Constructora - Website Scripts
// ============================================

// Global carousel state
const carouselStates = {};

// Initialize all carousels on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize all carousels
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        initCarousel(carousel.id);
    });
});

// ===== Mobile Menu Toggle =====
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// ===== Carousel Initialization =====
function initCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById(carouselId + 'Dots');
    
    // Initialize state
    carouselStates[carouselId] = {
        currentSlide: 0,
        totalSlides: slides.length
    };
    
    // Create dots
    if (dotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index, carouselId));
            dotsContainer.appendChild(dot);
        });
    }
    
    // Show first slide
    showSlide(0, carouselId);
    
    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        moveSlide(1, carouselId);
    }, 5000);
}

// ===== Show specific slide =====
function showSlide(n, carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const state = carouselStates[carouselId];
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById(carouselId + 'Dots');
    
    // Wrap around
    if (n >= state.totalSlides) {
        state.currentSlide = 0;
    } else if (n < 0) {
        state.currentSlide = state.totalSlides - 1;
    } else {
        state.currentSlide = n;
    }
    
    // Move carousel
    const offset = -state.currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    
    // Update dots
    if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === state.currentSlide);
        });
    }
}

// ===== Move slide by offset =====
function moveSlide(direction, carouselId) {
    const state = carouselStates[carouselId];
    showSlide(state.currentSlide + direction, carouselId);
}

// ===== Go to specific slide =====
function goToSlide(n, carouselId) {
    showSlide(n, carouselId);
}

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== Navbar scroll effect =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});
