import { FaAward, FaHandshake, FaHouseDamage, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                alt="About MUZ Realty"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-lg shadow-lg hidden lg:block">
              <div className="text-center">
                <h3 className="font-playfair text-3xl font-bold text-primary-900">
                  4+
                </h3>
                <p className="text-gray-600 mt-2">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="section-title">About MUZ Realty</h2>
            <div className="w-20 h-1 bg-gold-500 mb-6"></div>

            <p className="text-gray-600 mb-6">
              MUZ Realty is Kolkata's premier real estate agency, specializing
              in luxury properties and personalized real estate solutions.
              Founded by Md Muzammil, we bring unmatched expertise in the
              Kolkata real estate market.
            </p>

            <p className="text-gray-600 mb-8">
              Our mission is to connect discerning clients with their dream
              properties through transparent, professional, and personalized
              service. We understand that buying a home is one of life's most
              significant investments, and we're committed to making this
              journey seamless and rewarding.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-4 text-gold-500">
                  <FaUsers size={24} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold">100+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-gold-500">
                  <FaHouseDamage size={24} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold">100+</h3>
                  <p className="text-gray-600">Properties Sold</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-gold-500">
                  <FaHandshake size={24} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold">50+</h3>
                  <p className="text-gray-600">Trusted Partners</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-gold-500">
                  <FaAward size={24} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold">5+</h3>
                  <p className="text-gray-600">Industry Awards</p>
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
