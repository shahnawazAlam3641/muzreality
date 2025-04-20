import { FaHome, FaSearchDollar, FaHandshake, FaBuilding, FaChartLine, FaTools } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Residential Properties",
      description: "Find your perfect home with our extensive selection of apartments, villas, and houses across Kolkata.",
      icon: <FaHome size={36} className="text-gold-500" />,
    },
    {
      id: 2,
      title: "Property Valuation",
      description: "Get accurate market valuations for your property with our experienced team of appraisers.",
      icon: <FaSearchDollar size={36} className="text-gold-500" />,
    },
    {
      id: 3,
      title: "Buying Assistance",
      description: "Expert guidance throughout the buying process, from property selection to final closing.",
      icon: <FaHandshake size={36} className="text-gold-500" />,
    },
    {
      id: 4,
      title: "Commercial Properties",
      description: "Discover premium office spaces, retail locations, and commercial buildings in prime Kolkata locations.",
      icon: <FaBuilding size={36} className="text-gold-500" />,
    },
    {
      id: 5,
      title: "Investment Advisory",
      description: "Strategic investment advice to maximize returns on your real estate investments in Kolkata.",
      icon: <FaChartLine size={36} className="text-gold-500" />,
    },
    {
      id: 6,
      title: "Property Management",
      description: "Comprehensive property management services for landlords and property investors.",
      icon: <FaTools size={36} className="text-gold-500" />,
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive real estate solutions tailored to meet your needs with professionalism and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-playfair text-primary-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services