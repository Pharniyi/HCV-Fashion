import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Heritage Corduroy Jacket",
    category: "Jacket",
    price: "₦ 32,000.00",
    image: "men/Corduroy Jacket.jpg",
  },
  {
    id: 2,
    name: "Ethnic Pattern Silk Shirt",
    category: "Shirt",
    price: "₦ 18,500.00",
    image: "men/Pattern_Shirt.jpg",
  },
  {
    id: 3,
    name: "Tan Argyle Knit Vest",
    category: "Knitwear",
    price: "₦ 14,500.00",
    image: "men/Sweater V-neck.jpg",
  },
  {
    id: 4,
    name: "Vertical Stripe Knit Polo",
    category: "Polo",
    price: "₦ 16,000.00",
    image: "men/vertical_stripe_knit_polo.jpg",
  },
  {
    id: 5,
    name: "Palm Tree Summer Shirt",
    category: "Shirt",
    price: "₦ 12,000.00",
    image: "men/Palm Tree Shirt.jpg",
  },
  {
    id: 6,
    name: "Tailored Wool Trousers",
    category: "Trousers",
    price: "₦ 24,000.00",
    image: "men/tailored_wool_trouser.jpg",
  },
  {
    id: 7,
    name: "Green Stripe Polo",
    category: "Polo",
    price: "₦ 28,000.00",
    image: "men/green_stripe_polo.jpg",
  },
  {
    id: 8,
    name: "Sweatshirt",
    category: "Jacket",
    price: "₦ 19,500.00",
    image: "men/sweatshirt.jpg",
  },
  {
    id: 9,
    name: "Summer Linen Shorts",
    category: "Shorts",
    price: "₦ 32,000.00",
    image: "men/men's vintage shorts.jpg",
  },
  {
    id: 10,
    name: "Red stripe polo",
    category: "Polo",
    price: "₦ 12,000.00",
    image: "men/red stripe polo.jpg",
  },
  {
    id: 11,
    name: "Cross shorts",
    category: "Shorts",
    price: "₦ 32,000.00",
    image: "men/cross short.jpg",
  },
  {
    id: 12,
    name: "Black trouser",
    category: "Trousers",
    price: "₦ 32,000.00",
    image: "men/Black trouser.jpg",
  },
];

const MenPage = () => {
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

  const displayedCount = Math.min(visibleProducts, sortedProducts.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] mt-11.5"
        style={{
          backgroundImage: "url('men/men_hero_section.png')",
          backgroundSize: "contain",
          backgroundPosition: "top",
        }}
      >
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
                onClick={() => setSelectedCategory("Shirt")}
                className={`px-3 py-1 ${selectedCategory === "Shirt" ? "bg-black text-white" : "text-black"}`}
              >
                Shirt
              </button>
              <button
                onClick={() => setSelectedCategory("Jacket")}
                className={`px-3 py-1 ${selectedCategory === "Jacket" ? "bg-black text-white" : "text-black"}`}
              >
                Jacket
              </button>
              <button
                onClick={() => setSelectedCategory("Polo")}
                className={`px-3 py-1 ${selectedCategory === "Polo" ? "bg-black text-white" : "text-black"}`}
              >
                Polo
              </button>
              <button
                onClick={() => setSelectedCategory("Knitwear")}
                className={`px-3 py-1 ${selectedCategory === "Knitwear" ? "bg-black text-white" : "text-black"}`}
              >
                Knitwear
              </button>
              <button
                onClick={() => setSelectedCategory("Trousers")}
                className={`px-3 py-1 ${selectedCategory === "Trousers" ? "bg-black text-white" : "text-black"}`}
              >
                Trousers
              </button>
              <button
                onClick={() => setSelectedCategory("Shorts")}
                className={`px-3 py-1 ${selectedCategory === "Shorts" ? "bg-black text-white" : "text-black"}`}
              >
                Shorts
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
          {visibleProducts >= sortedProducts.length && (
                  <div className="text-center cursor-pointer text-xs tracking-widest uppercase text-gray-500">
                    <div>
                      <span>
                        Showing {displayedCount} of {sortedProducts.length} Items
                      </span>
                      <div className="w-48 h-0.5 bg-black mt-4"></div>
                      <button
                        onClick={() => setVisibleProducts(8)}
                        className="mt-4 border px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition"
                      >
                        Show Less
                      </button>
                    </div>
                  </div>
                )}

                {visibleProducts < sortedProducts.length && (
                  <div>
                    <div className="text-center">
                      <span>
                        Showing {displayedCount} of {sortedProducts.length} Items
                      </span>
                      <div className="w-48 h-0.5 bg-black mt-4"></div>
                      <button
                        onClick={() =>
                          setVisibleProducts((prev) =>
                            Math.min(prev + 4, sortedProducts.length)
                          )
                        }
                        className="mt-8 border px-12 py-4 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition"
                      >
                        Load More
                      </button>
                    </div>
                  </div>
                )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MenPage;
