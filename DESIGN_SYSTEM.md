# DigiMart Design System

A comprehensive design system for the DigiMart food contribution platform, establishing consistent theming standards for both Light and Dark modes.

## 🎨 Color Palette

### Primary Colors
```css
--primary: 142 76% 22%;           /* #10B981 - Emerald Green */
--primary-foreground: 0 0% 98%;   /* White text on primary */
--secondary: 45 93% 58%;          /* #FDB833 - Amber Yellow */
--secondary-foreground: 0 0% 9%;  /* Dark text on secondary */
--accent: 0 84.2% 60.2%;          /* #EF4444 - Red */
```

### Light Mode Colors
```css
--background: 0 0% 98%;           /* #FAFAFA - Near white */
--foreground: 0 0% 3.9%;          /* #0A0A0A - Near black */
--card: 0 0% 100%;                /* #FFFFFF - Pure white */
--card-foreground: 0 0% 3.9%;     /* #0A0A0A - Near black */
--border: 0 0% 89.8%;             /* #E5E7EB - Light gray */
--muted: 0 0% 96.1%;              /* #F5F5F5 - Very light gray */
--muted-foreground: 0 0% 45.1%;   /* #737373 - Medium gray */
--neutral: 0 0% 98%;              /* Custom light sections */
```

### Dark Mode Colors
```css
--background: 15 23 42;           /* #0F172A - Deep slate */
--foreground: 0 0% 98%;           /* #FAFAFA - Near white */
--card: 30 41 59;                 /* #1E293B - Slate gray */
--card-foreground: 0 0% 98%;      /* #FAFAFA - Near white */
--border: 51 65 85;               /* #334155 - Medium slate */
--muted: 51 65 85;                /* #334155 - Medium slate */
--muted-foreground: 0 0% 63.9%;   /* #A3A3A3 - Light gray */
--neutral: 15 23 42;              /* Deep slate sections */
```

### Custom Overrides
```css
/* Light gray sections */
.bg-gray-50 {
  background-color: rgb(237 237 237);
}

.dark .bg-gray-50 {
  background-color: hsl(215 25% 17%);
}

/* Transparent backgrounds */
.bg-background {
  background-color: hsl(0deg 0% 98% / 0%);
}

/* Dark theme with RGB format */
.dark .bg-dark {
  background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1));
}

.dark .bg-darkCard {
  background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1));
}
```

## 📝 Typography

### Font Family
- **Primary:** Inter (Google Fonts)
- **Fallback:** sans-serif

### Text Color Hierarchy

#### Light Mode
```css
/* Headings */
.text-heading-light { @apply text-gray-900; }      /* #111827 */
.text-subheading-light { @apply text-gray-800; }   /* #1F2937 */

/* Body Text */
.text-body-light { @apply text-gray-600; }         /* #4B5563 */
.text-caption-light { @apply text-gray-500; }      /* #6B7280 */
.text-muted-light { @apply text-gray-400; }        /* #9CA3AF */
```

#### Dark Mode
```css
/* Headings */
.text-heading-dark { @apply text-white; }          /* #FFFFFF */
.text-subheading-dark { @apply text-gray-100; }    /* #F3F4F6 */

/* Body Text */
.text-body-dark { @apply text-gray-300; }          /* #D1D5DB */
.text-caption-dark { @apply text-gray-400; }       /* #9CA3AF */
.text-muted-dark { @apply text-gray-500; }         /* #6B7280 */
```

### Combined Classes (Recommended)
```css
.text-heading { @apply text-gray-900 dark:text-white; }
.text-subheading { @apply text-gray-800 dark:text-gray-100; }
.text-body { @apply text-gray-600 dark:text-gray-300; }
.text-caption { @apply text-gray-500 dark:text-gray-400; }
.text-muted { @apply text-gray-400 dark:text-gray-500; }
```

## 🧩 Component Patterns

