"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Send, 
  MessageCircle, 
  Twitter, 
  Youtube,
  Phone,
  Mail
} from 'lucide-react';

const Footer = () => {
  return (
   <>
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12 mt-10 mb-2 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Section - 1/3 width */}
         <div className="lg:col-span-1 transform hover:scale-105 transition-all duration-500 ease-out">
  {/* Brand Section */}
  <div className="flex items-center mb-4 group">
    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mr-3 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 ease-out shadow-lg hover:shadow-2xl">
      <span className="text-blue-900 font-bold text-lg group-hover:text-blue-700 transition-colors duration-300">MR</span>
    </div>
    <span className="text-2xl font-bold group-hover:text-blue-200 transition-all duration-300 hover:tracking-wider">Mac & Ross</span>
  </div>

  <p className="text-blue-200 mb-8 text-sm hover:text-white transition-colors duration-300 cursor-default">
    Delivering excellence in Auditing, Accounting & Advisory for over a decade in the UAE.
  </p>

  {/* Stay Connected Section */}
  <div className="mb-8">
    <h3 className="font-semibold text-xl mb-6 hover:text-blue-200 transition-colors duration-300 cursor-default relative">
      Stay Connected
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-500 hover:w-full"></div>
    </h3>

    {/* Main Office */}
    <div className="mb-6 group">
      <p className="text-blue-200 font-medium mb-3 group-hover:text-white transition-colors duration-300">Main Office</p>
      <div className="flex items-start text-sm group hover:bg-gradient-to-br hover:from-gray-800 hover:to-blue-900 hover:bg-opacity-30 p-2 rounded-lg transition-all duration-300 hover:translate-x-2">
        <Phone className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 group-hover:text-blue-300 group-hover:animate-bounce transition-all duration-300" />
        <a href="tel:+97142511626" className="text-blue-200 hover:text-white transition-all duration-300 hover:underline decoration-wavy">
          +971 4 251 1626
        </a>
      </div>
      <div className="flex items-center text-sm group hover:bg-gradient-to-br hover:from-gray-800 hover:to-blue-900 hover:bg-opacity-30 p-2 rounded-lg transition-all duration-300 hover:translate-x-2">
        <Mail className="w-4 h-4 mr-2 flex-shrink-0 group-hover:text-blue-300 group-hover:animate-bounce transition-all duration-300" />
        <a href="mailto:info@macnross.com" className="text-blue-200 hover:text-white transition-all duration-300 hover:underline decoration-wavy">
          info@macnross.com
        </a>
      </div>
    </div>

    {/* Office Location */}
    <a
  href="https://www.bing.com/maps?q=o.+111%2C+Al+Safa+C+Bldg.%2C+Al+Nahda+Street%2C+Al+Qusais%2C+Dubai%2C+UAE&FORM=HDRSC6&cp=25.271289%7E55.373133&lvl=16.5"
  target="_blank"
  rel="noopener noreferrer"
  className="block mb-6 group"
>
  <p className="text-blue-200 font-medium mb-3 group-hover:text-white transition-colors duration-300">
    Office Address
  </p>
  <p className="text-sm text-blue-200 group-hover:text-white transition-colors duration-300">
    Office No. 111, Al Safa C Bldg., Al Nahda Street, Al Qusais, Dubai, UAE
  </p>
</a>

  </div>

  {/* Social Media Icons */}
  <div className="flex space-x-2">
    <a href="https://www.linkedin.com/company/macrossca" target="_blank" rel="noopener noreferrer"
      className="bg-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:-translate-y-1 group">
      <Linkedin className="w-4 h-4 group-hover:animate-pulse" />
    </a>
    <a href="https://www.facebook.com/macrossca" target="_blank" rel="noopener noreferrer"
      className="bg-blue-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:-translate-y-1 group">
      <Facebook className="w-4 h-4 group-hover:animate-pulse" />
    </a>
    <a href="https://twitter.com/macrossca" target="_blank" rel="noopener noreferrer"
      className="bg-blue-700 hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-600 p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:-translate-y-1 group">
      <Twitter className="w-4 h-4 group-hover:animate-pulse" />
    </a>
    <a href="https://www.instagram.com/macrossca" target="_blank" rel="noopener noreferrer"
      className="bg-blue-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:-translate-y-1 group">
      <Instagram className="w-4 h-4 group-hover:animate-pulse" />
    </a>
  </div>
</div>


          {/* Right Section - 2/3 width */}
         <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Recent News */}
    <div className="transform hover:scale-105 transition-all duration-500 ease-out hover:bg-gradient-to-br hover:from-gray-800 hover:to-blue-900 hover:bg-opacity-20 p-4 rounded-lg hover:shadow-xl">
      <h3 className="font-semibold text-xl mb-6 hover:text-blue-200 transition-all duration-300 cursor-default relative group">
        Recent News
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-purple-400 transition-all duration-500 group-hover:w-full"></div>
      </h3>
      <ul className="space-y-3 text-sm text-blue-200">
        <li className="hover:translate-x-2 transition-all duration-300">I sink under the weight <span className="block text-xs text-blue-400">June 6, 2016</span></li>
        <li className="hover:translate-x-2 transition-all duration-300">Possession of my entire soul <span className="block text-xs text-blue-400">June 6, 2016</span></li>
        <li className="hover:translate-x-2 transition-all duration-300">I am so happy, my dear friend <span className="block text-xs text-blue-400">June 6, 2016</span></li>
      </ul>
    </div>

    {/* Useful Links */}
    <div className="transform hover:scale-105 transition-all duration-500 ease-out hover:bg-gradient-to-br hover:from-gray-800 hover:to-blue-900 hover:bg-opacity-20 p-4 rounded-lg hover:shadow-xl">
      <h3 className="font-semibold text-xl mb-6 hover:text-blue-200 transition-all duration-300 cursor-default relative group">
        Useful Links
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-300 to-blue-400 transition-all duration-500 group-hover:w-full"></div>
      </h3>
      <ul className="space-y-3 text-sm text-blue-200">
        {['About Us', 'Our Team', 'Our Services', 'News', 'Careers','Privacy Policy','Terms Conditions'].map((link, index) => (
          <li key={link} className="hover:translate-x-2 transition-all duration-300">
            <Link href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="group relative hover:text-white transition-all duration-300">
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>

  </div>
</div>

        </div>
      </div>
      
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-center py-4  mx-auto max-w-6xl">
      <p className="text-sm text-blue-200">
        © {new Date().getFullYear()} Mac & Ross. All rights reserved. / Carefully crafted by <Link href="https://digitalizetheglobe.com">Digitalize The Globe.</Link>
      </p>
     
    </div>
   </>
  );
};

export default Footer;