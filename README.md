# PricePulse

A price-tracking dashboard UI built with React, Vite and Tailwind CSS. It shows product cards with the current price, the old price and a category. It currently runs on hard-coded sample data. There is no backend, no real price tracking and no working "add product" yet.

## Tech stack
- React 18, Vite 5
- Tailwind CSS 4
- react-router-dom 7, recharts 3 (installed, not used in the UI yet)
- lucide-react icons
- ESLint 8

## Requirements
- Node.js 18 or newer and npm

## Install and run
```bash
git clone https://github.com/KhaledShehataA/pricepulse.git
cd pricepulse
npm install
npm run dev
```
Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Environment variables
None.

## Usage
The dashboard page ("لوحة المراقبة", Arabic UI) has a navbar with search and a user badge, and a grid of product cards (sample iPhone, headphones and watch). The "+ إضافة منتج" and "شراء الآن" buttons are placeholders.

## Screenshots / demo
Not available yet.

## Tests
No tests yet. `npm run lint` checks the code style.

## Roadmap
- Real product data and price history charts (recharts)
- Add-product form and routing
