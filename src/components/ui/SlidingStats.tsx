"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

// Define the Slide type
interface Slide {
  id: number
  number: number
  symbol: string
  text: string
}

// Sample slides data
const slides: Slide[] = [
  { id: 1, number: 8, symbol: "+", text: "projects I have worked on." },
  { id: 3, number: 90, symbol: "K", text: "90K total lines of code written" },
  { id: 4, number: 77, symbol: "L", text: "77 liters of coffee consumed" },
  { id: 5, number: 100, symbol: "+", text: "100+ bugs defeated" },
  { id: 6, number: 0, symbol: "", text: "Zero hours of sleep tracked" },
]

export default function StatsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [displayNumber, setDisplayNumber] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sphereRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  // Function to handle slide change
  const goToSlide = (index: number) => {
    if (isTransitioning || index === activeSlide) return

    setIsTransitioning(true)
    // Reset the display number to start the count-up animation
    setDisplayNumber(0)
    setActiveSlide(index)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match this with the CSS transition duration
  }

  // Auto-scroll to the next slide every 2 seconds
  useEffect(() => {
    // Clear any existing intervals
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      if (!isTransitioning) {
        goToSlide((activeSlide + 1) % slides.length)
      }
    }, 2000)

    // Clean up on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [activeSlide, isTransitioning])

  // Count-up animation effect
  useEffect(() => {
    const currentSlide = slides[activeSlide]
    const targetNumber = currentSlide.number

    // Clear any existing animation
    if (animationRef.current) {
      clearTimeout(animationRef.current)
    }

    // If the target number is 0, just set it directly
    if (targetNumber === 0) {
      setDisplayNumber(0)
      return
    }

    // Calculate animation duration and step size
    const duration = 1500 // 1.5 seconds for the animation
    const steps = 20 // Number of steps in the animation
    const stepDuration = duration / steps
    const increment = targetNumber / steps

    let currentStep = 0

    const animateCount = () => {
      currentStep++

      if (currentStep <= steps) {
        // Calculate the new display number
        const newValue = Math.round(increment * currentStep)
        setDisplayNumber(newValue)

        // Schedule the next step
        animationRef.current = setTimeout(animateCount, stepDuration)
      } else {
        // Ensure we end exactly at the target number
        setDisplayNumber(targetNumber)
      }
    }

    // Start the animation
    animateCount()

    // Clean up on slide change or component unmount
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }
  }, [activeSlide])

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sphereRef.current) return

    const sphere = sphereRef.current
    const rect = sphere.getBoundingClientRect()

    // Calculate mouse position relative to the center of the sphere
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2

    setMousePosition({ x, y })
  }

  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/* 3D Sphere */}
      <div
        ref={sphereRef}
        className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl"
        style={{
          background: "radial-gradient(circle at 30% 30%, #333, #000)",
          boxShadow:
            "0 10px 30px rgba(0, 0, 0, 0.8), inset 0 -5px 15px rgba(255, 255, 255, 0.1), inset 0 5px 15px rgba(255, 255, 255, 0.15)",
          transform: `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
          transition: "transform 0.1s ease-out",
          perspective: "1000px",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Highlight overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 20%, transparent 60%)",
          }}
        />

        {/* Carousel Container */}
        <div className="w-full h-full relative">
          {slides.map((slide, index) => {
            // Calculate position: -1 = left (previous), 0 = center (active), 1 = right (next)
            let position = index - activeSlide

            // Handle wrapping for circular carousel
            if (position < -1) position += slides.length
            if (position > 1) position -= slides.length

            return (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white p-6 transition-transform duration-500 ease-in-out`}
                style={{
                  transform: `translateX(${position * 100}%)`,
                  opacity: position === 0 ? 1 : 0.3,
                }}
              >
                {/* Number and Symbol */}
                <div
                  className="text-5xl font-bold flex items-center justify-center"
                  style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.5)" }}
                >
                  {position === 0 ? displayNumber : slide.number}
                  <span>{slide.symbol}</span>
                </div>

                {/* Text */}
                <div
                  className="text-center mt-2 text-sm opacity-80"
                  style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)" }}
                >
                  {slide.text}
                </div>
              </div>
            )
          })}

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${index === activeSlide ? "bg-white" : "bg-gray-500"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Line Below with glow effect */}
      <div
        className="w-48 h-1 bg-blue-500 mt-4 rounded-full"
        style={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.7)" }}
      />
    </div>
  )
}
