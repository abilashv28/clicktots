import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {  const testimonials = [
    {
      name: 'Induce Fitness',
      text: 'The social media marketing services of Clicktots Technologies have always been top-notch, they provided me with the best return on my investment. I recommend them for all your digital marketing needs!',
      stars: 5
    },
    {
      name: 'MountView',
      text: "With Clicktots Technologies, our brand's digital presence has exploded! They are resourceful and creative in developing strategies that set us apart from the rest. Loved their services.",
      stars: 5
    },
    {
      name: 'Sindhi School',
      text: "Clicktot's 15 years of expertise make them a reliable digital marketing partner. We trusted them, and they gave us the edge we needed.",
      stars: 5
    },
    {
      name: 'PeakPoint',
      text: 'Working with Clicktots Technologies has been an absolute pleasure. Their team of mobile app development professionals were able to take our vision and turn it into a reality quickly and efficiently. We were most impressed.',
      stars: 5
    }
  ];

  const renderStars = (count) => {
    return [...Array(count)].map((_, index) => (
      <svg
        key={index}
        className="h-5 w-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">Our Client Reviews</h2>
          <p className="mt-4 text-lg text-gray-600">
            What our clients say about our services
          </p>
        </div>

        <div className="mt-12">          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
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
            className="pb-12"
          >            {testimonials.map((testimonial, index) => (              <SwiperSlide key={index}>                <div className="h-[432px] mx-2"> {/* Fixed height container with extra 2rem */}
                  <div className="bg-white rounded-xl shadow-xl p-8 h-full flex flex-col border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    {/* Quote Icon */}
                    <div className="mb-6 text-blue-600 flex-shrink-0">
                      <svg className="h-10 w-10 mx-auto opacity-80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Review Text */}
                    <div className="flex-grow overflow-auto mb-6">
                      <p className="text-gray-700 text-center italic text-lg leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Company Name and Stars - Fixed at bottom */}
                    <div className="pt-6 border-t border-gray-100 flex-shrink-0">
                      <h3 className="text-xl font-bold text-blue-900 text-center mb-3">
                        {testimonial.name}
                      </h3>

                      {/* Stars */}
                      <div className="flex justify-center space-x-2">
                        {renderStars(testimonial.stars)}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
