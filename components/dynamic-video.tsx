"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface DynamicVideoProps {
  src: string
  poster?: string
  className?: string
  onPlay?: () => void
  onPause?: () => void
}

export function DynamicVideo({ src, poster, className, onPlay, onPause }: DynamicVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isLoaded, isMounted])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
      onPlay?.()
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
      onPause?.()
    }
  }

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        handlePlay()
      } else {
        handlePause()
      }
    }
  }

  if (!isMounted) {
    return (
      <div className={className}>
        <div className="w-full h-full bg-black/20 flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={className}>
      {!isLoaded ? (
        <div className="w-full h-full bg-black/20 flex items-center justify-center">
          {poster && (
            <Image
              src={poster || "/placeholder.svg"}
              alt="Video thumbnail"
              fill
              className="object-cover"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsLoaded(true)}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="none"
            onClick={handleVideoClick}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 transition-opacity duration-500">
              <div className="text-center mb-8">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-tight px-4">
                  Because intimacy deserves the <span className="font-bold">finest care.</span>
                </p>
              </div>

              <button
                onClick={handlePlay}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
