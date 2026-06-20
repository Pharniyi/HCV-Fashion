import React from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
const products = [
  {
    id: 1,
    name: "Heritage Corduroy Jacket",
    price: "$320.00",
    image: "/Corduroy Jacket.jpg",
  },
  {
    id: 2,
    name: "Ethnic Pattern Silk Shirt",
    price: "$185.00",
    image: "/Pattern_Shirt.jpg",
  },
  {
    id: 3,
    name: "Tan Argyle Knit Vest",
    price: "$145.00",
    image: "/Sweater V-neck.jpg",
  },
  {
    id: 4,
    name: "Vertical Stripe Knit Polo",
    price: "$160.00",
    image: "/vertical_stripe_knit_polo.jpg",
  },
  {
    id: 5,
    name: "Palm Tree Summer Shirt",
    price: "$120.00",
    image: "/Palm Tree Shirt.jpg",
  },
  {
    id: 6,
    name: "Tailored Wool Trousers",
    price: "$240.00",
    image: "/tailored_wool_trouser.jpg",
  },
  {
    id: 7,
    name: "Green Stripe Polo",
    price: "$280.00",
    image: "/green_stripe_polo.jpg",
  },
  {
    id: 8,
    name: "Sweatshirt",
    price: "$195.00",
    image: "/sweatshirt.jpg",
  }
];

const MenPage = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage: "url('/men_hero_section.png')"}}>
        <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
                <h1 className="text-6xl font-serif font-semibold mb-4">
                    Men's Collection
                </h1>

                <p className="max-w-2xl text-lg">
                    Discover a curated selection of contemporary menswear, where
                    artisanal craftsmanship meets modern silhouettes.
                </p>
            </div>
      </section>

      {/* Filter */}
      <section className= "border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <div className="flex items-center gap-10 text-xs uppercase tracking-widest">
            <button className='flex items-center gap-2'>
                <SlidersHorizontal />
                Filter
            </button>

            <div className="flex gap-5">
              <button>All</button>
              <button>Shirts</button>
              <button>Trousers</button>
              <button>Knitwear</button>
            </div>
          </div>

          <div className="text-xs uppercase tracking-widest flex gap-3">
            <span className="text-gray-400">Sort By:</span>
            <select className="bg-transparent outline-none">
              <option>Newest Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-8 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {products.map((product) => (
            <div key={product.id}>
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-90 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-sm">{product.name}</h3>

              <p className="mt-1 text-xl">{product.price}</p>
            </div>
          ))}

        </div>

      </section>

      {/* Load More Section */}
      <section className="max-w-7xl mx-auto px-8 py-16">

        <div className="border-t"></div>

        <div className="flex flex-col items-center mt-10">
          <p className="text-xs tracking-widest uppercase text-gray-500">
            Showing 8 of 48 Items
          </p>

          <div className="w-48 h-0.5 bg-black mt-4"></div>

          <button className="mt-8 border px-12 py-4 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition">
            Load More
          </button>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white">

        <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-10">

          <div>
            
           <div className='flex items-center gap-8'>
            <Link to = "/" className="flex items-center gap-1 hover:opacity-80 transition-all">
                <div className='size-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                
                <img src="HCV_Logo.png" alt="" />
                </div>
                <h1 className='text-xl font-bold text-[#d4af37]'>HCV Fashion Hub</h1>
            </Link>
           </div>

            <p className="mt-6 text-gray-400">
              Elevating the everyday through intentional design and
              uncompromising quality.
            </p>
          </div>

          <div>
            <h3 className="uppercase text-xs tracking-widest mb-6">
              Shopping
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>About Us</li>
              <li>Sustainability</li>
              <li>Shipping & Returns</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-xs tracking-widest mb-6">
              Legal
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-xs tracking-widest mb-6">
              Newsletter
            </h3>

            <div className="border-b border-gray-600 flex justify-between pb-3">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none"
              />
              <button>→</button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
          © 2026 HCV Fashion Hub. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default MenPage