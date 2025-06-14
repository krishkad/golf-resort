"use client";
import { useState } from 'react';

const GolfGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const golfImages = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Championship Golf Course",
      description: "18-hole Tom Fazio designed masterpiece with panoramic mountain views"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Pristine Fairways",
      description: "Meticulously maintained greens and fairways for the perfect game"
    },
    {
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Scenic Water Features",
      description: "Natural water hazards and bridges enhance the playing experience"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Mountain Valley Course",
      description: "Championship holes nestled in breathtaking natural landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Forested Fairways",
      description: "Tree-lined fairways provide both beauty and strategic challenge"
    },
    {
      src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Practice Facilities",
      description: "World-class driving range and practice greens for perfecting your game"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Sunrise Golf",
      description: "Experience the magic of early morning rounds with stunning sunrise views"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % golfImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + golfImages.length) % golfImages.length);
  };

  return (
    <section className="section-padding bg-luxury-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Golf Course &
            <span className="block luxury-text-gradient">Grounds Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our championship golf course and pristine grounds. Every hole tells a story 
            of precision, beauty, and the ultimate golfing experience.
          </p>
        </div>

        {/* Main Image Display */}
        <div className="relative mb-8 animate-fade-in">
          <div className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={golfImages[currentImage].src}
              alt={golfImages[currentImage].title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-playfair font-bold mb-2">
                {golfImages[currentImage].title}
              </h3>
              <p className="text-lg text-gray-200">
                {golfImages[currentImage].description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 mb-8 animate-fade-in overflow-x-auto pb-4">
          {golfImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                currentImage === index 
                  ? 'ring-4 ring-luxury-amber scale-110' 
                  : 'opacity-70 hover:opacity-100'
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
          <p className="text-gray-400">
            {currentImage + 1} of {golfImages.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GolfGallery;