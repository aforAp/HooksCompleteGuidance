# 🎨 Tailwind CSS Styles Guide

## 📋 Overview

The AnimatedEcommerce website uses **Tailwind CSS** for all styling. This provides utility-first CSS classes for rapid development with consistent design.

## 📁 CSS Files

### 1. **index.css** - Main Stylesheet

Located at: `frontend/src/index.css`

Contains:

- Tailwind CSS directives (`@tailwind base`, `@components`, `@utilities`)
- Custom animations
- Component classes
- Utility extensions

### 2. **tailwind.config.js** - Configuration

Located at: `frontend/tailwind.config.js`

Defines:

- Custom colors
- Extended spacing
- Custom animations
- Font families
- Border radius values

### 3. **postcss.config.js** - PostCSS Setup

Located at: `frontend/postcss.config.js`

Configures:

- Tailwind CSS plugin
- Autoprefixer for browser compatibility

---

## 🎯 Key Tailwind Classes Used

### Colors

```
bg-blue-600      - Blue background
text-white       - White text
bg-gradient-to-r - Gradient background
from-blue-600    - Gradient start color
to-purple-600    - Gradient end color
```

### Spacing & Layout

```
px-6             - Horizontal padding (1.5rem)
py-20            - Vertical padding (5rem)
gap-6            - Gap between items
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 - Responsive grid
```

### Typography

```
text-4xl         - Font size 2.25rem
font-bold        - Bold font weight
font-semibold    - Semibold font weight
leading-tight    - Tight line height
```

### Effects

```
rounded-lg       - Border radius large
rounded-xl       - Border radius extra large
shadow-lg        - Large shadow
shadow-2xl       - Extra large shadow
hover:shadow-2xl - Shadow on hover
```

### Responsive Design

```
md:             - Applies on medium screens (768px+)
lg:             - Applies on large screens (1024px+)
hidden md:flex  - Hidden on mobile, flex on desktop
```

---

## 🎨 Custom Component Classes

### Buttons

```jsx
// Primary button
<button className="btn-primary">
  Click Me
</button>

// Secondary button
<button className="btn-secondary">
  Secondary
</button>

// Small button
<button className="btn-small">
  Small
</button>
```

### Cards

```jsx
// Basic card
<div className="card">
  Content
</div>

// Elevated card
<div className="card-elevated">
  Content with padding
</div>
```

### Grids

```jsx
// Responsive grid (1-4 columns)
<div className="grid-responsive">
  {products.map(p => <div key={p.id}>{p.name}</div>)}
</div>

// 3-column responsive grid
<div className="grid-responsive-3">
  {customers.map(c => <div key={c.id}>{c.name}</div>)}
</div>
```

---

## ✨ Custom Animations

### Available Animations

```css
.animate-float        /* Floating effect */
.animate-float-delay  /* Floating with delay */
.animate-slide-up     /* Slide up animation */
.animate-fade-in      /* Fade in animation */
```

### Usage Example

```jsx
<div className="animate-float">Floating Element</div>
```

---

## 🎭 Common Patterns

### Hero Section Styling

```jsx
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600">
  <h1 className="text-5xl md:text-7xl font-bold text-white">Welcome</h1>
</div>
```

### Product Card

```jsx
<div className="card bg-white rounded-lg shadow-lg hover:shadow-2xl">
  <img className="w-full h-48 object-cover" src={image} alt={name} />
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    <p className="text-2xl font-bold text-blue-600">${price}</p>
  </div>
</div>
```

### Section Layout

```jsx
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">Title</h2>
    <div className="grid-responsive">{/* Content */}</div>
  </div>
</section>
```

### Responsive Navigation

```jsx
<nav className="flex items-center justify-between">
  <div className="hidden md:flex gap-8">{/* Desktop menu */}</div>
  <button className="md:hidden">{/* Mobile menu button */}</button>
</nav>
```

---

## 🎯 Responsive Breakpoints

| Prefix | Width    | Usage       |
| ------ | -------- | ----------- |
| (none) | < 640px  | Mobile      |
| sm:    | ≥ 640px  | Small       |
| md:    | ≥ 768px  | Tablet      |
| lg:    | ≥ 1024px | Desktop     |
| xl:    | ≥ 1280px | Large       |
| 2xl:   | ≥ 1536px | Extra Large |

### Example

```jsx
<div
  className="
  grid-cols-1       /* 1 column mobile */
  md:grid-cols-2    /* 2 columns tablet */
  lg:grid-cols-4    /* 4 columns desktop */
"
>
  Content
</div>
```

---

## 🌈 Color Palette

### Primary Colors

```
blue-50   to blue-900
purple-50 to purple-900
```

### Neutral Colors

```
gray-50   (lightest)
gray-900  (darkest)
```

### Status Colors

```
green-600  (success)
red-500    (danger)
yellow-500 (warning)
```

---

## 🔧 Customization

### Adding Custom Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  custom: "#FF5733";
}
```

Usage:

```jsx
<div className="bg-custom">Custom Color</div>
```

### Adding Custom Fonts

Edit `tailwind.config.js`:

```javascript
fontFamily: {
  custom: ["CustomFont", "serif"];
}
```

---

## 📱 Mobile-First Approach

All styles are mobile-first. Desktop styles are added with breakpoints:

```jsx
/* This is the default (mobile) */
<div className="text-sm p-2">
  {/* Small text, small padding on mobile */}
</div>

/* This becomes larger on tablet */
<div className="text-sm md:text-base p-2 md:p-4">
  {/* Grows on md screens */}
</div>

/* This becomes even larger on desktop */
<div className="text-sm md:text-base lg:text-lg p-2 md:p-4 lg:p-6">
  {/* Grows on lg screens */}
</div>
```

---

## 🎨 Example Component Styling

### ProductCard Component

```jsx
<div className="product-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
  {/* Image */}
  <div className="relative overflow-hidden bg-gray-100 h-48">
    <img src={image} alt={name} className="w-full h-full object-cover" />
  </div>

  {/* Content */}
  <div className="p-4">
    <p className="text-xs text-gray-500 uppercase tracking-wider">{category}</p>
    <h3 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-2">
      {name}
    </h3>

    {/* Rating */}
    <div className="flex items-center mt-3">
      <div className="flex text-yellow-400">{"★".repeat(rating)}</div>
      <span className="text-xs text-gray-600 ml-2">({reviews})</span>
    </div>

    {/* Price & Button */}
    <div className="flex items-center justify-between mt-4">
      <p className="text-lg font-bold text-gray-900">${price}</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
        Add
      </button>
    </div>
  </div>
</div>
```

---

## 🚀 Performance Tips

1. **Use Utility Classes** - Don't write custom CSS
2. **Responsive Classes** - Use md:, lg: prefixes
3. **Hover States** - Use hover:, focus: prefixes
4. **Transitions** - Use transition-all, transition-colors
5. **Purge CSS** - Tailwind automatically removes unused styles

---

## 📚 Useful Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

**Happy Styling! 🎨**
