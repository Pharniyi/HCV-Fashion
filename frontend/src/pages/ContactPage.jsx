import React from "react";
import { MapPin, Mail, Globe, Phone } from "lucide-react";
import Footer from "../components/Footer";
// import applestore from ""

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] ">
        <img
          src="contactus/contact-hero.png"
          alt="About Us"
          className="object-cover w-full h-full object-top"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/*Contact Section*/}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-serif" style={{ color: "#6a4827" }}>
              Speak with Us
            </h2>
            <p className="text-gray-600 mt-4 leading-8">
              Have questions about our products, orders, delivery, or sizing?
              Our team is here to help.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <MapPin size={22} className=" text-[#6a4827] mt-1" />
                <span>
                  <h4 className="font-semibold"> Store Address </h4>
                  <p className="text-gray-600">
                    {" "}
                    Bola Ige International Market, Ibadan, Oyo State{" "}
                  </p>
                </span>
              </div>

              <div className="flex gap-4">
                <Phone size={22} className=" text-[#6a4827] mt-1" />
                <span>
                  <h4 className="font-semibold"> Call Us </h4>
                  <p className="text-gray-600"> +234 806 265 1178 </p>
                </span>
              </div>

              <div className="flex gap-4">
                <Mail size={22} className=" text-[#6a4827] mt-1" />
                <span>
                  <h4 className="font-semibold"> Email Us </h4>
                  <p className="text-gray-600"> faniyilola@gmail.com </p>
                </span>
              </div>

              <div className="flex gap-4">
                <Globe size={22} className=" text-[#6a4827] mt-1" />
                <span>
                  <h4 className="font-semibold"> Website </h4>
                  <p className="text-gray-600"> www.hcvfashionhub.com </p>
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#efe3d7] p-8 rounded-lg">
            <h2 className="text-4xl font-serif" style={{ color: "#6a4827" }}>
              24/7 Support
            </h2>

            <p className="text-gray-600 mt-4">
              Send us a message and we'll get back to you as soon as possible.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-3 bg-white w-full"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-3 bg-white w-full"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border p-3 bg-white w-full"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border p-3 bg-white w-full"
                />
              </div>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="border p-3 bg-white w-full"
              />

              <button className="mt-10 bg-[#6a4827] text-white px-8 py-4 rounded-full hover:bg-[#A88540]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/*Banner Section */}
      <section className="max-w-7xl mx-auto px-6 py-5">
        <div
          className="h-[300px] rounded-lg overflow-hidden relative bg-cover "
          style={{ backgroundImage: "url('contactus/contactus-banner.png')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative h-full flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl font-serif text-center">
              Discover Fashion For Every Occasion
            </h2>
            <p className="mt-4">
              Shop the latest trends for men, women, and kids.
            </p>

            {/* App Store Buttons */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                className="flex items-center gap-2 bg-black border border-white/30 rounded-lg px-3 py-2 text-white transition-all duration-200 hover:scale-105 hover:bg-gray-900 active:scale-95"
              >
                <img
                  src="contactus/google-play.png"
                  alt="Download on Google Play"
                  className="h-8 md:h-9 w-auto object-contain"
                />
                <p>
                  GET IT ON <span className="block">Google Play</span>
                </p>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 bg-black border border-white/30 rounded-lg px-3 py-2 text-white transition-all duration-200 hover:scale-105 hover:bg-gray-900 active:scale-95"
              >
                <img
                  src="contactus/app-store.png"
                  alt="Download on App Store"
                  className="h-8 md:h-9 w-auto object-contain"
                />
                <p>
                  Download on <span className="block">App Store</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="overflow-hidden rounded-lg border border-[#d9c3a3] shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.697855269258!2d3.977522774002992!3d7.387715692621958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039937b4015202d%3A0xceca82384fac40a3!2sBola%20Ige%20International%20Market%2C%20Old%20Ife%20Rd%2C%20Ibadan%20200103%2C%20Oyo!5e0!3m2!1sen!2sng!4v1786921242146!5m2!1sen!2sng"
            title="HCV Fashion Hub location"
            className="w-full h-[350px] md:h-[450px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
