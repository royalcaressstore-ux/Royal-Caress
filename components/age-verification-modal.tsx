"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function AgeVerificationModal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already verified their age
    const hasVerifiedAge = localStorage.getItem("ageVerified")
    if (!hasVerifiedAge) {
      setIsVisible(true)
    }
  }, [])

  const handleYes = () => {
    localStorage.setItem("ageVerified", "true")
    setIsVisible(false)
  }

  const handleNo = () => {
    window.location.href = "https://www.google.com"
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 p-8 text-center">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-serif font-light text-[#4B1D3F] mb-4 leading-tight">
            Age Verification Required
          </h2>
          <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
            This site contains content intended for adults only (18+).
          </p>
          <p className="text-gray-800 font-medium mt-4 text-lg">Are you 18 or older?</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleYes}
            className="bg-[#B3123D] text-white hover:bg-[#B3123D]/90 px-8 py-3 text-base font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            Yes, I am 18+
          </Button>

          <Button
            onClick={handleNo}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium rounded-full transition-all duration-300 bg-transparent"
          >
            No, I am under 18
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-500 leading-relaxed">
            By clicking "Yes, I am 18+", you confirm that you are of legal age to view adult content in your
            jurisdiction.
          </p>
        </div>
      </div>
    </div>
  )
}
