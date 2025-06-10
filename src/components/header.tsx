"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-primary">DigiMart</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Categories
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Sellers
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">User account</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
