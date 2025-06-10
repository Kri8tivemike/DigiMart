'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/theme-toggle'

// Temporary emoji placeholders for icons
const ArrowLeft = () => <span>←</span>
const Check = () => <span>✓</span>
const Info = () => <span>ℹ️</span>
const Download = () => <span>⬇️</span>
const Eye = () => <span>👁️</span>
const Dashboard = () => <span>📊</span>
const Search = () => <span>🔍</span>
const Envelope = () => <span>✉️</span>
const WhatsApp = () => <span>💬</span>

// Mock payment data
const paymentData = {
  packageName: 'Full Cow Package',
  slotsPurchased: 2,
  amountPaid: 90000,
  paymentMethod: 'Paystack - Card',
  referenceId: 'PSK_2024_001234567',
  dateTime: 'Dec 10, 2024 - 2:45 PM',
  expectedWeight: '50kg of premium beef cuts',
  currentSlots: 8,
  totalSlots: 10
}

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="text-muted-foreground hover:text-primary mr-4 flex items-center">
                <ArrowLeft />
                <span className="ml-2">Return to Dashboard</span>
              </Link>
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">DigiMart</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/packages" className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium">
                Browse More Packages
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Success Banner */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <div className="text-primary text-4xl font-bold">
                <Check />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-xl text-white opacity-90">Thank you for contributing to the {paymentData.packageName}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Contribution Summary */}
        <Card className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Contribution Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Package Name:</span>
                <span className="font-semibold text-foreground">{paymentData.packageName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Slots Purchased:</span>
                <span className="font-semibold text-foreground">{paymentData.slotsPurchased} slots</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount Paid:</span>
                <span className="font-semibold text-primary text-xl">₦{paymentData.amountPaid.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment Method:</span>
                <span className="font-semibold text-foreground">{paymentData.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reference ID:</span>
                <span className="font-mono text-sm text-muted-foreground">{paymentData.referenceId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date & Time:</span>
                <span className="font-semibold text-foreground">{paymentData.dateTime}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center">
              <div className="text-primary mr-3">
                <Info />
              </div>
              <span className="text-foreground">
                You will receive approximately <strong>{paymentData.expectedWeight}</strong> (25kg per slot)
              </span>
            </div>
          </div>
        </Card>

        {/* Invoice Section */}
        <Card className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Invoice & Receipt</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              <Download />
              <span className="ml-2">Download Invoice (PDF)</span>
            </Button>
            <Button variant="outline" className="flex-1">
              <Eye />
              <span className="ml-2">View Invoice Details</span>
            </Button>
          </div>
        </Card>

        {/* What's Next Section */}
        <Card className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">What's Next?</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Wait for Package Completion</h3>
                <p className="text-muted-foreground">
                  You'll be notified once all {paymentData.totalSlots} slots are filled. 
                  Currently {paymentData.currentSlots}/{paymentData.totalSlots} slots are taken.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Processing & Preparation</h3>
                <p className="text-muted-foreground">
                  Once complete, the coordinator will purchase and process the cow professionally.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Delivery Updates</h3>
                <p className="text-muted-foreground">
                  Track delivery progress in your dashboard. You'll receive SMS and WhatsApp updates.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Notification Confirmation */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <div className="flex items-center">
            <div className="text-blue-600 text-2xl mr-4">
              <Envelope />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Confirmation Sent</h3>
              <p className="text-blue-700 dark:text-blue-200">
                A confirmation email and notification have been sent to your account.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/dashboard" className="flex-1">
            <Button className="w-full bg-primary text-primary-foreground py-4 text-lg font-semibold hover:bg-primary/90">
              <Dashboard />
              <span className="ml-2">Go to Dashboard</span>
            </Button>
          </Link>
          <Link href="/packages" className="flex-1">
            <Button variant="outline" className="w-full py-4 text-lg font-semibold">
              <Search />
              <span className="ml-2">Browse More Packages</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Support Section */}
      <section className="bg-muted py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">Need Help?</h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to assist you with any questions about your contribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 text-white hover:bg-green-700">
              <WhatsApp />
              <span className="ml-2">WhatsApp Support</span>
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              <Envelope />
              <span className="ml-2">Email Support</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">DigiMart</h3>
              <p className="text-gray-400 mb-4">
                Community-powered food buying platform connecting people to share costs and get quality food delivered.
              </p>
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
