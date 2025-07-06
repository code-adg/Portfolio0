"use client"
import { useEffect, useState, useRef, useCallback } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  life: number // Remaining lifespan in frames
  vx: number // Horizontal velocity for twinkle/drift
  vy: number // Vertical velocity for twinkle/drift
  color: [number, number, number] // RGB color
}

const MAX_PARTICLES = 70 // Max particles on screen
const PARTICLE_LIFESPAN_FRAMES = 30 // How many frames a particle lives (approx 0.5s at 60fps)
const PARTICLES_PER_MOVE_EVENT = 2 // Number of particles to generate on mouse move
const BASE_PARTICLE_SIZE = 3 // Base size in px
const GLITTER_COLOR_RGB: [number, number, number] = [34, 211, 238] // Tailwind's cyan-400

export default function SmartCursor() {
  const [particles, setParticles] = useState<Particle[]>([])
  const cursorPosRef = useRef({ x: 0, y: 0 })
  const animationFrameIdRef = useRef<number | null>(null)
  const lastParticleTimeRef = useRef(0)
  const [isPointerHidden, setIsPointerHidden] = useState(false)

  useEffect(() => {
    document.body.style.cursor = "none"
    const handleMouseEnter = () => setIsPointerHidden(false)
    const handleMouseLeave = () => setIsPointerHidden(true)

    document.documentElement.addEventListener("mouseenter", handleMouseEnter)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.body.style.cursor = "auto"
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, [])

  const addParticle = useCallback((x: number, y: number) => {
    const newParticle: Particle = {
      id: Math.random(), // Simple ID, consider uuid for more robustness if needed
      x: x + (Math.random() - 0.5) * 10, // Slight spread
      y: y + (Math.random() - 0.5) * 10,
      size: BASE_PARTICLE_SIZE + Math.random() * 2,
      opacity: 0.5 + Math.random() * 0.5, // Varying initial opacity for glitter
      life: PARTICLE_LIFESPAN_FRAMES,
      vx: (Math.random() - 0.5) * 0.5, // Slow drift
      vy: (Math.random() - 0.5) * 0.5,
      color: GLITTER_COLOR_RGB,
    }
    setParticles((prev) => {
      const updated = [...prev, newParticle]
      if (updated.length > MAX_PARTICLES) {
        return updated.slice(updated.length - MAX_PARTICLES) // Keep only the newest
      }
      return updated
    })
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorPosRef.current = { x: e.clientX, y: e.clientY }
      const now = performance.now()
      // Throttle particle generation slightly
      if (now - lastParticleTimeRef.current > 16) {
        // Roughly 60fps
        for (let i = 0; i < PARTICLES_PER_MOVE_EVENT; i++) {
          addParticle(e.clientX, e.clientY)
        }
        lastParticleTimeRef.current = now
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [addParticle])

  useEffect(() => {
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles
          .map((p) => ({
            ...p,
            life: p.life - 1,
            opacity: (p.life / PARTICLE_LIFESPAN_FRAMES) * p.opacity, // Fade out
            x: p.x + p.vx,
            y: p.y + p.vy,
            size: Math.max(0, p.size - 0.05), // Shrink slightly
          }))
          .filter((p) => p.life > 0 && p.opacity > 0.01),
      )
      animationFrameIdRef.current = requestAnimationFrame(animateParticles)
    }

    animationFrameIdRef.current = requestAnimationFrame(animateParticles)
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, [])

  if (isPointerHidden && particles.length === 0) {
    return null
  }

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: "50%", // Small circles for glitter
            backgroundColor: `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${p.opacity})`,
            boxShadow: `0 0 ${Math.max(2, p.size * 0.8)}px ${Math.max(1, p.size * 0.4)}px rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${p.opacity * 0.7})`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9998, // High z-index, but allow modals/popups to be on top
            transition: "opacity 0.1s linear, transform 0.1s linear", // Smooth out minor jitters
          }}
        />
      ))}
    </>
  )
}
