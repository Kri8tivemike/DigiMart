'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ThemeToggle } from '@/components/theme-toggle'

// Temporary emoji placeholders for icons
const ArrowLeft = () => <span>←</span>
const Bookmark = () => <span>🔖</span>
const MapPin = () => <span>📍</span>
const Clock = () => <span>⏰</span>
const Truck = () => <span>🚚</span>
const Phone = () => <span>📞</span>
const Shield = () => <span>🛡️</span>
const Minus = () => <span>−</span>
const Plus = () => <span>+</span>
const Share = () => <span>📤</span>

// Mock package data
const packageData = {
  id: 1,
  title: 'Full Cow Package',
  type: 'Beef',
  price: 45000,
  totalPrice: 450000,
  slotsTotal: 10,
  slotsFilled: 7,
  coordinator: 'John D.',
  isVerified: true,
  timeLeft: '2d 14h 32m',
  description: 'Premium quality full cow sourced from trusted farms in Ogun State. This package is perfect for families, groups, or small businesses looking to buy quality beef at wholesale prices.',
  image: '/api/placeholder/800/400',
  sharing: [
    '1 Slot = 25kg of mixed cuts',
    'Includes: Steaks, roasts, ground beef, bones',
    'Professionally butchered and packaged',
    'Vacuum sealed for freshness'
  ],
  logistics: 'Home delivery or pickup available within Lagos State',
  terms: 'Full refund if package doesn\'t complete within 7 days',
  contributors: [
    { id: 1, avatar: '/api/placeholder/40/40', name: 'User 1' },
    { id: 2, avatar: '/api/placeholder/40/40', name: 'User 2' },
    { id: 3, avatar: '/api/placeholder/40/40', name: 'User 3' },
  ],
  deliveryAreas: ['Lagos Island', 'Victoria Island', 'Ikeja & Environs', 'Lekki Peninsula'],
  deliveryInfo: [
    'Expected: 2-3 days after completion',
    'Free delivery for orders above ₦20,000',
    'SMS/WhatsApp updates provided'
  ]
}

