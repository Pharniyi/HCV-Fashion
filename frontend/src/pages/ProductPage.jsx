import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

const fallbackProducts = [
  {
    id: 1,
    name: "Heritage Corduroy Jacket",
    category: "Jacket",
    price: "₦ 32,000.00",
    image: "/src/assets/men/Corduroy Jacket.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "A premium everyday jacket designed with a structured silhouette, durable cotton blend, and refined finish for elevated styling.",
  },
  {
    id: 2,
    name: "Classic Black Gown",
    category: "Gowns",
    price: "₦ 15,000.00",
    image: "/src/assets/women/black gown.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A timeless black gown with a seamless drape, polished neckline, and flattering fit suited for both statement and understated styling.",
  },
];

const normalizeProduct = (product) => {
  if (!product) return null;

  const images = Array.isArray(product.image)
    ? product.image
    : product.image
      ? [product.image]
      : [];

  return {
    ...product,
    _id: product._id ?? product.id,
    image: images.length ? images : ["/src/assets/men/Corduroy Jacket.jpg"],
    sizes: Array.isArray(product.sizes) && product.sizes.length
      ? product.sizes
      : ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      product.description ||
      "Crafted for everyday elegance, this piece blends comfort, versatility, and a refined finish.",
  };
};

const ProductPage = () => {
  const { productId } = useParams();
  const location = useLocation();
  const { addToCart } = useContext(ShopContext);

  const product = useMemo(() => {
    const fromState = location.state?.product;
    if (fromState) return normalizeProduct(fromState);

    const found = fallbackProducts.find(
      (item) => String(item.id) === String(productId)
    );

    return normalizeProduct(found ?? null);
  }, [location.state, productId]);

  const [image, setImage] = useState(product?.image?.[0] ?? null);
  const [size, setSize] = useState(null);

  useEffect(() => {
    setImage(product?.image?.[0] ?? null);
    setSize(null);
  }, [product]);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Product not found</h2>

          <Link to="/" className="bg-black px-6 py-3 text-white">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const productPrice = Number(
    String(product.price).replace(/[^0-9.-]+/g, "")
  ) || 0;

  return (
    <div className="px-6 py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex gap-4">
          <div className="flex w-20 flex-col gap-3">
            {product.image.map((item, i) => (
              <div
                key={`${item}-${i}`}
                className="cursor-pointer"
                onClick={() => setImage(item)}
              >
                <img
                  src={item}
                  alt={`${product.name} ${i + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex-1">
            <img
              src={image}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-medium">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex gap-1 text-yellow-600">
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarHalfFilled />
            </div>
            <p className="text-sm text-gray-500">(22)</p>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-semibold">
              ₦{productPrice.toLocaleString("en-NG")}.00
            </h3>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-6 text-gray-600">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="mb-3 text-sm font-medium">Select Size</p>

            <div className="flex gap-2">
              {[...product.sizes]
                .sort((a, b) => {
                  const order = ["XS", "S", "M", "L", "XL", "XXL"];
                  return order.indexOf(a) - order.indexOf(b);
                })
                .map((item) => (
                  <button
                    key={item}
                    onClick={() => setSize(item)}
                    className={`h-10 w-12 rounded-none bg-primary text-sm ${
                      item === size
                        ? "ring-1 ring-slate-900/40"
                        : "ring-1 ring-slate-900/10"
                    }`}
                  >
                    {item}
                  </button>
                ))}
            </div>
          </div>

          {size && (
            <p className="mt-3 text-sm text-gray-500">
              Selected size: <span className="font-medium text-black">{size}</span>
            </p>
          )}

          <button
            disabled={!size}
            onClick={() => addToCart(product, size, 1)}
            className="mt-8 w-full bg-black py-4 text-sm font-medium uppercase tracking-wider text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {size ? "Add to Cart" : "Select a Size"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;