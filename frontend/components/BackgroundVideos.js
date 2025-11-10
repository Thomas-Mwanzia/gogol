"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function BackgroundVideos({ sources = ['/videos/bg1.mp4', '/videos/bg2.mp4', '/videos/bg3.mp4'] }){
  const [index, setIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const currentVideoRef = useRef(null)
  const nextVideoRef = useRef(null)

  // helper to resolve imported asset modules or plain strings
  const resolveSrc = (s) => {
    if (!s) return ''
    if (typeof s === 'string') return s
    return s.src || s.default || ''
  }

  useEffect(() => {
    const currentVideo = currentVideoRef.current
    const nextVideo = nextVideoRef.current
    if (!currentVideo || !nextVideo) return

    currentVideo.src = resolveSrc(sources[index])
    nextVideo.src = resolveSrc(sources[nextIndex])

    const loadAndPlay = async (video) => {
      try {
        await video.load()
        // Set playback quality to high
        if (video.getVideoPlaybackQuality) {
          const quality = video.getVideoPlaybackQuality()
          if (quality && quality.totalVideoFrames > 0) {
            video.playbackQuality = 'high'
          }
        }
        await video.play()
      } catch (e) { console.error('Playback error:', e) }
    }

    loadAndPlay(currentVideo)
    // Preload next video
    nextVideo.load()

    const handleTransition = async () => {
      setIsTransitioning(true)
      // Start playing next video
      await loadAndPlay(nextVideo)
      
      // Update indices
      const newIndex = (index + 1) % sources.length
      const newNextIndex = (newIndex + 1) % sources.length
      
      setIndex(newIndex)
      setNextIndex(newNextIndex)
      setIsTransitioning(false)
    }

    currentVideo.addEventListener('timeupdate', () => {
      // Start transition 0.5 seconds before video ends
      if (currentVideo.duration - currentVideo.currentTime <= 0.5 && !isTransitioning) {
        handleTransition()
      }
    })

    return () => {
      if (currentVideo) {
        currentVideo.pause()
        currentVideo.removeEventListener('timeupdate', handleTransition)
      }
      if (nextVideo) {
        nextVideo.pause()
      }
    }
  }, [index, nextIndex, sources, isTransitioning])

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <video
        ref={currentVideoRef}
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      />
      <video
        ref={nextVideoRef}
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
}
