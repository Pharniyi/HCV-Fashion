import React from 'react'
import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const products = [
  {
    id: 1,
    name: "Classic black gown",
    category: "Gowns",
    price: "₦ 15,000.00",
    image: "women/black gown.jpg",
  },

  {
    id: 2,
    name: "Ethereal browngown",
    category: "Gowns",
    price: "₦ 15,000.00",
    image: "women/brown gown.jpg",
  },

  {
    id: 3,
    name: "Silk navy shirt",
    category: "Shirts",
    price: "₦ 9,000.00",
    image: "women/silk shirt.jpg",
  },

  {
    id: 4,
    name: "Sculpted ash blazer",
    category: "Blazers",
    price: "₦ 28,000.00",
    image: "women/ash blazer.jpg",
  },

  {
    id: 5,
    name: "Wide leg pant trousers",
    category: "Trousers",
    price: "₦ 10,000.00",
    image: "women/wide leg pant trouser.jpg",
  },

  {
    id: 6,
    name: "Pleated ash trouser",
    category: "Trousers",
    price: "₦ 15,000.00",
    image: "women/ash pant trouser.jpg",
  },

  {
    id: 7,
    name: "Tiered black skirt",
    category: "Skirts",
    price: "₦ 10,000.00",
    image: "women/black skirt.jpg",
  },

  {
    id: 8,
    name: "Denim cargo trouser",
    category: "Trousers",
    price: "₦ 15,000.00",
    image: "women/jeans trouser.jpg",
  },

  {
    id: 9,
    name: "Baggy indigo jeans",
    category: "Trousers",
    price: "₦ 25,000.00",
    image: "women/baggy jeans.jpg",
  },
  {
    id: 10,
    name: "Wine boat neck top",
    category: "Tops",
    price: "₦ 10,000.00",
    image: "women/wine top.jpg",
  },
  
  {
    id: 11,
    name: "Stripped cropped shirt",
    category: "Shirts",
    price: "₦ 10,000.00",
    image: "women/crop shirt.jpg",
  },
  {
    id: 12,
    name: "Turtle neck",
    category: "Tops",
    price: "₦ 8,000.00",
    image: "women/turtle neck.jpg",
  },
  {
    id: 13,
    name: "Basic top",
    category: "Tops",
    price: "₦ 7,000.00",
    image: "women/brown basic top.jpg",
  },
  {
    id: 14,
    name: "Jean Knicker",
    category: "Shorts",
    price: "₦ 15,000.00",
    image: "women/female short.jpg",
  },
  {
    id: 15,
    name: "Turtle neck",
    category: "Tops",
    price: "₦ 10,000.00",
    image: "women/thick turtle neck.jpg",
  },
  {
    id: 16,
    name: "Cargo jean trouser",
    category: "Trousers",
    price: "₦ 10,000.00",
    image: "women/wide leg cargo jeans.jpg",
  },

  {
    id: 17,
    name: "Checkers shirt",
    category: "Shirts",
    price: "₦ 8,000.00",
    image: "women/checkers shirt.jpg",
  },
  {
    id: 18,
    name: "Round neck",
    category: "Tops",
    price: "₦ 7,000.00",
    image: "women/round neck.jpg",
  },
  {
    id: 19,
    name: "Jean trouser",
    category: "Trousers",
    price: "₦ 20,000.00",
    image: "women/ash jeans.jpg"
  },
  {
    id: 20,
    name: "Shirt",
    category: "Shirts",
    price: "₦ 10,000.00",
    image: "women/shirt.png"
  }


]
const WomenPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOption, setSortOption] = useState('Newest')
    const [visibleProducts, setVisibleProducts] = useState(8);
  
      const filteredProducts = selectedCategory === 'All' ? products : products.filter(
        (product) => product.category === selectedCategory
      )
  
      const sortedProducts = [...filteredProducts].sort((a, b) => {
        const priceA = Number(a.price.replace("₦", "").replace(/,/g, "").trim());
        const priceB = Number(b.price.replace("₦", "").replace(/,/g, "").trim());
  
        if (sortOption === 'LowToHigh') {
          return priceA - priceB
        }
  
        if (sortOption === 'HighToLow') {
          return priceB - priceA
        }
        return 0; // For "Newest Arrivals", no sorting is applied
      })
  
    return (
      <div className="min-h-screen">
  
        {/* Hero Section */}
        <section className="relative h-[80vh]" style={{backgroundImage: "url('women/women-hero.png')", backgroundSize: "contain", backgroundPosition: "top"}}>
          <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
                  <h1 className="text-6xl font-serif font-semibold mb-4">
                      Women's Collection
                  </h1>
  
                  <p className="max-w-2xl text-lg">
                      Curated silhouettes defined by architectural precision and Italian craftsmanship. Explore the digital boutique of haute couture essentials.
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
                <button onClick={() => setSelectedCategory("All")} className={`px-3 py-1 ${selectedCategory === "All" ? "bg-black text-white" : "text-black"}`}>All</button>
                <button onClick={() => setSelectedCategory("Gowns")} className={`px-3 py-1 ${selectedCategory === "Gowns" ? "bg-black text-white" : "text-black"}`}>Gowns</button>
                <button onClick={() => setSelectedCategory("Shirts")} className={`px-3 py-1 ${selectedCategory === "Shirts" ? "bg-black text-white" : "text-black"}`}>Shirts</button>
                <button onClick={() => setSelectedCategory("Blazers")} className={`px-3 py-1 ${selectedCategory === "Blazers" ? "bg-black text-white" : "text-black"}`}>Blazers</button>
                <button onClick={() => setSelectedCategory("Tops")} className={`px-3 py-1 ${selectedCategory === "Tops" ? "bg-black text-white" : "text-black"}`}>Tops</button>
                <button onClick={() => setSelectedCategory("Skirts")} className={`px-3 py-1 ${selectedCategory === "Skirts" ? "bg-black text-white" : "text-black"}`}>Skirts</button>
                <button onClick={() => setSelectedCategory("Trousers")} className={`px-3 py-1 ${selectedCategory === "Trousers" ? "bg-black text-white" : "text-black"}`}>Trousers</button>
                <button onClick={() => setSelectedCategory("Shorts")} className={`px-3 py-1 ${selectedCategory === "Shorts" ? "bg-black text-white" : "text-black"}`}>Shorts</button>
              </div>
            </div>
  
            <div className="text-xs uppercase tracking-widest flex gap-3">
              <span className="text-gray-400">Sort By:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-transparent outline-none"
              >
                <option value="Newest">Newest Arrivals</option>
                <option value="LowToHigh">Price: Low to High</option>
                <option value="HighToLow">Price: High to Low</option>
              </select>
            </div>
  
          </div>
        </section>
  
        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-8 py-10">
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
  
            {sortedProducts.slice(0, visibleProducts).map((product) => (
              <div key={product.id}>
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-90 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              
              <p className="mt-4 text-xs uppercase tracking-widest text-gray-500">
                {product.category}
              </p>
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
              Showing {visibleProducts} of {sortedProducts.length} Items
            </p>
  
            <div className="w-48 h-0.5 bg-black mt-4"></div>
  
            {visibleProducts < sortedProducts.length && (
    <button
      onClick={() => setVisibleProducts((prev) => prev + 4)}
      className="mt-8 border px-12 py-4 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition"
    >
      Load More
    </button>
  )}
          </div>
  
        </section>
  
        {/* Footer */}
        <Footer />
  
      </div>
    );
}

export default WomenPage