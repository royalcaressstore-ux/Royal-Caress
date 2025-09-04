"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { X, Settings, Shield, BarChart3, Target, Cookie } from "lucide-react"
import Link from "next/link"
import { isBrowser } from "@/utils/isBrowser"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  personalization: boolean
}

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    personalization: false,
  })

  useEffect(() => {
    // Check if user has already made cookie choices
    if (isBrowser()) {
      const cookieConsent = localStorage.getItem("cookieConsent")
      if (!cookieConsent) {
        setIsVisible(true)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    }
    saveCookiePreferences(allAccepted)
  }

  const handleAcceptSelected = () => {
    saveCookiePreferences(preferences)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
    }
    saveCookiePreferences(onlyNecessary)
  }

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    if (isBrowser()) {
      localStorage.setItem(
        "cookieConsent",
        JSON.stringify({
          preferences: prefs,
          timestamp: new Date().toISOString(),
          version: "1.0",
        }),
      )
      setIsVisible(false)
    }

    // Here you would typically initialize your analytics/marketing scripts
    // based on the user's preferences
    if (prefs.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      console.log("Analytics cookies enabled")
    }
    if (prefs.marketing) {
      // Initialize marketing cookies (e.g., Facebook Pixel, Google Ads)
      console.log("Marketing cookies enabled")
    }
    if (prefs.personalization) {
      // Initialize personalization cookies
      console.log("Personalization cookies enabled")
    }
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return // Cannot disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: value }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/20 backdrop-blur-sm">
      <div className="w-full max-w-4xl mx-4 mb-4">
        <Card className="bg-white border-0 shadow-2xl rounded-2xl overflow-hidden">
          {!showDetails ? (
            // Simple Banner View
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Cookie className="w-6 h-6 text-[#B3123D]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Privacy Matters</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    We use cookies to enhance your browsing experience, provide personalized content, and analyze our
                    traffic. You can choose which cookies to accept below.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        onClick={handleAcceptAll}
                        className="bg-[#B3123D] text-white hover:bg-[#B3123D]/90 px-6 py-2 text-sm font-medium rounded-full transition-all duration-300"
                      >
                        Accept All
                      </Button>

                      <Button
                        onClick={handleRejectAll}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 text-sm font-medium rounded-full bg-transparent"
                      >
                        Reject All
                      </Button>

                      <Button
                        onClick={() => setShowDetails(true)}
                        variant="ghost"
                        className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium rounded-full"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Customize
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Link href="/privacy" className="hover:text-gray-700 underline">
                        Privacy Policy
                      </Link>
                      <span>•</span>
                      <Link href="/cookies" className="hover:text-gray-700 underline">
                        Cookie Policy
                      </Link>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleRejectAll}
                  className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </CardContent>
          ) : (
            // Detailed Preferences View
            <>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-[#B3123D]" />
                    Cookie Preferences
                  </CardTitle>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    aria-label="Go back"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Choose which cookies you'd like to accept. You can change these settings at any time.
                </p>
              </CardHeader>

              <CardContent className="space-y-6 max-h-96 overflow-y-auto">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-3 flex-1">
                    <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Necessary Cookies</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Essential for the website to function properly. These cannot be disabled as they are required
                        for basic site functionality, security, and accessibility.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        Examples: Session management, security tokens, accessibility preferences
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-sm text-gray-500">Always Active</span>
                    <Switch checked={true} disabled className="opacity-50" />
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-start gap-3 flex-1">
                    <BarChart3 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Help us understand how visitors interact with our website by collecting and reporting
                        information anonymously. This helps us improve our site performance.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        Examples: Google Analytics, page views, bounce rate, traffic sources
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => updatePreference("analytics", checked)}
                  />
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-start gap-3 flex-1">
                    <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Marketing Cookies</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Used to track visitors across websites to display relevant advertisements and measure the
                        effectiveness of our marketing campaigns.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        Examples: Facebook Pixel, Google Ads, retargeting pixels, conversion tracking
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => updatePreference("marketing", checked)}
                  />
                </div>

                {/* Personalization Cookies */}
                <div className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-start gap-3 flex-1">
                    <Cookie className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Personalization Cookies</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Remember your preferences and settings to provide a more personalized experience tailored to
                        your interests and behavior.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        Examples: Language preferences, theme settings, recommended products, user preferences
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.personalization}
                    onCheckedChange={(checked) => updatePreference("personalization", checked)}
                  />
                </div>
              </CardContent>

              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
                  <div className="text-xs text-gray-500 leading-relaxed">
                    <p>You can withdraw your consent at any time by visiting our Cookie Settings.</p>
                    <p className="mt-1">
                      For more information, read our{" "}
                      <Link href="/privacy" className="text-[#B3123D] hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/cookies" className="text-[#B3123D] hover:underline">
                        Cookie Policy
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      onClick={handleAcceptSelected}
                      className="bg-[#B3123D] text-white hover:bg-[#B3123D]/90 px-6 py-2 text-sm font-medium rounded-full transition-all duration-300"
                    >
                      Save Preferences
                    </Button>
                    <Button
                      onClick={handleAcceptAll}
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 text-sm font-medium rounded-full bg-transparent"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  )
}
