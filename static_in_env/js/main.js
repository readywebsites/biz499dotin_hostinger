/**
* Template Name: Presento
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
 * Mobile nav toggle
 */
  on('click', '.mobile-nav-toggle', function(e) {
    const navbar = select('#navbar');
    const mobileNavToggle = this;
  
    if (!navbar.classList.contains('navbar-mobile')) {
      navbar.classList.add('navbar-mobile');
      mobileNavToggle.classList.add('bi-x');
      mobileNavToggle.classList.remove('bi-menu-button-wide');
      navbar.style.maxHeight = '295px'; // Change max-height to 265px
  
      // Close all open dropdowns when opening the mobile menu
      const openDropdowns = document.querySelectorAll('.navbar .dropdown .dropdown-active');
      openDropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('dropdown-active');
      });
    } else {
      navbar.style.maxHeight = '60px'; // Change max-height to 60px
  
      // Delay the removal of the class until after the transition
      setTimeout(() => {
        navbar.classList.remove('navbar-mobile');
        mobileNavToggle.classList.remove('bi-x');
        mobileNavToggle.classList.add('bi-menu-button-wide');
      }, 300); // Adjust the duration to match your CSS transition duration
    }
  });
  
/**
 * Mobile nav dropdowns activate
 */
on('click', '.navbar .dropdown > a', function(e) {
  const navbar = select('#navbar');

  if (navbar.classList.contains('navbar-mobile')) {
    e.preventDefault();
    this.nextElementSibling.classList.toggle('dropdown-active');

    if (this.nextElementSibling.classList.contains('dropdown-active')) {
      navbar.style.maxHeight = '500px'; // Change max-height to 500px
    } else {
      navbar.style.maxHeight = '295px'; // Change max-height to 265px
    }
  }
}, true);

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-menu-button-wide')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
  /**
   * Clients Slider
   */

  /**
   * Porfolio isotope and filter
   */
  

  /**
   * Initiate portfolio lightbox 
   */
  /**
  
  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  

})()









