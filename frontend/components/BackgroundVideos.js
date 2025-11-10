"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function BackgroundVideos({ sources = ['/videos/bg1.mp4', '/videos/bg2.mp4', '/videos/bg3.mp4'] }){
  const videoRefs = [useRef(null), useRef(null)]
  const frontRef = useRef(0) // which video element is currently visible (0 or 1)
  const indexRef = useRef(0) // index into sources for the front video
  const [isTransitioning, setIsTransitioning] = useState(false)

  // helper to resolve imported asset modules or plain strings
  const resolveSrc = (s) => {
    if (!s) return ''
    if (typeof s === 'string') return s
    return s.src || s.default || ''
  }

  useEffect(() => {
    if (!sources || sources.length === 0) return

    // initialize indices
    indexRef.current = 0
    frontRef.current = 0
    const nextIndex = (indexRef.current + 1) % sources.length

    const frontVid = videoRefs[frontRef.current].current
    const backVid = videoRefs[1 - frontRef.current].current
    if (!frontVid || !backVid) return

    // set sources and preload
    frontVid.src = resolveSrc(sources[indexRef.current])
    frontVid.preload = 'auto'
    backVid.src = resolveSrc(sources[nextIndex])
    backVid.preload = 'auto'

    let mounted = true

    const playFront = async () => {
      try { await frontVid.play() } catch (e) { /* autoplay may be blocked; user interaction may be required */ }
    }
    playFront()

    const handleEnded = async () => {
      if (!mounted) return
      const front = frontRef.current
      const back = 1 - front
      const frontVideo = videoRefs[front].current
      const backVideo = videoRefs[back].current
      if (!backVideo || !frontVideo) return

      // ensure back video is at start and play it immediately
      try {
        backVideo.currentTime = 0
        await backVideo.play()
      } catch (e) { console.error('Error starting next video:', e) }

      // crossfade by toggling transition state
      setIsTransitioning(true)

      // after crossfade duration, swap front and prepare next back video
      const crossfadeMs = 350
      setTimeout(() => {
        // advance indexes
        indexRef.current = (indexRef.current + 1) % sources.length
        const upcoming = (indexRef.current + 1) % sources.length

        // pause the old front to free resources
        try { frontVideo.pause() } catch (e) {}

        // set the new back video's src to the upcoming video and preload
        const newBack = videoRefs[1 - frontRef.current].current
        if (newBack) {
          newBack.src = resolveSrc(sources[upcoming])
          newBack.preload = 'auto'
        }

        // flip which element is front
        frontRef.current = 1 - frontRef.current
        setIsTransitioning(false)
      }, crossfadeMs)
    }

    // attach ended listener to the current front video
    frontVid.removeEventListener('ended', handleEnded)
    frontVid.addEventListener('ended', handleEnded)

    return () => {
      mounted = false
      try { frontVid.removeEventListener('ended', handleEnded) } catch (e) {}
      try { videoRefs[0].current?.pause(); videoRefs[1].current?.pause() } catch (e) {}
    }
  }, [sources])

  // compute which element is visible and apply opacity classes
  const front = frontRef.current
  const frontClass = isTransitioning ? 'opacity-0' : 'opacity-100'
  const backClass = isTransitioning ? 'opacity-100' : 'opacity-0'

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <video
        ref={videoRefs[0]}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${front === 0 ? frontClass : backClass}`}
      />
      <video
        ref={videoRefs[1]}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${front === 1 ? frontClass : backClass}`}
      />
      {/* subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
}
