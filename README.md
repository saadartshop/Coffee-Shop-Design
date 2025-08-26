# Modern Static Website

A fast, responsive, accessible landing page with dark mode and smooth interactions. Built with plain HTML, CSS, and JS.

## Features
- Responsive layout with mobile-first design
- Dark mode toggle with saved preference
- Accessible semantics and keyboard-friendly nav
- Smooth scrolling and sticky header

## Getting Started

Open `index.html` in a browser.

Or serve locally (recommended for smooth scroll and relative assets):

```bash
# Python 3
python3 -m http.server 5173 --directory .
# or Node.js
npx serve . -l 5173 --single
```

Then visit `http://localhost:5173`.

## Customize
- Update text and sections in `index.html`.
- Adjust theme and spacing tokens in `styles.css` under `:root` and `:root.light`.
- Modify interactions in `script.js`.

## Deploy
- Upload the files to any static host (GitHub Pages, Netlify, Vercel).
- Set `index.html` as the entry file.

## License
MIT