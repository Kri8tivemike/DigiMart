'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

// Temporary emoji placeholders for icons
const Search = () => <span>🔍</span>
const Bookmark = () => <span>🔖</span>
const Clock = () => <span>⏰</span>

// Mock data for packages matching the design
const packages = [
  {
    id: 1,
    title: 'Full Cow Package',
    type: 'Beef',
    price: 45000,
    slotsTotal: 10,
    slotsFilled: 9,
    location: 'Lagos Island',
    timeLeft: '2h left',
    isBookmarked: false,
    isAlmostFull: true,
    description: 'Premium quality beef from grass-fed cattle',
    coordinator: 'Adebayo M.',
    deliveryDate: '2024-01-15',
    image: '/api/placeholder/300/200',
    tag: 'Almost Full'
  },
  {
    id: 2,
    title: 'Broiler Chicken (20 pieces)',
    type: 'Chicken',
    price: 18000,
    slotsTotal: 8,
    slotsFilled: 4,
    location: 'Ikeja',
    timeLeft: '1d 5h left',
    isBookmarked: true,
    isAlmostFull: false,
    description: 'Fresh broiler chickens, farm-raised',
    coordinator: 'Sarah O.',
    deliveryDate: '2024-01-18',
    image: '/api/placeholder/300/200',
    tag: 'Chicken'
  },
  {
    id: 3,
    title: 'Medium Goat',
    type: 'Goat',
    price: 32000,
    slotsTotal: 6,
    slotsFilled: 3,
    location: 'Victoria Island',
    timeLeft: '3d 12h left',
    isBookmarked: true,
    isAlmostFull: false,
    description: 'Fresh goat meat, locally sourced',
    coordinator: 'Kemi L.',
    deliveryDate: '2024-01-12',
    image: '/api/placeholder/300/200',
    tag: 'Goat'
  },
  {
    id: 4,
    title: 'Fresh Catfish (Large)',
    type: 'Fish',
    price: 15000,
    slotsTotal: 5,
    slotsFilled: 2,
    location: 'Surulere',
    timeLeft: '5d 8h left',
    isBookmarked: false,
    isAlmostFull: false,
    description: 'Fresh catfish from local farms',
    coordinator: 'Funmi T.',
    deliveryDate: '2024-01-16',
    image: '/api/placeholder/300/200',
    tag: 'Fish'
  },
  {
    id: 5,
    title: 'Premium Rice (50kg)',
    type: 'Grains',
    price: 22000,
    slotsTotal: 12,
    slotsFilled: 6,
    location: 'Yaba',
    timeLeft: '2d 15h left',
    isBookmarked: false,
    isAlmostFull: false,
    description: 'Premium quality rice, locally sourced',
    coordinator: 'Ahmed K.',
    deliveryDate: '2024-01-19',
    image: '/api/placeholder/300/200',
    tag: 'Grains'
  },
  {
    id: 6,
    title: 'Whole Turkey',
    type: 'Turkey',
    price: 35000,
    slotsTotal: 4,
    slotsFilled: 1,
    location: 'Lekki',
    timeLeft: '5d 4h left',
    isBookmarked: false,
    isAlmostFull: false,
    description: 'Premium turkey for special occasions',
    coordinator: 'David A.',
    deliveryDate: '2024-01-20',
    image: '/api/placeholder/300/200',
    tag: 'Turkey'
  }
]

