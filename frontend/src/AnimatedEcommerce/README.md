# Animated E-Commerce Website with GSAP

A modern, fully animated e-commerce website built with React, GSAP, and Tailwind CSS. Features smooth scrolling, staggered animations, parallax effects, and smooth product/customer rendering.

## 📁 Project Structure

```
src/AnimatedEcommerce/
├── components/
│   ├── HeroSection.jsx          # Hero banner with floating animations
│   ├── Navigation.jsx           # Sticky navigation with cart counter
│   ├── ProductCard.jsx          # Individual product card with hover effects
│   ├── ProductGrid.jsx          # Grid layout for products with stagger animation
│   ├── ProductsSection.jsx      # Products section with category filter
│   ├── CustomerSection.jsx      # Animated customer showcase
│   ├── FeaturesSection.jsx      # Features/benefits showcase
│   └── Footer.jsx               # Footer with smooth scroll animation
├── hooks/
│   └── useGSAP.js              # Custom GSAP hooks for animations
├── data/
│   └── products.js              # Sample products and customers data
├── AnimatedEcommerce.jsx        # Main component
└── index.js                     # Barrel export file
```

## 🎨 Key Features

### GSAP Animations

- **Smooth Scrolling**: Custom scroll behavior with smooth page navigation
- **Scroll Triggers**: Elements animate as they enter the viewport
- **Stagger Animations**: Sequential product card animations
- **Parallax Effects**: Depth-based scrolling animations
- **Hover Effects**: Scale and transform animations on interaction

### Custom Hooks

- `useSmoothScroll()` - Enable smooth scrolling
- `useScrollAnimation()` - Fade in and slide up on scroll
- `useParallaxScroll()` - Parallax effect based on scroll position
- `useStaggerAnimation()` - Staggered animations for multiple elements
- `useHoverAnimation()` - Scale effect on hover

### Components

#### HeroSection

- Large hero banner with animated floating background shapes
- Animated headline, subtitle, and CTA buttons
- Gradient background with glassmorphism effects

#### ProductCard

- Product image, rating, and price display
- Discount badge
- Hover scale animation
- Add to cart functionality

#### ProductsSection

- Category filter buttons
- Responsive grid layout (1-4 columns)
- Staggered product card animations

#### CustomerSection

- Pulls customer data with smooth animations
- Displays customer status badges (VIP, Premium, Regular)
- Shows total spent and order count

#### FeaturesSection

- Highlights key benefits (Fast Delivery, Authentic, etc.)
- Staggered feature card animations

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🎯 Usage Examples

### Using the Animated Ecommerce Component

In any React component:

```jsx
import { AnimatedEcommerce } from "./AnimatedEcommerce";

export default function App() {
  return <AnimatedEcommerce />;
}
```

### Using Custom Hooks

```jsx
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "./AnimatedEcommerce/hooks/useGSAP";

const MyComponent = () => {
  const ref = useRef(null);
  useScrollAnimation(ref);

  return <div ref={ref}>Animates on scroll!</div>;
};
```

## 📦 Dependencies

- **React** ^19.0.0 - UI Framework
- **GSAP** ^3.15.0 - Animation library
- **@gsap/react** ^2.1.2 - React GSAP plugin
- **Tailwind CSS** ^4.3.0 - Styling
- **Vite** ^8.0.14 - Build tool

## 🎬 Animation Details

### Hero Section

- Fade-in animation with staggered timing
- Floating background shapes with continuous animation
- Button animations appear after headline

### Product Cards

- Slide up from bottom on scroll trigger
- Hover scale effect (1.05x)
- Staggered appearance (0.1s between each)

### Customer Cards

- Fade in with slide up animation
- Staggered timing for sequential appearance
- Status badge highlighting

### Smooth Scroll

- CSS smooth scrolling enabled globally
- GSAP ScrollTrigger for viewport animations
- Scrub animations for parallax effects

## 🔧 Customization

### Modify Animation Speed

Edit duration in hook options:

```jsx
useScrollAnimation(ref, { duration: 1.2 });
```

### Add New Products

Edit `src/AnimatedEcommerce/data/products.js`:

```js
export const PRODUCTS = [
  { id: 9, name: "New Product", price: 99.99, ... }
];
```

### Change Color Scheme

Modify Tailwind classes in components or update `tailwind.config.js`

## 📱 Responsive Design

- Mobile: 1 column grid
- Tablet: 2 column grid
- Desktop: 4 column grid
- Responsive padding and font sizes

## 🐛 Troubleshooting

### Animations not triggering

- Ensure ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`
- Check that elements are visible in the viewport
- Verify refs are properly attached to DOM elements

### Performance issues

- Reduce number of animated elements
- Lower animation duration
- Use `scrub: 0.5` instead of `scrub: 1`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

---

**Happy Animating! 🎉**
