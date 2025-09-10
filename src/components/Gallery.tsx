"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Championship Golf Course",
      description: "18-hole Tom Fazio designed masterpiece",
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Luxury Accommodations",
      description: "Presidential suites with panoramic views",
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Evening Elegance",
      description: "Spectacular lighting throughout the resort",
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Natural Beauty",
      description: "500 acres of pristine landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Mountain Views",
      description: "Breathtaking vistas from every angle",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-charcoal mb-6">
            Gallery of
            <span className="block luxury-text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the beauty and elegance that defines Elysian
            Golf Resort. Every corner tells a story of luxury and refined
            sophistication.
          </p>
        </div>

        {/* Main Image Display */}
        <div className="relative mb-8 animate-fade-in">
          <div className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-xl sm:text-3xl font-playfair font-bold mb-2">
                {images[currentImage].title}
              </h3>
              <p className="text-base sm:text-lg text-gray-200">
                {images[currentImage].description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 mb-8 animate-fade-in">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                currentImage === index
                  ? "ring-4 ring-luxury-orange scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center animate-fade-in">
          <p className="text-gray-600">
            {currentImage + 1} of {images.length}
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <Button
            type="submit"
            className="bg-luxury-gradient text-base mt-12 sm:text-lg px-6 sm:px-12 py-3 sm:py-4 "
            size={"lg"}
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
