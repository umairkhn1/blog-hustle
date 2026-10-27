// mobile nav
var toggle = document.querySelector('.nav-toggle');
var links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    var open = links.classList.contains('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// reading progress
var bar = document.querySelector('.progress');
var article = document.querySelector('article.post');
if (bar && article) {
  window.addEventListener('scroll', function () {
    var start = article.offsetTop;
    var height = article.offsetHeight;
    var scrolled = window.scrollY - start;
    var pct = Math.min(100, Math.max(0, (scrolled / height) * 100));
    bar.style.width = pct + '%';
  }, { passive: true });
}

// blog search + filter
var search = document.getElementById('postSearch');
if (search) {
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-post]'));
  var empty = document.querySelector('.empty');
  var activeCat = 'all';
  function apply() {
    var q = search.value.trim().toLowerCase();
    var shown = 0;
    cards.forEach(function (c) {
      var text = c.textContent.toLowerCase();
      var catOk = activeCat === 'all' || c.dataset.cat === activeCat;
      var qOk = !q || text.indexOf(q) !== -1;
      var vis = catOk && qOk;
      c.style.display = vis ? '' : 'none';
      if (vis) shown++;
    });
    if (empty) empty.style.display = shown === 0 ? 'block' : 'none';
  }
  var param = new URLSearchParams(window.location.search).get('cat');
  if (param) {
    var preset = document.querySelector('.chip[data-filter="' + param + '"]');
    if (preset) {
      document.querySelectorAll('.chip[data-filter]').forEach(function (c) { c.classList.remove('active'); });
      preset.classList.add('active');
      activeCat = param;
    }
  }
  apply();
  search.addEventListener('input', apply);
  document.querySelectorAll('.chip[data-filter]').forEach(function (chip) {
    chip.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.chip[data-filter]').forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      activeCat = chip.dataset.filter;
      apply();
    });
  });
}

// newsletter + contact (front-end only demo handlers)
function wire(formId, msgId, text) {
  var form = document.getElementById(formId);
  var msg = document.getElementById(msgId);
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (msg) msg.textContent = text;
    form.reset();
  });
}
wire('newsletterForm', 'newsletterMsg', 'Thanks. You are on the list.');
wire('contactForm', 'contactMsg', 'Thanks for the note. We reply within two business days.');
