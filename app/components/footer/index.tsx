/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState, useMemo } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

interface FooterLink {
    label: string;
    href: string;
}

interface FooterColumn {
    title: string;
    links: FooterLink[];
}

interface PaymentMethod {
    name: string;
    icon: string;
}

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [currency, setCurrency] = useState('USD');
    const [language, setLanguage] = useState('en');

    const footerColumns: FooterColumn[] = useMemo(() => [
        {
            title: 'TOP CATEGORIES',
            links: [
                { label: 'Laptops', href: '#' },
                { label: 'PC & Computers', href: '#' },
                { label: 'Cell Phones', href: '#' },
                { label: 'Tablets', href: '#' },
                { label: 'Gaming & VR', href: '#' },
                { label: 'Networking', href: '#' },
                { label: 'Cameras', href: '#' },
                { label: 'Sounds', href: '#' },
                { label: 'Office', href: '#' },
            ]
        },
        {
            title: 'COMPANY',
            links: [
                { label: 'About Swoo', href: '#' },
                { label: 'Contact', href: '#' },
                { label: 'Career', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Financing', href: '#' },
                { label: 'Store Locations', href: '#' },
            ]
        },
        {
            title: 'HELP CENTER',
            links: [
                { label: 'Customer Service', href: '#' },
                { label: 'Policy', href: '#' },
                { label: 'Terms & Conditions', href: '#' },
                { label: 'Tech Order', href: '#' },
                { label: 'FAQ', href: '#' },
                { label: 'My Account', href: '#' },
                { label: 'Product Support', href: '#' },
            ]
        },
        {
            title: 'PARTNER',
            links: [
                { label: 'Become Seller', href: '#' },
                { label: 'Affiliate', href: '#' },
                { label: 'Advertise', href: '#' },
                { label: 'Partnership', href: '#' },
            ]
        },
    ], []);

    const paymentMethods: PaymentMethod[] = useMemo(() => [
        { name: 'PayPal', icon: '🅿️' },
        { name: 'Mastercard', icon: '💳' },
        { name: 'Visa', icon: '💳' },
        { name: 'Stripe', icon: '🔵' },
        { name: 'Klarna', icon: '📱' },
    ], []);

    const socialLinks = useMemo(() => [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: '#', label: 'Email' },
    ], []);

    const handleSubscribe = () => {
        if (email.trim()) {
            setSubscribed(true);
            setTimeout(() => {
                setEmail('');
                setSubscribed(false);
            }, 3000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white border-t border-gray-200">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Top Section - Contact & Brand Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-gray-200">
                    {/* Left - Brand & Contact */}
                    <div className="space-y-6">
                        {/* Logo/Brand */}
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 tracking-wider">
                                SWOO - 1ST NYC TECH ONLINE MARKET
                            </h2>
                        </div>

                        {/* Hotline */}
                        <div className="space-y-2">
                            <p className="text-xs uppercase text-gray-600 font-semibold tracking-wider">
                                HOTLINE 24/7
                            </p>
                            <a
                                href="tel:+12503686251"
                                className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                            >
                                (025) 3686 25 16
                            </a>
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                                <div className="text-sm text-gray-700">
                                    <p>257 Thatchar Road St. Brooklyn, Manhattern,</p>
                                    <p>NY 10092</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <Mail className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                                <a
                                    href="mailto:contact@swoo-wear.com"
                                    className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                    contact@swoo-wear.com
                                </a>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex gap-4">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>

                        {/* Currency & Language Selector */}
                        <div className="flex gap-4">
                            <div className="relative">
                                <select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    className="appearance-none px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                                >
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="CAD">CAD</option>
                                </select>
                            </div>

                            <div className="relative">
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="appearance-none px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                                >
                                    <option value="en">🇺🇸 Eng</option>
                                    <option value="es">🇪🇸 Español</option>
                                    <option value="fr">🇫🇷 Français</option>
                                    <option value="de">🇩🇪 Deutsch</option>
                                    <option value="zh">🇨🇳 中文</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Right - Newsletter Subscription */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                                SUBSCRIBE & GET <span className="text-green-600">10% OFF</span> FOR YOUR FIRST ORDER
                            </h3>
                            <p className="text-xs text-gray-600 mb-4">
                                Enter your email address below to stay updated about our latest offers and deals.
                            </p>
                        </div>

                        {/* Newsletter Form */}
                        <div className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-lg transition-all duration-300 active:scale-95"
                            >
                                {subscribed ? '✓' : 'SUBSCRIBE'}
                            </button>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-xs text-gray-600">
                            By subscribing, you've accepted the our <a href="#" className="text-blue-600 hover:underline">Privacy</a> policy
                        </p>

                        {/* Success Message */}
                        {subscribed && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-700 text-center font-medium">
                                ✓ Thank you for subscribing! Check your email for the 10% discount code.
                            </div>
                        )}
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {footerColumns.map((column, index) => (
                        <div key={index}>
                            <h4 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider">
                                {column.title}
                            </h4>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-all duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex items-center justify-between gap-8 flex-wrap">
                        {/* Copyright */}
                        <div className="text-xs text-gray-600">
                            © 2024 <span className="font-semibold">ShanonoCES</span>. All Rights Reserved
                        </div>

                        {/* Payment Methods */}
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Accepted payments
                            </span>
                            <div className="flex gap-3 items-center">
                                {paymentMethods.map((method) => (
                                    <div
                                        key={method.name}
                                        className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-sm font-bold hover:border-gray-400 transition-colors cursor-pointer"
                                        title={method.name}
                                    >
                                        {method.icon}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Site Link */}
                        <a
                            href="#"
                            className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            Mobile Site
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gray-900 hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 hover:opacity-100 group"
                aria-label="Scroll to top"
            >
                <ChevronUp className="w-6 h-6" />
            </button>
        </footer>
    );
}
