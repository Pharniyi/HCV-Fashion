import React from "react";
import { CheckCircle, Briefcase, FileText, Users, Trophy } from "lucide-react";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  const services = [
    "Quality ready-to-wear fashion",
    "Affordable styles for every budget",
    "Latest fashion trends & collections",
    "Fashion for men, women & kids",
  ];

  const stats = [
    {
      icon: <Briefcase size={34} />,
      number: "20+",
      label: "Years of Trusted Service",
    },

    {
      icon: <FileText size={45} />,
      number: "500+",
      label: "Styles & Collections",
    },

    {
      icon: <Users size={45} />,
      number: "10,000+",
      label: "Satisfied Customers",
    },

    {
      icon: <Trophy size={45} />,
      number: "3",
      label: "Fashion Categories",
    },
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
          {/* Image Section */}
          <div className="relative">
            <div className="w-95 h-60 overflow-hidden rounded-3xl">
              <img
                src="aboutus/aboutus2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute bottom-20  right-30 rounded-2xl px-8 py-6 text-white"
              style={{ backgroundColor: "#6a4827" }}
            >
              <h2 className="text-5xl font-bold">500+</h2>
              <p className="text-sm mt-2"> Fashion Products</p>
            </div>

            <div className="absolute top-45 left-45 w-65 h-45 rounded-3xl overflow-hidden ">
              <img src="aboutus/aboutus1.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Text Content */}
          <div style={{ color: "#6a4827" }}>
            <h6>COMPANY ABOUT</h6>
            <h2 className="mt-4 text-4xl font-serif ">
              Over two decades of fashion,
              <span className="italic block">now just a click away</span>
            </h2>

            <p className="mt-6 text-gray-500 leading-7">
              For more than 20 years, HCV Fashion Hub has been a trusted
              destination for stylish and affordable fashion. What began as a
              physical retail business has grown through years of serving
              customers with quality ready-to-wear clothing for men, women, and
              kids. Today, we're bringing that same trusted shopping experience
              online, making it easier than ever to discover your next favorite
              outfit.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {services.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: "#6a4827" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-[#6a4827] text-white px-8 py-4 rounded-full hover:bg-[#A88540]">
              SHOP NOW →
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        style={{ backgroundColor: "#6a4827", color: "white" }}
        className="py-2"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-5 p-10 border-r last:border-none"
            >
              <div> {stat.icon} </div>
              <div>
                <h3 className="text-4xl font-bold">{stat.number}</h3>
                <p className="text-sm mt-2 opacity-80">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Mission */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div style={{color:'#6a4827'}}>
            <p className="text-xs tracking-widest font-semibold">OUR MISSION</p>
            <h2 className="mt-4 text-5xl font-serif leading-tight">
              Making great fashion
              <span className="italic block">
                accessible to everyone
              </span>
            </h2>

            <div className="flex gap-4 flex-wrap">
              <button className="mt-10 bg-[#6a4827] text-white px-8 py-4 rounded-full hover:bg-[#A88540]">
              OUR MISSION
            </button>

              <button className="mt-10 bg-[#6a4827] text-white px-8 py-4 rounded-full hover:bg-[#A88540]">
              OUR VISION
            </button>

              <button className="mt-10 bg-[#6a4827] text-white px-8 py-4 rounded-full hover:bg-[#A88540]">
              OUR GOAL
            </button>
            </div>

            <h3 className="mt-10 text-2xl font-serif">Our Fashion Mission</h3>
            <p className="mt-5 text-gray-500 leading-8"> For over 20 years, HCV Fashion Hub has been providing
        customers with stylish and affordable ready-to-wear
        clothing. Our mission is to make it easy for everyone
        to find clothing they love, with a wide selection of
        fashionable styles for men, women, and kids.</p>

          </div>

          {/*Image section*/}
          <div className="overflow-hidden rounded-3xl">
            <img src="aboutus/mission.jpg" alt="" className="w-full h-[450px] object-cover"/>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default AboutUsPage;
