const Membership = () => {
  return (
    <section id="membership" className="section-padding bg-luxury-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Elite
            <span className="block text-luxury-amber">Membership</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join an exclusive community of distinguished individuals who appreciate the finest things in life. 
            Our membership offers unparalleled access and privileges that money alone cannot buy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Platinum Membership */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-luxury-amber transition-all duration-300 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-bold mb-2">Platinum</h3>
              <div className="text-4xl font-bold text-luxury-amber mb-4">$50,000</div>
              <p className="text-gray-400">Annual Membership</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-luxury-amber mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Unlimited golf with priority booking
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-luxury-amber mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Complimentary guest privileges (4 per month)
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-luxury-amber mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Access to member dining room
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-luxury-amber mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Spa and fitness center access
              </li>
            </ul>
            <button className="w-full bg-luxury-gradient hover:bg-luxury-gradient-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              Apply Now
            </button>
          </div>

          {/* Diamond Membership */}
          <div className="bg-gradient-to-br from-luxury-orange to-luxury-amber p-8 rounded-2xl transform scale-105 shadow-2xl animate-fade-in">
            <div className="text-center mb-8">
              <div className="bg-white/20 text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-2 text-white">Diamond</h3>
              <div className="text-4xl font-bold text-white mb-4">$100,000</div>
              <p className="text-white/80">Annual Membership</p>
            </div>
            <ul className="space-y-4 mb-8 text-white">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                All Platinum benefits included
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Private caddie service included
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Exclusive tournament participation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Complimentary accommodation (2 nights/month)
              </li>
            </ul>
            <button className="w-full bg-white text-luxury-orange font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300">
              Apply Now
            </button>
          </div>

          {/* Black Card Membership */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-luxury-gold animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-playfair font-bold mb-2 text-luxury-gold">Black Card</h3>
              <div className="text-4xl font-bold text-luxury-gold mb-4">$250,000</div>
              <p className="text-gray-400">Lifetime Membership</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-luxury-gold">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                All Diamond benefits for life
              </li>
              <li className="flex items-center text-luxury-gold">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Unlimited guest privileges
              </li>
              <li className="flex items-center text-luxury-gold">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Private jet concierge service
              </li>
              <li className="flex items-center text-luxury-gold">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Global reciprocal club access
              </li>
            </ul>
            <button className="w-full bg-luxury-gold text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition-all duration-300">
              Invitation Only
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;