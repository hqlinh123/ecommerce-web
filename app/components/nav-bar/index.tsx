'use client';
import {
    ChevronDown,
    Heart,
    Menu,
    ShoppingBag,
    User,
    X
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type MenuItem = {
  label: string;
  href: string;
  hasDropdown: boolean;
  subItems?: {
    label: string;
    href: string;
  }[];
};

export default function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const cartTotal = 1689.00;
  const cartItemCount = 3;

  const menuItems: MenuItem[] = [
    { 
      label: 'HOMES', 
      href: '/', 
      hasDropdown: true,
      subItems: [
        { label: 'Home 1', href: '/home-1' },
        { label: 'Home 2', href: '/home-2' },
        { label: 'Home 3', href: '/home-3' },
      ]
    },
    { 
      label: 'PAGES', 
      href: '/pages', 
      hasDropdown: true,
      subItems: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Terms', href: '/terms' },
      ]
    },
    { 
      label: 'PRODUCTS', 
      href: '/products', 
      hasDropdown: true,
      subItems: [
        { label: 'All Products', href: '/products' },
        { label: 'Categories', href: '/categories' },
        { label: 'Deals', href: '/deals' },
      ]
    },
    { 
      label: 'CONTACT', 
      href: '/contact', 
      hasDropdown: false 
    },
  ];

  return (
    <nav className="w-full h-20 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 leading-tight">SWOO</span>
            <span className="text-sm text-gray-600 leading-tight">TECH MART</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-green-500 transition-colors py-2"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.label && item.subItems && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl py-2 animate-fadeIn">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Icons & Cart */}
        <div className="flex items-center gap-4">
          
          {/* User Icon */}
          <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <User className="w-5 h-5 text-gray-600" />
          </button>

          {/* Wishlist Icon */}
          <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors relative">
            <Heart className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Shopping Bag Icon */}
          <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <ShoppingBag className="w-5 h-5 text-gray-600" />
          </button>

          {/* Welcome & Login */}
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-xs text-gray-500 uppercase">Welcome</span>
            <Link 
              href="/login" 
              className="text-sm font-semibold text-gray-900 hover:text-green-500 transition-colors"
            >
              LOG IN / REGISTER
            </Link>
          </div>

          {/* Cart Button */}
          <Link 
            href="/cart"
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:border-green-500 transition-colors group"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-white" />
              </div>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-900 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            </div>
            <div className="hidden xl:flex flex-col">
              <span className="text-xs text-gray-500 uppercase">Cart</span>
              <span className="text-sm font-bold text-gray-900 group-hover:text-green-500 transition-colors">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg animate-slideDown">
          <div className="px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block text-sm font-semibold text-gray-900 hover:text-green-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && item.subItems && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block text-sm text-gray-600 hover:text-green-500 transition-colors py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Login */}
            <Link
              href="/login"
              className="block text-sm font-semibold text-gray-900 hover:text-green-500 transition-colors py-2 border-t border-gray-200 mt-4 pt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              LOG IN / REGISTER
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}