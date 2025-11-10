"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function BackgroundVideos({ sources = ['/videos/bg1.mp4', '/videos/bg2.mp4', '/videos/bg3.mp4'] }){
  const [index, setIndex] = useState(0)
  const videoRef = useRef(null)

  // helper to resolve imported asset modules or plain strings
  const resolveSrc = (s) => {
    if (!s) return ''
    if (typeof s === 'string') return s
    // Next.js asset imports sometimes provide an object with .src or .default
    return s.src || s.default || ''
  }

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    const src = resolveSrc(sources[index])
    if (!src) return

    // load current source and attempt to play
    vid.src = src
    vid.load()
    const tryPlay = async () => {
      try { await vid.play() } catch (e) { /* autoplay may be blocked; user interaction may be required */ }
    }
    tryPlay()

    const onEnded = () => setIndex(i => (i + 1) % sources.length)
    vid.addEventListener('ended', onEnded)
    return () => vid.removeEventListener('ended', onEnded)
  }, [index, sources])

  const currentSrc = resolveSrc(sources[index])

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <video
        ref={videoRef}
        muted
        playsInline
        className="w-full h-full object-cover min-h-screen"
      >
        {currentSrc && <source src={currentSrc} />}
      </video>
      {/* subtle overlay so foreground content stays readable */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}
