import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
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
    },
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Properties</h2>
          <p className="section-subtitle">
            Discover handpicked premium properties across Kolkata that match
            your lifestyle and investment goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a href="#" className="btn btn-outline inline-block">
            View All Properties
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProperties;
