/**
 * DigiMart Design System Constants
 * Central repository for all design tokens and configuration
 */

// Color palette
export const COLORS = {
  primary: {
    DEFAULT: '#10B981',
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
  },
  secondary: {
    DEFAULT: '#FDB833',
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#FDB833',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  accent: {
    DEFAULT: '#EF4444',
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
  neutral: {
    light: {
      background: '#FAFAFA',
      card: '#FFFFFF',
      border: '#E5E7EB',
      muted: '#F5F5F5',
    },
    dark: {
      background: '#0F172A',
      card: '#1E293B',
      border: '#334155',
      muted: '#334155',
    },
  },
  text: {
    light: {
      heading: '#111827',
      subheading: '#1F2937',
      body: '#4B5563',
      caption: '#6B7280',
      muted: '#9CA3AF',
    },
    dark: {
      heading: '#FFFFFF',
      subheading: '#F3F4F6',
      body: '#D1D5DB',
      caption: '#9CA3AF',
      muted: '#6B7280',
    },
  },
} as const

// Typography scale
export const TYPOGRAPHY = {
  fontFamily: {
    primary: ['Inter', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const

// Spacing scale
export const SPACING = {
  section: {
    major: '5rem',    // 80px - py-20
    minor: '4rem',    // 64px - py-16
    sub: '3rem',      // 48px - py-12
  },
  container: {
    padding: {
      mobile: '1rem',   // 16px - px-4
      tablet: '1.5rem', // 24px - px-6
      desktop: '2rem',  // 32px - px-8
    },
  },
  gap: {
    sm: '1rem',       // 16px - gap-4
    md: '1.5rem',     // 24px - gap-6
    lg: '2rem',       // 32px - gap-8
    xl: '3rem',       // 48px - gap-12
  },
} as const

// Border radius scale
export const BORDER_RADIUS = {
  sm: '0.25rem',      // 4px
  md: '0.375rem',     // 6px
  lg: '0.5rem',       // 8px
  xl: '0.75rem',      // 12px
  '2xl': '1rem',      // 16px
  full: '9999px',     // rounded-full
} as const

// Shadow scale
export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Animation durations
export const ANIMATIONS = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const

// Z-index scale
export const Z_INDEX = {
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
} as const

// Component variants
export const COMPONENT_VARIANTS = {
  button: {
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
    variant: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      outline: 'border-2 border-current bg-transparent hover:bg-current hover:text-background',
      ghost: 'bg-transparent hover:bg-muted',
    },
  },
  card: {
    variant: {
      standard: 'bg-card border border-border rounded-xl shadow-sm',
      interactive: 'bg-card border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
      elevated: 'bg-card border border-border rounded-xl shadow-lg',
    },
  },
  input: {
    size: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg',
    },
    variant: {
      standard: 'border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent',
      filled: 'border-0 bg-muted text-foreground focus:ring-2 focus:ring-primary',
    },
  },
} as const

// Grid configurations
export const GRID_CONFIGS = {
  features: {
    columns: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    gap: 'gap-8',
  },
  products: {
    columns: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    gap: 'gap-8',
  },
  testimonials: {
    columns: 'grid-cols-1 md:grid-cols-3',
    gap: 'gap-8',
  },
  content: {
    columns: 'grid-cols-1 md:grid-cols-2',
    gap: 'gap-12',
    alignment: 'items-center',
  },
} as const

// Status colors
export const STATUS_COLORS = {
  success: {
    bg: 'bg-green-100 dark:bg-green-900',
    text: 'text-green-800 dark:text-green-200',
    border: 'border-green-200 dark:border-green-700',
  },
  warning: {
    bg: 'bg-yellow-100 dark:bg-yellow-900',
    text: 'text-yellow-800 dark:text-yellow-200',
    border: 'border-yellow-200 dark:border-yellow-700',
  },
  error: {
    bg: 'bg-red-100 dark:bg-red-900',
    text: 'text-red-800 dark:text-red-200',
    border: 'border-red-200 dark:border-red-700',
  },
  info: {
    bg: 'bg-blue-100 dark:bg-blue-900',
    text: 'text-blue-800 dark:text-blue-200',
    border: 'border-blue-200 dark:border-blue-700',
  },
} as const

// Icon sizes
export const ICON_SIZES = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10',
} as const

// Export all constants as a single object for convenience
export const DESIGN_SYSTEM = {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  BORDER_RADIUS,
  SHADOWS,
  BREAKPOINTS,
  ANIMATIONS,
  Z_INDEX,
  COMPONENT_VARIANTS,
  GRID_CONFIGS,
  STATUS_COLORS,
  ICON_SIZES,
} as const

// Type definitions
export type ColorPalette = typeof COLORS
export type TypographyScale = typeof TYPOGRAPHY
export type SpacingScale = typeof SPACING
export type ComponentVariants = typeof COMPONENT_VARIANTS
export type GridConfigs = typeof GRID_CONFIGS
