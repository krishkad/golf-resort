const Golf = () => {
  return (
    <section id="golf" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-charcoal mb-6">
            Championship
            <span className="block luxury-text-gradient">Golf Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Play on our award-winning 18-hole championship course, designed by legendary architect 
            Tom Fazio and consistently ranked among the world&apos;s top 100 golf courses.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-luxury-cream p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
            <div className="w-16 h-16 bg-luxury-gradient rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-luxury-charcoal mb-4">Championship Course</h3>
            <p className="text-gray-700 leading-relaxed">
              Our 7,200-yard championship course features stunning elevation changes, 
              pristine fairways, and challenging water hazards that test players of all skill levels.
            </p>
          </div>

          <div className="bg-luxury-cream p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
            <div className="w-16 h-16 bg-luxury-gradient rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-luxury-charcoal mb-4">Private Coaching</h3>
            <p className="text-gray-700 leading-relaxed">
              Work with PGA Tour professionals in personalized sessions. Our state-of-the-art 
              practice facility includes video analysis and custom club fitting services.
            </p>
          </div>

          <div className="bg-luxury-cream p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
            <div className="w-16 h-16 bg-luxury-gradient rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-luxury-charcoal mb-4">Elite Tournaments</h3>
            <p className="text-gray-700 leading-relaxed">
              Participate in exclusive member tournaments and corporate championships. 
              Host your own private events with our tournament management services.
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Golf Course at Sunrise"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                "The most beautiful golf course I've ever played"
              </h3>
              <p className="text-xl">— Tiger Woods, 14-time Major Champion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Golf;