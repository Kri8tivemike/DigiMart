import { ReactNode } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface PageTemplateProps {
  children: ReactNode
  className?: string
}

/**
 * Standard page template following DigiMart design system
 * Provides consistent layout structure for all pages
 */
export function PageTemplate({ children, className = '' }: PageTemplateProps) {
  return (
    <div className={`min-h-screen bg-neutral dark:bg-dark ${className}`}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

/**
 * Hero section template with gradient background
 */
interface HeroSectionProps {
  title: string
  subtitle?: string
  children?: ReactNode
  className?: string
}

export function HeroSection({ title, subtitle, children, className = '' }: HeroSectionProps) {
  return (
    <section className={`section-spacing-major bg-gradient-to-r from-primary to-secondary text-white ${className}`}>
      <div className="container-section text-center">
        <h1 className="text-responsive-xl font-bold mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-responsive-md mb-8 opacity-90">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

/**
 * Content section template
 */
interface ContentSectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'neutral'
  spacing?: 'major' | 'minor' | 'sub'
  className?: string
}

export function ContentSection({ 
  title, 
  subtitle, 
  children, 
  variant = 'primary',
  spacing = 'major',
  className = '' 
}: ContentSectionProps) {
  const sectionClass = variant === 'primary' ? 'section-primary' : 
                      variant === 'secondary' ? 'section-secondary' : 
                      'section-neutral'
  
  const spacingClass = spacing === 'major' ? 'section-spacing-major' :
                      spacing === 'minor' ? 'section-spacing-minor' :
                      'section-spacing-sub'

  return (
    <section className={`${spacingClass} ${sectionClass} ${className}`}>
      <div className="container-section">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl font-bold text-heading mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-body">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

/**
 * Feature grid template
 */
interface FeatureGridProps {
  features: Array<{
    id: string
    icon: ReactNode
    title: string
    description: string
  }>
  className?: string
}

export function FeatureGrid({ features, className = '' }: FeatureGridProps) {
  return (
    <div className={`grid-features ${className}`}>
      {features.map((feature) => (
        <div key={feature.id} className="text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-heading mb-2">
            {feature.title}
          </h3>
          <p className="text-body">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}

/**
 * Card grid template
 */
interface CardGridProps {
  children: ReactNode
  variant?: 'products' | 'features' | 'testimonials' | 'content'
  className?: string
}

export function CardGrid({ children, variant = 'products', className = '' }: CardGridProps) {
  const gridClass = variant === 'products' ? 'grid-products' :
                   variant === 'features' ? 'grid-features' :
                   variant === 'testimonials' ? 'grid-testimonials' :
                   'grid-content'

  return (
    <div className={`${gridClass} ${className}`}>
      {children}
    </div>
  )
}

/**
 * CTA section template
 */
interface CTASectionProps {
  title: string
  subtitle?: string
  primaryAction?: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export function CTASection({ 
  title, 
  subtitle, 
  primaryAction, 
  secondaryAction, 
  className = '' 
}: CTASectionProps) {
  return (
    <section className={`section-spacing-major bg-gradient-to-r from-primary to-secondary text-white ${className}`}>
      <div className="container-section text-center">
        <h2 className="text-responsive-lg font-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-responsive-md mb-8 opacity-90">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryAction && (
            <button 
              onClick={primaryAction.onClick}
              className="btn-outline"
            >
              {primaryAction.label}
            </button>
          )}
          {secondaryAction && (
            <button 
              onClick={secondaryAction.onClick}
              className="btn-ghost text-white hover:text-primary hover:bg-white"
            >
              {secondaryAction.label}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
