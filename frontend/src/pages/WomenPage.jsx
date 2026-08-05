import React from 'react'
import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: "Floral Print Maxi Dress",
    category: "Dress",
    price: "₦ 25,000.00",
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
        <section className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage: "url('/women-hero.png')"}}>
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
                <button onClick={() => setSelectedCategory("Shirt")} className={`px-3 py-1 ${selectedCategory === "Shirt" ? "bg-black text-white" : "text-black"}`}>Shirt</button>
                <button onClick={() => setSelectedCategory("Jacket")} className={`px-3 py-1 ${selectedCategory === "Jacket" ? "bg-black text-white" : "text-black"}`}>Jacket</button>
                <button onClick={() => setSelectedCategory("Polo")} className={`px-3 py-1 ${selectedCategory === "Polo" ? "bg-black text-white" : "text-black"}`}>Polo</button>
                <button onClick={() => setSelectedCategory("Knitwear")} className={`px-3 py-1 ${selectedCategory === "Knitwear" ? "bg-black text-white" : "text-black"}`}>Knitwear</button>
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

export default WomenPage