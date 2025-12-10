"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image from '@/app/images/pics.jpeg';
import banner1 from '@/app/images/bgg2.png';
import banner2 from '@/app/images/hero-8.jpg';
import team from  '@/app/images/Frame 1547753804.png';
import { ChevronDown, ChevronUp, Plus, Minus, CheckSquare, Users, Award, Mail, Phone, Linkedin  } from 'lucide-react';
import ServicesSection from '../components/ui/ServicesSection';
import SuccessStories from '../components/ui/stats';

type SectionKey = 'business' | 'analyze' | 'workflow';

const sections: { key: SectionKey; title: string; content: string }[] = [
  {
    key: 'business',
    title: 'Business Information',
    content: `Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement capabilities across all asset classes. This includes strategy, architecture design, operating model work, process improvement, systems building and trading.`
  },
  {
    key: 'analyze',
    title: 'Key Analyze',
    content: `Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement capabilities across all asset classes. This includes strategy, architecture design.`
  },
  {
    key: 'workflow',
    title: 'Our Workflow & Process',
    content: `Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement capabilities across all asset classes. This includes strategy, architecture design.`
  }
];
 const teamMembers = [
    {
      id: 1,
      name: "MOHD. HASSAN AL SHEHHI",
      position: "Managing Director",
      qualification: "Certified Auditor, UAE Federal Law",
      expertise: "Audit, Internal Audit, Finance and Accounts, overall business strategy and governance of the firm. Working as Director, Corporate Shared Services, in Department of Economic Development, Government of Dubai, UAE.",
      experience: "30+ years",
      email: "hassan@macnross.com",
      phone: "+971-50-123-4567",
      image: "/api/placeholder/300/400"
    },
    {
      id: 2,
      name: "CA SUNIL AGARWAL",
      position: "Senior Partner",
      qualification: "Graduate in Commerce & Chartered Accountants (FCA-India)",
      expertise: "40 years of rich experience in Statutory Audit, Internal Audit, Finance and Accounts, Consultancy, Management and Project Feasibility Studies, Commercial & Company Law, company incorporation.",
      experience: "40+ years",
      email: "sunil@macnross.com",
      phone: "+971-50-234-5678",
      image: "/api/placeholder/300/400"
    },
    {
      id: 3,
      name: "CA DHEERAJ RANASARIA",
      position: "Audit Manager",
      qualification: "Graduate in Commerce & Chartered Accountants (FCA-India)",
      expertise: "15 years of experience in Audit & Assurance together with risk advisory services, Systems Consultancy. Handled complex audit & accounting assignments in all sectors and also well versed with latest updates in IFRS, IAS, IPSAS etc.",
      experience: "15+ years",
      email: "dheeraj@macnross.com",
      phone: "+971-50-345-6789",
      image: "/api/placeholder/300/400"
    },
    {
      id: 4,
      name: "CA VIKASH AGARWAL",
      position: "Financial Consultant",
      qualification: "Graduate in Bachelor of Commerce & Chartered Accountants (India)",
      expertise: "Statutory Audit, Internal Audits, Financial due diligence, Investigations, Forecasting and Budgeting, Agreed upon procedures, Corporate governance, Review and presentation of financial documents, Valuations and other business consultancy.",
      experience: "12+ years",
      email: "vikash@macnross.com",
      phone: "+971-50-456-7890",
      image: "/api/placeholder/300/400"
    },
    {
      id: 5,
      name: "CA RAJA SEKHAR",
      position: "Tax Specialist",
      qualification: "Graduate in Commerce & Chartered Accountants (India)",
      expertise: "Statutory Audit, Internal Audit, review of financial documents, presentation of financial statements, valuation and financial restructuring, ERP Implementation, Accounting software solutions, coordination of company outsourcing services.",
      experience: "10+ years",
      email: "raja@macnross.com",
      phone: "+971-50-567-8901",
      image: "/api/placeholder/300/400"
    },
    {
      id: 6,
      name: "CA KOMAL SHARMA",
      position: "Transfer Pricing Specialist",
      qualification: "Graduate in Commerce & Chartered Accountants (FCA-India)",
      expertise: "Having 7+ years of experience in Indirect Tax, Direct Tax, Financial Reporting, Budgeting and Finance & Accounts, having worked with multinational organizations. She has successfully led teams to provide quality deliverables on a timely basis.",
      experience: "7+ years",
      email: "komal@macnross.com",
      phone: "+971-50-678-9012",
      image: "/api/placeholder/300/400"
    },
    {
      id: 7,
      name: "CPA MONISH VERMA",
      position: "VAT Consultant",
      qualification: "Graduate in Commerce & Chartered Accountants (FCA-US)",
      expertise: "Having 6 year of rich experience in indirect tax services ranging from implementation, consultancy, return filings and audits to a large portfolio of clients in various industries. Currently handling a diverse portfolio of clients for the UAE VAT and AML.",
      experience: "6+ years",
      email: "monish@macnross.com",
      phone: "+971-50-789-0123",
      image: "/api/placeholder/300/400"
    },
    {
      id: 8,
      name: "CA POOJA SHAH",
      position: "Tax Advisor",
      qualification: "Graduate in Commerce & Chartered Accountants (India)",
      expertise: "Experienced and skilled in Direct and Indirect taxation and related compliances, Consultancy and advisory related to tax planning and restructuring, Financial reporting and analysis, Statutory audit, Budgeting & Forecasting, Client relationship management.",
      experience: "8+ years",
      email: "pooja@macnross.com",
      phone: "+971-50-890-1234",
      image: "/api/placeholder/300/400"
    }
  ];
