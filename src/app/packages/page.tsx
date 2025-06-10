'use client'

import { useState } from 'react'
import { PageTemplate, ContentSection } from '@/components/templates/page-template'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
// Temporarily using simple icon placeholders to avoid lucide-react issues
const Clock = () => <span>⏰</span>
const Users = () => <span>👥</span>
const MapPin = () => <span>📍</span>
const Filter = () => <span>🔍</span>
const Search = () => <span>🔍</span>
const Bookmark = () => <span>🔖</span>
const Flame = () => <span>🔥</span>
const ChevronDown = () => <span>⬇️</span>

// Mock data for packages
const packages = [
  {
    id: 1,
    title: 'Full Cow Package',
    type: 'Beef',
    price: 45000,
    slotsTotal: 10,
    slotsFilled: 7,
    location: 'Lagos Island',
    timeLeft: '3 days',
    isBookmarked: false,
    isAlmostFull: false,
    description: 'Premium quality beef from grass-fed cattle',
    coordinator: 'Adebayo M.',
    deliveryDate: '2024-01-15'
  },
  {
    id: 2,
    title: 'Broiler Chicken (20 pieces)',
    type: 'Chicken',
    price: 18000,
    slotsTotal: 8,
    slotsFilled: 4,
    location: 'Ikeja',
    timeLeft: '5 days',
    isBookmarked: true,
    isAlmostFull: false,
    description: 'Fresh broiler chickens, farm-raised',
    coordinator: 'Sarah O.',
    deliveryDate: '2024-01-18'
  },
  {
    id: 3,
    title: 'Medium Goat',
    type: 'Goat',
    price: 32000,
    slotsTotal: 6,
    slotsFilled: 5,
    location: 'Victoria Island',
    timeLeft: '1 day',
    isBookmarked: true,
    isAlmostFull: true,
    description: 'Fresh goat meat, locally sourced',
    coordinator: 'Kemi L.',
    deliveryDate: '2024-01-12'
  },
  {
    id: 4,
    title: 'Turkey Package',
    type: 'Turkey',
    price: 28000,
    slotsTotal: 8,
    slotsFilled: 2,
    location: 'Lekki',
    timeLeft: '7 days',
    isBookmarked: false,
    isAlmostFull: false,
    description: 'Premium turkey for special occasions',
    coordinator: 'David A.',
    deliveryDate: '2024-01-20'
  },
  {
    id: 5,
    title: 'Fish Package (Catfish)',
    type: 'Fish',
    price: 15000,
    slotsTotal: 12,
    slotsFilled: 8,
    location: 'Surulere',
    timeLeft: '4 days',
    isBookmarked: false,
    isAlmostFull: false,
    description: 'Fresh catfish from local farms',
    coordinator: 'Funmi T.',
    deliveryDate: '2024-01-16'
  },
  {
    id: 6,
    title: 'Lamb Package',
    type: 'Lamb',
    price: 38000,
    slotsTotal: 6,
    slotsFilled: 1,
    location: 'Yaba',
    timeLeft: '6 days',
    isBookmarked: false,
    isAlmostFull: false,
    description: 'Tender lamb meat, premium quality',
    coordinator: 'Ahmed K.',
    deliveryDate: '2024-01-19'
  }
]

const typeColors = {
  Beef: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  Chicken: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Goat: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Turkey: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  Fish: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  Lamb: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
}

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'All' || pkg.type === selectedType
    const matchesLocation = selectedLocation === 'All' || pkg.location === selectedLocation
    
    return matchesSearch && matchesType && matchesLocation
  })

  const toggleBookmark = (id: number) => {
    // In a real app, this would update the backend
    console.log(`Toggle bookmark for package ${id}`)
  }

  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="section-spacing-major bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-section text-center">
          <h1 className="text-responsive-xl font-bold mb-6">
            Contribute to Food Packages, Get Your Share
          </h1>
          <p className="text-responsive-md mb-8 opacity-90 max-w-2xl mx-auto">
            Join a community-powered buying system. Share costs, share portions, and get quality food delivered to your doorstep in Lagos.
          </p>
          <Button className="btn-outline text-lg px-8 py-4">
            Browse Packages
          </Button>
        </div>
      </section>

      {/* Search and Filters */}
      <ContentSection variant="primary" spacing="minor">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search />
            </div>
            <input
              type="text"
              placeholder="Search packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-standard pl-10 w-full"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-heading">
              Available Packages ({filteredPackages.length})
            </h2>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter />
              Filters
              <ChevronDown />
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="card-standard p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-standard">Package Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="input-standard"
                  >
                    <option value="All">All Types</option>
                    <option value="Beef">Beef</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Goat">Goat</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Fish">Fish</option>
                    <option value="Lamb">Lamb</option>
                  </select>
                </div>
                <div>
                  <label className="label-standard">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="input-standard"
                  >
                    <option value="All">All Locations</option>
                    <option value="Lagos Island">Lagos Island</option>
                    <option value="Ikeja">Ikeja</option>
                    <option value="Victoria Island">Victoria Island</option>
                    <option value="Lekki">Lekki</option>
                    <option value="Surulere">Surulere</option>
                    <option value="Yaba">Yaba</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </ContentSection>

      {/* Packages Grid */}
      <ContentSection variant="secondary" spacing="major">
        <div className="max-w-6xl mx-auto">
          {filteredPackages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-body text-xl">No packages found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedType('All')
                  setSelectedLocation('All')
                }}
                className="btn-primary mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid-products">
              {filteredPackages.map((pkg) => (
                <PackageCard 
                  key={pkg.id} 
                  package={pkg} 
                  onToggleBookmark={toggleBookmark}
                />
              ))}
            </div>
          )}
        </div>
      </ContentSection>
    </PageTemplate>
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
    <Card className="card-interactive">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <Badge className={typeColors[pkg.type as keyof typeof typeColors]}>
            {pkg.type}
          </Badge>
          <button
            onClick={() => onToggleBookmark(pkg.id)}
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            <Bookmark />
          </button>
        </div>

        {/* Title and Price */}
        <h3 className="text-xl font-bold text-heading mb-2">
          {pkg.title}
        </h3>
        <div className="text-3xl font-bold text-primary mb-4">
          ₦{pkg.price.toLocaleString()}
          <span className="text-base font-normal text-body ml-2">per slot</span>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-body mb-2">
            <span>Slots Filled</span>
            <span>{pkg.slotsFilled}/{pkg.slotsTotal}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-body">
            <span className="mr-2"><MapPin /></span>
            {pkg.location}
          </div>
          <div className="flex items-center text-sm text-body">
            <span className="mr-2"><Users /></span>
            Coordinator: {pkg.coordinator}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {pkg.isAlmostFull ? (
            <span className="text-sm text-red-600 font-medium flex items-center">
              <span className="mr-1"><Flame /></span>
              Almost full!
            </span>
          ) : (
            <span className="text-sm text-body flex items-center">
              <span className="mr-1"><Clock /></span>
              {slotsLeft} slots left
            </span>
          )}
          <Button className="btn-primary">
            Join Now
          </Button>
        </div>
      </div>
    </Card>
  )
}
