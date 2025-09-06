"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback, useMemo } from "react"
import dynamic from "next/dynamic"
import React from "react"

// Dynamic imports for client-only components
const CookieConsentBanner = dynamic(
  () => import("@/components/cookie-consent-banner").then((mod) => ({ default: mod.CookieConsentBanner })),
  {
    ssr: false,
    loading: () => null,
  },
)

const AgeVerificationModal = dynamic(
  () => import("@/components/age-verification-modal").then((mod) => ({ default: mod.AgeVerificationModal })),
  {
    ssr: false,
    loading: () => null,
  },
)

const CookieSettingsButton = dynamic(
  () => import("@/components/cookie-settings-button").then((mod) => ({ default: mod.CookieSettingsButton })),
  {
    ssr: false,
    loading: () => <div className="w-24 h-8"></div>,
  },
)

const DynamicVideo = dynamic(
  () => import("@/components/dynamic-video").then((mod) => ({ default: mod.DynamicVideo })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-black/20 flex items-center justify-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    ),
  },
)

const OptimizedTestimonialCarousel = dynamic(
  () =>
    import("@/components/optimized-testimonial-carousel").then((mod) => ({
      default: mod.OptimizedTestimonialCarousel,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white mb-4 lg:mb-6 xl:mb-10 leading-tight tracking-tight">
            Real Stories. Honest Pleasure.
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-6 lg:mb-8">
            The voices of those who've discovered their own rhythm, their own truth
          </p>
        </div>
        <div className="relative">
          <div className="bg-white/95 border-0 shadow-lg rounded-3xl backdrop-blur-sm p-6 lg:p-8 xl:p-10 animate-pulse">
            <div className="h-6 bg-gray-200 rounded mb-4"></div>
            <div className="h-20 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    ),
  },
)

const FeatureSection = React.memo(
  ({
    image,
    alt,
    title,
    description,
    href,
    buttonText = "Explore",
    bgColor = "bg-[#4B1D3F]",
    textColor = "text-white",
  }: {
    image: string
    alt: string
    title: string
    description: string
    href: string
    buttonText?: string
    bgColor?: string
    textColor?: string
  }) => (
    <section className={`py-24 lg:py-32 px-6 lg:px-12 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Mobile Layout - Vertical Stack */}
          <div className="block lg:hidden">
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-serif font-light ${textColor} mb-4 tracking-tight`}>{title}</h2>
            </div>

            <div className="relative mb-8">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F5E1DA] to-[#B3123D]/20 shadow-2xl">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={alt}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover object-center transition-all duration-700 hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B1D3F]/10 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className={`text-lg ${textColor}/90 leading-relaxed font-light`}>{description}</p>
            </div>

            <div className="text-center">
              <Link href={href}>
                <Button
                  size="default"
                  className="bg-white text-[#B3123D] hover:bg-white/90 px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-full"
                >
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Layout - Original */}
          <div className="hidden lg:block text-left order-2 lg:order-1">
            <h2 className={`text-3xl lg:text-4xl xl:text-6xl font-serif font-light ${textColor} mb-4 tracking-tight`}>
              {title}
            </h2>
            <p className={`text-lg ${textColor}/90 leading-relaxed font-light mb-6`}>{description}</p>
            <Link href={href}>
              <Button
                size="default"
                className="bg-white text-[#4B1D3F] hover:bg-white/90 px-8 py-3 text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-full"
              >
                {buttonText}
              </Button>
            </Link>
          </div>

          <div className="hidden lg:block relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F5E1DA] to-[#B3123D]/20 shadow-2xl">
              <Image
                src={image || "/placeholder.svg"}
                alt={alt}
                width={800}
                height={400}
                className="w-full h-auto object-cover object-center transition-all duration-700 hover:scale-105"
                loading="lazy"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4B1D3F]/10 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
)

FeatureSection.displayName = "FeatureSection"

export default function RoyalCaressLanding() {
  const [email, setEmail] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [whisperStep, setWhisperStep] = useState(0)
  const [typewriterText, setTypewriterText] = useState("")
  const [showButton, setShowButton] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const fullTitle = "Because intimacy deserves the finest care."

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return
    const currentScrollY = window.scrollY
    setScrolled(currentScrollY > 100)
    setScrollY(currentScrollY)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll, isMounted])

  useEffect(() => {
    if (!isMounted) return

    // Typewriter animation for title
    let currentIndex = 0
    const typewriterTimer = setInterval(() => {
      if (currentIndex <= fullTitle.length) {
        setTypewriterText(fullTitle.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typewriterTimer)
      }
    }, 80)

    // Whisper animation timers - start after typewriter finishes
    const titleDuration = fullTitle.length * 80 + 500
    const whisperTimers = [
      setTimeout(() => setWhisperStep(1), titleDuration + 500),
      setTimeout(() => setWhisperStep(2), titleDuration + 2000),
      setTimeout(() => setWhisperStep(3), titleDuration + 3500),
      setTimeout(() => setWhisperStep(4), titleDuration + 5000),
      setTimeout(() => setWhisperStep(5), titleDuration + 6500),
      setTimeout(() => setShowButton(true), titleDuration + 8500),
    ]

    return () => {
      clearInterval(typewriterTimer)
      whisperTimers.forEach((timer) => clearTimeout(timer))
    }
  }, [isMounted])

  const testimonials = useMemo(
    () => [
      {
        quote:
          "Royal Caress helped me discover parts of myself I never knew existed. The quality is extraordinary, and I finally feel seen as a whole person.",
        name: "Emma S.",
        location: "Brighton",
        age: 28,
        rating: 5,
      },
      {
        quote:
          "After years of feeling disconnected from my body, these products brought back my confidence. The discretion and elegance make all the difference.",
        name: "Jordan M.",
        location: "Edinburgh",
        age: 34,
        rating: 5,
      },
      {
        quote:
          "As someone who's explored many brands, Royal Caress stands apart. It's not just about the product—it's about feeling understood and celebrated.",
        name: "Priya K.",
        location: "London",
        age: 31,
        rating: 5,
      },
      {
        quote:
          "The inclusive design philosophy is everything. Finally, products that honor my identity and my pleasure without compromise.",
        name: "Alex T.",
        location: "Manchester",
        age: 26,
        rating: 5,
      },
    ],
    [],
  )

  // Calculate wave animation based on scroll
  const waveProgress =
    isMounted && typeof window !== "undefined" ? Math.min(scrollY / (window.innerHeight * 0.8), 1) : 0
  const waveOffset = waveProgress * 100

  const handleVideoPlay = useCallback(() => {
    setIsVideoPlaying(true)
  }, [])

  const handleVideoPause = useCallback(() => {
    setIsVideoPlaying(false)
  }, [])

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#b3123c] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#b3123c]">
      {/* Age Verification Modal */}
      <AgeVerificationModal />

      {/* Cookie Consent Banner */}
      <CookieConsentBanner />

      {/* 1. Hero Section — The Invitation */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Intimate wellness artistry"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        <header className="absolute top-0 w-full z-50 px-6 lg:px-12 h-16 lg:h-20 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/royal-caress-logo.png"
              alt="Royal Caress"
              width={96}
              height={96}
              className="h-24 w-auto"
              priority
              sizes="96px"
            />
          </Link>
        </header>

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 pb-24 lg:pb-32">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-white mb-6 lg:mb-8 xl:mb-10 leading-tight tracking-tight">
              <span className="block min-h-[120px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[240px] xl:min-h-[300px]">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <div className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 lg:mb-10 xl:mb-12 font-light leading-relaxed max-w-2xl">
              <div className="mb-4 lg:mb-6">
                <span
                  className={`inline-block transition-all duration-1000 ease-out ${
                    whisperStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                >
                  Not just a shop —
                </span>
                <span className="mx-2"></span>
                <span
                  className={`inline-block transition-all duration-1000 ease-out delay-300 ${
                    whisperStep >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                >
                  a sanctuary
                </span>
              </div>
              <div className="italic">
                <span
                  className={`inline-block transition-all duration-1000 ease-out delay-500 mr-2 ${
                    whisperStep >= 3 ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                >
                  We're not just a shop, we're a sanctuary
                </span>
                <span
                  className={`inline-block transition-all duration-1000 ease-out delay-700 mr-2 ${
                    whisperStep >= 4 ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                >
                  for your body, your curiosity,
                </span>
                <span
                  className={`inline-block transition-all duration-1000 ease-out delay-1000 ${
                    whisperStep >= 5 ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                >
                  and for you to find your rhythm.
                </span>
              </div>
            </div>

            <div className={`transition-all duration-2000 ease-out ${showButton ? "opacity-100" : "opacity-0"}`}>
              <Button
                size="lg"
                className="bg-[#B3123D] text-[#F5E1DA] hover:bg-[#B3123D]/90 px-8 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-full"
              >
                Begin Your Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Wave Border */}
        <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d={`M0,60 C300,${60 + Math.sin(waveOffset * 0.02) * 20} 600,${60 - Math.sin(waveOffset * 0.02) * 20} 900,${60 + Math.sin(waveOffset * 0.02) * 15} 1200,60 L1200,120 L0,120 Z`}
              fill="#F5E1DA"
              className="transition-all duration-300 ease-out"
              style={{
                transform: `translateY(${20 - waveProgress * 20}px)`,
                opacity: waveProgress,
              }}
            />
          </svg>
        </div>
      </section>

      {/* 2. Designed for Pleasure — The Intention */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-[#4B1D3F] to-[#B3123D]/80">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-[#F5E1DA] mb-8 tracking-tight">
              Designed for Pleasure. Curated for You.
            </h2>
          </div>

          {/* Mobile Layout - Stack vertically with proper spacing */}
          <div className="block lg:hidden space-y-8 mb-16">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5E1DA] to-[#B3123D]/20">
                <Image
                  src="/images/red-rose-product.jpg"
                  alt="Body-Safe Materials"
                  width={640}
                  height={480}
                  className="w-full h-80 object-cover object-center transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <h3 className="text-xl font-serif font-medium text-white mb-3 tracking-tight">Body-Safe Materials</h3>
                  <p className="text-white/90 text-sm font-light leading-relaxed mb-4">
                    Medical-grade, phthalate-free silicone that honors your body's wisdom
                  </p>
                  <Link href="/product/skins-rose-lix">
                    <Button className="bg-white text-[#4B1D3F] hover:bg-white/90 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm">
                      DISCOVER
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5E1DA] to-[#B3123D]/20">
                <Image
                  src="/images/white-rose-gold-product.jpg"
                  alt="Inclusive by Design"
                  width={640}
                  height={480}
                  className="w-full h-80 object-cover object-center transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <h3 className="text-xl font-serif font-medium text-white mb-3 tracking-tight">Inclusive by Design</h3>
                  <p className="text-white/90 text-sm font-light leading-relaxed mb-4">
                    Thoughtfully crafted for all anatomies and identities, celebrating every expression of self
                  </p>
                  <Link href="/product/satisfyer-love-triangle">
                    <Button className="bg-white text-[#4B1D3F] hover:bg-white/90 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm">
                      DISCOVER
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5E1DA] to-[#B3123D]/20">
                <Image
                  src="/images/black-product-hand.jpg"
                  alt="Whisper-Quiet Technology"
                  width={640}
                  height={480}
                  className="w-full h-80 object-cover object-center transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <h3 className="text-xl font-serif font-medium text-white mb-3 tracking-tight">
                    Whisper-Quiet Technology
                  </h3>
                  <p className="text-white/90 text-sm font-light leading-relaxed mb-4">
                    Ultra-quiet devices that operate under 50dB for complete privacy and discretion in any setting
                  </p>
                  <Link href="/product/fifty-shades-mini">
                    <Button className="bg-white text-[#4B1D3F] hover:bg-white/90 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm">
                      DISCOVER
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Original grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-8xl mx-auto mb-16 lg:mb-20">
            <div className="group cursor-pointer h-full">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5E1DA] to-[#B3123D]/20 h-full">
                <Image
                  src="/images/red-rose-product.jpg"
                  alt="Body-Safe Materials"
                  width={640}
                  height={480}
                  className="w-full h-[28rem] object-cover object-center transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-left">
                  <h3 className="text-xl lg:text-2xl font-serif font-medium text-white mb-3 tracking-tight">
                    Body-Safe Materials
                  </h3>
                  <p className="text-white/90 text-sm font-light leading-relaxed max-w-64 mb-6">
                    Medical-grade, phthalate-free silicone that honors your body's wisdom
                  </p>
                  <Link href="/product/skins-rose-lix">
                    <Button className="bg-white text-[#4B1D3F] hover:bg-white/90 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm">
                      DISCOVER
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer h-full">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5E1DA] to-[#B3123D]/20 h-full">
                <Image
                  src="/images/white-rose-gold-product.jpg"
                  alt="Inclusive by Design"
                  width={640}
                  height={480}
                  className="w-full h-[28rem] object-cover object-center transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-left">
                  <h3 className="text-xl lg:text-2xl font-serif font-medium text-white mb-3 tracking-tight">
                    Inclusive by Design
                  </h3>
                  <p className="text-white/90 text-sm font-light leading-relaxed max-w-64 mb-6">
                    Thoughtfully crafted for all anatomies and identities, celebrating every expression of self
                  </p>
                  <Link href="/product/satisfyer-love-triangle">
                    <Button className="bg-white text-[#4B1D3F] hover:bg-white/90 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm">
                      DISCOVER
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer h-full">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5E1DA] to-[#B3123D]/20 h-full">
                <Image
                  src="/images/black-product-hand.jpg"
                  alt="Whisper-Quiet Technology"
                  width={640}
                  height={480}
                  className="w-full h-[28rem] object-cover object-center transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-left">
                  <h3 className="text-xl lg:text-2xl font-serif font-medium text-white mb-3 tracking-tight">
                    Whisper-Quiet Technology
                  </h3>
                  <p className="text-white/90 text-sm font-light leading-relaxed max-w-64 mb-6">
                    Ultra-quiet devices that operate under 50dB for complete privacy and discretion in any setting
                  </p>
                  <Link href="/product/fifty-shades-mini">
                    <Button className="bg-white text-[#4B1D3F] hover:bg-white/90 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm">
                      DISCOVER
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl lg:text-2xl text-[#F5E1DA]/90 leading-relaxed font-light max-w-4xl mx-auto">
              Our pleasure products aren't just toys, they're carefully crafted companions designed to awaken your
              desires, inspire your rituals, and spark your curiosity. Experience intimacy that feels personal,
              inclusive pleasure, unapologetically yours.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Hero Video — The Experience */}
      <section className="relative py-0 px-0 bg-[#ebadbde] overflow-hidden">
        <div className="relative w-full h-[70vh]">
          <DynamicVideo
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4948-tdrdBtjBfQRCSiZmXBBSMGIusimkRq.mp4"
            className="w-full h-full"
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          />
        </div>
      </section>

      {/* 4. Featured Product — The Icon */}
      <FeatureSection
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Wyo2ZJQlqb7bToHrIrLzckaTCwmt3d.png"
        alt="Premium intimate wellness product"
        title="Savor Every Sensation"
        description="A rose with a rotating tongue that awakens new sensations. Experience oral pleasure reimagined with whisper-quiet technology and body-safe materials that honor your desires."
        href="/product/fifty-shades-mini"
      />

      {/* 5. Testimonials — The Voices */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Branding%20Royal%20Caress_page-0003.jpg-ZBd0mBS8obhnxOEpvizromLVZMoTLV.jpeg"
            alt="Testimonials background"
            fill
            className="object-cover object-center"
            loading="lazy"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto">
          <OptimizedTestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* 6. Experience Pure Bliss — The Icon */}
      <FeatureSection
        image="/images/rose-lix-instructions.png"
        alt="Rose Lix Instructions"
        title="Experience Pure Bliss"
        description="A rose with a rotating tongue that awakens new sensations. Experience oral pleasure reimagined with whisper-quiet technology and body-safe materials that honor your desires."
        href="/product/skins-rose-lix"
        bgColor="bg-rose-800"
      />

      {/* 7. Realize Your Desires — The Vision */}
      <section className="relative py-32 lg:py-48 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/realize-desejos.jpg"
            alt="Realize seus desejos"
            fill
            className="object-cover object-center"
            loading="lazy"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto h-full flex items-center justify-center">
          <div className="text-left">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white tracking-tight">
              realize your desires
            </h2>
          </div>
        </div>
      </section>

      {/* 8. Connected Intimacy — The Innovation */}
      <FeatureSection
        image="/images/love-triangle-lifestyle.jpg"
        alt="Premium intimate wellness product"
        title="Connected Intimacy"
        description="Revolutionary app-controlled couples vibrator with innovative triangular design. Experience unlimited customization through Bluetooth connectivity, music sync, and remote control for exciting long-distance play."
        href="/product/satisfyer-love-triangle"
        bgColor="bg-gray-200"
        textColor="text-gray-800"
      />

      {/* 9. Newsletter — The Next Chapter */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#b3123c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#F5E1DA] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#B3123D] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-white mb-6 tracking-tight">
            Want More Than Just a Product?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Get intimacy insights, slow pleasure rituals and private offers — straight to your inbox.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-md rounded-full p-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-0 text-white placeholder:text-white/60 text-lg px-6 py-4 focus:ring-0 flex-1"
              />
              <Button className="bg-white text-[#4B1D3F] hover:bg-white/90 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105">
                Join the Circle
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer — The Whisper */}
      <footer className="py-16 px-6 lg:px-12 bg-[#0B0B0B] text-white">
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
