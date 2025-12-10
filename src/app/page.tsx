"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, TrendingUp, Shield, Calculator, FileText, Building, Globe, Zap ,Quote} from 'lucide-react';
import banner2 from "@/app/images/bg2.png"; // Adjust the path as necessary
import banner3 from "@/app/images/bgg.png"; // Adjust the path as necessary
import banner1 from "@/app/images/bgg2.png"; // Adjust the path as necessary
import OneBlog from "./components/legacyScrollBar";
import pic from "@/app/images/accounting_services.jpg"; // Adjust the path as necessary
import tests from "@/app/images/hero-8.jpg"; // Adjust the path as necessary
import ScrollImageAnimation from "./components/ui/ScrollImageAnimation";
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
    const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const titles = ['OUR STRATEGY', 'OUR STANDARDS', 'OUR TEAM', 'OUR STRENGTH'];
  const titleToIdMap: { [key: string]: string } = {
    'OUR STRATEGY': 'strategy',
    'OUR STANDARDS': 'standards',
    'OUR STRENGTH': 'strength',
    'OUR TEAM': 'team'
  };

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
      color: "from-[#E76524] to-[#d1551a]",
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
      color: "from-[#E76524] to-[#d1551a]",
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
      color: "from-[#E76524] to-[#d1551a]",
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
      title: "We Help",
      subtitle: "Growing Business",
      description: "We help you managing asset, provide financial advice. Leave money issue with us and focus on your core business.",
      buttonText: "Contact Us"
    },
    {
      title: "We Support",
      subtitle: "Scaling Ventures",
      description: "Transform your business with our comprehensive financial solutions and expert guidance for sustainable growth.",
      buttonText: "Learn More"
    },
    {
      title: "We Empower",
      subtitle: "Success Stories",
      description: "Partner with us to unlock your business potential through strategic financial planning and asset management.",
      buttonText: "Get Started"
    }
  ];
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    phoneNumber: '',
    message: ''
  });

  interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleInputChange = (e: InputChangeEvent): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));
  };

  interface FormData {
    fullName: string;
    email: string;
    subject: string;
    phoneNumber: string;
    message: string;
  }

  interface FormEventWithTarget extends React.FormEvent<HTMLFormElement> {
    target: EventTarget & HTMLFormElement;
  }

  const handleSubmit = (e: FormEventWithTarget): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };
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
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
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
  //  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      text: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly.",
      author: "Jane Doe",
      position: "JOURNALIST"
    },
    {
      id: 2,
      text: "Working with this team has been an absolute game-changer for our business. Their attention to detail and innovative approach helped us achieve results we never thought possible. The professionalism and dedication they showed throughout the project was remarkable.",
      author: "John Smith",
      position: "CEO, TECH CORP"
    },
    {
      id: 3,
      text: "The level of expertise and commitment demonstrated by this team is truly exceptional. They not only met our expectations but exceeded them in every way. Our collaboration resulted in a 300% increase in customer engagement and satisfaction.",
      author: "Sarah Johnson",
      position: "MARKETING DIRECTOR"
    },
    {
      id: 4,
      text: "From the initial consultation to the final delivery, every step of the process was handled with utmost care and precision. The results speak for themselves - our conversion rates improved by 250% within the first quarter.",
      author: "Michael Chen",
      position: "FOUNDER, STARTUP"
    },
    {
      id: 5,
      text: "I've worked with many agencies over the years, but none have delivered the quality and results like this team. Their strategic thinking and creative solutions transformed our brand presence completely. Highly recommend their services.",
      author: "Emily Rodriguez",
      position: "BRAND MANAGER"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Safety check for current slide
  const currentSlideData = slides[currentSlide] || slides[0];
 
  return (
    <>
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
        <div className="relative px-4 z-10 mt-20 w-full max-w-6xl  text-start">
          <div className="max-w-4xl px-4">
            {/* Animated Content */}
            <div 
              key={currentSlide}
              className="animate-fade-in"
            >
              <h2 className="text-gray-300 text-2xl lg:text-3xl font-light pl-1 tracking-wide">
                {currentSlideData.title}
              </h2>
              <h1 className="text-white text-6xl lg:text-[100px] font-bold  leading-tight tracking-tight">
                {currentSlideData.subtitle}
              </h1>
              <p className="text-gray-200 text-lg lg:text-xl  mx-auto mb-12 pl-1 leading-relaxed font-light">
                {currentSlideData.description}
              </p>
              <button 
                className=" text-white px-8 py-4 cursor-pointer font-semibold text-lg hover:scale-105 shadow-lg top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label={currentSlideData.buttonText}
              >
                {currentSlideData.buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 cursor-pointer z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-gray-200" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2  cursor-pointer z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/50"
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
        <div className="absolute bottom-0 left-0 w-full h-1 cursor-pointer bg-white/20 z-20">
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
      
   <section
  className="relative pb-20 px-4 bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url('${banner1.src}')` }}
>
  {/* Background Image with Overlay */}
  {/* Background Image with Overlay */}
  {/* Background Image with Overlay */}
  {/* Background Image with Overlay */}
  {/* Background Image with Overlay */}
  {/* Background Image with Overlay */}
  {/* Background Image with Overlay */}
  {/* Background Image with Overlay */}
  {/* Background Image with Overlay */}
 

  {/* Content */}
  <div className="relative z-50 max-w-6xl mx-auto px-4 py-60 text-center text-gray-800 isolate overflow-hidden   pt-10 sm:pb-12 lg:overflow-visible lg:px-0
      pb-10 bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url('${banner1.src}')` }}>
   
    {/* Title */}
    <h2 className="uppercase text-[22px] tracking-widest text-gray-800 mt-16 mb-2">
      MAC & ROSS CHARTERED ACCOUNTANTS L.L.C
    </h2>
    <h2 className="text-5xl font-bold text-gray-800 mb-6">
       Leading Outsource Accounting and Auditing Firm in Dubai
    </h2>

    {/* Two Column Content */}
    
   <div className="grid grid-cols-1 lg:grid-cols-2 px-4 gap-8 text-left pb-6">
  <div className="leading-relaxed">
    <p>
      Mac & Ross Chartered Accountants L.L.C is a trusted UAE-based auditing and consulting firm with over a decade of excellence in Audit & Assurance, Accounting, Consultancy, and Taxation. As a proud member of the RT ASEAN Network recognized by the Forum of Firms we uphold the highest international standards of auditing, ethics, and quality control.
    </p>
  </div>
  <div className="leading-relaxed">
    <p>
      Through our global association with RT ASEAN, we deliver cross-border financial, legal, and digital services designed to help businesses in Dubai and across the UAE achieve sustainable growth through secure, scalable, and compliant solutions.
    </p>
  </div>
</div>


  </div>
  <section className="relative w-full py-8  ">
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0 min-h-[400px] lg:min-h-[550px]">
      
    
      <div
        className="relative w-full lg:w-[70%] 
                   lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 
                   z-20 bg-white p-6 sm:p-8 lg:p-12 shadow-xl 
                   mt-4 lg:mt-0 rounded-lg
                   order-2 lg:order-1"
      >
         <div className="">
    <p className="text-xs text-[#666666] mb-2 uppercase tracking-widest">
      Did you know that
    </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E76524] mb-6 leading-snug">
          We are trusted by clients <br /> across the UAE
    </h2>
    <p className="text-[#666666] mb-8 leading-relaxed ">
        At Mac & Ross Chartered Accountants LLC, we believe trust is earned through precision, transparency, and results. As one of the most reliable auditing and accounting firms in Dubai, we combine international expertise with deep local insight to help businesses thrive in the UAE's fast-evolving financial landscape.
          </p>
    <button className="bg-white border cursor-pointer border-[#E76524] text-[#E76524] px-6 py-3 rounded-full font-semibold hover:bg-[#E76524] hover:text-white transition-colors">
      Read Our Story
    </button>
  </div>

      
       
      </div>

     
      <div
        className="relative w-full lg:w-[50%] 
                   h-[300px] sm:h-[400px] lg:h-[550px] 
                   flex-shrink-0 
                   order-1 lg:order-2 lg:ml-auto"
      >
        <div className="block w-full h-full relative">
          <Image
            src={pic}
            alt="UAE E-Invoicing Partnership"
            fill
            className="object-cover rounded-lg"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  </div>
</section>
<section id="overview" className="relative w-full py-8 ">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0 min-h-[400px] lg:min-h-[550px]">
              {/* Left Side - Image */}
              <div className="relative w-full lg:w-[50%] h-[300px] sm:h-[400px] lg:h-[550px] flex-shrink-0 order-1 lg:order-1">
                <div className="block w-full h-full">
                  <Image
                    src={pic}
                    alt="UAE E-Invoicing Partnership"
                    fill
                    className="object-cover rounded-lg"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right Side - White Overlay Box */}
              <div className="relative w-full lg:w-[70%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 bg-white p-6 sm:p-8 lg:p-12 shadow-xl lg:-ml-20 lg:mt-0 mt-4 order-2 lg:order-2 rounded-lg">
                {/* Main Headline */}
                <div className="">
              <h2 className="text-3xl font-bold mb-4">
               Why Choose Mac & Ross</h2>
              <p className="text-[#666666] mb-8">
                Global standards meets local expertise for clear, compliant, and growth-ready finances.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#E76524' }}></div>
                  <div>
                    <p className="text-sm font-semibold text-[#231F20] mb-1">Global Standards, Local Insight</p>
                    <p className=" text-[#666666]">International rigor with UAE expertise.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#E76524' }}></div>
                  <div>
                    <p className="text-sm font-semibold text-[#231F20] mb-1">Complete Coverage</p>
                    <p className=" text-[#666666]">All services—audit, tax, VAT, compliance—under one roof.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#E76524' }}></div>
                  <div>
                    <p className="text-sm font-semibold text-[#231F20] mb-1">Expert Partners</p>
                    <p className=" text-[#666666]">Chartered professionals focused on your success.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#E76524' }}></div>
                  <div>
                    <p className="text-sm font-semibold text-[#231F20] mb-1">Transparent & Client-Focused</p>
                    <p className=" text-[#666666]">Clear guidance tailored to your goals.</p>
                  </div>
                </div>
              </div>

              <button className="bg-white border cursor-pointer border-[#E76524] text-[#E76524] px-6 py-3 rounded-full font-semibold hover:bg-[#E76524] hover:text-white transition-colors">
              Learn More
          </button>
            </div>
               
              </div>
            </div>

            {/* Statistics Section - Below the white box */}
            {/* <div className="w-full flex justify-center mt-6 sm:mt-8 lg:mt-16 px-4">
              <div 
                ref={statsRef}
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center px-2 sm:px-0">
                    <div className="text-[#1A1A1A] font-bold text-2xl sm:text-4xl lg:text-6xl mb-1 sm:mb-2">
                      {shouldAnimate ? (
                        stat.value >= 1000 ? (
                          <span>{stat.value.toLocaleString()} +</span>
                        ) : (
                          <span>{stat.value} +</span>
                        )
                      ) : (
                        "0 +"
                      )}
                    </div>
                    <div className="text-[#666666] text-xs sm:text-sm lg:text-base leading-tight sm:leading-normal">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </section>
  
</section>

{/* <ScrollImageAnimation/> */}
     <section className="py-16 px-4" style={{ backgroundColor: '#fff5f0' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center ">
          <h2 className="text-5xl font-bold text-gray-800 ">
            A Brief About{' '}
            <span className="relative inline-block underline-animation" style={{ color: '#E76524' }}>
              Mac N Ross
              <span className="absolute -bottom-2 left-0 w-full h-1 scale-x-0 animation-underline" style={{ backgroundColor: '#E76524' }}></span>
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {titles.map((title, index) => (
            <Link
              key={title}
              href={`/aboutus#${titleToIdMap[title]}`}
            >
              <div
                ref={el => { itemsRef.current[index] = el!; }}
                className="opacity-0 transform translate-y-10 transition-all duration-700 delay-[index * 100] ease-out"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center text-center group">
                  <div className="w-48 h-48 bg-white rounded-[10px] shadow-lg flex items-center justify-center mb-6 relative overflow-hidden transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl group-hover:-translate-y-2 cursor-pointer">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(231, 101, 36, 0.2), transparent)' }}></div>
                    <Image
                      src={pic}
                      alt="Pillar Image"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:scale-105 transition-all duration-300" style={{ '--hover-color': '#E76524' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    {title}
                  </h3>
                  <div className="w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#E76524' }}></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0px) !important;
        }

        .animation-underline {
          animation: underlineExpand 1s ease-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes underlineExpand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
    </div>
    <section >
                 <div className="min-h-screen pt-16  bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url('${banner2.src}')` }}>
      <div className="container mx-auto px-6">
       
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tax and business solutions tailored to meet your unique needs and drive your success forward.
          </p>
        </div>

       
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
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
                     
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                     
                      <div className="relative overflow-hidden h-48">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        
                        
                        <div className="absolute top-4 right-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                          <div className={`bg-gradient-to-r ${service.color} p-3 rounded-full shadow-lg`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                     
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#E76524] transition-all duration-500">
                          {service.title}
                        </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
            {service.description.split(" ").length > 7
              ? service.description.split(" ").slice(0, 7).join(" ") + "..."
              : service.description}
          </p>
                                                
                        
                        <button className={`relative overflow-hidden bg-gradient-to-r ${service.color} text-white px-6 py-3 cursor-pointer rounded-full font-semibold transition-all duration-500 hover:shadow-xl hover:scale-105 group-hover:animate-pulse`}>
                          <span className="relative z-10">Learn More</span>
                          <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </button>
                      </div>

                      
                      <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }}></div>
                      <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 transform -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

         
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

          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: services.length - 2 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        
        <div className="text-center ">
          <div className="bg-white  p-8  max-w-4xl mx-auto">
           <h2 className="text-5xl font-bold text-gray-800 mb-6">
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
       <OneBlog/>
    </section>
      <section
  className="relative px-4 py-10 bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url('${tests.src}')` }}
