import React from "react";
import { FiChevronRight } from "react-icons/fi";

const servicesData = [
  {
    id: 1,
    title: "Metal Works",
    image: "assets/service-1.jpg",
  },
  {
    id: 2,
    title: "Steel Welding",
    image: "assets/service-2.jpg",
  },
  {
    id: 3,
    title: "Pipe Welding",
    image: "assets/service-3.jpg",
  },
  {
    id: 4,
    title: "Custom Welding",
    image: "assets/service-4.jpg",
  },
  {
    id: 5,
    title: "Steel Welding",
    image: "assets/service-5.jpg",
  },
  {
    id: 6,
    title: "Metal Work",
    image: "assets/service-6.jpg",
  },
  {
    id: 7,
    title: "Custom Welding",
    image: "assets/service-7.jpg",
  },
  {
    id: 8,
    title: "Pipe Welding",
    image: "assets/service-8.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight">
            Reliable & High-Quality
            <br />
            <span className="text-gray-900">Welding Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="relative group bg-white hover:bg-[#ce9233] transition-colors duration-300 shadow-sm hover:shadow-lg border border-gray-100 overflow-visible"
            >
              {/* Image area reserved height; image positioned to top-right with slight negative offset */}
              <div className="relative h-44">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute -top-3 -right-3 w-[85%] h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 pt-3">
                <h3 className="text-lg font-semibold uppercase mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                </p>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-gray-900 group"
                >
                  Read More
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-gray-900 text-white group-hover:bg-gray-700 transition-colors">
                    <FiChevronRight />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

