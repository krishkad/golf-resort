const About = () => {
  return (
    <section id="about" className="section-padding bg-luxury-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-charcoal mb-6">
              A Legacy of
              <span className="block luxury-text-gradient">Excellence</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              For over three decades, Elysian Golf Resort has stood as the pinnacle of luxury hospitality. 
              Nestled within 500 acres of pristine landscape, our resort offers an unmatched experience 
              where world-class golf meets exceptional accommodation.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our commitment to excellence has earned us recognition among the world&apos;s most prestigious 
              resorts, making us the preferred destination for celebrities, business leaders, and 
              discerning travelers who demand nothing but the finest.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold luxury-text-gradient mb-2">30+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold luxury-text-gradient mb-2">500</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Acres Paradise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold luxury-text-gradient mb-2">5★</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Forbes Rating</div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1692621284877-fce21e056f11?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury Resort Interior"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 right-0 md:-right-6 bg-luxury-gradient p-6 rounded-xl shadow-xl">
                <div className="text-white text-center">
                  <div className="text-2xl font-playfair font-bold">Award Winner</div>
                  <div className="text-sm">World&apos;s Best Golf Resort 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;