const Hero = () => {
  return (
    <section id="hero" className="relative h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative h-full flex flex-col justify-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            Discover Your Dream Home in Kolkata
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
            Luxury properties and premium real estate solutions tailored to your
            lifestyle. Experience excellence with MUZ Realty.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#properties" className="btn btn-secondary">
              Explore Properties
            </a>
            <a
              href="#contact"
              className="btn bg-white text-primary-900 hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>

          {/* Search Bar */}
          {/* <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">Location</option>
                  <option value="saltlake">Salt Lake</option>
                  <option value="newtown">New Town</option>
                  <option value="parkstreet">Park Street</option>
                  <option value="ballygunge">Ballygunge</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">Budget</option>
                  <option value="budget1">₹30L - ₹50L</option>
                  <option value="budget2">₹50L - ₹1Cr</option>
                  <option value="budget3">₹1Cr - ₹2Cr</option>
                  <option value="budget4">Above ₹2Cr</option>
                </select>
              </div>
              <button className="bg-primary-800 text-white px-6 py-2 rounded-md hover:bg-primary-900 transition duration-300">
                <FaSearch className="inline mr-2" /> Search
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
