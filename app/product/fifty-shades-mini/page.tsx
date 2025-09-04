"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Shield,
  Package,
  Truck,
  Star,
  ChevronDown,
  ChevronUp,
  Search,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function FiftyShadesProductPage() {
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
    "/images/fifty-shades-anexo4-updated.jpg",
    "/images/fifty-shades-anexo3-new.jpg",
    "/images/fifty-shades-anexo2-new.jpg",
    "/images/fifty-shades-anexo1-updated.jpg",
  ]

  const specifications = [
    { label: "Product Name", value: "Fifty Shades of Grey Sensation Rechargeable Mini Wand Vibrator" },
    { label: "Category", value: "Premium licensed mini wand vibrator" },
    { label: "Technology", value: "High-power motor with deep vibration" },
    { label: "Materials", value: "Premium silicone with silver metallic details" },
    { label: "Dimensions", value: "10.2 cm x 9 cm x 4 cm" },
    { label: "Weight", value: "90 grams" },
    { label: "Colour", value: "Deep grey with silver details" },
    { label: "Battery", value: "Rechargeable lithium-ion via USB" },
    { label: "Runtime", value: "120 minutes continuous use" },
    { label: "Charging Time", value: "100 minutes for full charge" },
    { label: "Vibration Modes", value: "20 modes (15 patterns + 5 intensity levels)" },
    { label: "Water Resistance", value: "100% waterproof" },
    { label: "Noise Level", value: "< 50 dB at maximum power" },
  ]

  const reviews = [
    {
      id: 1,
      name: "Victoria B.",
      location: "London",
      age: 39,
      rating: 5,
      date: "2 weeks ago",
      title: "Exceeded All Expectations as a Franchise Fan",
      content:
        "As a devoted fan of the Fifty Shades franchise, I was eager to try an official product, and the Sensation Mini Wand exceeded all expectations. The quality is immediately apparent - from the elegant packaging to the substantial weight of the product and sophisticated metallic details. But beyond aesthetics, the performance is extraordinary. The deep vibration is unlike any other product I've experienced - it penetrates more deeply and creates sensations that cheaper wands simply cannot achieve. The flexible head is a significant differentiator for comfort. Completely worth the investment, both as a collectible item and as a premium functional product.",
      helpful: 24,
      notHelpful: 1,
      verified: true,
      customerSince: "Customer since 2023",
    },
    {
      id: 2,
      name: "Richard and Elizabeth",
      location: "Oxford",
      age: "45 & 42",
      rating: 5,
      date: "3 weeks ago",
      title: "Perfect Anniversary Gift for Couples",
      content:
        "We purchased the Sensation Mini Wand as a wedding anniversary gift, inspired by the sophisticated aesthetic of the franchise. The quality is incomparable - from the ultra-soft silicone to the elegant metallic details. As a body massager, it effectively relieves tension after long hours at the office, but truly shines in intimate moments. The multiple modes offer variety for different moods, and the variable intensity allows perfect customisation. Elizabeth particularly appreciates the flexible head that adapts comfortably to different areas. A luxurious investment that brought new dimension to our intimacy after 15 years of marriage.",
      helpful: 31,
      notHelpful: 2,
      verified: true,
      customerSince: "Customers since 2024",
    },
    {
      id: 3,
      name: "Sophia K.",
      location: "Edinburgh",
      age: 34,
      rating: 5,
      date: "1 month ago",
      title: "Exceptional Quality for Collectors",
      content:
        "As a collector of official Fifty Shades items, I can attest that this is one of the most well-executed products in the franchise. The numbered authenticity certificate and premium packaging make this a genuine collectible item. But unlike many licensed products that prioritise appearance over function, the Sensation Mini Wand is exceptional in both aspects. The deep vibration is remarkably different from other wands - less superficial buzzing and more resonant intensity. The metallic details aren't just aesthetic; they add satisfying weight and balance to the product. Absolutely worth the investment for fans and collectors.",
      helpful: 18,
      notHelpful: 0,
      verified: true,
      customerSince: "Customer since 2023",
    },
    {
      id: 4,
      name: "Dr. Michael T.",
      location: "Manchester",
      age: 51,
      rating: 5,
      date: "2 months ago",
      title: "Professional Quality for Therapeutic Use",
      content:
        "I purchased the Sensation Mini Wand initially for its credentials as a premium body massager, and was impressed with the quality of engineering. The deep vibration is therapeutically effective for muscle tension, particularly in the back and shoulders. The flexible head allows reaching difficult areas with comfort, and the multiple modes offer options for different types of muscle tension. The construction is robust and the finish is truly premium. As a healthcare professional, I appreciate when a product is well-designed for both general wellness and more intimate moments. A versatile, high-quality investment.",
      helpful: 22,
      notHelpful: 1,
      verified: true,
      customerSince: "Customer since 2024",
    },
    {
      id: 5,
      name: "Isabella M.",
      location: "London",
      age: 37,
      rating: 5,
      date: "6 weeks ago",
      title: "Premium Quality - Now Fully Waterproof!",
      content:
        "Updated my previous review to five stars! The new version is completely waterproof, which addresses my only concern. As a professional with limited free time, I appreciate premium products that offer efficient and satisfying experiences, and the Sensation Mini Wand definitely delivers. The deep vibration is remarkably different from other products - more intense and satisfying. The 20 different modes provide incredible variety, and the controls are intuitive even in the dark. The battery lasts several sessions and the luxurious storage case demonstrates attention to detail. An elegant and sophisticated product for discerning adults.",
      helpful: 28,
      notHelpful: 1,
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
    <div className="min-h-screen bg-gray-50">
      {/* Floating Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
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
                <div className="w-4 h-4 rounded-full bg-gray-700 border-2 border-gray-400"></div>
                <span className="text-xs font-medium text-white">DEEP GREY</span>
                <span className="text-sm font-medium text-white">€39.98</span>
              </div>

              <Link href="https://buy.stripe.com/5kQ4gyc9S9lSdW672y6AM07" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-3 py-1.5 rounded-full font-medium text-xs">
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
            <div className="md:hidden mt-4 pb-4 border-t border-white/20">
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
                <div className="flex items-center space-x-3 pt-2 border-t border-white/20">
                  <div className="w-4 h-4 rounded-full bg-gray-700 border-2 border-gray-400"></div>
                  <span className="text-xs font-medium text-white">DEEP GREY</span>
                  <span className="text-sm font-medium text-white">€39.98</span>
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
            src="/images/fifty-shades-hero.jpg"
            alt="Fifty Shades Hero"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Hidden Depths */}
      <section id="technology" className="py-12 sm:py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light mb-6 sm:mb-8 tracking-tight">
            Sensation Technology
          </h2>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-light text-white/90 px-2">
            Experience revolutionary pleasure with our most sophisticated compact design. The Fifty Shades of Grey
            Sensation Mini Wand introduces high-power motor technology that delivers deep, resonant vibrations targeting
            your most sensitive areas with precision-engineered intensity. With 20 customisable modes including 15
            unique patterns and 5 intensity levels, this isn't just pleasure—it's an art form crafted for those who
            demand excellence in every aspect of their intimate wellness journey.
          </p>
        </div>
      </section>

      {/* New Product Section - Mobile Optimized */}
      <section className="relative overflow-hidden">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="relative h-[70vh] w-full">
            <Image
              src="/images/fifty-shades-product.jpg"
              alt="Fifty Shades Product"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block relative h-[80vh] lg:h-[90vh] w-full">
          <Image
            src="/images/fifty-shades-product.jpg"
            alt="Fifty Shades Product"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 bg-gray-800">
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
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">FLEXIBLE HEAD</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                adapts to your body's unique contours
                <br />
                for personalised comfort and precision
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">SILVER DETAILS</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                inspired by the franchise's signature
                <br />
                aesthetic with premium metallic finish
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">AUTHENTICITY CERTIFICATE</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                numbered certificate guaranteeing
                <br />
                genuine Fifty Shades collection item
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">E.L. JAMES APPROVED</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                personally endorsed by the author
                <br />
                of the Fifty Shades trilogy
              </p>
            </div>
          </div>

          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid grid-cols-2 gap-0">
            {/* Top Row */}
            <div className="border-r border-b border-white/20 p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">FLEXIBLE HEAD</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                adapts to your body's unique contours
                <br />
                for personalised comfort and precision
              </p>
            </div>

            <div className="border-b border-white/20 p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">SILVER DETAILS</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                inspired by the franchise's signature
                <br />
                aesthetic with premium metallic finish
              </p>
            </div>

            {/* Bottom Row */}
            <div className="border-r border-white/20 p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">AUTHENTICITY CERTIFICATE</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                numbered certificate guaranteeing
                <br />
                genuine Fifty Shades collection item
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">E.L. JAMES APPROVED</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                personally endorsed by the author
                <br />
                of the Fifty Shades trilogy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section id="specifications" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left side - Product Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/fifty-shades-anexo1-updated.jpg"
                  alt="Product details"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right side - Specifications */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-gray-900 mb-6 sm:mb-8 tracking-tight">
                PRODUCT SPECIFICATIONS
              </h2>

              {/* Specifications */}
              <div className="mb-6 sm:mb-8">
                <button
                  onClick={() => toggleSection("specifications")}
                  className="w-full flex items-center justify-between py-3 sm:py-4 border-b border-gray-900/20 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 tracking-wide">
                    TECHNICAL SPECIFICATIONS
                  </span>
                  {expandedSection === "specifications" ? (
                    <ChevronUp className="w-5 h-5 text-gray-900" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-900" />
                  )}
                </button>

                {expandedSection === "specifications" && (
                  <div className="py-4 sm:py-6 space-y-3 sm:space-y-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <span className="text-gray-900/70 font-medium text-sm sm:text-base flex-1 pr-4">
                          {spec.label}:
                        </span>
                        <span className="text-gray-900 font-medium text-right text-sm sm:text-base flex-1">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* What's Included */}
              <div className="mb-6 sm:mb-8">
                <button
                  onClick={() => toggleSection("content")}
                  className="w-full flex items-center justify-between py-3 sm:py-4 border-b border-gray-900/20 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 tracking-wide">PACKAGE CONTENTS</span>
                  {expandedSection === "content" ? (
                    <ChevronUp className="w-5 h-5 text-gray-900" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-900" />
                  )}
                </button>

                {expandedSection === "content" && (
                  <div className="py-4 sm:py-6">
                    <ul className="space-y-2 sm:space-y-3 text-gray-900/80 text-sm sm:text-base">
                      <li>• Fifty Shades of Grey Sensation Mini Wand</li>
                      <li>• USB charging cable</li>
                      <li>• Premium instruction manual</li>
                      <li>• Luxury storage case</li>
                      <li>• Numbered authenticity certificate</li>
                      <li>• "Moments Fifty Shades" guide</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Special Features */}
              <div className="mb-6 sm:mb-8">
                <button
                  onClick={() => toggleSection("special-features")}
                  className="w-full flex items-center justify-between py-3 sm:py-4 border-b border-gray-900/20 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 tracking-wide">SPECIAL FEATURES</span>
                  {expandedSection === "special-features" ? (
                    <ChevronUp className="w-5 h-5 text-gray-900" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-900" />
                  )}
                </button>

                {expandedSection === "special-features" && (
                  <div className="py-4 sm:py-6">
                    <ul className="space-y-2 sm:space-y-3 text-gray-900/80 text-sm sm:text-base">
                      <li>• Flexible head for personalised comfort</li>
                      <li>• Silver metallic details inspired by franchise aesthetic</li>
                      <li>• Numbered authenticity certificate</li>
                      <li>• Personally approved by author E.L. James</li>
                      <li>• High-power motor with deep vibration technology</li>
                      <li>• 100% waterproof design</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Warranty */}
              <div className="mb-6 sm:mb-8">
                <button
                  onClick={() => toggleSection("warranty")}
                  className="w-full flex items-center justify-between py-3 sm:py-4 border-b border-gray-900/20 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 tracking-wide">WARRANTY</span>
                  {expandedSection === "warranty" ? (
                    <ChevronUp className="w-5 h-5 text-gray-900" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-900" />
                  )}
                </button>

                {expandedSection === "warranty" && (
                  <div className="py-4 sm:py-6 text-gray-900/80 text-sm sm:text-base">
                    <p className="mb-4">
                      Royal Caress stands behind the quality of every product. Your Fifty Shades of Grey Sensation Mini
                      Wand comes with a comprehensive 2-year warranty (730 days) covering manufacturing defects.
                    </p>
                    <p>
                      Our discreet customer service team is available to assist with any questions or concerns about
                      your purchase.
                    </p>
                  </div>
                )}
              </div>

              {/* Care Instructions */}
              <div>
                <button
                  onClick={() => toggleSection("care")}
                  className="w-full flex items-center justify-between py-3 sm:py-4 border-b border-gray-900/20 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 tracking-wide">CARE & SAFETY</span>
                  {expandedSection === "care" ? (
                    <ChevronUp className="w-5 h-5 text-gray-900" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-900" />
                  )}
                </button>

                {expandedSection === "care" && (
                  <div className="py-4 sm:py-6 text-gray-900/80 text-sm sm:text-base">
                    <p className="mb-4">
                      Clean before and after each use with warm water and mild soap or toy cleaner. Being 100%
                      waterproof, it can be fully submerged for thorough cleaning. Store in the provided luxury case in
                      a cool, dry place.
                    </p>
                    <p>
                      Use only water-based lubricants. Avoid silicone-based products as they may damage the premium
                      silicone surface.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Experience Section */}
      <section className="relative py-0 px-0 bg-gray-100 overflow-hidden">
        <div className="relative w-full h-[70vh]">
          <video
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            ref={(video) => {
              if (video) {
                video.onclick = () => {
                  if (video.paused) {
                    video.play()
                    setIsVideoPlaying(true)
                  } else {
                    video.pause()
                    setIsVideoPlaying(false)
                  }
                }
              }
            }}
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4948-tdrdBtjBfQRCSiZmXBBSMGIusimkRq.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Text Overlay - Only shows when video is not playing */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center bg-black/20 transition-opacity duration-500 ${
              isVideoPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {/* Text Overlay */}
            <div className="text-center mb-8">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-tight px-4">
                Because intimacy deserves the <span className="font-bold">finest care.</span>
              </p>
            </div>

            {/* Play Button */}
            <div
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                const video = e.currentTarget.parentElement?.parentElement?.querySelector("video")
                if (video) {
                  video.play()
                  setIsVideoPlaying(true)
                }
              }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 hover:scale-110">
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery & Purchase */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left side - Image Gallery */}
            <div className="order-1 lg:order-1">
              {/* Mobile Gallery */}
              <div className="block sm:hidden">
                <div className="mb-4">
                  <div className="aspect-square flex items-center justify-center rounded-2xl overflow-hidden">
                    <Image
                      src={productImages[selectedImage] || "/placeholder.svg"}
                      alt="Product main view"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 90vw, 400px"
                    />
                  </div>
                </div>

                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 overflow-hidden flex-shrink-0 rounded-xl ${
                        selectedImage === index ? "ring-2 ring-gray-900 ring-offset-2" : ""
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Product view ${index + 1}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop Gallery */}
              <div className="hidden sm:flex gap-6">
                <div className="flex flex-col space-y-4">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 overflow-hidden rounded-xl ${
                        selectedImage === index ? "ring-2 ring-gray-900 ring-offset-2" : ""
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Product view ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>

                <div className="flex-1">
                  <div className="aspect-square flex items-center justify-center rounded-2xl overflow-hidden">
                    <Image
                      src={productImages[selectedImage] || "/placeholder.svg"}
                      alt="Product main view"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 1024px) 50vw, 500px"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Product Info */}
            <div className="order-2 lg:order-2">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-2xl sm:text-3xl font-serif font-light text-gray-900 tracking-tight flex-1 pr-4">
                  FIFTY SHADES OF GREY SENSATION MINI WAND
                </h1>
                <button className="p-2 rounded-full hover:bg-gray-50 transition-colors">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900/50" />
                </button>
              </div>

              <p className="text-gray-900/70 mb-4 uppercase tracking-wide text-xs sm:text-sm font-medium">
                Premium Licensed Mini Wand Vibrator
              </p>

              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i < 4 ? "fill-gray-600 text-gray-600" : "text-gray-900/20"}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-900/70 text-xs sm:text-sm">4.3 (156 reviews)</span>
              </div>

              {/* Color Display */}
              <div className="mb-6 sm:mb-8">
                <p className="text-gray-900 font-medium mb-4 flex items-center text-sm sm:text-base">
                  <span className="w-4 h-4 rounded-full mr-2 bg-gray-700 border border-gray-400"></span>
                  DEEP GREY WITH SILVER DETAILS
                </p>
              </div>

              <div className="text-2xl sm:text-3xl font-serif font-light text-gray-900 mb-6 sm:mb-8">€39.98</div>

              {/* Buy Now Button */}
              <div className="mb-6 sm:mb-8">
                <Link href="https://buy.stripe.com/5kQ4gyc9S9lSdW672y6AM07" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg">
                    BUY NOW
                  </Button>
                </Link>
              </div>

              {/* Product Description */}
              <div className="mb-6 sm:mb-8">
                <p className="text-gray-900/80 leading-relaxed text-sm sm:text-base">
                  The Fifty Shades of Grey Sensation Mini Wand is the latest addition to our exclusive intimate wellness
                  collection. Featuring high-power motor technology with 20 customisable modes (15 patterns + 5
                  intensity levels), this premium device delivers deep, resonant vibrations for 120 minutes of
                  continuous pleasure.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">WARRANTY</p>
                    <p className="text-xs text-gray-900/70">2-year coverage (730 days)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">DISCREET SHIPPING</p>
                    <p className="text-xs text-gray-900/70">Unmarked packaging</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">FAST CHARGING</p>
                    <p className="text-xs text-gray-900/70">100 minutes full charge</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">100% WATERPROOF</p>
                    <p className="text-xs text-gray-900/70">Fully submersible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-gray-900 mb-6 tracking-tight">
              reviews
            </h2>

            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${i < 4 ? "fill-gray-600 text-gray-600" : "text-gray-900/20"}`}
                  />
                ))}
              </div>
              <span className="ml-3 text-lg font-medium text-gray-900">4.3</span>
              <span className="ml-2 text-gray-900/70 text-sm sm:text-base">156 Reviews</span>
            </div>

            <p className="text-gray-900/70 mb-8 text-sm sm:text-base">
              142 out of 156 (91%) reviewers recommend this product
            </p>

            {/* Search Reviews */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search topics and reviews"
                  className="pl-12 pr-4 py-3 rounded-full border-gray-900/20 focus:border-gray-900 bg-white text-sm"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-900/50" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left side - Rating Breakdown */}
            <div className="lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Rating Snapshot</h3>
              <p className="text-gray-900/70 mb-4 sm:mb-6 text-sm">Select a row below to filter reviews.</p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center space-x-3 sm:space-x-4">
                    <span className="text-sm font-medium text-gray-900 w-3">{rating}</span>
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-600 text-gray-600" />
                    <div className="flex-1 bg-gray-900/10 rounded-full h-2">
                      <div
                        className="bg-gray-900 h-2 rounded-full"
                        style={{
                          width: `${rating === 5 ? 76 : rating === 4 ? 15 : rating === 3 ? 5 : rating === 2 ? 2 : 1}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-900/70 w-6 text-right">
                      {rating === 5 ? 118 : rating === 4 ? 24 : rating === 3 ? 8 : rating === 2 ? 4 : 2}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-4 text-sm sm:text-base">Average Customer Ratings</h4>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900/70 text-sm">Overall</span>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${i < 4 ? "fill-gray-600 text-gray-600" : "text-gray-900/20"}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium text-gray-900 text-sm">4.3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Individual Reviews */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-medium text-gray-900">Reviews</h3>
                <Button
                  variant="outline"
                  className="border-gray-900/20 text-gray-900 hover:bg-gray-50 bg-transparent text-sm px-4 py-2"
                >
                  Write a review
                </Button>
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
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? "fill-gray-600 text-gray-600" : "text-gray-900/20"}`}
                              />
                            ))}
                            <span className="ml-2 text-xs sm:text-sm text-gray-900/70">{review.date}</span>
                          </div>
                          <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">{review.title}</h4>
                        </div>
                        {review.verified && (
                          <Badge variant="outline" className="border-gray-600 text-gray-600 text-xs ml-2">
                            Verified
                          </Badge>
                        )}
                      </div>

                      <p className="text-gray-900/80 leading-relaxed mb-4 text-sm sm:text-base">{review.content}</p>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                        <div className="text-xs sm:text-sm text-gray-900/70">
                          <span className="font-medium">{review.name}</span>
                          <span className="mx-2">•</span>
                          <span>{review.location}</span>
                        </div>

                        <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
                          <span className="text-gray-900/70">Helpful?</span>
                          <button className="flex items-center space-x-1 text-gray-900/70 hover:text-gray-900">
                            <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{review.helpful}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-900/70 hover:text-gray-900">
                            <ThumbsDown className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{review.notHelpful}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-900/70 hover:text-gray-900">
                            <Flag className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">Report</span>
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8 sm:mt-12">
                <Button
                  variant="outline"
                  className="border-gray-900/20 text-gray-900 hover:bg-gray-50 px-6 sm:px-8 bg-transparent text-sm sm:text-base"
                >
                  Load More Reviews
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-900/10 p-4 z-40 sm:hidden">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="text-lg font-serif font-light text-gray-900">€39.98</div>
            <div className="text-xs text-gray-900/70">FIFTY SHADES SENSATION MINI WAND</div>
          </div>
          <Link href="https://buy.stripe.com/5kQ4gyc9S9lSdW672y6AM07" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-full font-medium">
              BUY NOW
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 pb-20 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="sm:col-span-2">
              <h3 className="text-xl sm:text-2xl font-serif font-light mb-4 tracking-wide">Royal Caress</h3>
              <p className="text-white/70 leading-relaxed font-light max-w-md text-sm sm:text-base">
                A sanctuary for intimate wellness, celebrating every body and every expression of pleasure.
              </p>
            </div>

            {/* Navigate section removed */}

            <div>
              <h4 className="font-medium mb-4 tracking-wide text-sm sm:text-base">Connect</h4>
              <p className="text-white/70 mb-4 text-sm">support@royalcaress.co.uk</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 mt-8 sm:mt-12 text-center text-white/60 text-xs sm:text-sm font-light">
            <p>© 2025 Royal Caress Ltd — All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
