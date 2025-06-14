const Contact = () => {
  return (
    <section className="section-padding bg-luxury-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Contact Our
            <span className="block text-luxury-amber">Concierge Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience white-glove service from the moment you reach out. Our dedicated team 
            is available 24/7 to assist with reservations, planning, and any special requests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-luxury-gradient rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-luxury-amber mb-2">Phone</h3>
                  <p className="text-gray-300 mb-1">Reservations: +1 (555) 123-4567</p>
                  <p className="text-gray-300">Concierge: +1 (555) 123-4568</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-luxury-gradient rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-luxury-amber mb-2">Email</h3>
                  <p className="text-gray-300 mb-1">reservations@elysiangolf.com</p>
                  <p className="text-gray-300">concierge@elysiangolf.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-luxury-gradient rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-luxury-amber mb-2">Location</h3>
                  <p className="text-gray-300 mb-1">1 Championship Drive</p>
                  <p className="text-gray-300">Pebble Beach, CA 93953</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-luxury-gradient rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-luxury-amber mb-2">Hours</h3>
                  <p className="text-gray-300 mb-1">Concierge: 24/7</p>
                  <p className="text-gray-300">Golf Course: 6:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="animate-fade-in">
            <div className="bg-luxury-cream rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-luxury-charcoal">
                <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4">Discover Our Location</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nestled along the stunning California coastline, our resort offers 
                  unparalleled ocean views and mountain vistas.
                </p>
                <button className="bg-luxury-gradient hover:bg-luxury-gradient-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  View Interactive Map
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="mt-20 text-center animate-fade-in">
          <h3 className="text-2xl font-playfair font-bold text-luxury-amber mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-luxury-amber text-lg font-bold">Forbes</div>
              <div className="text-gray-400 text-sm">5-Star Resort</div>
            </div>
            <div className="text-center">
              <div className="text-luxury-amber text-lg font-bold">Golf Digest</div>
              <div className="text-gray-400 text-sm">Top 100 Courses</div>
            </div>
            <div className="text-center">
              <div className="text-luxury-amber text-lg font-bold">Condé Nast</div>
              <div className="text-gray-400 text-sm">Gold List 2024</div>
            </div>
            <div className="text-center">
              <div className="text-luxury-amber text-lg font-bold">Travel + Leisure</div>
              <div className="text-gray-400 text-sm">World&apos;s Best</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;