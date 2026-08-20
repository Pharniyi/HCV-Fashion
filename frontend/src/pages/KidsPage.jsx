import React from "react";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Minimalist Two-Piece Set",
    category: "Sets",
    price: "₦ 15,000.00",
    image: "kids/two piece.jpg",
  },
  {
    id: 2,
    name: "Sequin Tulle Dress",
    category: "Dresses",
    price: "₦ 25,000.00",
    image: "kids/sleeveless dress.jpg",
  },
  {
    id: 3,
    name: "Canvas Shorts",
    category: "Shorts",
    price: "₦ 10,000.00",
    image: "kids/shorts2.jpg",
  },
  {
    id: 4,
    name: "Denim Shorts",
    category: "Shorts",
    price: "₦ 12,000.00",
    image: "kids/shorts.jpg",
  },
  {
    id: 5,
    name: "Striped Knit Polo",
    category: "Tops",
    price: "₦ 8,000.00",
    image: "kids/polo2.jpg",
  },
  {
    id: 6,
    name: "Classic Zip Polo",
    category: "Tops",
    price: "₦ 8,000.00",
    image: "kids/polo1.jpg",
  },
  {
    id: 7,
    name: "Denim Overshirt",
    category: "Jackets",
    price: "₦ 12,000.00",
    image: "kids/jean jacket.jpg",
  },
  {
    id: 8,
    name: "Rose Applique Dress",
    category: "Dresses",
    price: "₦ 25,000.00",
    image: "kids/flower dress.jpg",
  },
  {
    id: 9,
    name: "Denim Cargo Trouser",
    category: "Trousers",
    price: "₦ 18,000.00",
    image: "kids/Denim trouser.jpg",
  },
  {
    id: 10,
    name: "Cargo Trouser",
    category: "Trousers",
    price: "₦ 18,000.00",
    image: "kids/black baggy jeans.jpg",
  },
  {
    id: 11,
    name: "Basic Top",
    category: "Tops",
    price: "₦ 8,000.00",
    image: "kids/basic top.jpg",
  },
  {
    id: 12,
    name: "Cargo Jeans",
    category: "Trousers",
    price: "₦ 18,000.00",
    image: "kids/baggy jeans.jpg",
  }
];

const KidsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Newest");
  const [visibleProducts, setVisibleProducts] = useState(8);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = Number(a.price.replace("₦", "").replace(/,/g, "").trim());
    const priceB = Number(b.price.replace("₦", "").replace(/,/g, "").trim());

    if (sortOption === "LowToHigh") {
      return priceA - priceB;
    }

    if (sortOption === "HighToLow") {
      return priceB - priceA;
    }
    return 0; // For "Newest Arrivals", no sorting is applied
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-primary" style={{backgroundImage: "url('/kids/kid-hero.png')", backgroundSize: "contain", backgroundPosition: "top"}}>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Content */}
        <div className="relative bg-cover bg-center z-10 h-full flex items-center justify-center">
          <div className="max-w-xl text-white text-center">
            <p
              className="font-label-caps uppercase tracking-[0.3em] mb-4"
              style={{ color: "#ffd69a" }}
            >
              Autumn / Winter 2026
            </p>

            <h1 className="text-5xl font-serif font-semibold mb-6">
              Children's Collection
            </h1>

            <p className="max-w-2xl text-lg text-center">
              Discover a curated selection of minimalist designer pieces, where
              architectural precision meets the playful spirit of childhood.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
          <div className="flex items-center gap-10 text-xs uppercase tracking-widest">
            <button className="flex items-center gap-2">
              <SlidersHorizontal />
              Filter
            </button>

            <div className="flex gap-5">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-3 py-1 ${selectedCategory === "All" ? "bg-black text-white" : "text-black"}`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory("Dresses")}
                className={`px-3 py-1 ${selectedCategory === "Dresses" ? "bg-black text-white" : "text-black"}`}
              >
                Dresses
              </button>
              <button
                onClick={() => setSelectedCategory("Tops")}
                className={`px-3 py-1 ${selectedCategory === "Tops" ? "bg-black text-white" : "text-black"}`}
              >
                Tops
              </button>
              <button
                onClick={() => setSelectedCategory("Sets")}
                className={`px-3 py-1 ${selectedCategory === "Sets" ? "bg-black text-white" : "text-black"}`}
              >
                Sets
              </button>
              
              <button
                onClick={() => setSelectedCategory("Shorts")}
                className={`px-3 py-1 ${selectedCategory === "Shorts" ? "bg-black text-white" : "text-black"}`}
              >
                Shorts
              </button>
              <button
                onClick={() => setSelectedCategory("Trousers")}
                className={`px-3 py-1 ${selectedCategory === "Trousers" ? "bg-black text-white" : "text-black"}`}
              >
                Trousers
              </button>
              <button
                onClick={() => setSelectedCategory("Jackets")}
                className={`px-3 py-1 ${selectedCategory === "Jackets" ? "bg-black text-white" : "text-black"}`}
              >
                Jackets
              </button>
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
            <article key={product.id} className="group cursor-pointer">
                <div className="relative mb-3 aspect-[0.78] overflow-hidden bg-[#eeeae4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Quick Add */}
                <button className="absolute bottom-0 left-0 right-0 translate-y-full bg-black py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-transform duration-300 group-hover:translate-y-0">
                  Quick Add
                </button>
              </div>

              <p className="mt-4 text-xs uppercase tracking-widest text-gray-500">
                {product.category}
              </p>
              <h3 className="mt-4 text-sm">{product.name}</h3>

              <p className="mt-1 text-xl">{product.price}</p>
            </article>
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
};

export default KidsPage;
