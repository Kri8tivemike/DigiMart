import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, Bookmark, Flame, Search, CreditCard, Users, Truck, Handshake, Eye, MapPin, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Contribute to Food Packages, Get Your Share
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Join a community-powered buying system. Share costs, share portions, and get quality food delivered to your doorstep in Lagos.
              </p>
              <Button size="lg" className="bg-secondary text-gray-900 hover:bg-yellow-400 text-lg font-semibold px-8 py-4">
                Browse Packages
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-white/80">Community Food Sharing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Packages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Contribution Packages</h2>
              <p className="text-xl text-gray-600">Join active contributions and get your share when slots are filled</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Package 1 */}
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="destructive" className="bg-red-100 text-red-800">Beef</Badge>
                    <Bookmark className="h-5 w-5 text-gray-400 hover:text-red-600 cursor-pointer" />
                  </div>
                  <CardTitle className="text-xl">Full Cow Package</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    ₦45,000 <span className="text-base font-normal text-gray-600">per slot</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Slots Filled</span>
                      <span>7/10</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />3 slots left
                    </span>
                    <Button className="bg-primary hover:bg-green-700">Join Now</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Package 2 */}
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-yellow-100 text-yellow-800">Chicken</Badge>
                    <Bookmark className="h-5 w-5 text-gray-400 hover:text-red-600 cursor-pointer" />
                  </div>
                  <CardTitle className="text-xl">Broiler Chicken (20 pieces)</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    ₦18,000 <span className="text-base font-normal text-gray-600">per slot</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Slots Filled</span>
                      <span>4/8</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />4 slots left
                    </span>
                    <Button className="bg-primary hover:bg-green-700">Join Now</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Package 3 */}
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-green-100 text-green-800">Goat</Badge>
                    <Bookmark className="h-5 w-5 text-red-600 fill-current" />
                  </div>
                  <CardTitle className="text-xl">Medium Goat</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    ₦32,000 <span className="text-base font-normal text-gray-600">per slot</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Slots Filled</span>
                      <span>5/6</span>
                    </div>
                    <Progress value={83} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-red-600 font-medium flex items-center">
                      <Flame className="h-4 w-4 mr-1" />Almost full!
                    </span>
                    <Button className="bg-primary hover:bg-green-700">Join Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-neutral">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How DigiMart Works</h2>
              <p className="text-xl text-gray-600">Simple steps to get quality food at affordable prices</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Select Package</h3>
                <p className="text-gray-600">Browse available food packages and choose one that fits your needs and budget</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="text-gray-900 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Secure Payment</h3>
                <p className="text-gray-600">Make your contribution through our secure payment system powered by Paystack</p>
              </div>

              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Wait for Others</h3>
                <p className="text-gray-600">Track progress as other contributors join until all slots are filled</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-gray-900 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Get Your Share</h3>
                <p className="text-gray-600">Receive your portion delivered fresh to your location within Lagos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose DigiMart?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community-Powered</h3>
                <p className="text-gray-600">Join a trusted community of food lovers sharing costs and portions</p>
              </div>

              <div className="text-center p-6">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-secondary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent System</h3>
                <p className="text-gray-600">Track every step from contribution to delivery with full transparency</p>
              </div>

              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lagos Delivery</h3>
                <p className="text-gray-600">Reliable delivery service covering all areas within Lagos State</p>
              </div>

              <div className="text-center p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Coordinators</h3>
                <p className="text-gray-600">All coordinators are KYC verified for your safety and peace of mind</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-neutral">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Contributors Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sarah O.</h4>
                    <p className="text-gray-600 text-sm">Lagos Island</p>
                  </div>
                </div>
                <p className="text-gray-700">"DigiMart helped me get quality beef at an affordable price. The delivery was prompt and the meat was fresh!"</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">David A.</h4>
                    <p className="text-gray-600 text-sm">Ikeja</p>
                  </div>
                </div>
                <p className="text-gray-700">"I love the transparency. I could track my contribution and see when others joined. Great community spirit!"</p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Kemi L.</h4>
                    <p className="text-gray-600 text-sm">Victoria Island</p>
                  </div>
                </div>
                <p className="text-gray-700">"Finally, a way to buy quality food without breaking the bank. The coordinator was professional and trustworthy."</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-4">Ready to Join a Contribution?</h2>
            <p className="text-xl mb-8 text-green-100">Start saving money while getting quality food delivered to your doorstep</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-gray-900 hover:bg-yellow-400 text-lg font-semibold px-8 py-4">
                Browse Packages
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-semibold px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
