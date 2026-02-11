'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Hero parallax layers - Aggressive depth
    gsap.to('.hero-bg-layer', {
      scale: 1.2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    })

    gsap.to('.hero-title', {
      y: 100,
      scale: 1.1, // Expands into the user's face
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '40% top', // Fades out faster
        scrub: 0.5, // Snappier
      }
    })

    gsap.to('.hero-statement', {
      x: -50, // Slides off to the side chaos
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '50% top',
        scrub: 0.5,
      }
    })

    // Philosophy/Manifesto - Hard Stagger from bottom
    gsap.fromTo('.philosophy-item',
      { y: 150, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1, // Fast rapid fire
        scrollTrigger: {
          trigger: '.philosophy',
          start: 'top 80%', // Triggers earlier
          end: 'top 40%',
          scrub: 1,
        }
      }
    )

    // About/Stats - Explosion effect
    gsap.fromTo('.about-card',
      { scale: 0.8, opacity: 0 }, // Less aggressive initial scale to prevent layout shifts
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out", // Smoother ease
        scrollTrigger: {
          trigger: '.about',
          start: 'top 85%', // Navigate earlier
          toggleActions: "play none none none" // Once visible, stay visible. Safer.
        }
      }
    )

    // Experience/War Path - Hard hits from sides
    gsap.utils.toArray('.experience-item').forEach((item, i) => {
      gsap.fromTo(item,
        { x: i % 2 === 0 ? -150 : 150, opacity: 0 }, // Further out
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out", // Hard deceleration
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Writing/Intel - Slide up fast
    gsap.fromTo('.writing-card',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.writing',
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        }
      }
    )

    // Contact - Looming in
    gsap.fromTo('.contact-content',
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 75%',
          end: 'center center',
          scrub: 1,
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return null
}
