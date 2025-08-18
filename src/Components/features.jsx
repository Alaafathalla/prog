import React from "react";
import { FaHammer, FaDollarSign, FaMedal, FaTools } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

const FEATURES = [
  {
    title: "Quality Welding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
    Icon: FaHammer,
  },
  {
    title: "Affordable Pricing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
    Icon: FaDollarSign,
  },
  {
    title: "Best Welder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
    Icon: FaMedal,
  },
  {
    title: "Quality Tools",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.",
    Icon: FaTools,
  },
];

const FeatureCard = ({ title, description, Icon }) => {
  return (
    <div className="relative bg-white border rounded-md shadow-sm p-8 pt-12">
      {/* Top SVG icon */}
      <div className="absolute -top-6 left-8 w-16 h-16 bg-[#c99238] text-white grid place-items-center">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-extrabold uppercase tracking-tight mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <button type="button" className="group inline-flex items-center text-sm font-semibold text-gray-900">
        Read More
        <span className="mx-3 h-px w-24 bg-gray-300 transition-all group-hover:w-28" />
        <HiArrowLongRight className="size-4 text-gray-400 group-hover:text-gray-900" />
      </button>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

