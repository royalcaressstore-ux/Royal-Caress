"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import React from "react"

interface Testimonial {
  quote: string
  name: string
  location: string
  age: number
  rating: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

const TestimonialCard = React.memo(({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) => (
  <div className="w-full flex-shrink-0">
    <Card className="bg-white/95 border-0 shadow-lg rounded-3xl backdrop-blur-sm">
      <CardContent className="p-6 lg:p-8 xl:p-10">
        <div className="flex mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#B3123D] text-[#B3123D]" />
          ))}
        </div>
        <p className="text-[#4B1D3F]/80 mb-4 lg:mb-6 leading-relaxed font-light text-base lg:text-lg italic min-h-[100px] lg:min-h-[120px]">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-[#4B1D3F]">{testimonial.name}</p>
            <p className="text-[#4B1D3F]/60 text-sm">{testimonial.location}</p>
          </div>
          <p className="text-[#4B1D3F]/60 text-sm">Age {testimonial.age}</p>
        </div>
      </CardContent>
    </Card>
  </div>
))

TestimonialCard.displayName = "TestimonialCard"

export const OptimizedTestimonialCarousel = React.memo(({ testimonials }: TestimonialCarouselProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length, isMounted])

  const handlePrevious = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  const handleNext = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const handleIndicatorClick = useCallback((index: number) => {
    setCurrentTestimonial(index)
  }, [])

  const indicators = useMemo(
    () =>
      testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => handleIndicatorClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentTestimonial ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
          }`}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      )),
    [testimonials, currentTestimonial, handleIndicatorClick],
  )

  if (!isMounted) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white mb-4 lg:mb-6 tracking-tight">
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
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
      <div className="text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white mb-4 lg:mb-6 tracking-tight">
          Real Stories. Honest Pleasure.
        </h2>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-6 lg:mb-8">
          The voices of those who've discovered their own rhythm, their own truth
        </p>

        <div className="flex gap-3 mb-4 lg:mb-6">{indicators}</div>

        <div className="flex gap-3 lg:gap-4">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
                isActive={index === currentTestimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

OptimizedTestimonialCarousel.displayName = "OptimizedTestimonialCarousel"