const cards = [
  { 
    title: "OUR STRATEGY", 
    color: "bg-[#231F20]",
    icon: CheckSquare,
    hoverContent: {
      badge: "Client-focused Business Approach",
      description: "At Mac & Ross, our strategy is built around one core principle — client satisfaction through excellence. We are committed to delivering consistently high-quality professional services that align with each client's unique goals. By tailoring our approach to your specific business needs, we ensure every engagement is handled with efficiency, accuracy, and cost-effectiveness. Our focus on continuous improvement and personalized service helps you achieve measurable results while maintaining the highest standards of professionalism."
    }
  },
  { 
    title: "OUR STRENGTH", 
    color: "bg-[#231F20]",
    icon: Users,
    hoverContent: {
      badge: "Expert Professional Team",
      description: "At Mac & Ross Chartered Accountants, our greatest strength lies in our team of highly qualified and experienced professionals. Each member brings deep expertise and a shared commitment to excellence, ensuring that every client receives exceptional service and reliable guidance. By combining technical knowledge with practical insight, we deliver a comprehensive range of business and financial solutions designed to enhance performance, optimize resources, and improve cost efficiency. Our collaborative approach empowers clients to achieve sustainable growth and long-term success."
    }
  },
  { 
    title: "OUR STANDARDS", 
    color: "bg-[#231F20]",
    icon: Award,
    hoverContent: {
      badge: "International Quality Standards",
      description: "At Mac & Ross Chartered Accountants, we are committed to maintaining the highest professional and ethical standards in every service we deliver. Our work strictly adheres to international best practices and remains aligned with the latest regulatory and financial developments. We comply fully with the International Financial Reporting Standards (IFRS) to ensure that every financial statement we audit reflects accuracy, transparency, and integrity. By upholding these global benchmarks, we guarantee that our clients receive reliable insights and reports they can trust."
    }
  },
];

interface CardProps {
  title: string;
  isLeft: boolean;
  color?: string;
  isVisible: boolean;
  icon: React.ComponentType<any>;
  hoverContent: {
    badge: string;
    description: string;
  };
}

