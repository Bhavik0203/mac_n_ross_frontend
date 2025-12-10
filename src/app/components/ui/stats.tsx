import React, { useState, useEffect } from 'react';
import { Users, Calendar, Globe, TrendingUp } from 'lucide-react';
import banner1 from '@/app/images/Frame 1547753805.png';
const SuccessStories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    growth: 0
  });

  const stats = [
    {
      icon: Users,
      number: 10000,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-[#E76524] to-[#d1551a]'
    },
    {
      icon: Calendar,
      number: 979,
      suffix: '',
      label: 'Completed This Year',
      color: 'from-[#E76524] to-[#d1551a]'
    },
    {
      icon: Globe,
      number: 300,
      suffix: '+',
      label: 'New Projects',
      color: 'from-[#E76524] to-[#d1551a]'
    },
    {
      icon: TrendingUp,
      number: 35,
      suffix: '%',
      label: 'Avg Profit Increased',
      color: 'from-[#E76524] to-[#d1551a]'
    }
  ];

  // Animate numbers on mount
  useEffect(() => {
    setIsVisible(true);
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      let currentStep = 0;
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(stat.number * easeOutQuart);
        
        setAnimatedNumbers(prev => ({
          ...prev,
          [index === 0 ? 'clients' : index === 1 ? 'projects' : index === 2 ? 'countries' : 'growth']: currentValue
        }));

        if (currentStep >= steps) {
          clearInterval(timers[index]);
        }
      }, interval);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

interface AnimatedNumbers {
    clients: number;
    projects: number;
    countries: number;
    growth: number;
}

interface Stat {
    icon: React.ElementType;
    number: number;
    suffix: string;
    label: string;
    color: string;
}

const getAnimatedValue = (index: number): number => {
    const values: number[] = [animatedNumbers.clients, animatedNumbers.projects, animatedNumbers.countries, animatedNumbers.growth];
    return values[index];
};

  return (
     <section
      className="relative py-10 px-4 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url('${banner1.src}')` }}
    >
    
    <div className="  flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Success Stories
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }}></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white   rounded-2xl p-8 shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} style={{ background: 'linear-gradient(to bottom right, rgba(231, 101, 36, 0.05), rgba(231, 101, 36, 0.05))' }}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 w-16 h-16 mx-auto rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg border-2`} style={{ background: 'linear-gradient(to bottom right, #E76524, #d1551a)', borderColor: '#E76524' }}>
                  <Icon className="w-8 h-8" style={{ color: '#E76524' }} />
                </div>

                {/* Number */}
                <div className="relative text-center mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-gray-800 transition-all duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    {getAnimatedValue(index).toLocaleString()}
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="relative text-center">
                  <p className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>

                {/* Hover Effect Border */}
                {/* <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 -z-10 blur-xl transition-opacity duration-300`}></div> */}
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-center mt-16 space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transform transition-all duration-1000 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100 + 800}ms`, background: 'linear-gradient(to right, #E76524, #d1551a)' }}
            ></div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default SuccessStories;