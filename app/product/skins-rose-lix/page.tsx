"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Shield,
  Package,
  Truck,
  Star,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Menu,
  X,
  Instagram,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const CookieSettingsButton = dynamic(
  () => import("@/components/cookie-settings-button").then((mod) => ({ default: mod.CookieSettingsButton })),
  {
    ssr: false,
    loading: () => <div className="w-24 h-8"></div>,
  },
)

export default function SkinsRoseLixProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("OVERVIEW")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const productImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7440.JPG-dy0YgR51Ha5DERdfuPq4shdlsihNJo.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7438.PNG-TW7YHV3mwuCjANLq4UCjF1tYmRhLvB.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7439.PNG-mGaDi0ymrAb5cyxnHB4k4NsBb4FHwG.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7441.PNG-OkleO3KmaL2iEYDyteQ27BjKpYYESV.png",
  ]

  const specifications = [
    { label: "Product Name", value: "Skins Rose Buddies - The Rose Lix" },
    { label: "Category", value: "Premium oral stimulation device" },
    { label: "Technology", value: "Rotating tongue with suction technology" },
    { label: "Materials", value: "Body-safe silicone with rose-inspired design" },
    { label: "Dimensions", value: "8.5 cm x 7.2 cm x 6.8 cm" },
    { label: "Weight", value: "145 grams" },
    { label: "Colour", value: "Rose pink with gold accents" },
    { label: "Battery", value: "Rechargeable lithium-ion via USB" },
    { label: "Runtime", value: "90 minutes continuous use" },
    { label: "Charging Time", value: "120 minutes for full charge" },
    { label: "Stimulation Modes", value: "10 modes (7 suction + 3 tongue patterns)" },
    { label: "Water Resistance", value: "IPX7 waterproof" },
    { label: "Noise Level", value: "Less than 45 dB whisper-quiet operation" },
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Bristol",
      age: 32,
      rating: 5,
      date: "1 week ago",
      title: "Revolutionary Design - Game Changer!",
      content:
        "The Rose Lix is absolutely incredible! The rotating tongue feature is unlike anything I've experienced before. The suction combined with the tongue movement creates sensations that are simply divine. The rose design is beautiful and discreet - it looks like a decorative piece on my nightstand. The whisper-quiet operation means complete privacy, and the battery life is excellent. This has completely changed my self-care routine.",
      helpful: 32,
      notHelpful: 0,
      verified: true,
      customerSince: "Customer since 2024",
    },
    {
      id: 2,
      name: "Emma K.",
      location: "London",
      age: 28,
      rating: 5,
      date: "2 weeks ago",
      title: "Beautiful and Effective",
      content:
        "I was initially drawn to the aesthetic - it's genuinely beautiful and doesn't look like a typical adult product. But the performance is what really impressed me. The tongue rotation is so realistic and the suction levels are perfect. I love that it's waterproof so I can use it in the bath. The charging is quick and the battery lasts for multiple sessions. Highly recommend for anyone looking for something special.",
      helpful: 28,
      notHelpful: 1,
      verified: true,
      customerSince: "Customer since 2024",
    },
    {
      id: 3,
      name: "Jessica R.",
      location: "Manchester",
      age: 35,
      rating: 5,
      date: "3 weeks ago",
      title: "Exceeded All Expectations",
      content:
        "As someone who's tried many products, the Rose Lix stands out completely. The combination of suction and tongue movement is incredibly realistic and effective. The rose design is genius - it's beautiful enough to display and nobody would guess what it is. The different modes offer great variety, and the whisper-quiet operation is perfect for shared living spaces. Worth every penny.",
      helpful: 25,
      notHelpful: 0,
      verified: true,
      customerSince: "Customer since 2023",
    },
    {
      id: 4,
      name: "Rachel T.",
      location: "Edinburgh",
      age: 29,
      rating: 4,
      date: "1 month ago",
      title: "Great Product with Minor Considerations",
      content:
        "The Rose Lix is fantastic overall. The tongue feature is amazing and the suction is powerful yet gentle. The design is absolutely beautiful and very discreet. My only minor complaint is that I wish the battery lasted a bit longer, but it charges quickly so it's not a major issue. The different modes provide good variety and the whisper-quiet operation is excellent. Would definitely recommend.",
      helpful: 19,
      notHelpful: 2,
      verified: true,
      customerSince: "Customer since 2024",
    },
    {
      id: 5,
      name: "Sophie L.",
      location: "Birmingham",
      age: 31,
      rating: 5,
      date: "5 weeks ago",
      title: "Perfect Combination of Beauty and Function",
      content:
        "I love everything about the Rose Lix! The rotating tongue is incredibly realistic and the suction is perfectly calibrated. The rose design is stunning - it's like having a beautiful piece of art that happens to be incredibly functional. The waterproof feature is great for bath time relaxation. The quiet operation means I can use it anytime without worry. This is definitely a premium product that delivers on all fronts.",
      helpful: 31,
      notHelpful: 0,
      verified: true,
      customerSince: "Customer since 2023",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveTab(sectionId.toUpperCase().replace("-", " "))
      setMobileMenuOpen(false)
    }
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-rose-50">
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-rose-900 shadow-lg md:bg-rose-900/95 md:backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/royal-caress-logo.png"
                alt="Royal Caress"
                width={96}
                height={96}
                className="h-24 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-xs font-medium tracking-wider">
              <button
                onClick={() => scrollToSection("overview")}
                className={`hover:text-white transition-colors ${
                  activeTab === "OVERVIEW" ? "text-white" : "text-white/70"
                }`}
              >
                OVERVIEW
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className={`hover:text-white transition-colors ${
                  activeTab === "TECHNOLOGY" ? "text-white" : "text-white/70"
                }`}
              >
                TECHNOLOGY
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className={`hover:text-white transition-colors ${
                  activeTab === "FEATURES" ? "text-white" : "text-white/70"
                }`}
              >
                FEATURES
              </button>
              <button
                onClick={() => scrollToSection("specifications")}
                className={`hover:text-white transition-colors ${
                  activeTab === "SPECIFICATIONS" ? "text-white" : "text-white/70"
                }`}
              >
                SPECIFICATIONS
              </button>
            </div>

            {/* Mobile & Desktop Right Side */}
            <div className="flex items-center space-x-2">
              <div className="hidden sm:flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-rose-400 border-2 border-rose-300"></div>
                <span className="text-xs font-medium text-white">ROSE PINK</span>
                <span className="text-sm font-medium text-white">€45.99</span>
              </div>

              <Link href="https://buy.stripe.com/5kQ4gyc9S9lSdW672y6AM07" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-rose-900 hover:bg-gray-100 px-3 py-1.5 rounded-full font-medium text-xs">
                  BUY NOW
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-white">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-rose-900/20">
              <div className="flex flex-col space-y-3 mt-4">
                <button
                  onClick={() => scrollToSection("overview")}
                  className="text-left text-sm text-white/70 hover:text-white transition-colors"
                >
                  OVERVIEW
                </button>
                <button
                  onClick={() => scrollToSection("technology")}
                  className="text-left text-sm text-white/70 hover:text-white transition-colors"
                >
                  TECHNOLOGY
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-left text-sm text-white/70 hover:text-white transition-colors"
                >
                  FEATURES
                </button>
                <button
                  onClick={() => scrollToSection("specifications")}
                  className="text-left text-sm text-white/70 hover:text-white transition-colors"
                >
                  SPECIFICATIONS
                </button>
                <div className="flex items-center space-x-3 pt-2 border-t border-rose-900/20">
                  <div className="w-4 h-4 rounded-full bg-rose-400 border-2 border-rose-300"></div>
                  <span className="text-xs font-medium text-white">ROSE PINK</span>
                  <span className="text-sm font-medium text-white">€45.99</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7444.PNG-FOKYvpNZLWMS4rPYv94AIZKeaxps1Z.png"
            alt="Rose Lix Hero"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-rose-900/20"></div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-12 sm:py-16 lg:py-24 bg-rose-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light mb-6 sm:mb-8 tracking-tight">
            Rotating Tongue Technology
          </h2>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-light text-white/90 px-2">
            Experience the revolutionary Rose Lix with its unique rotating tongue technology combined with powerful
            suction. This innovative design mimics natural oral stimulation with unprecedented realism. The beautiful
            rose aesthetic disguises advanced engineering that delivers 10 distinct modes of pleasure, from gentle
            teasing to intense satisfaction. Whisper-quiet operation ensures complete discretion while the waterproof
            design allows for versatile enjoyment.
          </p>
        </div>
      </section>

      {/* Product Image Section */}
      <section className="relative overflow-hidden">
        <div className="block sm:hidden">
          <div className="relative h-[70vh] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7445.PNG-GQMndeCRsdyWrDC4LDpxchWQLU3RMd.png"
              alt="Rose Lix Product"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </div>

        <div className="hidden sm:block relative h-[80vh] lg:h-[90vh] w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7445.PNG-GQMndeCRsdyWrDC4LDpxchWQLU3RMd.png"
            alt="Rose Lix Product"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 bg-rose-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-sm sm:text-base font-medium tracking-[0.2em] text-white/80 uppercase mb-8">
              PREMIUM FEATURES
            </h2>
          </div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="block md:hidden space-y-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">ROTATING TONGUE</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                Realistic tongue movement with
                <br />
                customizable rotation patterns
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">ROSE DESIGN</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                Beautiful and discreet aesthetic
                <br />
                inspired by natural rose petals
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.778 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">SUCTION TECHNOLOGY</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                Powerful yet gentle suction with
                <br />7 different intensity levels
              </p>
            </div>

            <div className="text-center p-6">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">WHISPER QUIET</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                Ultra-quiet operation under 45dB
                <br />
                for complete privacy and discretion
              </p>
            </div>
          </div>

          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid grid-cols-2 gap-0">
            <div className="border-r border-b border-rose-900/20 p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">ROTATING TONGUE</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Realistic tongue movement with
                <br />
                customizable rotation patterns
              </p>
            </div>

            <div className="border-b border-rose-900/20 p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">ROSE DESIGN</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Beautiful and discreet aesthetic
                <br />
                inspired by natural rose petals
              </p>
            </div>

            <div className="border-r border-rose-900/20 p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">SUCTION TECHNOLOGY</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Powerful yet gentle suction with
                <br />7 different intensity levels
              </p>
            </div>

            <div className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">WHISPER QUIET</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Ultra-quiet operation under 45dB
                <br />
                for complete privacy and discretion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left side - Main Product Image */}
            <div className="relative order-1 lg:order-1">
              <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl p-8 sm:p-12">
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7440.JPG-dy0YgR51Ha5DERdfuPq4shdlsihNJo.jpeg"
                    alt="Rose Lix Product Specifications"
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Specifications */}
            <div className="order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-rose-900 mb-8 sm:mb-12 tracking-tight text-center lg:text-left">
                PRODUCT SPECIFICATIONS
              </h2>

              <div className="space-y-4">
                {/* Technical Specifications */}
                <div className="border-b border-rose-900/20">
                  <button
                    onClick={() => toggleSection("technical")}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-rose-900 tracking-wide uppercase">
                      TECHNICAL SPECIFICATIONS
                    </span>
                    <svg
                      className={`w-5 h-5 text-rose-900 transition-transform ${
                        expandedSection === "technical" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedSection === "technical" && (
                    <div className="pb-4 space-y-3">
                      {specifications.map((spec, index) => (
                        <div key={index} className="flex justify-between py-2">
                          <span className="text-sm text-rose-900/70 font-medium">{spec.label}</span>
                          <span className="text-sm text-rose-900 text-right max-w-[60%]">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Package Contents */}
                <div className="border-b border-rose-900/20">
                  <button
                    onClick={() => toggleSection("package")}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-rose-900 tracking-wide uppercase">
                      PACKAGE CONTENTS
                    </span>
                    <svg
                      className={`w-5 h-5 text-rose-900 transition-transform ${
                        expandedSection === "package" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedSection === "package" && (
                    <div className="pb-4">
                      <ul className="space-y-2 text-sm text-rose-900/80">
                        <li>• Rose Lix stimulator device</li>
                        <li>• USB charging cable</li>
                        <li>• User manual in multiple languages</li>
                        <li>• Discreet storage pouch</li>
                        <li>• Warranty card</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Special Features */}
                <div className="border-b border-rose-900/20">
                  <button
                    onClick={() => toggleSection("features")}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-rose-900 tracking-wide uppercase">
                      SPECIAL FEATURES
                    </span>
                    <svg
                      className={`w-5 h-5 text-rose-900 transition-transform ${
                        expandedSection === "features" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedSection === "features" && (
                    <div className="pb-4">
                      <ul className="space-y-2 text-sm text-rose-900/80">
                        <li>• Revolutionary rotating tongue technology</li>
                        <li>• 7 suction intensity levels</li>
                        <li>• 3 unique tongue rotation patterns</li>
                        <li>• Whisper-quiet operation under 45dB</li>
                        <li>• IPX7 waterproof design</li>
                        <li>• Rose-inspired aesthetic for discretion</li>
                        <li>• Body-safe premium silicone construction</li>
                        <li>• Memory function remembers last setting</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Warranty */}
                <div className="border-b border-rose-900/20">
                  <button
                    onClick={() => toggleSection("warranty")}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-rose-900 tracking-wide uppercase">
                      WARRANTY
                    </span>
                    <svg
                      className={`w-5 h-5 text-rose-900 transition-transform ${
                        expandedSection === "warranty" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedSection === "warranty" && (
                    <div className="pb-4">
                      <div className="space-y-3 text-sm text-rose-900/80">
                        <p>
                          <strong>1-Year Limited Warranty</strong>
                        </p>
                        <p>Your Rose Lix is covered against manufacturing defects for 12 months from purchase date.</p>
                        <p>
                          <strong>Warranty Coverage:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Motor and electronic components</li>
                          <li>• Charging functionality</li>
                          <li>• Material defects</li>
                        </ul>
                        <p>
                          <strong>Not Covered:</strong> Normal wear, misuse, or damage from improper cleaning.
                        </p>
                        <p>Contact support@royalcaress.co.uk for warranty claims.</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Care & Safety */}
                <div>
                  <button
                    onClick={() => toggleSection("care")}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-rose-900 tracking-wide uppercase">
                      CARE & SAFETY
                    </span>
                    <svg
                      className={`w-5 h-5 text-rose-900 transition-transform ${
                        expandedSection === "care" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedSection === "care" && (
                    <div className="pb-4">
                      <div className="space-y-3 text-sm text-rose-900/80">
                        <p>
                          <strong>Cleaning Instructions:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Clean before and after each use</li>
                          <li>• Use mild soap and warm water</li>
                          <li>• Pat dry with lint-free cloth</li>
                          <li>• Store in provided pouch when dry</li>
                        </ul>
                        <p>
                          <strong>Safety Guidelines:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• For external use only</li>
                          <li>• Do not use if device is damaged</li>
                          <li>• Charge only with provided cable</li>
                          <li>• Keep away from extreme temperatures</li>
                          <li>• Not suitable for use during pregnancy</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left side - Main Product Image */}
            <div className="relative order-1 lg:order-1">
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 sm:p-8">
                {/* Main Image */}
                <div className="relative aspect-square mb-4">
                  <Image
                    src={productImages[selectedImage] || "/placeholder.svg"}
                    alt={`Rose Lix view ${selectedImage + 1}`}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-rose-400 ring-2 ring-rose-400/30"
                          : "border-rose-200 hover:border-rose-300"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Rose Lix thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 25vw, 12.5vw"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Specifications */}
            <div className="order-2 lg:order-2">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-2xl sm:text-3xl font-serif font-light text-rose-900 tracking-tight flex-1 pr-4">
                  SKINS ROSE BUDDIES - THE ROSE LIX
                </h1>
                <button className="p-2 rounded-full hover:bg-rose-800 transition-colors">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-900/50" />
                </button>
              </div>

              <p className="text-rose-900/70 mb-4 uppercase tracking-wide text-xs sm:text-sm font-medium">
                Premium Oral Stimulation Device
              </p>

              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i < 5 ? "fill-rose-400 text-rose-400" : "text-rose-900/20"}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-rose-900/70 text-xs sm:text-sm">4.8 (89 reviews)</span>
              </div>

              {/* Color Display */}
              <div className="mb-6 sm:mb-8">
                <p className="text-rose-900 font-medium mb-4 flex items-center text-sm sm:text-base">
                  <span className="w-4 h-4 rounded-full mr-2 bg-rose-400 border border-rose-300"></span>
                  ROSE PINK WITH GOLD ACCENTS
                </p>
              </div>

              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="text-2xl sm:text-3xl font-serif font-light text-rose-900">€45.99</div>
                <Badge variant="outline" className="border-rose-700 text-rose-800 bg-rose-100 text-xs font-medium">
                  Shipping not included.
                </Badge>
              </div>

              {/* Buy Now Button */}
              <div className="mb-6 sm:mb-8">
                <Link href="https://buy.stripe.com/5kQ4gyc9S9lSdW672y6AM07" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-rose-900 text-white hover:bg-rose-800 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg">
                    BUY NOW
                  </Button>
                </Link>
              </div>

              {/* Product Description */}
              <div className="mb-6 sm:mb-8">
                <p className="text-rose-900/80 leading-relaxed text-sm sm:text-base">
                  The Skins Rose Buddies: The Rose Lix combines revolutionary rotating-tongue technology with powerful
                  suction in a beautifully discreet rose design. Experience 10 unique modes of stimulation,
                  whisper-quiet operation, and waterproof construction for versatile pleasure.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-rose-900">WARRANTY</p>
                    <p className="text-xs text-rose-900/70">1-year coverage</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-rose-900">DISCREET SHIPPING</p>
                    <p className="text-xs text-rose-900/70">Unmarked packaging</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-rose-900">FAST CHARGING</p>
                    <p className="text-xs text-rose-900/70">120 minutes full charge</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-rose-900">IPX7 WATERPROOF</p>
                    <p className="text-xs text-rose-900/70">Safe for water use</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-rose-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-rose-900 mb-6 tracking-tight">
              reviews
            </h2>

            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${i < 5 ? "fill-rose-400 text-rose-400" : "text-rose-900/20"}`}
                  />
                ))}
              </div>
              <span className="ml-3 text-lg font-medium text-rose-900">4.8</span>
              <span className="ml-2 text-rose-900/70 text-sm sm:text-base">89 Reviews</span>
            </div>

            <p className="text-rose-900/70 mb-8 text-sm sm:text-base">
              87 out of 89 (98%) reviewers recommend this product
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-white border-0 shadow-sm rounded-2xl">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? "fill-rose-400 text-rose-400" : "text-rose-900/20"}`}
                          />
                        ))}
                        <span className="ml-2 text-xs sm:text-sm text-rose-900/70">{review.date}</span>
                      </div>
                      <h4 className="font-medium text-rose-900 mb-1 text-sm sm:text-base">{review.title}</h4>
                    </div>
                    {review.verified && (
                      <Badge variant="outline" className="border-rose-400 text-rose-600 text-xs ml-2">
                        Verified
                      </Badge>
                    )}
                  </div>

                  <p className="text-rose-900/80 leading-relaxed mb-4 text-sm sm:text-base">{review.content}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <div className="text-xs sm:text-sm text-rose-900/70">
                      <span className="font-medium">{review.name}</span>
                      <span className="mx-2">•</span>
                      <span>{review.location}</span>
                    </div>

                    <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
                      <span className="text-rose-900/70">Helpful?</span>
                      <button className="flex items-center space-x-1 text-rose-900/70 hover:text-rose-900">
                        <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{review.helpful}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-rose-900/70 hover:text-rose-900">
                        <ThumbsDown className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{review.notHelpful}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-rose-900/70 hover:text-rose-900">
                        <Flag className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Report</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-rose-900/10 p-4 z-40 sm:hidden">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="text-lg font-serif font-light text-rose-900">€45.99</div>
            <div className="text-xs text-rose-900/70">SKINS ROSE BUDDIES - THE ROSE LIX</div>
          </div>
          <Link href="https://buy.stripe.com/5kQ4gyc9S9lSdW672y6AM07" target="_blank" rel="noopener noreferrer">
            <Button className="bg-rose-900 text-white hover:bg-rose-800 px-8 py-3 rounded-full font-medium">
              BUY NOW
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 bg-[#0B0B0B] text-white pb-20 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-light mb-4 tracking-wide">Royal Caress</h3>
              <p className="text-white/70 leading-relaxed font-light max-w-md">
                A sanctuary for intimate wellness, celebrating every body and every expression of pleasure.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4 tracking-wide">Connect</h4>
              <p className="text-white/70 mb-4 text-sm">support@royalcaress.co.uk</p>
              <div className="flex gap-4 mb-4">
                <Link
                  href="https://www.instagram.com/royal.caress/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-all duration-300" />
                </Link>
                <Link
                  href="https://wa.me/447592253773?text=Hello%21%20Hope%20you%27re%20well.%20I%27d%20love%20to%20speak%20when%20you%20have%20a%20moment.%20Many%20thanks%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-all duration-300" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@royal.caress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z" />
                  </svg>
                </Link>
              </div>
              <CookieSettingsButton />
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm font-light">
            <p>© 2025 Royal Caress Ltd — All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
