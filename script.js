document.addEventListener('DOMContentLoaded', function () {
	var navToggle = document.getElementById('nav-toggle');
	var primaryNav = document.getElementById('primary-nav');
	var yearEl = document.getElementById('year');

	// Update year automatically
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}

	if (navToggle && primaryNav) {
		navToggle.addEventListener('click', function () {
			var isOpen = primaryNav.classList.toggle('open');
			navToggle.setAttribute('aria-expanded', String(isOpen));
		});

		// Close nav when a link is clicked (mobile)
		primaryNav.addEventListener('click', function (e) {
			if (e.target.tagName === 'A') {
				primaryNav.classList.remove('open');
				navToggle.setAttribute('aria-expanded', 'false');
			}
		});

		// Close on escape
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') {
				primaryNav.classList.remove('open');
				navToggle.setAttribute('aria-expanded', 'false');
			}
		});
	}

	// Add smooth scrolling for browsers that don't support CSS smooth behavior
	// (modern browsers do support scroll-behavior: smooth in CSS)
	document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
		anchor.addEventListener('click', function (e) {
			var href = anchor.getAttribute('href');
			if (href.length > 1) {
				var dest = document.querySelector(href);
				if (dest) {
					e.preventDefault();
					dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		});
	});
});



