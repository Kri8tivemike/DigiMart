'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ThemeToggle } from '@/components/theme-toggle'

// Temporary emoji placeholders for icons
const User = () => <span>👤</span>
const Package = () => <span>📦</span>
const Clock = () => <span>🕐</span>
const CheckCircle = () => <span>✅</span>
const Truck = () => <span>🚚</span>
const Bell = () => <span>🔔</span>

// Mock user data
const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  totalContributions: 3,
  activePackages: 2,
  completedPackages: 1
}

// Mock contributions data
const contributions = [
  {
    id: 1,
    packageName: 'Full Cow Package',
    status: 'In Progress',
    slotsContributed: 2,
    amountPaid: 90000,
    progress: 80,
    expectedDelivery: 'Dec 15, 2024',
    statusColor: 'bg-yellow-500'
  },
  {
    id: 2,
    packageName: 'Premium Chicken Package',
    status: 'Completed',
    slotsContributed: 1,
    amountPaid: 25000,
    progress: 100,
    expectedDelivery: 'Delivered',
    statusColor: 'bg-green-500'
  },
  {
    id: 3,
    packageName: 'Goat Meat Package',
    status: 'Waiting',
    slotsContributed: 1,
    amountPaid: 35000,
    progress: 40,
    expectedDelivery: 'Dec 20, 2024',
    statusColor: 'bg-blue-500'
  }
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">DigiMart</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/packages" className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium">
                Browse Packages
              </Link>
              <Button variant="ghost" size="sm">
                <Bell />
              </Button>
              <ThemeToggle />
              <Button variant="ghost" size="sm">
                <User />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {userData.name}!</h1>
          <p className="text-muted-foreground">Here's an overview of your contributions and packages.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="text-primary text-2xl mr-4">
                <Package />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Contributions</p>
                <p className="text-2xl font-bold text-foreground">{userData.totalContributions}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <div className="text-secondary text-2xl mr-4">
                <Clock />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Packages</p>
                <p className="text-2xl font-bold text-foreground">{userData.activePackages}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <div className="text-green-500 text-2xl mr-4">
                <CheckCircle />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-foreground">{userData.completedPackages}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* My Contributions */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">My Contributions</h2>
            <Link href="/packages">
              <Button variant="outline">Browse More Packages</Button>
            </Link>
          </div>
          
          <div className="space-y-4">
            {contributions.map((contribution) => (
              <div key={contribution.id} className="border border-border rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="font-semibold text-foreground mr-3">{contribution.packageName}</h3>
                      <Badge className={`${contribution.statusColor} text-white`}>
                        {contribution.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Slots</p>
                        <p className="font-medium text-foreground">{contribution.slotsContributed}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium text-foreground">₦{contribution.amountPaid.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Progress</p>
                        <div className="flex items-center">
                          <Progress value={contribution.progress} className="w-16 mr-2" />
                          <span className="text-xs text-muted-foreground">{contribution.progress}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Delivery</p>
                        <p className="font-medium text-foreground">{contribution.expectedDelivery}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-4">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-700 mt-16">
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
