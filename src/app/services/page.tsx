"use client";
import React, { useState, useEffect } from 'react';
import ProductStyle from '../components/product-style';

const StackingCards = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Subscription Management Platform",
      description: "User-centered approach ke saath intuitive interface banaya gaya financial management ke liye with gamification.",
      color: "from-teal-400 to-teal-600",
      metrics: [
        { label: "Engagement", value: "12 min" },
        { label: "User Satisfaction", value: "4.5*" }
      ]
    },
    {
      id: 2,
      title: "E-Commerce Website Revamp",
      description: "User-friendly interface create kiya premium operational web scraping proxies ke access ko simplify karne ke liye.",
      color: "from-blue-400 to-blue-600",
      metrics: [
        { label: "Usability", value: "85%" },
        { label: "User Retention", value: "70%" }
      ]
    },
    {
      id: 3,
      title: "Mobile Health Tracking App",
      description: "Leading Bitcoin Data aur Stats site. Live price action, on-chain data monitor, aur key economic indicators track karte hain.",
      color: "from-orange-400 to-orange-600",
      metrics: [
        { label: "Conversion Rate", value: "120%" },
        { label: "User Satisfaction", value: "4.8*" }
      ]
    },
    {
      id: 4,
      title: "Corporate Intranet Optimization",
      description: "Innovative app unused internet ka fayda uthane ke liye. Simplicity, functions, aur extra money earning ke ways ke wajah se different hai.",
      color: "from-cyan-400 to-cyan-600",
      metrics: [
        { label: "Conversion Rate", value: "20%" },
        { label: "User Satisfaction", value: "95%" }
      ],
      comingSoon: true
    }
  ];

  // Algorithm for calculating card positions and scales
  interface CardMetric {
    label: string;
    value: string;
  }

  interface Card {
    id: number;
    title: string;
    description: string;
    color: string;
    metrics: CardMetric[];
    comingSoon?: boolean;
  }

  interface CardTransform {
    top: string;
    transform: string;
    zIndex: number;
  }

  const calculateCardTransform = (index: number, totalCards: number): CardTransform => {
    const cardHeight = 100; // vh units
    const stackOffset = 20; // px offset for stacking
    const scaleReduction = 0.05; // scale reduction per card

    const baseTop = 20; // Starting position in vh
    const stackedTop = baseTop + (index * stackOffset);
    const scale = 1 - (index * scaleReduction);

    return {
      top: `${stackedTop}vh`,
      transform: `scale(${Math.max(scale, 0.8)})`, // Minimum scale of 0.8
      zIndex: totalCards - index + 10
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black ">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Stacking Cards Algorithm
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Scroll karo aur dekho kaise cards ek ke upar ek stack hote hain! 🚀
          </p>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Container - Algorithm Implementation */}
      <div className="relative">
        {/* Spacer for scroll effect */}
        <ProductStyle/>
        <div className="h-[400vh]">
          {cards.map((card, index) => {
            const transform = calculateCardTransform(index, cards.length);
            
            return (
              <div
                key={card.id}
                className="sticky w-full max-w-5xl mx-auto px-6"
                style={{
                  top: transform.top,
                  zIndex: transform.zIndex,
                  transform: transform.transform,
                  transformOrigin: 'center top'
                }}
              >
                <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center text-black font-bold">
                          {card.id}
                        </div>
                        <span className="text-teal-400 font-semibold">Project #{card.id}</span>
                      </div>
                      
                      <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {card.title}
                      </h2>
                      
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {card.description}
                      </p>
                      
                      <button 
                        className={`px-8 py-3 rounded-full border transition-all duration-300 ${
                          card.comingSoon 
                            ? 'border-gray-600 text-gray-400 cursor-not-allowed' 
                            : 'border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black hover:scale-105'
                        }`}
                        disabled={card.comingSoon}
                      >
                        {card.comingSoon ? 'Coming Soon' : 'View Case Study'}
                      </button>
                    </div>

                    {/* Visualization */}
                    <div className="space-y-6">
                      <div className="relative h-64 bg-black rounded-2xl overflow-hidden border border-gray-700">
                        <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-20`}></div>
                        
                        {/* Animated Elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-32 h-32 bg-gradient-to-r ${card.color} rounded-full blur-xl opacity-60 animate-pulse`}></div>
                          <div 
                            className={`absolute w-20 h-20 bg-gradient-to-r ${card.color} rounded-full animate-spin`}
                            style={{ animationDuration: `${8 + index * 2}s` }}
                          ></div>
                        </div>
                        
                        <div className="absolute inset-0 overflow-hidden">
                          <div className={`absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r ${card.color} opacity-40 transform -translate-y-1/2`}>
                            <div 
                              className={`absolute w-20 h-full bg-gradient-to-r ${card.color} animate-pulse`}
                              style={{ animationDelay: `${index * 0.5}s` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-6">
                        {card.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                            <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                            <p className="text-3xl font-bold text-white">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center mt-8 space-x-4">
                    <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white text-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-500 text-xs font-bold">
                        E
                      </div>
                      <span>Edit in Framer</span>
                    </button>
                    <button className="px-6 py-3 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition-all duration-300 hover:scale-105">
                      Remix Project
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* Footer */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stacking Algorithm Complete! 🎉
          </h3>
          <p className="text-gray-400 text-lg">
            Yeh algorithm har card ko perfect position aur scale deta hai scroll ke saath.
          </p>
        </div>
      </section>
    </div>
  );
};

export default StackingCards;