'use client';
import { useState, useMemo } from 'react';
import { Laptop, Gamepad2, Headphones, Monitor } from 'lucide-react';

interface CategoryItem {
    name: string;
}

interface SlideContent {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    backgroundColor: string;
}

interface ProductCard {
    id: number;
    title: string;
    subtitle: string;
    price?: string;
    description?: string;
    buttonText: string;
    backgroundColor: string;
    textColor: string;
    image: string;
}

interface BrandItem {
    id: number;
    name: string;
    logo: string;
}

interface TopCategory {
    id: number;
    name: string;
    icon: React.ReactNode;
}

export default function ProductSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const categoriesData = useMemo<CategoryItem[]>(() => [
        { name: 'Laptops' },
        { name: 'PC & Computers' },
        { name: 'Cell Phones' },
        { name: 'Tablets' },
        { name: 'Gaming & VR' },
        { name: 'Networking' },
        { name: 'Cameras' },
        { name: 'Sounds' },
        { name: 'Office' },
        { name: 'Storage, USB' },
        { name: 'Accessories' },
        { name: 'Clearance' }
    ], []);

    const featuredBrands: BrandItem[] = [
        { id: 1, name: 'JAMX', logo: '🔵' },
        { id: 2, name: 'Digitek', logo: '💚' },
        { id: 3, name: 'IdeProject', logo: '🔴' },
        { id: 4, name: 'Grafbase', logo: '🟠' },
        { id: 5, name: 'MSI', logo: '⚫' },
        { id: 6, name: 'ohbear', logo: '❤️' },
        { id: 7, name: 'OAK', logo: '🟢' },
        { id: 8, name: 'snyk', logo: '🟢' },
        { id: 9, name: 'sonex', logo: '🔴' },
        { id: 10, name: 'stropi', logo: '🔵' },

    ];

    const topCategories: TopCategory[] = [
        { id: 1, name: 'Laptops', icon: <Laptop className="w-12 h-12" /> },
        { id: 2, name: 'PC Gaming', icon: <Gamepad2 className="w-12 h-12" /> },
        { id: 3, name: 'Headphones', icon: <Headphones className="w-12 h-12" /> },
        { id: 4, name: 'Monitors', icon: <Monitor className="w-12 h-12" /> }
    ];

    return (
        <div className="w-full bg-gray-100 px-4 py-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* TOP SECTION - SIDEBAR + SLIDER + SIDE CARDS */}
                <div className="flex gap-4">
                    {/* LEFT SIDEBAR */}
                    <div className="w-1/5">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="text-sm font-bold text-red-600 mb-4 uppercase">SALE 40% OFF</h3>
                            <ul className="space-y-2">
                                {categoriesData.map((category) => (
                                    <li key={category.name}>
                                        <button className="text-sm text-gray-800 hover:text-green-600 font-medium text-left">
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CENTER MAIN SLIDER */}
                    <div className="w-2/5">
                        <div className="bg-gray-500 text-white rounded-xl overflow-hidden shadow-lg h-72 p-8 flex items-center justify-between">
                            <div className="w-1/2 space-y-3">
                                <h2 className="text-3xl font-bold">Noise Cancelling</h2>
                                <p className="text-lg">Headphone</p>
                                <p className="text-sm text-gray-200 leading-relaxed">
                                    Bono Over-Ear Headphone<br />
                                    Wifi, Voice Assistant,<br />
                                    Low Latency Game Mode
                                </p>
                                <button className="bg-white text-gray-900 px-6 py-2 rounded font-bold text-sm hover:bg-gray-100 transition">
                                    BUY NOW
                                </button>
                            </div>
                            <div className="w-1/2 flex justify-center items-center text-6xl">
                                🎧
                            </div>
                        </div>

                        {/* Slide Indicators */}
                        <div className="flex justify-center gap-1 mt-3">
                            <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-800 font-bold">3 / 3</span>
                        </div>
                    </div>

                    {/* RIGHT SIDE CARDS - STACKED */}
                    <div className="w-2/5 space-y-4">
                        {/* XOMIA Watch */}
                        <div className="bg-green-50 rounded-xl p-6 shadow-sm flex items-center gap-4">
                            <div className="text-4xl">⌚</div>
                            <div>
                                <p className="text-xs text-gray-600">XOMIA</p>
                                <h3 className="font-bold text-gray-900">Sport Water</h3>
                                <h3 className="font-bold text-gray-900">Resistance Watch</h3>
                                <button className="mt-3 bg-gray-900 text-white px-4 py-1 rounded text-xs font-bold hover:bg-black">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>

                        {/* OKODO Camera */}
                        <div className="bg-gray-900 text-white rounded-xl p-6 shadow-sm flex items-center gap-4">
                            <div className="text-4xl">📷</div>
                            <div>
                                <p className="text-xs text-gray-400">OKODO</p>
                                <h3 className="font-bold text-lg">HERO 11+</h3>
                                <p className="text-xs text-gray-400">BLACK</p>
                                <p className="text-lg font-bold text-green-400 mt-2">$169</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION - PRODUCT CARDS GRID */}
                <div className="grid grid-cols-4 gap-4">
                    {/* Card 1 - Sono Playgo */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-gray-300 h-32 flex items-center justify-center text-3xl">
                            🎮
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-gray-900 text-sm mb-1">Sono Playgo 5</h3>
                            <p className="text-red-600 font-bold text-sm mb-3">from $569</p>
                            <button className="w-full bg-gray-200 text-gray-900 py-2 rounded text-xs font-bold hover:bg-gray-300">
                                DISCOVER NOW
                            </button>
                        </div>
                    </div>

                    {/* Card 2 - Logitek */}
                    <div className="bg-gray-500 text-white rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-gray-600 h-32 flex items-center justify-center text-3xl">
                            ⌨️
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-sm mb-1">Logitek Bluetooth</h3>
                            <p className="text-xs text-gray-200 mb-2">Keyboard</p>
                            <p className="text-xs text-gray-200 mb-3">Best for all device</p>
                        </div>
                    </div>

                    {/* Card 3 - XOMIA Watch */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-green-100 h-32 flex items-center justify-center text-3xl">
                            ⌚
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-gray-900 text-sm mb-2">XOMIA Sport Water</h3>
                            <p className="text-gray-600 text-xs">Resistance Watch</p>
                        </div>
                    </div>

                    {/* Card 4 - OKODO */}
                    <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-sm">
                        <div className="h-32 flex items-center justify-center text-3xl">
                            📷
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-sm mb-1">OKODO</h3>
                            <p className="text-xs text-gray-400 mb-2">HERO 11+ BLACK</p>
                            <p className="text-green-400 font-bold text-sm">$169</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-8'>
                    {/* FEATURED BRANDS SECTION */}
                    <div className="flex-1 bg-white rounded-xl p-8 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-900">FEATURED BRANDS</h2>
                            <button className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                                View All
                            </button>
                        </div>
                        <div className="flex gap-8 items-center justify-start flex-wrap">
                            {featuredBrands.map((brand) => (
                                <div
                                    key={brand.id}
                                    className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <span className="text-2xl font-bold text-gray-800">{brand.logo}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TOP CATEGORIES SECTION */}
                    <div className="flex-1 bg-white rounded-xl p-8 shadow-sm">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-gray-900">TOP CATEGORIES</h2>
                            <button className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                                View All
                            </button>
                        </div>
                        <div className="grid grid-cols-4 gap-8">
                            {topCategories.map((category) => (
                                <div
                                    key={category.id}
                                    className="flex flex-col items-center gap-4 group cursor-pointer"
                                >
                                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-green-50 group-hover:text-green-600 transition-all duration-200">
                                        {category.icon}
                                    </div>
                                    <p className="text-center text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                        {category.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