const Card = ({ title, isLeft, color = "bg-[#231F20]", isVisible, icon: Icon, hoverContent }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-[4px] ${color} p-8 h-[400px] w-[600px] transition-all duration-1000 ease-out transform cursor-pointer ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : `opacity-0 ${isLeft ? '-translate-x-full' : 'translate-x-full'}`
      } ${isLeft ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Abstract curved lines background - only show when not hovered */}
      <svg 
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          isHovered ? 'opacity-0' : 'opacity-20'
        }`} 
        viewBox="0 0 400 200" 
        fill="none"
      >
        {/* Main curved shape */}
        <path 
          d="M-50 50 Q100 -20 200 30 Q300 80 450 20 L450 200 L-50 200 Z" 
          stroke="white" 
          strokeWidth="2" 
          fill="none"
        />
        
        {/* Secondary curved lines */}
        <path 
          d="M-20 100 Q150 40 300 90 Q400 120 500 80" 
          stroke="white" 
          strokeWidth="1.5" 
          fill="none"
        />
        
        <path 
          d="M50 150 Q200 100 350 140 Q450 170 550 130" 
          stroke="white" 
          strokeWidth="1" 
          fill="none"
        />
        
        {/* Grid lines */}
        <line x1="150" y1="0" x2="150" y2="200" stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="300" y1="0" x2="300" y2="200" stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="0" y1="100" x2="400" y2="100" stroke="white" strokeWidth="1" opacity="0.2" />
      </svg>
      
      {/* Default Content */}
      <div className={`relative z-10 h-full flex flex-col justify-between transition-all duration-500 ${
        isHovered ? 'opacity-0 transform translate-y-4' : 'opacity-100 translate-y-0'
      }`}>
        {/* Top section with icon */}
        <div className="pt-4">
          <div className="w-16 h-16 border-2 border-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Bottom section with title */}
        <div>
          <h2 className="text-white text-5xl font-bold leading-tight mb-4">
            {title}
          </h2>
        </div>
      </div>

      {/* Hover Content */}
      <div className={`absolute inset-0 z-20 p-8 flex flex-col justify-between transition-all duration-500 ${
        isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Top section with icon and content */}
        <div className="pt-4">
          <div className="w-16 h-16 border-2 border-white bg-opacity-30 rounded-lg flex items-center justify-center mb-6">
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-white text-xl font-semibold leading-tight mb-4">
            {hoverContent.badge}
          </h3>
          
          {/* Description */}
          <p className="text-white text-sm leading-relaxed font-light opacity-90">
            {hoverContent.description}
          </p>
        </div>

        {/* Bottom section with arrow */}
        <div className="flex items-center justify-between">
          <div className="flex-1"></div>
          <div className="flex items-center text-white group">
            <span className="text-sm font-medium mr-2 transition-transform duration-300 group-hover:translate-x-1">
              GET CONSULTATION
            </span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [activeSection, setActiveSection] = useState<string>('business-info');

  interface Section {
    id: string;
    title: string;
    icon: React.ElementType;
    content: string;
  }

  const toggleSection = (sectionName: string) => {
    setActiveSection(sectionName === activeSection ? activeSection : sectionName);
  };

  const sections = [
    {
      id: 'business-info',
      title: 'Business Information',
      icon: activeSection === 'business-info' ? Minus : Plus,
      content: `MAC & ROSS is a member of RT ASEAN Network (a member of Forum of Firms) and is an established audit firm in UAE. We provide comprehensive services as Auditors and Financial and Accounting experts, as well as advisers and consultants for specialized Financial Services including project feasibility studies, financial planning, mergers and acquisitions of business units, loan syndication, equity placement, and formation of companies. Our mission is to provide cost-effective but efficient professional services to the business community and support them to attain optimum results under prevailing economic conditions.`
    },
    {
      id: 'key-analyze',
      title: 'Key Analyze',
      icon: activeSection === 'key-analyze' ? Minus : Plus,
      content: `We strive to understand your business and help you achieve your objectives through value-added services in corporate accounting and finance, thereby enabling your focus on core business. Client satisfaction and consistently high-quality professional services are the priorities in our business strategy. We tailor our professional approach to the specific needs and requirements of our clients to ensure that work is conducted in the most efficient and cost-effective manner. Our team includes professionals with more than 30 years of rich experience in auditing and consultancy across varied businesses in public and private sectors internationally.`
    },
    {
      id: 'workflow-process',
      title: 'Our Workflow & Process',
      icon: activeSection === 'workflow-process' ? Minus : Plus,
      content: `In our endeavor to provide the best professional services, we follow international standards and keep abreast with the latest developments in respective fields of practice. We adhere to the International Financial Reporting Standards (IFRS) for financial statements audited by us. A team of highly qualified and widely experienced professionals dedicated to practicing the profession at its highest standards leads Mac & Ross to offer a full spectrum of unified business solutions. We help clients improve their resource allocation and cost efficiency to fuel their growth through strategic planning, architecture design, operating model work, process improvement, systems building and implementation.`
    }
  ];

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const timer1 = setTimeout(() => setVisibleCards(prev => [true, prev[1], prev[2]]), 200);
    const timer2 = setTimeout(() => setVisibleCards(prev => [prev[0], true, prev[2]]), 600);
    const timer3 = setTimeout(() => setVisibleCards(prev => [prev[0], prev[1], true]), 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index!);
            setVisibleCards(prev => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
     <section
      className="relative py-10 px-4 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url('${banner2.src}')` }}
    >
    
    <div className="max-w-6xl mx-auto   ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-6">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold text-white mb-8 leading-tight">
            Why Choose Us?
          </h2>
        </div>
        <div className="lg:col-span-2 space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div
                className="flex items-center justify-between  py-2 cursor-pointer  transition-colors duration-200"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${
                      activeSection === section.id
                        ? ' border text-white border-white '
                        : ' border text-white border-white  '
                    }`}
                  >
                    <section.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {section.title}
                  </h3>
                </div>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeSection === section.id
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
               
                <div className=" pb-6">
                  <div className="pl-16">
                    <p className="text-white leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 py-6 ">
            <p className="text-white leading-relaxed">
              Our comprehensive services help clients run and transform their front, middle and back-office operations. 
              We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including 
              systems integration and technology consulting services, to assist in delivering high-performance 
              capabilities across all asset classes. This includes strategy and architecture design.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

const AlternatingCards = () => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
   const [visibleCards, setVisibleCards] = useState([false, false, false]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setVisibleCards(prev => [true, prev[1], prev[2]]);
    }, 300);
    
    const timer2 = setTimeout(() => {
      setVisibleCards(prev => [prev[0], true, prev[2]]);
    }, 600);
    
    const timer3 = setTimeout(() => {
      setVisibleCards(prev => [prev[0], prev[1], true]);
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div className="absolute inset-0 h-full w-full bg-fixed lg-bg-fixed">
          <Image
            src={image}
            alt="Background Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-3xl mx-auto text-white">
            <p className="uppercase tracking-wider text-gray-300 mt-10 text-[16px] sm:text-[18px]">
              About
            </p>
            <h2 className="mb-4 text-white text-[42px] sm:text-[56px]">
              Mac & Ross Chartered Accountants L.L.C
            </h2>
            <p className="tracking-wider text-gray-300 mb-4">
              Mac & Ross Chartered Accountants L.L.C is an auditing and consulting firm
              based in the U.A.E. With over a decade of presence in the region, we have
              earned our position in the fields of Audit & Assurance, Accounting,
              Management Consultancy, and Taxation.
            </p>
          </div>
        </div>
      </section>
      <section className="relative pb-20 px-4 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('${banner1.src}')` }}>
        <div className="space-y-12 max-w-6xl pt-28 pb-16 mx-auto">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              color={card.color}
              icon={card.icon}
              isLeft={index % 2 === 0}
              isVisible={visibleCards[index]}
              hoverContent={card.hoverContent}
            />
          ))}
        </div>
      </section>
      <AboutSection />
       <section
      className="relative py-10 px-4 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url('${team.src}')` }}
    >
        <div className=" py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center ">
          <div className="inline-block">
            <h1 className="text-5xl font-bold mb-4 tracking-tight" style={{ color: '#231F20' }}>
              Introduce
            </h1>
            <div className="h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: '#E76524' }}></div>
          </div>
          <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Meet our team of highly qualified professionals with decades of experience in audit, 
            finance, and business consultancy services.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-white  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-slate-100"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(231, 101, 36, 0.05), rgba(231, 101, 36, 0.05), rgba(231, 101, 36, 0.05))' }}></div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 h-64">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(231, 101, 36, 0.2), rgba(231, 101, 36, 0.2))' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl" style={{ background: 'linear-gradient(to bottom right, #E76524, #d1551a)' }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60 group-hover:animate-pulse" style={{ backgroundColor: '#E76524' }}></div>
                <div className="absolute bottom-6 left-4 w-2 h-2 rounded-full opacity-40 group-hover:animate-bounce" style={{ backgroundColor: '#E76524' }}></div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-slate-800 mb-1 transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    {member.name}
                  </h3>
                  <p className="font-semibold text-sm mb-2" style={{ color: '#E76524' }}>{member.position}</p>
                  <div className="flex items-center justify-center text-xs text-slate-500 bg-slate-50 rounded-full px-3 py-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {member.experience} experience
                  </div>
                </div>

                {/* Qualification */}
                <div className="mb-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-700">Qualification:</span> {member.qualification}
                  </p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    <span className="font-semibold text-slate-700">Expertise:</span> {member.expertise}
                  </p>
                </div>

                {/* Contact Info */}
                {/* <div className="space-y-2">
                  <div className="flex items-center text-xs text-slate-600 transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    <Mail className="w-3 h-3 mr-2" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center text-xs text-slate-600 transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    <Phone className="w-3 h-3 mr-2" />
                    <span>{member.phone}</span>
                  </div>
                </div> */}

                {/* Social Link */}
                {/* <div className="mt-4 pt-4 border-t border-slate-100">
                  <button className="w-full text-white py-2 px-4 rounded-lg text-xs font-semibold transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #d1551a, #b84a15)'} onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #E76524, #d1551a)'}>
                    <Linkedin className="w-3 h-3" />
                    <span>Connect</span>
                  </button>
                </div> */}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500" style={{ '--hover-border': 'rgba(231, 101, 36, 0.3)' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(231, 101, 36, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our team of certified professionals is ready to help you achieve your business objectives 
              through cost-effective and efficient professional services.
            </p>
            <button className="text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #d1551a, #b84a15)'} onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #E76524, #d1551a)'}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
    </section>
     
    {/* <ServicesSection /> */}
    <SuccessStories />
      
    </div>
  );
};

export default AlternatingCards;