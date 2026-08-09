import React from "react";
import HeroSlider from "../components/HeroSlider";
import {Search, User, ShoppingBag, Truck, ShieldCheck, RotateCcw, Headphones} from "lucide-react";
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

   const arrivals = [
    {
      name: "Tees",
      price: "#5,000.00",
      image:
        "homepage/Tees.jpg",
    },
    {
      name: "Pant Trouser",
      price: "#10,000.00",
      image:
        "homepage/pant trouser.jpg",
    },
    {
      name: "Top",
      price: "#9,000.00",
      image:
        "homepage/bodycon top.jpg",
    },
  
    {
      name: "Relaxed Blazer",
      price: "#20,000.00",
      image:
        "homepage/blazer.jpg",
    },
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

    {/* New Arrivals */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gray-300"></div>
          <h2 className="text-4xl font-serif">NEW ARRIVALS</h2>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {arrivals.map((product, index) => (
            <div key={index}>
              <div className="relative">
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
                  NEW
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="text-center mt-4">
                <h3>{product.name}</h3>
                <p className="text-gray-500 mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-12 bg-black text-white px-6 py-3 hover:bg-[#333] flex mx-auto">
          VIEW ALL
        </button>
      </section>

      {/* Features */}
      <section className="bg-stone-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Truck className="mx-auto mb-3" />
              <h3 className="font-semibold">FREE SHIPPING</h3>
              <p className="text-sm text-gray-500">
                On orders over $99
              </p>
            </div>

            <div>
              <RotateCcw className="mx-auto mb-3" />
              <h3 className="font-semibold">EASY RETURNS</h3>
              <p className="text-sm text-gray-500">
                30 day return policy
              </p>
            </div>

            <div>
              <ShieldCheck className="mx-auto mb-3" />
              <h3 className="font-semibold">SECURE PAYMENT</h3>
              <p className="text-sm text-gray-500">
                100% secure payment
              </p>
            </div>

            <div>
              <Headphones className="mx-auto mb-3" />
              <h3 className="font-semibold">24/7 SUPPORT</h3>
              <p className="text-sm text-gray-500">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" text-white py-16" style={{ backgroundColor: '#f5f3f3' }}>
        <div className="container mx-auto px-6 text-center">
          <p className="py-5" style={{ color: "#C5A059" }}>
            EDITORIAL SELECTIONS
          </p>
          <h2 className="text-4xl font-serif mb-4 text-black">Curated For You</h2>
          <p className=" mb-8 text-black">
            Discover our completely curated selection of the season's most coveted pieces, handpicked by our fashion experts.
          </p>
          <div className="flex justify-center">
            <button className="bg-black text-white px-6 py-3 hover:bg-[#333] ml-4">
              SHOP ALL COLLECTIONS
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
