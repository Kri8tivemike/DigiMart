import { Separator } from "@/components/ui/separator"

// Temporary emoji placeholders for icons
const Facebook = () => <span>📘</span>
const Twitter = () => <span>🐦</span>
const Instagram = () => <span>📷</span>
const MessageCircle = () => <span>💬</span>

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-dark text-white py-16 border-t border-gray-700 dark:border-darkBorder">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">DigiMart</h3>
            <p className="text-gray-400 mb-4">
              Community-powered food buying platform connecting people to share costs and get quality food delivered.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-secondary hover:text-white cursor-pointer" />
              <Twitter className="text-secondary hover:text-white cursor-pointer" />
              <Instagram className="text-secondary hover:text-white cursor-pointer" />
              <MessageCircle className="text-secondary hover:text-white cursor-pointer" />
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

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0">
          <p className="text-gray-400">
            © 2024 DigiMart. All rights reserved.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
