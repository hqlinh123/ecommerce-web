'use client';
import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

export default function TopNav() {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedLang, setSelectedLang] = useState({ code: 'Eng', flag: '🇺🇸' });

  const currencies = ['USD', 'VND', 'EUR', 'GBP'];
  const languages = [
    { code: 'Eng', flag: '🇺🇸' },
    { code: 'Vie', flag: '🇻🇳' },
    { code: 'Chi', flag: '🇨🇳' },
  ];

  return (
    <nav className="w-full h-10 bg-gray-50 border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 text-sm">
        
        {/* Left Side - Hotline */}
        <div className="flex items-center gap-2 text-gray-600">
          <Phone className="w-4 h-4" />
          <span className="font-medium">Hotline 24/7</span>
          <a 
            href="tel:0253888256" 
            className="text-gray-800 font-semibold hover:text-blue-600 transition-colors"
          >
            (025) 3888 25 16
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          
          {/* Sell on Swoo */}
          <a 
            href="/seller/register" 
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Sell on Swoo
          </a>

          {/* Order Track */}
          <a 
            href="/orders/track" 
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Order Track
          </a>

          {/* Currency Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setCurrencyOpen(!currencyOpen);
                setLangOpen(false);
              }}
              className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              <span>{selectedCurrency}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {currencyOpen && (
              <div className="absolute top-full right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                {currencies.map((currency) => (
                  <button
                    key={currency}
                    onClick={() => {
                      setSelectedCurrency(currency);
                      setCurrencyOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                      selectedCurrency === currency ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {currency}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setLangOpen(!langOpen);
                setCurrencyOpen(false);
              }}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              <span className="text-base">{selectedLang.flag}</span>
              <span>{selectedLang.code}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {langOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                      selectedLang.code === lang.code ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Backdrop khi dropdown mở */}
      {(currencyOpen || langOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setCurrencyOpen(false);
            setLangOpen(false);
          }}
        />
      )}
    </nav>
  );
}
