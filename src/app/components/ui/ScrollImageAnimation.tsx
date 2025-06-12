'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ScrollImageAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageWidth, setImageWidth] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Calculate image width based on scroll position
      const windowHeight = window.innerHeight;
      const totalScrollHeight = document.body.scrollHeight - windowHeight;
      const scrollProgress = currentScrollY / totalScrollHeight;

      // Stage 1: Full width (0-33% scroll)
      // Stage 2: Medium width (33-66% scroll)  
      // Stage 3: Small width (66-100% scroll)
      
      let newWidth;
      if (scrollProgress <= 0.33) {
        // Stage 1: 100% width
        newWidth = 100;
      } else if (scrollProgress <= 0.66) {
        // Stage 2: Transition from 100% to 60%
        const stageProgress = (scrollProgress - 0.33) / 0.33;
        newWidth = 100 - (stageProgress * 40);
      } else {
        // Stage 3: Transition from 60% to 30%
        const stageProgress = (scrollProgress - 0.66) / 0.34;
        newWidth = 60 - (stageProgress * 30);
      }

      setImageWidth(Math.max(30, newWidth));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCurrentImage = () => {
    const windowHeight = window.innerHeight;
    const totalScrollHeight = document.body.scrollHeight - windowHeight;
    const scrollProgress = scrollY / totalScrollHeight;

    if (scrollProgress <= 0.33) {
      return '/api/placeholder/1200/600'; // Stage 1 image
    } else if (scrollProgress <= 0.66) {
      return '/api/placeholder/1200/600'; // Stage 2 image
    } else {
      return '/api/placeholder/1200/600'; // Stage 3 image
    }
  };

  const getCurrentContent = () => {
    const windowHeight = window.innerHeight;
    const totalScrollHeight = document.body.scrollHeight - windowHeight;
    const scrollProgress = scrollY / totalScrollHeight;

    if (scrollProgress <= 0.33) {
      return {
        title: "Welcome to Our Team",
        subtitle: "Discover the power of collaboration",
        description: "Join our diverse team of professionals working together to create amazing experiences."
      };
    } else if (scrollProgress <= 0.66) {
      return {
        title: "Grow Your Career",
        subtitle: "At the heart of change",
        description: "It's your time to shine. Bring your ingenuity, curiosity and big ideas."
      };
    } else {
      return {
        title: "Join Us",
        subtitle: "At the heart of change",
        description: "It's your time to shine. Bring your ingenuity, curiosity and big ideas. Join us →"
      };
    }
  };

  const content = getCurrentContent();

  return (
    <div className="min-h-[300vh] bg-black">
      {/* Fixed image container */}
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10">
        <div 
          className="relative transition-all duration-300 ease-out"
          style={{ 
            width: `${imageWidth}%`,
            height: '70vh',
            maxWidth: '1200px'
          }}
        >
          <Image
            src="/api/placeholder/1200/600"
            alt="Team collaboration"
            fill
            className="object-cover rounded-lg"
            priority
          />
          
          {/* Content overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-end pr-8">
            <div className="text-white max-w-md">
              <div className="text-sm uppercase tracking-wider mb-2 opacity-80">
                CAREERS
              </div>
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                {content.title}
              </h1>
              <h2 className="text-2xl mb-4 opacity-90">
                {content.subtitle}
              </h2>
              <p className="text-lg opacity-80 leading-relaxed">
                {content.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer sections for scrolling */}
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>

      {/* Progress indicator */}
      <div className="fixed bottom-8 left-8 z-20">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
          <div className="text-white text-sm">
            Width: {Math.round(imageWidth)}%
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="fixed bottom-8 right-8 z-20 text-white text-sm opacity-60">
        Scroll to see animation
      </div>
    </div>
  );
};

export default ScrollImageAnimation;