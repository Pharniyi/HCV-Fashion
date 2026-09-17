import React, { createContext, useContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const parsePrice = (price) => Number(String(price).replace(/[^0-9.-]+/g, "")) || 0;

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("shop_cart");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("shop_cart", JSON.stringify(cart));
    } catch (e) {
      // ignore
    }
  }, [cart]);

  const addToCart = (product, size = null, qty = 1) => {
    setCart((prev) => {
      const key = `${product._id}_${size || "na"}`;
      const idx = prev.findIndex((it) => it.key === key);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }

      return [
        ...prev,
        {
          key,
          id: product._id,
          product,
          size,
          qty,
          price: parsePrice(product.price),
        },
      ];
    });
  };

  const removeFromCart = (key) => setCart((prev) => prev.filter((i) => i.key !== key));

  const updateQuantity = (key, qty) =>
    setCart((prev) => prev.map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i)));

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const cartTotal = cart.reduce((s, i) => s + (i.price || parsePrice(i.product?.price)) * i.qty, 0);

  return (
    <ShopContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);

export default ShopContext;