const typeColors = {
  Beef: 'bg-red-500 text-white',
  Chicken: 'bg-orange-500 text-white',
  Goat: 'bg-green-500 text-white',
  Turkey: 'bg-purple-500 text-white',
  Fish: 'bg-blue-500 text-white',
  Grains: 'bg-yellow-500 text-white'
}

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedPriceRange, setSelectedPriceRange] = useState('Price Range')
  const [selectedSlots, setSelectedSlots] = useState('Slots Available')
  const [selectedSort, setSelectedSort] = useState('Sort by')

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  const toggleBookmark = (id: number) => {
    console.log(`Toggle bookmark for package ${id}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark">
      {/* Header */}
      <header className="bg-white dark:bg-darkCard border-b border-gray-200 dark:border-darkBorder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-primary">DigiMart</h1>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary">Home</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Dashboard</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Notifications</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary">Profile</a>
              </nav>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contribution Packages</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Browse and join active food contribution packages</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 dark:text-gray-300">24 active packages</span>
            <Button className="bg-primary text-white px-4 py-2 rounded-lg">
              📖 Bookmarked
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search />
              </div>
              <input
                type="text"
                placeholder="Search by package name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-darkBorder rounded-lg bg-white dark:bg-darkCard text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-darkBorder rounded-lg bg-white dark:bg-darkCard text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
              >
                <option>All Categories</option>
                <option>Beef</option>
                <option>Chicken</option>
                <option>Fish</option>
                <option>Grains</option>
              </select>

              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-darkBorder rounded-lg bg-white dark:bg-darkCard text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
              >
                <option>Price Range</option>
                <option>Under ₦20,000</option>
                <option>₦20,000 - ₦40,000</option>
                <option>Above ₦40,000</option>
              </select>

              <select
                value={selectedSlots}
                onChange={(e) => setSelectedSlots(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-darkBorder rounded-lg bg-white dark:bg-darkCard text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
              >
                <option>Slots Available</option>
                <option>1-3 slots</option>
                <option>4-6 slots</option>
                <option>7+ slots</option>
              </select>

              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-darkBorder rounded-lg bg-white dark:bg-darkCard text-gray-900 dark:text-white focus:ring-2 focus:ring-primary"
              >
                <option>Sort by</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
                <option>Ending Soon</option>
              </select>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredPackages.slice(0, 6).map((pkg) => (
            <PackageCard
              key={pkg.id}
              package={pkg}
              onToggleBookmark={toggleBookmark}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300">Showing 1 to 6 of 24 packages</p>
          <div className="flex space-x-2">
            <Button variant="outline" className="px-3 py-2">Previous</Button>
            <Button className="bg-primary text-white px-3 py-2">1</Button>
            <Button variant="outline" className="px-3 py-2">2</Button>
            <Button variant="outline" className="px-3 py-2">3</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

// Package Card Component
interface PackageCardProps {
  package: typeof packages[0]
  onToggleBookmark: (id: number) => void
}

function PackageCard({ package: pkg, onToggleBookmark }: PackageCardProps) {
  const progressPercentage = (pkg.slotsFilled / pkg.slotsTotal) * 100
  const slotsLeft = pkg.slotsTotal - pkg.slotsFilled

  return (
    <Card className="bg-white dark:bg-darkCard border border-gray-200 dark:border-darkBorder rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        <div className="absolute top-3 left-3">
          <Badge className={`${typeColors[pkg.type as keyof typeof typeColors]} px-2 py-1 text-xs font-medium rounded`}>
            {pkg.tag}
          </Badge>
        </div>
        <button
          onClick={() => onToggleBookmark(pkg.id)}
          className="absolute top-3 right-3 w-8 h-8 bg-white dark:bg-darkCard rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
        >
          <Bookmark />
        </button>
        {pkg.isAlmostFull && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded flex items-center">
              🔥 1 slot left!
            </span>
          </div>
        )}
        <div className="absolute bottom-3 right-3 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
          {pkg.timeLeft}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Price */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {pkg.title}
        </h3>
        <div className="text-2xl font-bold text-primary mb-3">
          ₦{pkg.price.toLocaleString()}
          <span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-1">per slot</span>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Slots Filled</span>
            <span>{pkg.slotsFilled}/{pkg.slotsTotal}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                pkg.type === 'Beef' ? 'bg-red-500' :
                pkg.type === 'Chicken' ? 'bg-orange-500' :
                pkg.type === 'Goat' ? 'bg-green-500' :
                pkg.type === 'Fish' ? 'bg-blue-500' :
                pkg.type === 'Grains' ? 'bg-yellow-500' :
                'bg-purple-500'
              }`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
            <Clock />
            <span className="ml-1">{slotsLeft} slots left</span>
          </span>
          <Button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
            View Details
          </Button>
        </div>
      </div>
    </Card>
  )
}
