// components/EcommercePromo.tsx
import React from 'react';
import { ShoppingCart, Headphones, Keyboard, Camera, Watch, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description?: string;
  price?: string;
  priceFrom?: boolean;
  imageColor?: string;
  icon?: React.ReactNode;
  buttonText?: string;
  tag?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  priceFrom = false,
  imageColor = 'bg-gray-200',
  icon,
  buttonText = 'SHOP NOW',
  tag
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
      {tag && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>
      )}
      
      <div className={`${imageColor} h-48 flex items-center justify-center relative`}>
        {icon || (
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <Headphones className="w-16 h-16 text-white" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        
        {price && (
          <div className="mb-4">
            {priceFrom && (
              <span className="text-gray-500 text-sm">FROM </span>
            )}
            <span className="text-2xl font-bold text-gray-900">{price}</span>
          </div>
        )}
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
          {buttonText}
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const CategoryItem: React.FC<{ name: string }> = ({ name }) => (
  <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200 py-1">{name}</li>
);

const EcommercePromo: React.FC = () => {
  const categories = [
    'Laptops',
    'PC & Computers',
    'Cell Phones',
    'Tablets',
    'Gaming & VR',
    'Networking',
    'Cameras',
    'Sounds',
    'Office',
    'Storage, USB',
    'Accessories',
    'Clearance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      {/* Header with Sale Banner */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-4 md:p-6 mb-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white text-red-600 font-bold text-2xl md:text-3xl px-6 py-3 rounded-xl mr-4">
                SALE 40% OFF
              </div>
              <div className="hidden md:block">
                <p className="text-white text-lg">Limited time offer • Ends soon</p>
              </div>
            </div>
            <button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-xl flex items-center transition-colors duration-300">
              <ShoppingCart className="mr-2" />
              Shop All Deals
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <CategoryItem key={index} name={category} />
                ))}
              </ul>
              
              {/* Featured Category */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Featured</h3>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 rounded-xl">
                  <Headphones className="w-8 h-8 mb-2" />
                  <h4 className="font-bold text-lg">Noise Cancelling</h4>
                  <p className="text-gray-300 text-sm">Headphones</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Products */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product 1 */}
              <ProductCard
                title="Bono Over-Ear Headphone"
                description="WiFi, Voice Assistant, Low Latency Game Mode"
                price="$199"
                imageColor="bg-gradient-to-br from-blue-100 to-blue-200"
                buttonText="BUY NOW"
              />

              {/* Product 2 */}
              <ProductCard
                title="Sono Playgo 5"
                description="Premium sound quality with 30h battery"
                price="$569"
                priceFrom={true}
                imageColor="bg-gradient-to-br from-purple-100 to-purple-200"
                buttonText="DISCOVER NOW"
                tag="NEW"
              />

              {/* Product 3 */}
              <ProductCard
                title="Logitek Bluetooth Keyboard"
                description="Best for all devices"
                price="$89"
                imageColor="bg-gradient-to-br from-green-100 to-green-200"
                icon={<Keyboard className="w-20 h-20 text-green-600" />}
              />

              {/* Product 4 */}
              <div className="md:col-span-2 lg:col-span-1">
                <ProductCard
                  title="OKODO HERO 11+ BLACK"
                  price="$169"
                  priceFrom={true}
                  imageColor="bg-gradient-to-br from-gray-800 to-black"
                  icon={<Camera className="w-20 h-20 text-white" />}
                  buttonText="VIEW DEAL"
                />
              </div>

              {/* Product 5 */}
              <ProductCard
                title="XONIA Sport Watch"
                description="Water Resistance, GPS, Heart Rate Monitor"
                price="$249"
                imageColor="bg-gradient-to-br from-orange-100 to-orange-200"
                icon={<Watch className="w-20 h-20 text-orange-600" />}
                buttonText="SHOP NOW"
                tag="BESTSELLER"
              />

              {/* Promo Banner */}
              <div className="md:col-span-2 lg:col-span-3">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        End of Year Clearance
                      </h3>
                      <p className="text-indigo-100">
                        Up to 60% off on selected items. Limited stock available.
                      </p>
                    </div>
                    <button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg transition-colors duration-300 whitespace-nowrap">
                      Shop Clearance
                      <ChevronRight className="ml-2 inline w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Indicator */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-6 h-2 rounded-full bg-blue-600"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <div className="text-2xl font-bold text-blue-600">Free</div>
            <div className="text-gray-600">Shipping over $50</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <div className="text-2xl font-bold text-blue-600">30-Day</div>
            <div className="text-gray-600">Returns</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <div className="text-2xl font-bold text-blue-600">1-Year</div>
            <div className="text-gray-600">Warranty</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommercePromo;