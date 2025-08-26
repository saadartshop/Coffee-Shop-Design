let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

(function () {
	const root = document.documentElement;
	const themeToggleButton = document.getElementById('theme-toggle');
	const navToggleButton = document.querySelector('.nav-toggle');
	const primaryNav = document.getElementById('primary-nav');
	const currentYearEl = document.getElementById('year');

	// Year
	if (currentYearEl) {
		currentYearEl.textContent = String(new Date().getFullYear());
	}

	// Theme
	const STORAGE_KEY = 'preferred-theme';
	function applyTheme(theme) {
		if (theme === 'light') {
			root.classList.add('light');
		} else {
			root.classList.remove('light');
		}
	}
	const storedTheme = localStorage.getItem(STORAGE_KEY);
	if (storedTheme) {
		applyTheme(storedTheme);
	} else {
		const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
		applyTheme(prefersLight ? 'light' : 'dark');
	}
	if (themeToggleButton) {
		themeToggleButton.addEventListener('click', () => {
			const isLight = root.classList.toggle('light');
			localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark');
			themeToggleButton.textContent = isLight ? '☀️' : '🌙';
		});
	}

	// Mobile nav
	if (navToggleButton && primaryNav) {
		navToggleButton.addEventListener('click', () => {
			const isOpen = primaryNav.classList.toggle('open');
			navToggleButton.setAttribute('aria-expanded', String(isOpen));
		});
		primaryNav.querySelectorAll('a').forEach((link) => {
			link.addEventListener('click', () => {
				primaryNav.classList.remove('open');
				navToggleButton.setAttribute('aria-expanded', 'false');
			});
		});
	}

	// Smooth scroll
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e) => {
			const href = anchor.getAttribute('href');
			if (!href || href.length <= 1) return;
			const target = document.querySelector(href);
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});
})();