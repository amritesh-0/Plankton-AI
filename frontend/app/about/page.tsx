import { Navbar } from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Our Mission to Protect
              <span className="text-green-600"> Global Agriculture</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              At Plankton AI, we're revolutionizing plant disease detection through artificial intelligence, 
              making advanced agricultural technology accessible to farmers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <Target className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-muted-foreground">
                We continuously push the boundaries of AI technology to provide the most accurate 
                and reliable plant disease detection solutions.
              </p>
            </Card>
            <Card className="p-8">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Farmer-Centric</h3>
              <p className="text-muted-foreground">
                Every feature we develop is designed with farmers in mind, ensuring our solutions 
                are practical, accessible, and valuable.
              </p>
            </Card>
            <Card className="p-8">
              <Award className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in our AI models and technology, ensuring reliable 
                and accurate results for our users.
              </p>
            </Card>
            <Card className="p-8">
              <Globe className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p className="text-muted-foreground">
                We're committed to making agricultural technology accessible to farmers across the globe, 
                contributing to global food security.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" 
                alt="Sarah Chen" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Sarah Chen</h3>
              <p className="text-muted-foreground">CEO & Founder</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" 
                alt="David Kumar" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">David Kumar</h3>
              <p className="text-muted-foreground">Head of AI Research</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200" 
                alt="Maria Rodriguez" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Maria Rodriguez</h3>
              <p className="text-muted-foreground">Agricultural Scientist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}