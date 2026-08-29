import React from 'react'
import { useState, useEffect } from 'react'

const images = [
  "/src/assets/homepage/homepage-hero1.png",
  "/src/assets/homepage/homepage-hero2.jpg",
  "/src/assets/homepage/homepage-hero3.jpg",
];

const HeroSlider = () => {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className={`h-full w-full object-cover ${index === 0 ? "object-right" : index === 1 ? "object-center" : ""} ${index === 2 ? "object-[70%]" : ""}`}
          />
        </div>
      ))}

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}

export default HeroSlider