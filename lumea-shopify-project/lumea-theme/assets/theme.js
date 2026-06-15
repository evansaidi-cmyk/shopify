/* ==========================================================================
   LUMÉA — theme.js  (vanilla JS, no dependencies)
   ========================================================================== */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); }
    else { document.addEventListener('DOMContentLoaded', fn); }
  }

  /* ---------- Mobile menu toggle ---------- */
  function initMobileMenu() {
    var burger = document.querySelector('[data-burger]');
    var menu = document.querySelector('[data-mobile-menu]');
    if (!burger || !menu) return;
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- FAQ accordion ---------- */
  function initAccordions() {
    var buttons = document.querySelectorAll('[data-faq-toggle]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        var panel = btn.nextElementSibling;
        btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        if (panel) {
          if (expanded) { panel.classList.remove('is-open'); }
          else { panel.classList.add('is-open'); }
        }
      });
    });
  }

  /* ---------- Announcement bar (rotate messages if multiple) ---------- */
  function initAnnouncement() {
    var bar = document.querySelector('[data-announcement]');
    if (!bar) return;
    var items = bar.querySelectorAll('[data-announcement-item]');
    if (items.length < 2) return;
    var idx = 0;
    items.forEach(function (el, i) { el.style.display = i === 0 ? 'block' : 'none'; });
    setInterval(function () {
      items[idx].style.display = 'none';
      idx = (idx + 1) % items.length;
      items[idx].style.display = 'block';
    }, 4000);
  }

  /* ---------- Carousel arrow niceties ---------- */
  function initCarousels() {
    document.querySelectorAll('[data-carousel-next]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sel = btn.getAttribute('data-carousel-next');
        var track = document.querySelector(sel);
        if (track) track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' });
      });
    });
    document.querySelectorAll('[data-carousel-prev]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sel = btn.getAttribute('data-carousel-prev');
        var track = document.querySelector(sel);
        if (track) track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' });
      });
    });
  }

  /* ---------- Quantity selector ---------- */
  function initQuantity() {
    document.querySelectorAll('[data-qty]').forEach(function (wrap) {
      var input = wrap.querySelector('input');
      if (!input) return;
      var minus = wrap.querySelector('[data-qty-minus]');
      var plus = wrap.querySelector('[data-qty-plus]');
      if (minus) minus.addEventListener('click', function () {
        var v = parseInt(input.value, 10) || 1;
        input.value = Math.max(1, v - 1);
      });
      if (plus) plus.addEventListener('click', function () {
        var v = parseInt(input.value, 10) || 1;
        input.value = v + 1;
      });
    });
  }

  /* ---------- Basic variant selector ---------- */
  function initVariantSelector() {
    document.querySelectorAll('[data-product-form]').forEach(function (form) {
      var select = form.querySelector('[data-variant-select]');
      var idInput = form.querySelector('[data-variant-id]');
      var priceEl = form.querySelector('[data-variant-price]');
      if (!select || !idInput) return;
      function update() {
        var opt = select.options[select.selectedIndex];
        idInput.value = opt.value;
        if (priceEl && opt.getAttribute('data-price')) {
          priceEl.textContent = opt.getAttribute('data-price');
        }
        var available = opt.getAttribute('data-available') === 'true';
        var submit = form.querySelector('[type="submit"]');
        if (submit) {
          submit.disabled = !available;
          submit.textContent = available ? (submit.getAttribute('data-default-text') || 'Ajouter au panier') : 'Épuisé';
        }
      }
      select.addEventListener('change', update);
    });
  }

  /* ---------- Product gallery thumbnails ---------- */
  function initGallery() {
    document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
      var main = gallery.querySelector('[data-gallery-main]');
      gallery.querySelectorAll('[data-gallery-thumb]').forEach(function (thumb) {
        thumb.addEventListener('click', function () {
          if (main) main.src = thumb.getAttribute('data-full') || thumb.src;
        });
      });
    });
  }

  ready(function () {
    initMobileMenu();
    initAccordions();
    initAnnouncement();
    initCarousels();
    initQuantity();
    initVariantSelector();
    initGallery();
  });
})();
