"use client"

import React, { useState, VideoHTMLAttributes } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

interface Props extends VideoHTMLAttributes<HTMLVideoElement> {
  videoSrc: string
  placeholderSrc: string
}

const LazyLoadedVideo = ({
  videoSrc,
  placeholderSrc,
  className,
  ...props
}: Props) => {
  const [loaded, setLoaded] = useState(false)
  console.log("🚀 ~ loaded:", loaded)

  const handleVideoLoad = () => {
    setLoaded(true)
  }

  return (
    <div>
      {!loaded && (
        <LazyLoadImage
          src={placeholderSrc}
          alt="Placeholder"
          width={200} // Adjust width as needed
          height={150} // Adjust height as needed
          effect="blur"
        />
      )}

      <video
        className={className}
        preload="none"
        onLoadedData={handleVideoLoad}
        {...props}
        style={{ display: loaded ? "block" : "none" }}>
        <source src="/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default LazyLoadedVideo
