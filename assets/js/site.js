(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  function close() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 920) close();
  });
})();

(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var note = document.getElementById('form-note');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var company = form.company.value.trim();
    var message = form.message.value.trim();
    var subject = 'Website enquiry from ' + name;
    var body = 'Name: ' + name + '\nEmail: ' + email + (company ? '\nCompany: ' + company : '') + '\n\n' + message;
    window.location.href = 'mailto:daniel@enkinddle.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    if (note) note.textContent = 'Your email app should open now. If it does not, write to daniel@enkinddle.com directly.';
  });
})();
