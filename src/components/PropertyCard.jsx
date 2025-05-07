import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaMapMarkerAlt } from 'react-icons/fa'

const PropertyCard = ({ property }) => {
  const [favorited, setFavorited] = useState(false)
  const navigate = useNavigate()
  
  const toggleFavorite = (e) => {
    e.preventDefault()
    setFavorited(!favorited)
  }

  const handleViewDetails = () => {
    navigate(`/property/${property.id}`)
  }

  return (
    <div className="property-card bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
      {/* Property Image */}
      <div className="relative h-64">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 px-3 py-1.5 bg-primary-800 text-white font-medium text-sm rounded-br-lg">
          {property.type}
        </div>
        <button 
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
        >
          <FaHeart 
            className={`${favorited ? 'text-red-500' : 'text-gray-400'} transition-colors duration-300`} 
            size={16} 
          />
        </button>
      </div>
      
      {/* Property Details */}
      <div className="p-5">
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="text-primary-800 mr-2" />
          <span className="text-sm text-gray-600">{property.location}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 font-playfair">{property.title}</h3>
        <p className="text-lg font-bold text-primary-800 mb-3">₹{property.price}</p>
        
        {/* Property Features */}
        <div className="flex justify-between text-gray-600 mb-4">
          <div className="flex items-center">
            <FaBed className="mr-1" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="mr-1" />
            <span>{property.size} sqft</span>
          </div>
        </div>
        
        {/* CTA */}
        <div className="flex space-x-2">
          <button 
            onClick={handleViewDetails}
            className="btn btn-primary flex-1 text-center"
          >
            View Details
          </button>
          <a 
            href="#contact" 
            className="btn btn-outline flex-1 text-center"
          >
            Inquire
          </a>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard