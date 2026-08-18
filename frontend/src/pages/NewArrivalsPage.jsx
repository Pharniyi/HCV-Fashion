import React from "react";
import { useState } from "react";

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

const NewArrivalsPage = () => {
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
    <>
      <section className="min-h-screen px-6 py-20">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
            <div className="mb-8">
              <p className="mb-2 text-[11px] font-medium uppercase " style={{ color: "#C5A059" }}>Premium Collections</p>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <h1 className="font-serif text-4xl font-medium md:text-5xl">Seasonal Arrivals</h1>
                <div className="flex items-center gap-4" >
                  <p className="text-sm text-gray-500">
                    Showing{""}
                    <span className="font-medium text-gray-700 mx-1">{filteredProducts.length} </span> items
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
    </>
  );
};

export default NewArrivalsPage;
