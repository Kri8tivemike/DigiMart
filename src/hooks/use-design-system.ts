import { useTheme } from 'next-themes'

/**
 * DigiMart Design System Hook
 * Provides access to design system utilities and theme information
 */
export function useDesignSystem() {
  const { theme, setTheme, systemTheme } = useTheme()
  
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'
  const isLight = currentTheme === 'light'

  // Design system color tokens
  const colors = {
    primary: {
      DEFAULT: '#10B981',
      foreground: '#FFFFFF',
      hover: '#059669',
    },
    secondary: {
      DEFAULT: '#FDB833',
      foreground: '#1F2937',
      hover: '#F59E0B',
    },
    accent: {
      DEFAULT: '#EF4444',
      foreground: '#FFFFFF',
      hover: '#DC2626',
    },
    background: {
      light: '#FAFAFA',
      dark: '#0F172A',
    },
    card: {
      light: '#FFFFFF',
      dark: '#1E293B',
    },
    border: {
      light: '#E5E7EB',
      dark: '#334155',
    },
    text: {
      heading: {
        light: '#111827',
        dark: '#FFFFFF',
      },
      body: {
        light: '#4B5563',
        dark: '#D1D5DB',
      },
      muted: {
        light: '#9CA3AF',
        dark: '#6B7280',
      },
    },
  }

  // Get current theme colors
  const getColor = (colorPath: string) => {
    const paths = colorPath.split('.')
    let color = colors as any
    
    for (const path of paths) {
      color = color[path]
    }
    
    if (typeof color === 'object' && color.light && color.dark) {
      return isDark ? color.dark : color.light
    }
    
    return color
  }

  // Design system spacing tokens
  const spacing = {
    section: {
      major: 'py-20',
      minor: 'py-16',
      sub: 'py-12',
    },
    container: {
      main: 'container mx-auto px-4',
      section: 'container mx-auto px-4 sm:px-6 lg:px-8',
    },
    gap: {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12',
    },
  }

  // Design system typography tokens
  const typography = {
    heading: {
      xl: 'text-4xl sm:text-5xl lg:text-6xl font-bold',
      lg: 'text-3xl sm:text-4xl lg:text-5xl font-bold',
      md: 'text-2xl sm:text-3xl lg:text-4xl font-bold',
      sm: 'text-xl sm:text-2xl font-bold',
    },
    body: {
      lg: 'text-lg sm:text-xl',
      md: 'text-base sm:text-lg',
      sm: 'text-sm sm:text-base',
    },
    classes: {
      heading: 'text-heading',
      subheading: 'text-subheading',
      body: 'text-body',
      caption: 'text-caption',
      muted: 'text-muted',
    },
  }

  // Design system component classes
  const components = {
    section: {
      primary: 'section-primary',
      secondary: 'section-secondary',
      neutral: 'section-neutral',
    },
    card: {
      standard: 'card-standard',
      interactive: 'card-interactive',
    },
    button: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
    },
    grid: {
      features: 'grid-features',
      products: 'grid-products',
      content: 'grid-content',
      testimonials: 'grid-testimonials',
    },
    navigation: {
      header: 'header-main',
      nav: 'header-nav',
      navActive: 'header-nav-active',
      footer: 'footer-main',
      footerLink: 'footer-link',
    },
    form: {
      input: 'input-standard',
      label: 'label-standard',
    },
    status: {
      success: 'status-success',
      warning: 'status-warning',
      error: 'status-error',
      info: 'status-info',
    },
    badge: {
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      outline: 'badge-outline',
    },
  }

  // Utility functions
  const utils = {
    // Combine classes with design system defaults
    cn: (...classes: (string | undefined | null | false)[]) => {
      return classes.filter(Boolean).join(' ')
    },
    
    // Get responsive text class
    getResponsiveText: (size: 'xl' | 'lg' | 'md' | 'sm', type: 'heading' | 'body' = 'heading') => {
      return typography[type][size]
    },
    
    // Get section spacing class
    getSectionSpacing: (size: 'major' | 'minor' | 'sub' = 'major') => {
      return spacing.section[size]
    },
    
    // Get container class
    getContainer: (type: 'main' | 'section' = 'section') => {
      return spacing.container[type]
    },
    
    // Get grid class
    getGrid: (type: 'features' | 'products' | 'content' | 'testimonials' = 'products') => {
      return components.grid[type]
    },
  }

  return {
    theme: currentTheme,
    isDark,
    isLight,
    setTheme,
    colors,
    spacing,
    typography,
    components,
    utils,
    getColor,
  }
}

// Type definitions for better TypeScript support
export type DesignSystemTheme = 'light' | 'dark' | 'system'
export type DesignSystemColor = keyof typeof useDesignSystem extends () => infer R ? R['colors'] : never
export type DesignSystemSpacing = keyof typeof useDesignSystem extends () => infer R ? R['spacing'] : never
export type DesignSystemTypography = keyof typeof useDesignSystem extends () => infer R ? R['typography'] : never
export type DesignSystemComponents = keyof typeof useDesignSystem extends () => infer R ? R['components'] : never
