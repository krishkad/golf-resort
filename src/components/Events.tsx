const Events = () => {
  return (
    <section id="events" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-charcoal mb-6">
            Exclusive Events &
            <span className="block luxury-text-gradient">Weddings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create unforgettable memories in our stunning event spaces, where every detail 
            is meticulously crafted to exceed the expectations of our most discerning clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-playfair font-bold text-luxury-charcoal mb-6">Grand Ballroom</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our magnificent Grand Ballroom accommodates up to 300 guests with soaring 20-foot ceilings, 
              crystal chandeliers, and floor-to-ceiling windows overlooking the championship golf course.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-luxury-orange rounded-full mt-2 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-luxury-charcoal">Luxury Weddings</h4>
                  <p className="text-gray-600">Fairy-tale ceremonies with personalized planning</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-luxury-orange rounded-full mt-2 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-luxury-charcoal">Corporate Galas</h4>
                  <p className="text-gray-600">Prestigious events for Fortune 500 companies</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-luxury-orange rounded-full mt-2 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-luxury-charcoal">Private Celebrations</h4>
                  <p className="text-gray-600">Intimate gatherings with bespoke service</p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Elegant Event Space"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-luxury-cream rounded-3xl p-12 animate-fade-in">
          <h3 className="text-3xl font-playfair font-bold text-center text-luxury-charcoal mb-12">
            What Our VIP Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center text-white font-bold">
                  R.B.
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-luxury-charcoal">Richard Branson</h4>
                  <p className="text-sm text-gray-600">Virgin Group Founder</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Elysian Golf Resort delivered an absolutely perfect corporate retreat. The attention 
                to detail and level of service exceeded even our highest expectations."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center text-white font-bold">
                  S.M.
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-luxury-charcoal">Sarah Mitchell</h4>
                  <p className="text-sm text-gray-600">Celebrity Wedding Planner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I've planned weddings at the world&apos;s most exclusive venues, but Elysian Golf Resort 
                creates magic. Every couple deserves to feel this special on their wedding day."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;