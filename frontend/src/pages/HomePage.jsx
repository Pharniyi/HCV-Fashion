import React from "react";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";

const categories = [
    {
      title: "Women",
      image:"/homepage/women category.png"
    },
    {
      title: "Men",
      image:"/homepage/male category.png"
    },
    {
      title: "Kids",
      image:"/homepage/kids category.jpg"
    }
  ];

const HomePage = () => {
  return (
    <>
    {/* Hero Section */}
    <section className="container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-[45%]">
          <p className="py-5" style={{ color: "#C5A059" }}>
            New Season
          </p>
          <h1 className="text-6xl font-600">
            Spring / Summer Collection</h1>
          <p className="py-5">
            Elevate your style with the latest trends and timeless essentials
          </p>
          <button className="bg-black text-white px-6 py-3 hover:bg-[#333]">
            SHOP NOW
          </button>
        </div>

        <div className="w-[65%] h-162.5 overflow-hidden rounded-tl-[250px] rounded-bl-[250px] ">
          <HeroSlider />
        </div>
      </div>
    </section>

     {/* Categories */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((item, index) => (
            <div key={index} className="relative overflow-hidden group">
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/35"></div>
              <img src={item.image} alt={item.title}
                className="h-72 w-full object-cover object-top group-hover:scale-105 transition duration-500 "/>
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6 text-white">
                <h3 className="text-3xl font-serif">{item.title}</h3>
                <span className="text-sm mt-1">SHOP NOW</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
