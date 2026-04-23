# Men's Kit Zone - Premium Football Jersey Shop

A premium e-commerce website for football jerseys built with modern web technologies.

## 🎨 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Oswald, Bebas Neue, Inter)

## 🚀 Features

### Navbar
- Fixed top navigation with scroll effect
- Transparent at top, becomes solid with blur on scroll
- Logo with red badge
- Navigation links
- Shopping cart with item count badge
- Mobile hamburger menu with smooth animations

### Hero Section (Desktop)
- Full viewport height hero with scroll-driven image crossfade animation
- Two-column layout (55% images, 45% content)
- Smooth transition between Image A and Image B (0-300px scroll)
- Image B scale animation during reveal
- Premium headings and copy
- Call-to-action buttons with hover effects
- Statistics row with red dividers
- Animated scroll indicator

### Hero Section (Mobile)
- Full viewport single column layout
- Same scroll animation logic as desktop
- Dark gradient overlay
- Optimized typography for mobile
- Full-width call-to-action button

### Trusted Section
- Dark card background
- Section heading with red underline
- Infinite horizontal scrolling marquee of club names
- Smooth, performant animation

## 🎯 Key Specifications

### Color Palette
- Background: `#0A0A0A` (Dark)
- Primary Red: `#CC0000`
- Light Text: `#F5F5F5` (White)
- Dark Card: `#1A1A1A`
- Red Glow: `rgba(204, 0, 0, 0.3)`

### Typography
- **Oswald**: Headings, labels, buttons
- **Bebas Neue**: Hero text, section titles
- **Inter**: Body text, navigation, buttons

### Scroll Animation Logic
- Uses `window.scrollY` to drive animations
- Progress = `Math.min(scrollY / 300, 1)`
- Image A opacity: `1 - progress`
- Image B opacity: `progress`
- Image B scale: `1.05 - (progress * 0.05)`
- Applied via inline styles (no CSS transitions)

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🔨 Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

## 📸 Images

All hero images are loaded from Cloudinary CDN:

- Desktop No Jersey: `https://res.cloudinary.com/dzucbgb7h/image/upload/q_100,f_auto/hero-desktop-nojersery_m4bnr0.jpg`
- Desktop Jersey: `https://res.cloudinary.com/dzucbgb7h/image/upload/q_100,f_auto/hero-desktop-jersey_af6xce.jpg`
- Mobile No Jersey: `https://res.cloudinary.com/dzucbgb7h/image/upload/q_100,f_auto/hero-mobile-nojersey_avsdju.jpg`
- Mobile Jersey: `https://res.cloudinary.com/dzucbgb7h/image/upload/q_100,f_auto/hero-mobile-jersey_pa1cgj.jpg`

## 🎬 Animation Details

### Scroll-Driven Hero Animation
The hero section uses a scroll event listener to create a smooth crossfade between two images based on scroll position. No CSS transitions are used - the animation is driven entirely by the scroll event.

### Marquee Animation
The club names section uses Framer Motion to create an infinite looping marquee with smooth, linear motion.

## 🌐 Responsive Design

- **Desktop**: Full two-column hero layout with all features
- **Tablet**: Optimized navigation and spacing
- **Mobile**: Single column layout with optimized typography and spacing
- All components are fully responsive with no layout breaks

## ✨ Performance

- Optimized images from Cloudinary CDN
- Smooth 60fps animations
- Efficient scroll event handling
- Tailwind CSS for minimal CSS footprint

---

**Men's Kit Zone** - Premium football jerseys for players who demand the best.
