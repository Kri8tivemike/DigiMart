import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, TrendingUp, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            🚀 Welcome to DigiMart
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Your Digital Marketplace
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Discover, buy, and sell digital products with ease. From software to digital art,
            find everything you need in one place.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Start Shopping
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              Become a Seller
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose DigiMart?</h2>
          <p className="text-lg text-muted-foreground">
            Built with modern technology for the best user experience
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Easy Shopping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Intuitive interface makes finding and purchasing digital products effortless.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Quality Products</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Curated selection of high-quality digital products from verified sellers.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Seller Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comprehensive dashboard with insights to help sellers grow their business.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Join a thriving community of creators and customers in the digital space.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="mx-auto max-w-4xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Ready to Get Started?</CardTitle>
            <CardDescription className="text-lg">
              Join thousands of users who trust DigiMart for their digital marketplace needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg">
              Browse Products
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
