"use client"
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-playfair font-bold luxury-text-gradient mb-4">
              Golf Resort & Club
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Where luxury meets legend. Experience the world&apos;s finest golf resort 
              and create memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-luxury-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-luxury-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-luxury-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.09.11.104.21.077.32-.085.362-.275 1.122-.312 1.278-.049.2-.402.081-.402-.311 0-1.298-.465-2.38-.465-3.279 0-2.863 2.077-5.512 5.993-5.512 3.144 0 5.587 2.244 5.587 5.24 0 3.125-1.969 5.635-4.705 5.635-.92 0-1.789-.481-2.087-1.05 0 0-.456 1.744-.567 2.167-.205.788-.758 1.774-1.129 2.378C8.741 23.735 10.325 24.014 12.017 24.014c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-bold text-luxury-amber mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-luxury-amber transition-colors"
                >
                  About Resort
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('golf')}
                  className="text-gray-400 hover:text-luxury-amber transition-colors"
                >
                  Golf Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('hotel')}
                  className="text-gray-400 hover:text-luxury-amber transition-colors"
                >
                  Accommodations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="text-gray-400 hover:text-luxury-amber transition-colors"
                >
                  Events & Weddings
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-bold text-luxury-amber mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Championship Golf Course</li>
              <li>Luxury Spa & Wellness</li>
              <li>Fine Dining Restaurants</li>
              <li>Private Event Planning</li>
              <li>Concierge Services</li>
              <li>Golf Pro Shop</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-bold text-luxury-amber mb-6">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p>1 Championship Drive<br />Pebble Beach, CA 93953</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: reservations@elysiangolf.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Golf Resort & Club. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Forbes 5-Star</span>
              <span>•</span>
              <span>Golf Digest Top 100</span>
              <span>•</span>
              <span>Condé Nast Gold List</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;