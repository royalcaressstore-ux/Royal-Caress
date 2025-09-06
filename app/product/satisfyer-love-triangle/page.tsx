"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Shield,
  Package,
  Star,
  ChevronDown,
  ChevronUp,
  Play,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Menu,
  X,
  Smartphone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function SatisfyerLoveTriangleProductPage() {
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
    "/images/love-triangle-1.jpg",
    "/images/love-triangle-2.jpg",
    "/images/love-triangle-3.jpg",
    "/images/love-triangle-4.jpg",
    "/images/love-triangle-5.jpg",
  ]

  const specifications = [
    { label: "Product Name", value: "Satisfyer App Enabled Love Triangle - White" },
    { label: "Category", value: "App-controlled couples vibrator" },
    { label: "Technology", value: "Bluetooth connectivity with app control" },
    { label: "Materials", value: "Body-safe silicone with ABS plastic" },
    { label: "Dimensions", value: "11.5 cm x 8.2 cm x 3.5 cm" },
    { label: "Weight", value: "165 grams" },
    { label: "Colour", value: "Pure white with silver accents" },
    { label: "Battery", value: "Rechargeable lithium-ion via USB" },
    { label: "Runtime", value: "60 minutes continuous use" },
    { label: "Charging Time", value: "90 minutes for full charge" },
    { label: "Vibration Modes", value: "Unlimited via app + 12 preset patterns" },
    { label: "Water Resistance", value: "IPX7 waterproof" },
    { label: "Connectivity", value: "Bluetooth 4.0 up to 10m range" },
  ]

  const reviews = [
    {
      id: 1,
      name: "Alex & Jordan",
      location: "London",
      age: "29 & 31",
      rating: 5,
      date: "1 week ago",
      title: "Revolutionary App Control - Perfect for Couples",
      content:
        "The Love Triangle has completely transformed our intimate moments! The app control is incredibly intuitive and allows for so much creativity. Being able to control each other's pleasure remotely adds an exciting new dimension to our relationship. The triangular design fits perfectly and stays in place during use. The vibrations are powerful yet refined, and the app offers endless customization. Perfect for both together time and when we're apart.",
      helpful: 45,
      notHelpful: 1,
      verified: true,
      customerSince: "Customers since 2024",
    },
    {
      id: 2,
      name: "Maya S.",
      location: "Manchester",
      age: 27,
      rating: 5,
      date: "2 weeks ago",
      title: "Innovative Design and Amazing App Features",
      content:
        "I was initially curious about the triangular shape, but it's genius! It provides stimulation in all the right places and the app control opens up so many possibilities. My partner and I love being able to create custom patterns and even sync it to music. The white design is elegant and modern. The battery life is good and it charges quickly. The app is user-friendly and connects reliably. Highly recommend for adventurous couples!",
      helpful: 38,
      notHelpful: 0,
      verified: true,
      customerSince: "Customer since 2024",
    },
    {
      id: 3,
      name: "Chris M.",
      location: "Edinburgh",
      age: 33,
      rating: 5,
      date: "3 weeks ago",
      title: "Perfect for Long-Distance Relationships",
      content:
        "As someone in a long-distance relationship, the Love Triangle has been a game-changer. The app allows my partner to control it from anywhere in the world, making our video calls much more intimate and exciting. The triangular design is comfortable and effective, providing great stimulation. The build quality is excellent and it's completely waterproof. The app has so many features - custom patterns, music sync, even video chat integration. Worth every penny!",
      helpful: 42,
      notHelpful: 2,
      verified: true,
      customerSince: "Customer since 2023",
    },
    {
      id: 4,
      name: "Sam & Riley",
      location: "Bristol",
      age: "26 & 28",
      rating: 4,
      date: "1 month ago",
      title: "Great Product with Minor App Issues",
      content:
        "The Love Triangle itself is fantastic - great design, powerful vibrations, and comfortable to wear. The triangular shape is unique and very effective. However, we've had occasional connectivity issues with the app, though they usually resolve quickly. When it works (which is 95% of the time), it's absolutely amazing. The ability to create custom patterns and control remotely is incredible. Just wish the app was a bit more stable, but overall highly recommend.",
      helpful: 29,
      notHelpful: 3,
      verified: true,
      customerSince: "Customers since 2024",
    },
    {
      id: 5,
      name: "Taylor K.",
      location: "Birmingham",
      age: 30,
      rating: 5,
      date: "6 weeks ago",
      title: "Sleek Design Meets Cutting-Edge Technology",
      content:
        "The Satisfyer Love Triangle is beautifully designed and incredibly functional. The white color is elegant and the triangular shape is both aesthetically pleasing and highly effective. The app control is intuitive and offers endless possibilities for customization. I love being able to sync it to music and create personalized patterns. The waterproof feature is great for bath time fun. The battery life is decent and it charges relatively quickly. A premium product that delivers on all fronts!",
      helpful: 36,
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
    <div className="min-h-screen bg-[#E1B88B] overflow-x-hidden">
      {/* Floating Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#E1B88B]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Replace text logo with image logo */}
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
                <div className="w-4 h-4 rounded-full bg-white border-2 border-white/30"></div>
                <span className="text-xs font-medium text-white">PURE WHITE</span>
                <span className="text-sm font-medium text-white">€52.99</span>
              </div>

              <Link href="https://buy.stripe.com/5kQ4gyc9S9lSdW672y6AM07" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#E1B88B] hover:bg-white/90 px-3 py-1.5 rounded-full font-medium text-xs">
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
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-white/30"></div>
                  <span className="text-xs font-medium text-white">PURE WHITE</span>
                  <span className="text-sm font-medium text-white">€52.99</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 w-full">
          <Image
            src="/images/love-triangle-hero-hands.jpg"
            alt="Love Triangle Hero"
            fill
            className="object-cover object-center w-full h-full"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#E1B88B]/20"></div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-8 sm:py-12 lg:py-24 bg-[#E1B88B] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-serif font-light mb-4 sm:mb-6 lg:mb-8 tracking-tight text-white">
              App-Enabled Innovation
            </h2>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-light text-white/90">
              The Satisfyer Love Triangle revolutionizes couples' intimacy with cutting-edge app control technology.
              Couples can experience unparalleled experiences with this revolutionary app-enabled device, which combines
              cutting-edge Bluetooth technology with an innovative triangular design. Control vibrations remotely,
              create custom patterns, sync to music, and explore unlimited possibilities through the intuitive Satisfyer
              Connect app. Perfect for both intimate moments together and exciting long-distance play.
            </p>
          </div>
        </div>
      </section>

      {/* Product Image Section with App Interface */}
      <section className="relative overflow-hidden bg-[#E1B88B] py-8 sm:py-16 lg:py-24">
        {/* Mobile Layout */}
        <div className="block lg:hidden px-4 max-w-full">
          <div className="space-y-6 w-full">
            <div className="relative h-[50vh] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/love-triangle-app-interface.jpg"
                alt="Love Triangle with App Interface"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <div className="relative h-[40vh] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/love-triangle-app-control.jpg"
                alt="Love Triangle App Control"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <div className="relative h-[50vh] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/love-triangle-app-vertical.jpg"
                alt="Love Triangle App Vertical"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 h-[80vh]">
              {/* First image - spans full height */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/love-triangle-app-interface.jpg"
                  alt="Love Triangle with App Interface"
                  fill
                  className="object-cover object-center"
                  sizes="33vw"
                />
              </div>

              {/* Second image - spans full height */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/love-triangle-app-control.jpg"
                  alt="Love Triangle App Control"
                  fill
                  className="object-cover object-center"
                  sizes="33vw"
                />
              </div>

              {/* Third image - vertical orientation, spans full height */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/love-triangle-app-vertical.jpg"
                  alt="Love Triangle App Vertical"
                  fill
                  className="object-cover object-center"
                  sizes="33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-8 sm:py-16 lg:py-24 bg-[#E1B88B] overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-xs sm:text-sm font-medium tracking-[0.2em] text-white/80 uppercase mb-6">
              SMART FEATURES
            </h2>
          </div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="block md:hidden space-y-6 w-full max-w-full">
            <div className="text-center p-4 w-full">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-3 tracking-wide">APP CONTROL</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                Full smartphone control with
                <br />
                unlimited customization options
              </p>
            </div>

            <div className="text-center p-4 w-full">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-3 tracking-wide">TRIANGULAR DESIGN</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                Innovative shape for enhanced
                <br />
                stimulation and comfortable wear
              </p>
            </div>

            <div className="text-center p-4 w-full">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-3 tracking-wide">BLUETOOTH 4.0</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                Reliable wireless connection
                <br />
                up to 10 meters range
              </p>
            </div>

            <div className="text-center p-4 w-full">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-3 tracking-wide">MUSIC SYNC</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                Vibrations sync to your favorite
                <br />
                music for rhythmic pleasure
              </p>
            </div>
          </div>

          {/* Desktop Layout - Grid */}
          <div className="hidden md:grid grid-cols-2 gap-0">
            <div className="border-r border-b border-white/20 p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">APP CONTROL</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Full smartphone control with
                <br />
                unlimited customization options
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">TRIANGULAR DESIGN</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Innovative shape for enhanced
                <br />
                stimulation and comfortable wear
              </p>
            </div>

            <div className="border-r border-white/20 p-8 lg:p-12 text-center">
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
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">BLUETOOTH 4.0</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Reliable wireless connection
                <br />
                up to 10 meters range
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
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-4 tracking-wide">MUSIC SYNC</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Vibrations sync to your favorite
                <br />
                music for rhythmic pleasure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section id="specifications" className="py-8 sm:py-12 lg:py-20 bg-[#E1B88B] overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side - Product Image */}
            <div className="relative order-1 lg:order-1">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 sm:p-6 lg:p-8">
                <Image
                  src="/images/love-triangle-1.jpg"
                  alt="Love Triangle details"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right side - Specifications */}
            <div className="order-2 lg:order-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-white mb-4 sm:mb-6 lg:mb-8 tracking-tight">
                PRODUCT SPECIFICATIONS
              </h2>

              {/* Specifications */}
              <div className="mb-6 sm:mb-8">
                <button
                  onClick={() => toggleSection("specifications")}
                  className="w-full flex items-center justify-between py-3 sm:py-4 border-b border-white/20 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-white tracking-wide">
                    TECHNICAL SPECIFICATIONS
                  </span>
                  {expandedSection === "specifications" ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </button>

                {expandedSection === "specifications" && (
                  <div className="py-4 sm:py-6 space-y-3 sm:space-y-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <span className="text-white/70 font-medium text-sm sm:text-base flex-1 pr-4">
                          {spec.label}:
                        </span>
                        <span className="text-white font-medium text-right text-sm sm:text-base flex-1">
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
                  className="w-full flex items-center justify-between py-3 sm:py-4 border-b border-white/20 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-white tracking-wide">PACKAGE CONTENTS</span>
                  {expandedSection === "content" ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </button>

                {expandedSection === "content" && (
                  <div className="py-4 sm:py-6">
                    <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
                      <li>• Satisfyer App Enabled Love Triangle - White</li>
                      <li>• USB charging cable</li>
                      <li>• Quick start guide</li>
                      <li>• Satisfyer Connect app download instructions</li>
                      <li>• Premium storage bag</li>
                      <li>• Care and maintenance guide</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* App Features */}
              <div className="mb-6 sm:mb-8">
                <button
                  onClick={() => toggleSection("app-features")}
                  className="w-full flex items-center justify-between py-3 sm:py-4 border-b border-white/20 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-white tracking-wide">APP FEATURES</span>
                  {expandedSection === "app-features" ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </button>

                {expandedSection === "app-features" && (
                  <div className="py-4 sm:py-6">
                    <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
                      <li>• Remote control from anywhere in the world</li>
                      <li>• Create and save custom vibration patterns</li>
                      <li>• Music synchronization feature</li>
                      <li>• Video chat integration for long-distance couples</li>
                      <li>• Partner control and sharing features</li>
                      <li>• Ambient sound reactive modes</li>
                      <li>• Scheduled sessions and alarms</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Warranty */}
              <div className="mb-6 sm:mb-8">
                <button
                  onClick={() => toggleSection("warranty")}
                  className="w-full flex items-center justify-between py-3 sm:py-4 border-b border-white/20 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-white tracking-wide">WARRANTY</span>
                  {expandedSection === "warranty" ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </button>

                {expandedSection === "warranty" && (
                  <div className="py-4 sm:py-6 text-white/80 text-sm sm:text-base">
                    <p className="mb-4">
                      Royal Caress stands behind the quality of every product. Your Satisfyer App Enabled Love Triangle
                      comes with a comprehensive 2-year warranty covering manufacturing defects and app support.
                    </p>
                    <p>
                      Our discreet customer service team is available to assist with any questions or concerns about
                      your purchase and app functionality.
                    </p>
                  </div>
                )}
              </div>

              {/* Care Instructions */}
              <div>
                <button
                  onClick={() => toggleSection("care")}
                  className="w-full flex items-center justify-between py-3 sm:py-4 border-b border-white/20 text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-white tracking-wide">CARE & SAFETY</span>
                  {expandedSection === "care" ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </button>

                {expandedSection === "care" && (
                  <div className="py-4 sm:py-6 text-white/80 text-sm sm:text-base">
                    <p className="mb-4">
                      Clean before and after each use with warm water and mild soap or toy cleaner. Being IPX7
                      waterproof, it can be safely used in water. Store in the provided bag in a cool, dry place.
                    </p>
                    <p>
                      Use only water-based lubricants. Keep the device charged and update the app regularly for the best
                      experience.
                    </p>
                  </div>
                )}
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
                <div className="mb-4 px-2">
                  <div className="bg-gradient-to-br from-[#fef7f4] to-[#fee5d9] rounded-2xl p-4 aspect-square flex items-center justify-center max-w-full">
                    <Image
                      src={productImages[selectedImage] || "/placeholder.svg"}
                      alt="Product main view"
                      width={300}
                      height={300}
                      className="w-full h-auto max-w-[280px]"
                      sizes="(max-width: 768px) 90vw, 300px"
                    />
                  </div>
                </div>

                <div className="flex space-x-2 overflow-x-auto pb-2 px-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 ${
                        selectedImage === index ? "border-[#fee5d9]" : "border-transparent"
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
                  <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#fef7f4] border-2 border-dashed border-[#fee5d9] flex items-center justify-center flex-shrink-0">
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 text-[#f5c5a0]" />
                  </button>
                </div>
              </div>

              {/* Desktop Gallery */}
              <div className="hidden sm:flex gap-6">
                <div className="flex flex-col space-y-4">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${
                        selectedImage === index ? "border-[#fee5d9]" : "border-transparent"
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
                  <button className="w-20 h-20 rounded-xl bg-[#fef7f4] border-2 border-dashed border-[#fee5d9] flex items-center justify-center">
                    <Play className="w-6 h-6 text-[#f5c5a0]" />
                  </button>
                </div>

                <div className="flex-1">
                  <div className="bg-gradient-to-br from-[#fef7f4] to-[#fee5d9] rounded-3xl p-8 aspect-square flex items-center justify-center">
                    <Image
                      src={productImages[selectedImage] || "/placeholder.svg"}
                      alt="Product main view"
                      width={500}
                      height={500}
                      className="w-full h-auto max-w-md"
                      sizes="(max-width: 1024px) 50vw, 500px"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Product Info */}
            <div className="order-2 lg:order-2">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-2xl sm:text-3xl font-serif font-light text-[#E1B88B] tracking-tight flex-1 pr-4">
                  SATISFYER APP ENABLED LOVE TRIANGLE
                </h1>
                <button className="p-2 rounded-full hover:bg-[#D4A574] transition-colors">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#E1B88B]/50" />
                </button>
              </div>

              <p className="text-[#E1B88B] font-medium mb-4 uppercase tracking-wide text-xs sm:text-sm font-medium">
                App-Controlled Couples Vibrator
              </p>

              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i < 4 ? "fill-[#E1B88B] text-[#E1B88B]" : "text-[#E1B88B]/20"}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-[#E1B88B]/70 text-xs sm:text-sm">4.6 (73 reviews)</span>
              </div>

              {/* Color Display */}
              <div className="mb-6 sm:mb-8">
                <p className="text-[#E1B88B] font-medium mb-4 flex items-center text-sm sm:text-base">
                  <span className="w-4 h-4 rounded-full mr-2 bg-white border border-[#E1B88B]"></span>
                  PURE WHITE WITH SILVER ACCENTS
                </p>
              </div>

              <div className="text-2xl sm:text-3xl font-serif font-light text-[#E1B88B] mb-6 sm:mb-8">€52.99</div>

              {/* Buy Now Button */}
              <div className="mb-6 sm:mb-8">
                <Link href="https://buy.stripe.com/5kQ4gyc9S9lSdW672y6AM07" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#E1B88B] text-white hover:bg-[#D4A574] py-3 sm:py-4 rounded-full font-medium text-sm sm:text-lg">
                    BUY NOW
                  </Button>
                </Link>
              </div>

              {/* Product Description */}
              <div className="mb-6 sm:mb-8">
                <p className="text-[#E1B88B]/80 leading-relaxed text-sm sm:text-base">
                  The Satisfyer App Enabled Love Triangle revolutionizes couples' intimacy with cutting-edge app control
                  technology. The innovative triangular design provides enhanced stimulation while Bluetooth
                  connectivity offers unlimited customization through the Satisfyer Connect app. Perfect for both
                  intimate moments together and exciting long-distance play.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1B88B]" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-[#E1B88B]">WARRANTY</p>
                    <p className="text-xs text-[#E1B88B]/70">2-year coverage</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1B88B]" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-[#E1B88B]">DISCREET SHIPPING</p>
                    <p className="text-xs text-[#E1B88B]/70">Unmarked packaging</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1B88B]" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-[#E1B88B]">APP CONTROL</p>
                    <p className="text-xs text-[#E1B88B]/70">Unlimited customization</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1B88B]" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-[#E1B88B]">IPX7 WATERPROOF</p>
                    <p className="text-xs text-[#E1B88B]/70">Safe for water use</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-[#E1B88B] overflow-x-hidden">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-serif font-light text-white mb-4 sm:mb-6 tracking-tight">
              reviews
            </h2>

            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 ${i < 4 ? "fill-white text-white" : "text-white/20"}`}
                  />
                ))}
              </div>
              <span className="ml-2 sm:ml-3 text-base sm:text-lg font-medium text-white">4.6</span>
              <span className="ml-1 sm:ml-2 text-white/70 text-xs sm:text-sm lg:text-base">73 Reviews</span>
            </div>

            <p className="text-white/70 mb-6 sm:mb-8 text-xs sm:text-sm lg:text-base">
              69 out of 73 (95%) reviewers recommend this product
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-white/10 backdrop-blur-sm border-0 shadow-sm rounded-2xl max-w-full">
                <CardContent className="p-3 sm:p-4 lg:p-8">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? "fill-white text-white" : "text-white/20"}`}
                          />
                        ))}
                        <span className="ml-2 text-xs text-white/70">{review.date}</span>
                      </div>
                      <h4 className="font-medium text-white mb-1 text-sm sm:text-base leading-tight">{review.title}</h4>
                    </div>
                    {review.verified && (
                      <Badge variant="outline" className="border-white/30 text-white text-xs ml-2 flex-shrink-0">
                        Verified
                      </Badge>
                    )}
                  </div>

                  <p className="text-white/80 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{review.content}</p>

                  <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs sm:text-sm text-white/70">
                      <span className="font-medium">{review.name}</span>
                      <span className="mx-2">•</span>
                      <span>{review.location}</span>
                    </div>

                    <div className="flex items-center space-x-3 text-xs sm:text-sm">
                      <span className="text-white/70">Helpful?</span>
                      <button className="flex items-center space-x-1 text-white/70 hover:text-white">
                        <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{review.helpful}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-white/70 hover:text-white">
                        <ThumbsDown className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{review.notHelpful}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-white/70 hover:text-white">
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
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E1B88B]/10 p-4 z-40 sm:hidden w-full max-w-full">
        <div className="flex items-center space-x-4 w-full max-w-full">
          <div className="flex-1">
            <div className="text-lg font-serif font-light text-[#E1B88B]">€52.99</div>
            <div className="text-xs text-[#E1B88B]/70">SATISFYER LOVE TRIANGLE</div>
          </div>
          <Link href="https://buy.stripe.com/5kQ4gyc9S9lSdW672y6AM07" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#E1B88B] text-white hover:bg-[#D4A574] px-8 py-3 rounded-full font-medium">
              BUY NOW
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#E1B88B] text-white py-12 sm:py-16 pb-20 sm:pb-16">
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
