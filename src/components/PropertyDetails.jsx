import { useParams } from "react-router-dom";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();

  // This would typically come from a database or API
  const properties = [
    {
      id: 1,
      title: "Luxury Apartment in Salt Lake",
      location: "Salt Lake, Sector V",
      price: "1.2 Cr",
      beds: 3,
      baths: 2,
      size: 1800,
      type: "Apartment",
      image:
        "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description:
        "Experience luxury living in this stunning apartment located in the heart of Salt Lake. This modern residence offers panoramic city views, premium finishes, and world-class amenities.",
      features: [
        "Modern Kitchen",
        "24/7 Security",
        "Covered Parking",
        "Swimming Pool",
        "Gym",
        "Children's Play Area",
      ],
      amenities: [
        "Power Backup",
        "Elevator",
        "Club House",
        "Garden",
        "CCTV Surveillance",
        "Visitor Parking",
      ],
    },
    {
      id: 2,
      title: "Modern Villa in New Town",
      location: "New Town, Action Area I",
      price: "3.5 Cr",
      beds: 4,
      baths: 3,
      size: 3500,
      type: "Villa",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description:
        "Luxurious villa with modern architecture and premium amenities. Perfect for families looking for a sophisticated lifestyle in New Town's most prestigious neighborhood.",
      features: [
        "Private Garden",
        "Smart Home Features",
        "Double Height Ceiling",
        "Modular Kitchen",
        "Servant Quarter",
        "Study Room",
      ],
      amenities: [
        "Swimming Pool",
        "Private Parking",
        "24/7 Security",
        "Power Backup",
        "Rain Water Harvesting",
        "Solar Panels",
      ],
    },
    {
      id: 3,
      title: "Premium Flat in Park Street",
      location: "Park Street",
      price: "85 Lakhs",
      beds: 2,
      baths: 2,
      size: 1200,
      type: "Apartment",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description:
        "Contemporary flat in the heart of Kolkata's most vibrant neighborhood. Experience city living at its finest with easy access to restaurants, shopping, and entertainment.",
      features: [
        "Modern Design",
        "Balcony",
        "Modular Kitchen",
        "Built-in Wardrobes",
        "Air Conditioning",
        "High-Speed Internet",
      ],
      amenities: [
        "Elevator",
        "Security",
        "Parking",
        "Visitor Parking",
        "Power Backup",
        "Fire Safety",
      ],
    },
    {
      id: 4,
      title: "Commercial Space in Howrah",
      location: "Howrah, Near Station",
      price: "1.8 Cr",
      beds: "N/A",
      baths: 2,
      size: 2200,
      type: "Commercial",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description:
        "Prime commercial space perfect for offices or retail. Strategic location near Howrah station with high footfall and excellent connectivity.",
      features: [
        "Open Floor Plan",
        "Meeting Rooms",
        "Reception Area",
        "Pantry",
        "Server Room",
        "Storage Space",
      ],
      amenities: [
        "24/7 Access",
        "Security",
        "Parking",
        "Power Backup",
        "High-Speed Internet",
        "Fire Safety",
      ],
    },
    {
      id: 5,
      title: "Garden House in Alipore",
      location: "Alipore",
      price: "5.5 Cr",
      beds: 5,
      baths: 4,
      size: 4800,
      type: "House",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description:
        "Magnificent garden house in Alipore's most exclusive enclave. This property offers unmatched luxury with extensive gardens and premium amenities.",
      features: [
        "Landscaped Garden",
        "Swimming Pool",
        "Home Theater",
        "Wine Cellar",
        "Guest House",
        "Staff Quarters",
      ],
      amenities: [
        "24/7 Security",
        "Power Backup",
        "Smart Home",
        "Elevator",
        "Parking for 6 Cars",
        "CCTV Surveillance",
      ],
    },
    {
      id: 6,
      title: "Riverside Apartment",
      location: "Kolkata, Belvedere Road",
      price: "1.5 Cr",
      beds: 3,
      baths: 2,
      size: 1850,
      type: "Apartment",
      image:
        "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description:
        "Elegant riverside apartment offering breathtaking views and modern amenities. Perfect blend of comfort and luxury in a prime location.",
      features: [
        "River View",
        "Spacious Balcony",
        "Modern Kitchen",
        "Walk-in Closet",
        "Study Room",
        "Servant Room",
      ],
      amenities: [
        "Swimming Pool",
        "Gym",
        "Club House",
        "Children's Play Area",
        "Landscaped Gardens",
        "24/7 Security",
      ],
    },
  ];

  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="pt-20 pb-16">
        <div className="container">
          <h1 className="text-2xl font-bold">Property not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container">
        {/* Property Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold mb-4 text-primary-900">
            {property.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-4">
            <FaMapMarkerAlt className="mr-2" />
            <span>{property.location}</span>
          </div>
          <div className="text-2xl font-bold text-primary-800 mb-4">
            ₹{property.price}
          </div>
        </div>

        {/* Property Images and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Main Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Key Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-primary-900">
              Property Details
            </h2>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <FaBed className="text-primary-800 mr-3" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                  <p className="font-semibold">{property.beds}</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaBath className="text-primary-800 mr-3" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                  <p className="font-semibold">{property.baths}</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaRulerCombined className="text-primary-800 mr-3" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Area</p>
                  <p className="font-semibold">{property.size} sqft</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary-800 p-2 rounded-full text-white mr-3">
                  <span className="text-sm">Type</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Property Type</p>
                  <p className="font-semibold">{property.type}</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-bold mb-4 text-primary-900">
                Contact Agent
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="text-primary-800 mr-3" />
                  <span>+91 8240207235</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-primary-800 mr-3" />
                  <span>info@MUZ Realty.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description and Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Description */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-primary-900">
              Description
            </h2>
            <p className="text-gray-700">{property.description}</p>
          </div>

          {/* Features and Amenities */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-primary-900">
              Features & Amenities
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-primary-800">
                Features
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-800 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-800">
                Amenities
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
