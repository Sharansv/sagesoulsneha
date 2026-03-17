# 🌸 SageSoul – Life Coaching Website by Sneha K

A full-stack, multi-page life coaching website built with **React.js** (frontend) and **Node.js + Express** (backend). Features animated sections, hover effects, gradient buttons, contact/booking forms with email notifications, and a corporate-level design aesthetic.

---

## 🗂️ Project Structure

```
sneha-sagesoul/
├── frontend/          ← React.js app
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js / Navbar.css
│   │   │   ├── Footer.js / Footer.css
│   │   │   ├── AnimatedSection.js      ← Scroll animation wrapper
│   │   │   └── StickyBookBtn.js        ← Floating CTA button
│   │   ├── pages/
│   │   │   ├── HomePage.js / HomePage.css
│   │   │   ├── AboutPage.js / AboutPage.css
│   │   │   ├── CoachingPage.js / CoachingPage.css
│   │   │   ├── GroupPage.js
│   │   │   ├── TestimonialsPage.js
│   │   │   ├── BookingPage.js          ← Free Clarity Call form
│   │   │   └── ContactPage.js          ← Contact form
│   │   ├── styles/
│   │   │   └── globals.css             ← Design tokens + utilities
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/           ← Node.js + Express API
│   ├── config/
│   │   └── mailer.js                   ← Nodemailer email config
│   ├── routes/
│   │   ├── contact.js                  ← POST /api/contact
│   │   └── booking.js                  ← POST /api/booking
│   ├── server.js
│   ├── .env.example                    ← Copy to .env and fill in
│   └── package.json
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+
- **npm** v9+
- A **Gmail account** with App Password enabled (for email)

---

### 1. Clone / Extract the Project

```bash
tar -xzvf sneha-sagesoul.tar.gz
cd sneha-sagesoul
```

---

### 2. Setup the Backend

```bash
cd backend
npm install
```

**Create your `.env` file:**
```bash
cp .env.example .env
```

**Edit `.env` with your actual values:**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Gmail SMTP
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=sagesoulsneha@gmail.com
EMAIL_PASS=your_gmail_app_password_here

# Where booking/contact emails go
NOTIFY_EMAIL=sagesoulsneha@gmail.com
EMAIL_FROM_NAME=SageSoul by Sneha K
```

**Start the backend:**
```bash
npm run dev     # Development (with nodemon)
# or
npm start       # Production
```

Backend runs on: `http://localhost:5000`

---

### 3. Setup the Frontend

```bash
cd ../frontend
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

The frontend automatically proxies API requests to `http://localhost:5000` via the `"proxy"` field in `package.json`.

---

## 📧 Email Configuration (Gmail)

To enable contact form and booking emails, you need a **Gmail App Password**:

### Step-by-Step:
1. Go to your Google Account → **Security**
2. Enable **2-Step Verification** (required)
3. Go to **App Passwords** (search in Google Account settings)
4. Select **App:** Mail → **Device:** Other (type "SageSoul")
5. Google generates a **16-character password** (e.g., `abcd efgh ijkl mnop`)
6. Copy that password into your `.env` as `EMAIL_PASS=abcdefghijklmnop` (no spaces)

### What Emails Are Sent?

| Trigger | Who Receives It |
|---|---|
| Contact form submitted | Sneha (notification) + User (auto-reply) |
| Clarity Call booking | Sneha (booking details) + User (confirmation) |

All emails are styled with the SageSoul brand colors in HTML format.

---

## 🌐 Pages

| Route | Page |
|---|---|
| `/` | Home Page – Hero, Why Work With Me, Testimonials, CTA |
| `/about` | About Sneha – Story, Timeline, Mentor, Why She Coaches |
| `/coaching` | 1:1 Coaching – Program details, 8 sessions breakdown |
| `/group` | Group Coaching – WhatsApp Healing Circle |
| `/book` | Free Clarity Call – Booking form |
| `/testimonials` | Transformation Stories |
| `/contact` | Contact Page – Form + social links |

---

## 🎨 Design Features

- **Color Palette:** Deep purple (`#0d0618`) → Violet (`#7c3aed`) → Lavender (`#c084fc`) → Fuchsia (`#e879f9`) → Gold (`#f0c674`)
- **Fonts:** Cormorant Garamond (serif/display) + Jost (body) + Playfair Display
- **Animations:** Scroll-triggered fade-in, gradient button shimmer, floating orbs, particle effects
- **Glassmorphism:** Frosted glass cards with blur + transparency
- **Hover Effects:** Button gradient animation, card lift, color transitions
- **Responsive:** Mobile-first, works on all screen sizes

---

## 🛠️ Production Deployment

### Build Frontend
```bash
cd frontend
npm run build
```

This creates a `build/` folder. You can serve it with:
- **Netlify** (drop `build/` folder)
- **Vercel** (connect GitHub repo)
- **Nginx** (serve static files)

### Deploy Backend
- **Railway**, **Render**, **Heroku**, or any VPS
- Set environment variables in the platform dashboard
- Update `FRONTEND_URL` in `.env` to your production domain

### Update Proxy for Production
In production, update the frontend API calls to use the full backend URL (or use environment variables):

In `frontend/package.json`, change:
```json
"proxy": "http://localhost:5000"
```
To your deployed backend URL, or use `REACT_APP_API_URL` env variable in axios calls.

---

## 🔒 Security Features

- **Helmet.js** – HTTP security headers
- **Rate Limiting** – 10 requests per 15 minutes per IP on API routes
- **Input Validation** – express-validator on all form inputs
- **CORS** – Configured to only allow your frontend domain
- **Body size limit** – 10kb max payload

---

## ❓ No Database Required

This website does **not use a database**. All form submissions are handled via email (Nodemailer). This is intentional to keep the setup simple.

If you want to store submissions in MySQL Workbench in the future, the backend is structured to easily add a MySQL connection in `backend/config/`.

---

## 💜 Support

For any technical issues:
- Email: sagesoulsneha@gmail.com
- WhatsApp: +91 93536 20629

---

*Made with 💜 for every silent warrior*
