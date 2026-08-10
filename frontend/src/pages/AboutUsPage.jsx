import React from "react";
import { CheckCircle } from "lucide-react";
const AboutUsPage = () => {
  const services = [
    "Quality ready-to-wear fashion",
    "Affordable styles for every budget",
    "Latest fashion trends & collections",
    "Fashion for men, women & kids",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] ">
        <img
          src="aboutus/aboutus-hero.png"
          alt="About Us"
          className="object-cover w-full h-full object-top"
        />
      </section>

      {/*About us section*/}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-95 h-60 overflow-hidden rounded-3xl">
              <img
                src="aboutus/aboutus2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-25  right-20 bg-black/40 rounded-2xl px-8 py-6 text-white">
              <h2 className="text-5xl font-bold">500+</h2>
              <p className="text-sm mt-2"> Fashion Products</p>
            </div>

            <div className="absolute top-40 left-40 w-65 h-45 rounded-3xl overflow-hidden border-white shadow-lg">
              <img src="aboutus/aboutus1.jpg" alt="" />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="mt-4 text-5xl font-serif leading-tight">
              Fashion that fits
              <span className="italic block">your everyday style</span>
            </h2>

            <p className="mt-6 text-gray-500 leading-8">
              HCV Fashion Hub is your destination for stylish, quality
              ready-to-wear clothing. We curate a diverse selection of
              fashionable pieces for women, men, and kids, making it easy to
              discover the right look for every occasion.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {services.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: "#C5A059" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-[#C5A059] text-white px-8 py-4 rounded-full hover:bg-[#A88540]">
              SHOP NOW →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
