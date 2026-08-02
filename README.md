# ⚡ Benny Reyes — Personal Portfolio & Landing Page

A modern, high-performance personal portfolio built with **React 18**, **TypeScript**, and **Tailwind CSS**. Designed using a sleek **Bento Grid** layout inspired by native iOS/macOS aesthetics, featuring live components, responsive grid mechanics, and dynamic routing.

![Portfolio Preview](https://via.placeholder.com/1200x630/0D0D0E/ffffff?text=Portfolio+Bento+Grid+Preview)

---

## ✨ Features

- **Bento Grid Architecture:** Clean, modular, and card-based responsive layout.
- **Live Local Clock:** Real-time timezone component configured for Monterrey, MX (`America/Monterrey` / GMT-6).
- **Custom Tech Stack Badges:** Typed, color-coded status badges for technologies and work availability.
- **Single Page Application Routing:** Client-side navigation using `react-router-dom` v7 (`/`, `/contact`, `/privacy`).
- **Responsive & Accessible Design:** Fully optimized for mobile, tablet, and desktop viewports with custom Tailwind CSS utility classes.
- **Type Safety:** Built with strict TypeScript rules and explicit type interfaces/enums for code maintainability.

---

## 🛠️ Tech Stack & Tools

- **Frontend Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
src/
├── assets/          # Static branding, icons, and image assets
├── components/      # Reusable UI components and UI helpers
│   ├── cards/       # Page card components
│   │   ├── AvailabilityCard.tsx
│   │   ├── BentoCard.tsx
│   │   ├── HeroCard.tsx
│   │   ├── LocationCard.tsx
│   │   └── SocialCard.tsx
│   ├── helpers/     # Shared component helpers and icon utilities
│   │   ├── Icons.tsx
│   │   └── SocialOptions.tsx
│   ├── subviews/    # Small reusable status and badge components
│   │   ├── SocialRow.tsx
│   │   ├── StatusBadge.tsx
│   │   ├── TechBadge.tsx
│   │   └── WorkModeBadge.tsx
│   ├── Footer.tsx
│   └── NavBar.tsx
├── pages/           # Application views
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   └── PrivacyPage.tsx
├── App.tsx          # Router configuration & core layout wrapper
└── main.tsx         # Application entry point
```