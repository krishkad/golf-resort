"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold luxury-text-gradient">
              Elysian Golf Resort
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={cn ("hover:text-[#cc5500] transition-colors font-medium", isScrolled ? "text-black": "text-white")}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('golf')}
              className={cn("hover:text-[#cc5500] transition-colors font-medium", isScrolled ? "text-black": "text-white")}
            >
              Golf
            </button>
            <button 
              onClick={() => scrollToSection('hotel')}
              className={cn("hover:text-[#cc5500] transition-colors font-medium", isScrolled ? "text-black": "text-white")}
            >
              Hotel
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className={cn("hover:text-[#cc5500] transition-colors font-medium", isScrolled ? "text-black": "text-white")}
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('membership')}
              className={cn("hover:text-[#cc5500] transition-colors font-medium", isScrolled ? "text-black": "text-white")}
            >
              Membership
            </button>
            <Button 
              onClick={() => scrollToSection('reservation')}
              className="bg-luxury-gradient"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-luxury-charcoal hover:text-luxury-orange transition-colors"
            >
              <svg className={cn("w-6 h-6", isScrolled ? "text-back": "text-white")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-luxury-charcoal hover:text-[#cc5500] transition-colors font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('golf')}
                className="text-luxury-charcoal hover:text-[#cc5500] transition-colors font-medium text-left"
              >
                Golf
              </button>
              <button 
                onClick={() => scrollToSection('hotel')}
                className="text-luxury-charcoal hover:text-[#cc5500] transition-colors font-medium text-left"
              >
                Hotel
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-luxury-charcoal hover:text-[#cc5500] transition-colors font-medium text-left"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('membership')}
                className="text-luxury-charcoal hover:text-[#cc5500] transition-colors font-medium text-left"
              >
                Membership
              </button>
              <Button 
                onClick={() => scrollToSection('reservation')}
                className="bg-luxury-gradient w-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;