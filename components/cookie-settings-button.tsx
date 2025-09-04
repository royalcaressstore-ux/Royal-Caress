"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export function CookieSettingsButton() {
  const [showBanner, setShowBanner] = useState(false)

  const handleOpenSettings = () => {
    // Remove the existing consent to show the banner again
    localStorage.removeItem("cookieConsent")
    // Reload the page to show the banner
    window.location.reload()
  }

  return (
    <Button
      onClick={handleOpenSettings}
      variant="ghost"
      size="sm"
      className="text-white/70 hover:text-white hover:bg-white/10 text-xs"
    >
      <Settings className="w-3 h-3 mr-1" />
      Cookie Settings
    </Button>
  )
}