### Section Backgrounds
```css
/* Primary sections (white/dark card) */
.section-primary { @apply bg-white dark:bg-darkCard; }

/* Secondary sections (light gray/dark background) */
.section-secondary { @apply bg-gray-50 dark:bg-dark; }

/* Neutral sections */
.section-neutral { @apply bg-neutral dark:bg-dark; }
```

### Card Components
```css
/* Standard cards */
.card-standard { 
  @apply bg-white dark:bg-darkCard 
         border-gray-200 dark:border-darkBorder 
         rounded-xl shadow-sm; 
}

/* Interactive cards */
.card-interactive { 
  @apply card-standard 
         hover:shadow-lg 
         transition-all duration-300 
         hover:-translate-y-1; 
}
```

### Button Styles
```css
/* Primary buttons */
.btn-primary { 
  @apply bg-primary text-primary-foreground 
         hover:bg-green-700 
         px-6 py-2 rounded-lg 
         font-medium transition-colors; 
}

/* Secondary buttons */
.btn-secondary { 
  @apply bg-secondary text-secondary-foreground 
         hover:bg-yellow-400 
         px-6 py-2 rounded-lg 
         font-medium transition-colors; 
}

/* Outline buttons */
.btn-outline { 
  @apply border-2 border-white text-white 
         hover:bg-white hover:text-primary 
         px-6 py-2 rounded-lg 
         font-medium transition-colors; 
}
```

## 📐 Layout Standards

### Container Patterns
```css
/* Main container */
.container-main { @apply container mx-auto px-4; }

/* Section container */
.container-section { @apply container mx-auto px-4 sm:px-6 lg:px-8; }
```

### Section Spacing
```css
/* Major sections */
.section-spacing-major { @apply py-20; }

/* Minor sections */
.section-spacing-minor { @apply py-16; }

/* Subsections */
.section-spacing-sub { @apply py-12; }
```

### Grid Layouts
```css
/* Feature grids */
.grid-features { @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8; }

/* Product grids */
.grid-products { @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8; }

/* Content grids */
.grid-content { @apply grid grid-cols-1 md:grid-cols-2 gap-12 items-center; }
```

## 🎯 Navigation Patterns

### Header
```css
.header-main { 
  @apply sticky top-0 z-50 w-full 
         bg-white dark:bg-darkCard 
         shadow-sm border-b 
         border-gray-200 dark:border-darkBorder; 
}

.header-nav { 
  @apply text-gray-600 dark:text-gray-300 
         hover:text-primary 
         px-3 py-2 text-sm font-medium; 
}

.header-nav-active { 
  @apply text-gray-900 dark:text-white 
         hover:text-primary 
         px-3 py-2 text-sm font-medium; 
}
```

### Footer
```css
.footer-main { 
  @apply bg-gray-900 dark:bg-dark 
         text-white py-16 
         border-t border-gray-700 dark:border-darkBorder; 
}

.footer-link {
  @apply text-gray-400 hover:text-white transition-colors;
}
```

## 🎨 Theme Implementation

### CSS Custom Properties Setup
```css
/* In src/app/globals.css */
@layer base {
  :root {
    /* Light mode variables */
    --background: 0 0% 98%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --primary: 142 76% 22%;
    --primary-foreground: 0 0% 98%;
    --secondary: 45 93% 58%;
    --secondary-foreground: 0 0% 9%;
    --border: 0 0% 89.8%;
    --neutral: 0 0% 98%;
  }

  .dark {
    /* Dark mode variables */
    --background: 15 23 42;
    --foreground: 0 0% 98%;
    --card: 30 41 59;
    --card-foreground: 0 0% 98%;
    --border: 51 65 85;
    --neutral: 15 23 42;
  }
}
```

### Tailwind Configuration
```typescript
// In tailwind.config.ts
colors: {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))',
  },
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
  },
  border: 'hsl(var(--border))',
  neutral: 'hsl(var(--neutral))',
  dark: '#0F172A',
  darkCard: '#1E293B',
  darkBorder: '#334155',
}
```