export default function PackageDetailsPage() {
  const [selectedSlots, setSelectedSlots] = useState(1)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const progressPercentage = (packageData.slotsFilled / packageData.slotsTotal) * 100
  const slotsRemaining = packageData.slotsTotal - packageData.slotsFilled
  const totalCost = selectedSlots * packageData.price

  const incrementSlots = () => {
    if (selectedSlots < 3 && selectedSlots < slotsRemaining) {
      setSelectedSlots(selectedSlots + 1)
    }
  }

  const decrementSlots = () => {
    if (selectedSlots > 1) {
      setSelectedSlots(selectedSlots - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/packages" className="text-muted-foreground hover:text-primary mr-4 flex items-center">
                <ArrowLeft />
                <span className="ml-2">Browse Packages</span>
              </Link>
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">DigiMart</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Login
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Register
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Package Header */}
      <section className="bg-card py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{packageData.title}</h1>
              <div className="flex items-center mt-2">
                <Badge className="bg-red-500 text-white mr-3">{packageData.type}</Badge>
                <span className="text-muted-foreground">Coordinated by {packageData.coordinator}</span>
                {packageData.isVerified && (
                  <Badge className="bg-green-100 text-green-800 ml-2">KYC Verified</Badge>
                )}
              </div>
            </div>
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="text-muted-foreground hover:text-accent"
            >
              <Bookmark />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Package Visual */}
            <Card className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-80 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Package Image</span>
                </div>
              </div>
            </Card>

            {/* Package Description */}
            <Card className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Package Description</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">{packageData.description}</p>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Sharing Formula</h3>
                  <ul className="text-muted-foreground space-y-1">
                    {packageData.sharing.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Logistics</h4>
                    <p className="text-muted-foreground text-sm">{packageData.logistics}</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Terms</h4>
                    <p className="text-muted-foreground text-sm">{packageData.terms}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contributors Preview */}
            <Card className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Recent Contributors</h2>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {packageData.contributors.map((contributor) => (
                    <div key={contributor.id} className="w-10 h-10 rounded-full bg-muted border-2 border-card"></div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium border-2 border-card">
                    +{packageData.slotsFilled - packageData.contributors.length}
                  </div>
                </div>
                <p className="text-muted-foreground">{packageData.slotsFilled} people have joined this contribution</p>
              </div>
            </Card>

            {/* Delivery Information */}
            <Card className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Delivery Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Coverage Areas</h3>
                  <div className="space-y-2">
                    {packageData.deliveryAreas.map((area, index) => (
                      <div key={index} className="flex items-center text-muted-foreground">
                        <MapPin />
                        <span className="ml-2">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Delivery Schedule</h3>
                  <div className="space-y-2">
                    {packageData.deliveryInfo.map((info, index) => (
                      <div key={index} className="flex items-center text-muted-foreground">
                        {index === 0 && <Clock />}
                        {index === 1 && <Truck />}
                        {index === 2 && <Phone />}
                        <span className="ml-2">{info}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

          </div>

          {/* Right Column - Contribution Overview */}
          <div className="space-y-6">
            
            {/* Contribution Overview */}
            <Card className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary mb-2">₦{packageData.price.toLocaleString()}</div>
                <div className="text-muted-foreground">per slot</div>
                <div className="text-sm text-muted-foreground mt-1">Total Package: ₦{packageData.totalPrice.toLocaleString()}</div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Slots Filled</span>
                  <span>{packageData.slotsFilled}/{packageData.slotsTotal}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 mb-2">
                  <div className="bg-primary h-3 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-accent font-medium">{slotsRemaining} slots remaining</span>
                  <span className="text-muted-foreground">{Math.round(progressPercentage)}% complete</span>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-muted p-4 rounded-lg mb-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Package closes in:</div>
                <div className="text-2xl font-bold text-accent font-mono">{packageData.timeLeft}</div>
              </div>

              {/* Slot Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Number of Slots</label>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={decrementSlots}
                    className="w-10 h-10 border border-input rounded-lg flex items-center justify-center hover:bg-accent"
                  >
                    <Minus />
                  </button>
                  <div className="flex-1 text-center">
                    <input 
                      type="number" 
                      value={selectedSlots} 
                      min="1" 
                      max="3" 
                      readOnly
                      className="w-full text-center text-xl font-semibold border border-input rounded-lg py-2 bg-background text-foreground"
                    />
                  </div>
                  <button 
                    onClick={incrementSlots}
                    className="w-10 h-10 border border-input rounded-lg flex items-center justify-center hover:bg-accent"
                  >
                    <Plus />
                  </button>
                </div>
                <div className="text-sm text-muted-foreground mt-2">Maximum 3 slots per contributor</div>
              </div>

              {/* Total Cost */}
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Total Cost:</span>
                  <span className="text-2xl font-bold text-primary">₦{totalCost.toLocaleString()}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">You'll receive: {selectedSlots * 25}kg of premium beef</div>
              </div>

              {/* CTA Button */}
              <Button className="w-full bg-primary text-primary-foreground py-4 text-lg font-semibold hover:bg-primary/90 mb-4">
                Join Contribution
              </Button>
              
              <div className="text-center">
                <div className="flex items-center justify-center text-sm text-muted-foreground mb-2">
                  <Shield />
                  <span className="ml-2">Secure payment via Paystack</span>
                </div>
                <div className="text-xs text-muted-foreground">You will be redirected to complete payment</div>
              </div>

              {/* Share Options */}
              <div className="border-t border-border pt-4 mt-6">
                <div className="text-sm font-medium text-foreground mb-3">Share this package:</div>
                <div className="flex space-x-3">
                  <Button className="flex-1 bg-green-600 text-white hover:bg-green-700">
                    💬 WhatsApp
                  </Button>
                  <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
                    <Share /> Share
                  </Button>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">What happens after I pay?</h3>
              <p className="text-muted-foreground">Your payment is securely held until all slots are filled. Once complete, the coordinator purchases the cow and arranges processing and delivery.</p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">How is my share calculated?</h3>
              <p className="text-muted-foreground">Each slot represents an equal share of the total cow weight. You'll receive approximately 25kg of mixed cuts including premium steaks, roasts, and ground beef.</p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">When will I receive my items?</h3>
              <p className="text-muted-foreground">Delivery typically occurs 2-3 days after the package is completed. You'll receive SMS and WhatsApp updates throughout the process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">DigiMart</h3>
              <p className="text-gray-400 mb-4">Community-powered food buying platform connecting people to share costs and get quality food delivered.</p>
              <div className="flex space-x-4">
                <span>📘</span>
                <span>🐦</span>
                <span>📷</span>
                <span>💬</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About DigiMart</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Packages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Become a Coordinator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lagos, Nigeria</li>
                <li>support@digimart.ng</li>
                <li>+234 (0) 123 456 7890</li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 h-[1px] w-full my-8 bg-gray-700"></div>
          <div className="flex flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0">
            <p className="text-gray-400">© 2024 DigiMart. All rights reserved.</p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
