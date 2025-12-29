'use client';

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Sports & Outdoors',
    'Beauty & Personal Care',
    'Toys & Games',
    'Books & Media',
    'Automotive',
  ];

  return (
    <header className="w-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* LEFT SIDE: Categories Dropdown & Search Bar */}
          <div className="flex items-center gap-3 flex-1 max-w-2xl">
            
            {/* Categories Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap"
              >
                All Categories
                <ChevronDown size={18} strokeWidth={2.5} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-2xl z-50 border border-gray-100">
                  <div className="py-2">
                    {categories.map((category, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-5 py-3 text-gray-700 text-sm hover:bg-green-50 hover:text-green-700 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="flex-1 relative hidden sm:block">
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full px-5 py-2.5 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 text-sm"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                <Search size={18} />
              </button>
            </div>

            {/* Mobile Search Button */}
            <button className="sm:hidden bg-white text-gray-800 p-2.5 rounded-full hover:bg-gray-50 transition-colors">
              <Search size={18} />
            </button>
          </div>

          {/* RIGHT SIDE: Promotional Messages */}
          <div className="hidden md:flex items-center justify-end gap-8 text-white text-xs md:text-sm font-semibold">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-lg">🚚</span>
              <span>FREE SHIPPING OVER $199</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-lg">⏱️</span>
              <span>30 DAYS MONEY BACK</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-lg">🔒</span>
              <span>100% SECURE PAYMENT</span>
            </div>
          </div>
        </div>

        {/* Mobile Promo Messages */}
        <div className="md:hidden grid grid-cols-3 gap-2 mt-3 text-white text-xs font-semibold text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-base">🚚</span>
            <span>FREE SHIPPING</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-base">⏱️</span>
            <span>30 DAYS BACK</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-base">🔒</span>
            <span>100% SECURE</span>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
}
