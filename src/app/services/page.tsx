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
      color: "from-[#E76524] to-[#d1551a]",
      metrics: [
        { label: "Engagement", value: "12 min" },
        { label: "User Satisfaction", value: "4.5*" }
      ]
    },
    {
      id: 2,
      title: "E-Commerce Website Revamp",
      description: "User-friendly interface create kiya premium operational web scraping proxies ke access ko simplify karne ke liye.",
      color: "from-[#E76524] to-[#d1551a]",
      metrics: [
        { label: "Usability", value: "85%" },
        { label: "User Retention", value: "70%" }
      ]
    },
    {
      id: 3,
      title: "Mobile Health Tracking App",
      description: "Leading Bitcoin Data aur Stats site. Live price action, on-chain data monitor, aur key economic indicators track karte hain.",
      color: "from-[#E76524] to-[#d1551a]",
      metrics: [
        { label: "Conversion Rate", value: "120%" },
        { label: "User Satisfaction", value: "4.8*" }
      ]
    },
    {
      id: 4,
      title: "Corporate Intranet Optimization",
      description: "Innovative app unused internet ka fayda uthane ke liye. Simplicity, functions, aur extra money earning ke ways ke wajah se different hai.",
      color: "from-[#E76524] to-[#d1551a]",
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
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #231F20, #231F20, #231F20)' }}>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#E76524' }}>
            Stacking Cards Algorithm
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Scroll karo aur dekho kaise cards ek ke upar ek stack hote hain! 🚀
          </p>
         
        </div>
      </section>
      <ProductStyle/>
      
     


      {/* Footer */}
     
    </div>
  );
};

export default StackingCards;