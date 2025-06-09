"use client";

import React, { useState, useEffect } from 'react';

import { ChevronDown, Search, ShoppingCart, Clock, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'About Us', href: '/about', hasDropdown: true },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'News & Events', href: '/news' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-90 transition-all duration-300`}>
      {/* Top Bar - Only visible when not scrolled */}
      <div className={`bg-white border-b transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            {/* Left side - Language and Location */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <span className="text-blue-600 font-medium">En</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-blue-600 font-medium">Dubai, UAE</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Sun - Thu 09:00-18:00</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+971-4-227-0977</span>
              </div>
            </div>

            {/* Right side - Email and Social */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@macnross.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer" />
                <div className="w-4 h-4 bg-pink-500 rounded cursor-pointer"></div>
                <Twitter className="w-4 h-4 text-gray-500 hover:text-blue-400 cursor-pointer" />
                <Instagram className="w-4 h-4 text-gray-500 hover:text-pink-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#ffffff1e] backdrop-blur-[28px] shadow-lg py-3' 
          : 'py-4'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Always visible */}
            {!isScrolled && (
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded transform rotate-12"></div>
                </div>
                <span className="text-white text-2xl font-bold">Mac & Ross</span>
              </a>
            </div>
                )}
            {/* Trust Indicators - Only visible when not scrolled */}
            {!isScrolled && (
              <div className="hidden lg:flex items-center space-x-12 transition-all duration-300">
                <div className="text-center">
                  <div className="text-white font-bold text-sm">RT ASEAN</div>
                  <div className="text-blue-200 text-sm">Network Member</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-sm">Forum of Firms</div>
                  <div className="text-blue-200 text-sm">Member</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-sm">Over Decade</div>
                  <div className="text-blue-200 text-sm">Experience in UAE</div>
                </div>
              </div>
            )}
            
            {/* Logo - Always visible on larger screens */}
            {/* CTA Button - Always visible */}
             {!isScrolled && (
            <div className="hidden md:block">
              <button className="bg-[#FFFFFF33] backdrop-blur-[28px]  hover:bg-[#FFFFFF42] hover:backdrop-blur-[28px] text-white px-6 py-2 rounded-md font-semibold transition-colors duration-200">
                CONSULTATION
              </button>
            </div>
             )}
          </div>
            
          {/* Navigation */}
          <nav className={`transition-all duration-300 ${
            isScrolled ? 'mt-2  ' : 'mt-4'
          }`}>
            <div className={`flex justify-center items-center mx-auto max-w-6xl ${
            isScrolled ? '  ' : 'bg-[#FFFFFF33] backdrop-blur-[28px] py-2'
          } `}>
              <ul className="flex space-x-8">
                {navigationItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <a 
                      href={item.href}
                      className={`flex items-center space-x-1 py-2 transition-colors duration-200 ${
                        item.active 
                          ? 'text-white font-medium' 
                          : 'text-white hover:text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </a>
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2">
                          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Audit & Assurance</a>
                          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">VAT Consultancy</a>
                          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Corporate Finance</a>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

             
             
            </div>
          </nav>
        </div>
      </header>

      {/* Demo content to show scrolling effect */}
      
    </div>
  );
};

export default Header;