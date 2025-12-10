import React from 'react';
import { Rocket, MapPin, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <Rocket className="w-12 h-12" />,
      title: "Get Very Fast",
      description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my"
    },
    {
      id: 2,
      icon: <MapPin className="w-12 h-12" />,
      title: "Business Matching",
      description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my"
    },
    {
      id: 3,
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Growing your business",
      description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white py-20 px-4" style={{ background: 'linear-gradient(to bottom right, #f8f9fa, #ffffff, #fff5f0)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group text-center"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Icon Container */}
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  {/* Background Circle */}
                  <div className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg group-hover:shadow-xl" style={{ background: 'linear-gradient(to bottom right, #fff5f0, #ffe8d6)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom right, #ffe8d6, #ffd4b3)'} onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom right, #fff5f0, #ffe8d6)'}>
                    {/* Icon */}
                    <div className="group-hover:scale-110 transform transition duration-300" style={{ color: '#E76524' }}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Floating Animation Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style={{ backgroundColor: '#E76524' }}></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-opacity duration-500" style={{ backgroundColor: '#E76524' }}></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" style={{ background: 'linear-gradient(to bottom right, rgba(231, 101, 36, 0.2), rgba(231, 101, 36, 0.2))' }}></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800 transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-base max-w-sm mx-auto group-hover:text-slate-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Animated Underline */}
                <div className="w-0 h-0.5 mx-auto group-hover:w-16 transition-all duration-500 ease-out" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }}></div>
              </div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl transform scale-110" style={{ background: 'linear-gradient(to bottom right, rgba(255, 245, 240, 0.5), rgba(255, 232, 214, 0.5))' }}></div>
            </div>
          ))}
        </div>

        {/* Additional Decorative Elements */}
       
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;