## 📋 Implementation Guidelines

### 1. Page Structure Template
```tsx
export default function PageTemplate() {
  return (
    <div className="min-h-screen bg-neutral dark:bg-dark">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-spacing-major bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-section">
            {/* Hero content */}
          </div>
        </section>

        {/* Content Sections */}
        <section className="section-spacing-major section-primary">
          <div className="container-section">
            {/* Primary content */}
          </div>
        </section>

        <section className="section-spacing-major section-secondary">
          <div className="container-section">
            {/* Secondary content */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

### 2. Component Guidelines

#### Cards
```tsx
// Standard card
<Card className="card-standard">
  <CardHeader>
    <CardTitle className="text-heading">Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-body">Content</p>
  </CardContent>
</Card>

// Interactive card
<Card className="card-interactive">
  {/* Card content */}
</Card>
```

#### Buttons
```tsx
// Primary action
<Button className="btn-primary">Primary Action</Button>

// Secondary action
<Button className="btn-secondary">Secondary Action</Button>

// Outline button
<Button className="btn-outline">Learn More</Button>
```

#### Typography
```tsx
// Headings
<h1 className="text-4xl font-bold text-heading mb-4">Main Heading</h1>
<h2 className="text-3xl font-bold text-heading mb-4">Section Heading</h2>
<h3 className="text-xl font-bold text-subheading mb-2">Subsection</h3>

// Body text
<p className="text-xl text-body">Large body text</p>
<p className="text-body">Regular body text</p>
<p className="text-sm text-caption">Caption text</p>
```

### 3. Accessibility Requirements

#### Color Contrast Ratios
- **Light Mode:** All text meets WCAG AA standards (4.5:1 minimum)
- **Dark Mode:** Enhanced contrast with white/light gray text
- **Interactive Elements:** Clear focus states and hover effects

#### Implementation Checklist
- [ ] Use semantic HTML elements
- [ ] Include proper ARIA labels
- [ ] Ensure keyboard navigation
- [ ] Test with screen readers
- [ ] Validate color contrast ratios
- [ ] Provide alternative text for images

### 4. Responsive Design Patterns

#### Breakpoints (Tailwind defaults)
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

#### Grid Patterns
```tsx
// Feature grid (4 columns on large screens)
<div className="grid-features">
  {features.map(feature => (
    <FeatureCard key={feature.id} {...feature} />
  ))}
</div>

// Product grid (3 columns on large screens)
<div className="grid-products">
  {products.map(product => (
    <ProductCard key={product.id} {...product} />
  ))}
</div>
```

## 🔧 Maintenance Guidelines

### 1. Adding New Colors
1. Define in CSS custom properties first
2. Add to Tailwind configuration
3. Create utility classes if needed
4. Test in both light and dark modes
5. Validate accessibility compliance

### 2. Creating New Components
1. Follow established patterns
2. Use design system classes
3. Implement dark mode support
4. Add hover/focus states
5. Test responsive behavior

### 3. Theme Toggle Integration
```tsx
// Ensure all new components support theme switching
import { ThemeProvider } from '@/components/theme-provider'

// Wrap app with theme provider
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <App />
</ThemeProvider>
```

## 📊 Design Tokens Reference

### Spacing Scale
```css
py-4   /* 16px - Small spacing */
py-8   /* 32px - Medium spacing */
py-12  /* 48px - Large spacing */
py-16  /* 64px - Section spacing */
py-20  /* 80px - Major section spacing */
```

### Border Radius
```css
rounded-md  /* 6px - Small radius */
rounded-lg  /* 8px - Medium radius */
rounded-xl  /* 12px - Large radius */
```

### Shadow Scale
```css
shadow-sm   /* Subtle shadow */
shadow      /* Default shadow */
shadow-lg   /* Prominent shadow */
```

This design system ensures consistency across all DigiMart pages while maintaining the food contribution platform's unique branding and user experience.
```
