"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">DigiMart</h1>
          </div>
          <div className="hidden md:block ml-10">
            <div className="flex items-baseline space-x-8">
              <a href="#" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
                How It Works
              </a>
              <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
                Packages
              </a>
              <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
                FAQs
              </a>
              <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600 hover:text-primary">
            Login
          </Button>
          <Button className="bg-primary text-white hover:bg-green-700">
            Register
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
