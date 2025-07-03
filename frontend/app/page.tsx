import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { ArrowRight, Leaf, Shield, Sprout } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Protect Your Crops with
              <span className="text-green-600"> AI-Powered</span> Disease Detection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plankton AI helps farmers identify and treat plant diseases instantly using advanced artificial intelligence.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/detect">
                  Detect Disease Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/assistant">Try AI Assistant</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Plankton AI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Leaf className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Detection</h3>
              <p className="text-muted-foreground">
                Get accurate plant disease diagnosis in seconds using our advanced AI technology.
              </p>
            </Card>
            <Card className="p-6">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Treatment Plans</h3>
              <p className="text-muted-foreground">
                Receive detailed treatment recommendations and preventive measures.
              </p>
            </Card>
            <Card className="p-6">
              <Sprout className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Assistance</h3>
              <p className="text-muted-foreground">
                Get 24/7 support from our AI assistant for all your plant care needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Farmers Worldwide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-green-600">98%</p>
              <p className="text-muted-foreground">Detection Accuracy</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600">1M+</p>
              <p className="text-muted-foreground">Plants Analyzed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600">50K+</p>
              <p className="text-muted-foreground">Active Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Crops?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who trust Plankton AI for early disease detection and treatment.
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">Get Started for Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}