/* =========================================================
   LUMÉA — Shared interactions (vanilla JS)
   ========================================================= */
(function () {
  'use strict';

  /* ---- Mobile menu toggle ---- */
  function initMenu() {
    var burger = document.querySelector('[data-burger]');
    var menu = document.querySelector('[data-mobile-menu]');
    var close = document.querySelector('[data-menu-close]');
    if (!menu) return;

    function open() { menu.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function shut() { menu.classList.remove('open'); document.body.style.overflow = ''; }

    if (burger) burger.addEventListener('click', open);
    if (close) close.addEventListener('click', shut);
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', shut); });
  }

  /* ---- Accordion (FAQ) ---- */
  function initAccordion() {
    document.querySelectorAll('[data-acc-trigger]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var item = trigger.closest('.acc-item');
        var panel = item.querySelector('.acc-panel');
        var isOpen = item.classList.contains('open');

        // close siblings within same accordion
        var parent = item.closest('.accordion');
        if (parent) {
          parent.querySelectorAll('.acc-item.open').forEach(function (other) {
            if (other !== item) {
              other.classList.remove('open');
              other.querySelector('.acc-panel').style.maxHeight = null;
            }
          });
        }

        if (isOpen) {
          item.classList.remove('open');
          panel.style.maxHeight = null;
        } else {
          item.classList.add('open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  /* ---- Announcement bar (rotating messages) ---- */
  function initAnnounce() {
    var bar = document.querySelector('[data-announce]');
    if (!bar) return;
    var messages = [
      'Code <strong>NOUVEAUSITE</strong> — -20% sur votre première commande',
      'Livraison offerte dès 49€ • Expédition sous 48h',
      'Paiement en 3x sans frais disponible'
    ];
    var i = 0;
    bar.innerHTML = messages[0];
    setInterval(function () {
      i = (i + 1) % messages.length;
      bar.style.opacity = '0';
      setTimeout(function () { bar.innerHTML = messages[i]; bar.style.opacity = '1'; }, 250);
    }, 4500);
    bar.style.transition = 'opacity .25s ease';
  }

  /* ---- Product gallery thumbs ---- */
  function initGallery() {
    var main = document.querySelector('[data-gallery-main]');
    if (!main) return;
    document.querySelectorAll('[data-thumb]').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var src = thumb.getAttribute('data-src');
        var img = main.querySelector('img');
        if (img && src) img.src = src;
        document.querySelectorAll('[data-thumb]').forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
      });
    });
  }

  /* ---- Variant selector ---- */
  function initVariants() {
    document.querySelectorAll('[data-variant-group]').forEach(function (group) {
      group.querySelectorAll('.variant').forEach(function (v) {
        v.addEventListener('click', function () {
          group.querySelectorAll('.variant').forEach(function (x) { x.classList.remove('active'); });
          v.classList.add('active');
        });
      });
    });
  }

  /* ---- Quantity stepper ---- */
  function initQty() {
    document.querySelectorAll('[data-qty]').forEach(function (qty) {
      var span = qty.querySelector('span');
      var val = 1;
      qty.querySelectorAll('button').forEach(function (b) {
        b.addEventListener('click', function () {
          if (b.dataset.dir === 'down') { val = Math.max(1, val - 1); }
          else { val += 1; }
          span.textContent = val;
        });
      });
    });
  }

  /* ---- Add to cart (visual only) ---- */
  function initCart() {
    var count = document.querySelector('[data-cart-count]');
    document.querySelectorAll('[data-add-cart]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (count) {
          var n = parseInt(count.textContent || '0', 10) + 1;
          count.textContent = n;
        }
        var label = btn.textContent;
        btn.textContent = 'Ajouté ✓';
        setTimeout(function () { btn.textContent = label; }, 1300);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initAccordion();
    initAnnounce();
    initGallery();
    initVariants();
    initQty();
    initCart();
  });
})();
