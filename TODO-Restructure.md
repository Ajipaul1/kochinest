# KochiNest Restructure Plan - Progress Tracker

## New Task
Restructure flat project into modular folders per user spec:
```
kochinest/
├── index.html
├── css/
│   ├── style.css (globals)
│   └── components.css (header/cards)
├── js/
│   └── main.js (Appwrite/search logic)
├── assets/
│   ├── logo.png
│   └── houses/ (demo photos)
└── components/ (HTML snippets)
```

## TODO Steps
### 1. [PENDING] Create folders & split CSS
   - css/style.css: CSS vars, resets, typography, utils
   - css/components.css: sections, cards, modals
   - Update index.html to link both CSS

### 2. [PENDING] Refactor JS to main.js
   - Rename/move script.js -> js/main.js
   - Add demo Appwrite/search logic if needed

### 3. [PENDING] Add demo assets
   - assets/logo.png (base64 placeholder)
   - assets/houses/1.jpg,2.jpg,3.jpg (Unsplash)

### 4. [PENDING] Create components/
   - header.html, listing-card.html snippets

### 5. [PENDING] Clean/fix index.html
   - Remove 'Asc' artifacts
   - Use local assets
   - Update links/imports

### 6. [PENDING] Test & complete