>
     {/* <section className="relative min-h-[400px] md:max-h-[580px] "> */}
      {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 lg:p-3 transition-all duration-500 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 lg:p-3 transition-all duration-500 backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
      </button>

      {/* Main Content */}
      <div className="relative z-5 flex flex-col items-center justify-center min-h-[400px]  px-4 sm:px-6 lg:px-8 py-8 md:pb-10">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Title */}
          <h2 className="text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight">
            Clients' Testimonials
          </h2>

          {/* Testimonial Content */}
          <div className="relative mb-6 md:mb-4">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="">
                      <Quote className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white opacity-30 mx-auto mb-3 md:mb-2" />
                      <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto italic px-2 sm:px-0">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Author Info */}
          <div className="mb-6 md:mb-6">
            <div className="flex items-center justify-center mb-2">
              <div className="">
                <h4 className="text-white text-lg sm:text-xl font-semibold">
                  {testimonials[currentSlide].author}
                </h4>
                <p className="text-xs sm:text-sm font-medium tracking-widest uppercase" style={{ color: '#E76524' }}>
                  {testimonials[currentSlide].position}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 sm:space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / testimonials.length) * 100}%` 
          }}
        />
      </div>
    </section>
    
    <section className="bg-gray-50 py-16 pb-20 bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url('${banner3.src}')` }}>
          <div className="max-w-6xl mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Text Content */}
        <div className="lg:pr-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Request a call back?
          </h1>
          <div className="w-16 h-1 mb-8" style={{ backgroundColor: '#E76524' }}></div>
          <div className="space-y-4 text-gray-600">
            <p className="text-lg">
              Please fill out the form and press the submit button.
            </p>
            <p className="text-lg">
              We will get back to you with 1-2 business days.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className=" p-8 rounded-lg ">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E76524] placeholder-gray-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E76524] placeholder-gray-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E76524] placeholder-gray-600"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E76524] placeholder-gray-600"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E76524] placeholder-gray-600 resize-none"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E76524] focus:ring-offset-2"
                style={{ backgroundColor: '#E76524' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1551a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E76524'}
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
     </>
  );
}