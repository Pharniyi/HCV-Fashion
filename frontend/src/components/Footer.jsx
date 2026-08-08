import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="flex items-center gap-1 hover:opacity-80 transition-all"
              >
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <img src="HCV_Logo.png" alt="" />
                </div>
                <h1 className="text-xl font-bold text-[#d4af37]">
                  HCV Fashion Hub
                </h1>
              </Link>
            </div>

            <p className="mt-6 text-gray-400">
              Elevating the everyday through intentional design and
              uncompromising quality.
            </p>
          </div>

          <div>
            <h3 className="uppercase text-xs tracking-widest mb-6">Shopping</h3>

            <ul className="space-y-3 text-gray-400">
              <li>About Us</li>
              <li>Sustainability</li>
              <li>Shipping & Returns</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-xs tracking-widest mb-6">Legal</h3>

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
      </>
  )
}

export default Footer