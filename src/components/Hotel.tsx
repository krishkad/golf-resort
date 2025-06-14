const Hotel = () => {
  return (
    <section id="hotel" className="section-padding bg-luxury-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Luxury Hotel
            <span className="block text-luxury-amber">Accommodations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Indulge in our collection of exquisitely appointed suites and villas, each offering 
            breathtaking views and world-class amenities that redefine luxury hospitality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Luxury Hotel Suite"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="animate-fade-in">
            <h3 className="text-3xl font-playfair font-bold mb-6">Presidential Suites</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our crown jewel accommodations feature private terraces overlooking the golf course, 
              marble bathrooms with infinity soaking tubs, and dedicated butler service available 24/7.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-luxury-amber rounded-full mr-3"></div>
                2,500 sq ft of elegantly appointed living space
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-luxury-amber rounded-full mr-3"></div>
                Private dining room with personal chef service
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-luxury-amber rounded-full mr-3"></div>
                Heated infinity pool on private terrace
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-luxury-amber rounded-full mr-3"></div>
                Dedicated concierge and housekeeping team
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-fade-in">
            <div className="w-16 h-16 bg-luxury-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 5.25l-.62.62m0 0a15.125 15.125 0 00-6.192-3.046l-.46 1.378A13.64 13.64 0 0118.94 6.75m-7.44-2.25L12 3l.5 1.5m0 0L12 3l-.5 1.5m0 0a15.125 15.125 0 00-6.192 3.046l-.62-.62m6.814-1.426L12 3m0 0l.5 1.5M12 12l-8-8m0 0l8 8-8-8m8 8l8-8m0 0l-8 8 8-8" />
              </svg>
            </div>
            <h4 className="text-xl font-playfair font-bold mb-2">World-Class Spa</h4>
            <p className="text-gray-400 text-sm">Rejuvenate with exclusive treatments</p>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-fade-in">
            <div className="w-16 h-16 bg-luxury-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
              </svg>
            </div>
            <h4 className="text-xl font-playfair font-bold mb-2">24/7 Concierge</h4>
            <p className="text-gray-400 text-sm">Personal assistance around the clock</p>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-fade-in">
            <div className="w-16 h-16 bg-luxury-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 className="text-xl font-playfair font-bold mb-2">Fine Dining</h4>
            <p className="text-gray-400 text-sm">Michelin-starred culinary experiences</p>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-fade-in">
            <div className="w-16 h-16 bg-luxury-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xl font-playfair font-bold mb-2">Private Security</h4>
            <p className="text-gray-400 text-sm">Discrete protection and privacy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotel;