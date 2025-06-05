"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, TrendingUp, Shield, Calculator, FileText, Building, Globe, Zap } from 'lucide-react';
import about from "@/app/images/banner1.jpg"; // Adjust the path as necessary
import banner1 from "@/app/images/accounting_services.jpg"; // Adjust the path as necessary
// Font configurations


// TypeScript interface for slide data
interface Slide {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

export default function Home() {
  // State management
   const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  
  // Refs
  const scrollContainerRef = useRef<HTMLDivElement>(null);
    const services = [
    {
      id: 1,
      title: "VAT Consulting",
      description: "Expert VAT advisory services to help you navigate complex tax regulations and optimize your business operations.",
      icon: Calculator,
      color: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Corporate Tax",
      description: "Comprehensive corporate tax planning and compliance services tailored to your business needs.",
      icon: Building,
      color: "from-green-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Excise Tax",
      description: "Specialized excise tax services ensuring full compliance with regulatory requirements.",
      icon: Shield,
      color: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Accounting Services",
      description: "Professional accounting and bookkeeping services to keep your finances organized and compliant.",
      icon: FileText,
      color: "from-purple-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Business Registration",
      description: "Complete business setup and registration services to get your company started legally.",
      icon: Users,
      color: "from-indigo-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Financial Planning",
      description: "Strategic financial planning and advisory services to help your business grow and prosper.",
      icon: TrendingUp,
      color: "from-teal-500 to-green-600",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }
  ];
  // Slide data
  const slides: Slide[] = [
    {
      title: "we help",
      subtitle: "growing business",
      description: "We help you managing asset, provide financial advice. Leave money issue with us and focus on your core business.",
      buttonText: "Contact Us"
    },
    {
      title: "we support",
      subtitle: "scaling ventures",
      description: "Transform your business with our comprehensive financial solutions and expert guidance for sustainable growth.",
      buttonText: "Learn More"
    },
    {
      title: "we empower",
      subtitle: "success stories",
      description: "Partner with us to unlock your business potential through strategic financial planning and asset management.",
      buttonText: "Get Started"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 10000); // 10 seconds

      return () => clearInterval(interval);
    }
  }, [slides.length, isPaused]);

  // Navigation functions
  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  // Pause/Resume auto-slide on hover
  const handleMouseEnter = (): void => {
    setIsPaused(true);
  };

  const handleMouseLeave = (): void => {
    setIsPaused(false);
  };


  // State for hovering the services slider
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className={`min-h-screen`}>
      {/* Hero Slider Section */}
      <div 
        className="relative w-full h-screen flex justify-center items-center overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Image with Overlay */}
        <div />
          <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
        {/* Overlay with perspective lines */}
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 opacity-20">
            {/* Perspective grid lines */}
            <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid" patternUnits="userSpaceOnUse" width="50" height="50">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" transform="perspective(500px) rotateX(60deg)"/>
              {/* Converging lines for perspective */}
              <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                <line x1="0" y1="400" x2="600" y2="200"/>
                <line x1="1200" y1="400" x2="600" y2="200"/>
                <line x1="300" y1="800" x2="600" y2="200"/>
                <line x1="900" y1="800" x2="600" y2="200"/>
              </g>
            </svg>
          </div>
        </div>

        {/* Content Container - Now properly centered */}
        <div className="relative z-10 mt-20 w-full max-w-6xl px-6 lg:px-12 text-start">
          <div className="max-w-4xl mx-auto">
            {/* Animated Content */}
            <div 
              key={currentSlide}
              className="animate-fade-in"
            >
              <h2 className="text-gray-300 text-2xl lg:text-3xl font-light pl-1 tracking-wide">
                {slides[currentSlide].title}
              </h2>
              <h1 className="text-white text-6xl lg:text-[100px] pb-2 font-bold  leading-tight tracking-tight">
                {slides[currentSlide].subtitle}
              </h1>
              <p className="text-gray-200 text-lg lg:text-xl  mx-auto mb-12 pl-1 leading-relaxed font-light">
                {slides[currentSlide].description}
              </p>
              <button 
                className=" text-white px-8 py-4  font-semibold text-lg hover:scale-105 shadow-lg top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label={slides[currentSlide].buttonText}
              >
                {slides[currentSlide].buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-gray-200" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:text-gray-200" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
          <div 
            className="h-full bg-white transition-all duration-300 ease-linear"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`
            }}
          />
        </div>

        {/* Custom CSS Styles */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .text-6xl {
              font-size: 3rem;
            }
            .text-8xl {
              font-size: 4rem;
            }
          }
        `}</style>
      </div>

      {/* Additional content sections can go here */}
       <div className="min-h-screen bg-gradient-to-br  from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Our Professional Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tax and business solutions tailored to meet your unique needs and drive your success forward.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="w-1/3 flex-shrink-0 p-4"
                  >
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Image Section */}
                      <div className="relative overflow-hidden h-48">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        
                        {/* Floating Icon */}
                        <div className="absolute top-4 right-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                          <div className={`bg-gradient-to-r ${service.color} p-3 rounded-full shadow-lg`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                          {service.title}
                        </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
  {service.description.split(" ").length > 7
    ? service.description.split(" ").slice(0, 7).join(" ") + "..."
    : service.description}
</p>
                                                
                        {/* Animated Button */}
                        <button className={`relative overflow-hidden bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 hover:shadow-xl hover:scale-105 group-hover:animate-pulse`}>
                          <span className="relative z-10">Learn More</span>
                          <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                      <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 transform -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: services.length - 2 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center my-16 ">
          <div className="bg-white rounded-2xl shadow-lg p-8  max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With years of experience and a commitment to excellence, we provide comprehensive solutions 
              that help businesses navigate complex regulations and achieve sustainable growth. Our expert team 
              is dedicated to delivering personalized service that exceeds your expectations.
            </p>
          </div>
        </div>
       
      </div>
    </div>
   <section
  className="relative pb-20 bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url('${banner1.src}')` }}
>
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
    
    {/* Centered Image */}
   <div className="">
  <div className="relative  top-[-80px] w-full max-w-xs sm:max-w-md md:max-w-lg h-48 sm:h-60 md:h-72 lg:h-96 mx-auto">
    <Image
      src={about}
      alt="About Us Banner Image"
      fill
      className="object-cover  rounded-lg shadow-lg"
      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 500px"
      priority
    />
  </div>
</div>

    {/* Title */}
    <h2 className="uppercase text-sm tracking-widest font-semibold text-gray-300 ">
      Our little story
    </h2>
    <h2 className=" text-[80px] tracking-widest font-bold text-white mb-2">
      Something About Us
    </h2>

    {/* Two Column Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left pb-6">
      <div className="leading-relaxed">
        <p>
          A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
        </p>
      </div>
      <div className="leading-relaxed">
        <p>
          I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, a few stray gleams steal through the branches.
        </p>
      </div>
    </div>
  </div>
   <div className="max-w-6xl z-50 mx-auto my-10 ">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto">
          {/* Top Left - Video Section */}
          <div className="relative bg-white p-8 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/api/placeholder/400/300"
                  alt="Professional man in office"
                  fill
                  className="object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-opacity-100 transition-all">
                    <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right - Trust Content */}
          <div className="bg-white p-8 flex flex-col justify-center items-start">
  <div className="max-w-md">
    <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">
      Did you know that
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A7C] mb-6 leading-snug">
      We are trusted by<br />more than 5,000<br />clients
    </h2>
    <p className="text-gray-500 mb-8 leading-relaxed text-sm">
      A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital.
    </p>
    <button className="bg-white border border-[#1B2A7C] text-[#1B2A7C] px-6 py-3 rounded-full font-semibold hover:bg-[#f0f4ff] transition-colors">
      Read Our Story
    </button>
  </div>
</div>


          {/* Bottom Left - Expertise Content */}
          <div className="bg-gray-900 text-white p-8 flex flex-col justify-center">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">
                We are an expert in this field
              </h2>
              <p className="text-gray-300 mb-8">
                Yes I feel that I never was a greater artist than now. When, while the lovely valley teems.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-300">
                    Maintain services and beyond your expectation
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-300">
                    Get the best support among all services
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-300">
                    Fully responsive and works great on all major devices
                  </p>
                </div>
              </div>

              <button className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Read Our Story
              </button>
            </div>
          </div>

          {/* Bottom Right - Team Image */}
          <div className="relative bg-gray-100">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src="/api/placeholder/600/400"
                alt="Business team meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
    </div>
</section>
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            A Brief About{' '}
            <span className="text-red-500">Mac N Ross</span>
          </h2>
        </div>

        {/* Four Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Our Strategy */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 relative overflow-hidden">
              <div className="relative">
                {/* Chess pieces representation */}
                <div className="flex items-center justify-center">
                  <div className="w-16 h-20 bg-black rounded-t-full relative mr-2">
                    <div className="absolute bottom-0 w-20 h-4 bg-black rounded-full -left-2"></div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="w-8 h-12 bg-amber-700 rounded-t-lg"></div>
                    <div className="w-10 h-3 bg-amber-700 rounded-full -ml-1"></div>
                  </div>
                </div>
                {/* Hand silhouette */}
                <div className="absolute -top-8 -right-4 w-12 h-16 bg-black rounded-bl-3xl rounded-br-lg transform rotate-12">
                  <div className="absolute -top-2 right-2 w-2 h-6 bg-black rounded-full"></div>
                  <div className="absolute -top-1 right-0 w-2 h-5 bg-black rounded-full"></div>
                  <div className="absolute top-1 right-1 w-2 h-4 bg-black rounded-full"></div>
                  <div className="absolute top-2 right-3 w-2 h-3 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">OUR STRATEGY</h3>
          </div>

          {/* Our Standards */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full shadow-lg flex items-center justify-center mb-6 relative">
              <div className="relative">
                {/* Hands protecting copyright symbol */}
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="text-white text-2xl font-bold">©</div>
                </div>
                {/* Hand silhouettes */}
                <div className="absolute -left-8 top-0 w-8 h-12 bg-white bg-opacity-30 rounded-br-full transform -rotate-12"></div>
                <div className="absolute -right-8 top-0 w-8 h-12 bg-white bg-opacity-30 rounded-bl-full transform rotate-12"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">OUR STANDARDS</h3>
          </div>

          {/* Our Team */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-orange-200 to-blue-300 rounded-full shadow-lg flex items-center justify-center mb-6 relative">
              <div className="grid grid-cols-3 gap-2">
                {/* Team member icons */}
                {[1,2,3,4,5,6,7,8,9].map((i) => (
                  <div key={i} className="w-8 h-10 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center">
                    <div className="w-4 h-4 bg-teal-600 rounded-full mb-1"></div>
                    <div className="w-6 h-2 bg-teal-600 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">OUR TEAM</h3>
          </div>

          {/* Our Strength */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full shadow-lg flex items-center justify-center mb-6 relative">
              <div className="relative">
                {/* Globe with people around */}
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center relative">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                {/* People figures around globe */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-blue-600 rounded-t-full"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-blue-600 rounded-t-full"></div>
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-8 bg-blue-600 rounded-t-full"></div>
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-6 h-8 bg-blue-600 rounded-t-full"></div>
                <div className="absolute -top-4 -left-4 w-5 h-6 bg-blue-600 rounded-t-full"></div>
                <div className="absolute -top-4 -right-4 w-5 h-6 bg-blue-600 rounded-t-full"></div>
                <div className="absolute -bottom-4 -left-4 w-5 h-6 bg-blue-600 rounded-t-full"></div>
                <div className="absolute -bottom-4 -right-4 w-5 h-6 bg-blue-600 rounded-t-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">OUR STRENGTH</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}