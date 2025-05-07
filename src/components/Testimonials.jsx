import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "Homeowner",
      content:
        "Working with MUZ Realty was a delight. Their attention to detail and understanding of my requirements helped me find my dream home in Salt Lake. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      name: "Rajesh Mehta",
      position: "Investor",
      content:
        "As a property investor, I've worked with several agencies, but MUZ Realty stands out for their market knowledge and professional approach. They've helped me secure profitable investments across Kolkata.",
      image: "https://randomuser.me/api/portraits/men/57.jpg",
    },
    {
      id: 3,
      name: "Ananya Das",
      position: "First-time Buyer",
      content:
        "Being a first-time homebuyer, I was apprehensive about the entire process. The team at MUZ Realty guided me every step of the way, making it a smooth and enjoyable experience.",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: 4,
      name: "Vikram Singh",
      position: "Property Developer",
      content:
        "MUZ Realty has been instrumental in marketing and selling our residential development in New Town. Their marketing strategy and client network delivered outstanding results.",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-primary-900 text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Client Testimonials</h2>
          <p className="section-subtitle text-gray-300">
            Don't just take our word for it - hear what our satisfied clients
            have to say about their experience with MUZ Realty
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-lg p-8 text-gray-800 h-full flex flex-col">
                <div className="mb-4 text-gold-500">
                  <FaQuoteLeft size={24} />
                </div>
                <p className="mb-6 flex-grow">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-primary-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
