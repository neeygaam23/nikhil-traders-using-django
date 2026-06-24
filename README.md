# Nikhil Traders — Electronics Shop in Itahari, Nepal

A full-stack e-commerce storefront for Nikhil Traders, an electrical and electronics shop based in Itahari, Nepal. Built with Django REST Framework on the backend and React on the frontend.

## Tech Stack

- **Backend:** Django 6, Django REST Framework, SQLite
- **Frontend:** React 19, Vite, Tailwind CSS 4, React Router 7

## Features

- Browse electrical products by category
- Search products by name
- View featured products on the homepage
- Direct WhatsApp inquiry on each product
- Category-based filtering
- Lucky Spin prize wheel game
- Responsive design

## Project Structure

```
nikhil-traders/
├── backend/                # Django REST API
│   ├── nikhil_traders/     # Django project settings
│   └── shop/               # Products & categories app
└── frontend/               # React SPA
    └── src/
        ├── components/     # Reusable UI components
        └── pages/          # Route pages (Home, Products, About)
```

## Getting Started

### Backend

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py seed
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The Vite dev server proxies `/api` and `/media` requests to the Django backend running on port 8000.

## API Endpoints

- `GET /api/categories/` — List all product categories
- `GET /api/products/` — List products (supports `?category=`, `?search=`, `?featured=true`)
- `GET /api/products/<id>/` — Single product detail

## Author

**Nigam Niroula**
