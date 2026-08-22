import React from "react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Heritage Corduroy Jacket",
    category: "Jacket",
    price: " 32,000.00",
    image: "men/Corduroy Jacket.jpg",
  },
  {
    id: 2,
    name: "Ethnic Pattern Silk Shirt",
    category: "Shirt",
    price: "18,500.00",
    image: "men/Pattern_Shirt.jpg",
  },
  {
    id: 3,
    name: "Tan Argyle Knit Vest",
    category: "Knitwear",
    price: " 14,500.00",
    image: "men/Sweater V-neck.jpg",
  },
  {
    id: 4,
    name: "Vertical Stripe Knit Polo",
    category: "Polo",
    price: " 16,000.00",
    image: "men/vertical_stripe_knit_polo.jpg",
  },
  {
    id: 5,
    name: "Palm Tree Summer Shirt",
    category: "Shirt",
    price: " 12,000.00",
    image: "men/Palm Tree Shirt.jpg",
  },
  {
    id: 6,
    name: "Tailored Wool Trousers",
    category: "Trousers",
    price: " 24,000.00",
    image: "men/tailored_wool_trouser.jpg",
  },
  {
    id: 7,
    name: "Green Stripe Polo",
    category: "Polo",
    price: " 28,000.00",
    image: "men/green_stripe_polo.jpg",
  },
  {
    id: 8,
    name: "Sweatshirt",
    category: "Jacket",
    price: " 19,500.00",
    image: "men/sweatshirt.jpg",
  },
  {
    id: 9,
    name: "Summer Linen Shorts",
    category: "Shorts",
    price: " 32,000.00",
    image: "men/men's vintage shorts.jpg",
  },
  {
    id: 10,
    name: "Red stripe polo",
    category: "Polo",
    price: " 12,000.00",
    image: "men/red stripe polo.jpg",
  },
  {
    id: 11,
    name: "Cross shorts",
    category: "Shorts",
    price: " 32,000.00",
    image: "men/cross short.jpg",
  },
  {
    id: 12,
    name: "Black trouser",
    category: "Trousers",
    price: " 32,000.00",
    image: "men/Black trouser.jpg",
  },
];

const categories = [
  { name: "Tailored Coats", count: 24 },
  { name: "Evening Gowns", count: 18 },
  { name: "Designer Knitwear", count: 42 },
  { name: "Premium Denim", count: 31 },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const formatPrice = (price) => {
  return `₦${price.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const NewArrivalsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Newest");
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [selectedSize, setSelectedSize] = useState(null);
  const [maxPrice, setMaxPrice] = useState(5000);

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
    <>
      {/*Heading*/}
      <section className="pt-20 pb-5">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="mb-8">
            <p
              className="mb-2 text-[11px] font-medium uppercase "
              style={{ color: "#C5A059" }}
            >
              Premium Collections
            </p>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <h1 className="font-serif text-4xl font-medium md:text-5xl">
                Seasonal Arrivals
              </h1>
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-500">
                  Showing{""}
                  <span className="font-medium text-gray-700 mx-1">
                    {filteredProducts.length}{" "}
                  </span>{" "}
                  items
                </p>

                {/*Sort*/}
                <div className="text-xs uppercase tracking-widest flex gap-2 border p-3">
                  <span className="text-gray-400">Sort By:</span>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="bg-transparent outline-none"
                  >
                    <option value="Newest">Popular</option>
                    <option value="LowToHigh">Price: Low to High</option>
                    <option value="HighToLow">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Content*/}
      <div className="ps-8 pe-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr] max-w-7xl">
        <aside className="hidden lg:block">
          {/*Categories*/}
          <div className="mb-9">
            <h3 className="mb-3 border-b border-gray-300 pb-3 text-sm font-bold uppercase">
              Categories
            </h3>

            <div className="space-y-4">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`flex w-full items-center justify-between text-left text-[13px] transition ${
                  selectedCategory === "All"
                    ? "font-semibold"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                <span>All Collections</span>
              </button>

              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center justify-between text-left text-[13px] transition ${
                    selectedCategory === category.name
                      ? "font-semibold text-[#98701c]"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  <span
                    className={
                      selectedCategory === category.name
                        ? "border-b border-[#98701c]"
                        : ""
                    }
                  >
                    {category.name}
                  </span>

                  <span className="text-gray-400">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-9">
            <h3 className="mb-4 border-b border-gray-300 pb-3 text-[10px] font-bold uppercase tracking-[0.15em]">
              Size
            </h3>

            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    setSelectedSize(selectedSize === size ? null : size)
                  }
                  className={`h-8 border text-[10px] font-medium transition ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 bg-transparent text-gray-700 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="mb-4 border-b border-gray-300 pb-3 text-[10px] font-bold uppercase tracking-[0.15em]">
              Price Range
            </h3>

            <div className="relative mb-5">
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full cursor-pointer accent-[#98701c]"
              />
            </div>

            <div className="flex justify-between text-[10px] font-medium text-gray-600">
              <span>#100</span>
              <span>
                {maxPrice >= 5000 ? "#5,000+" : formatPrice(maxPrice)}
              </span>
            </div>
          </div>
        </aside>

        <section>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-5">
              {filteredProducts.map((product) => (
                <article key={product.id} className="group cursor-pointer">
                  {/* Product Image */}
                  <div className="relative mb-3 aspect-[0.78] overflow-hidden bg-[#eeeae4]">
                    <img
                      src={`/${product.image}`}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Quick Add */}
                    <button className="absolute bottom-0 left-0 right-0 translate-y-full bg-black py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-transform duration-300 group-hover:translate-y-0">
                      Quick Add
                    </button>
                  </div>

                  {/* Product Details */}
                  <div>
                    <h2 className="mb-2 text-[13px] font-medium text-gray-900 md:text-[14px]">
                      {product.name}
                    </h2>

                    <p className="text-[15px] font-medium text-black">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex min-h-100 items-center justify-center border border-gray-200">
              <div className="text-center">
                <h3 className="mb-2 font-serif text-2xl">No products found</h3>

                <p className="mb-5 text-sm text-gray-500">
                  Try adjusting your filters
                </p>

                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setMaxPrice(5000);
                    setSelectedSize(null);
                  }}
                  className="bg-black px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </section>
        </div>
      </div>
    </>
  );
};

export default NewArrivalsPage;
