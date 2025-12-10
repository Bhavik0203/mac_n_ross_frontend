"use client";
import React, { useState, useEffect } from 'react';
import { FileCheck, Shield, TrendingUp, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, BarChart, ClipboardList, Target, Award, Clock, Globe } from 'lucide-react';
import banner2 from '@/app/images/b1.png';
import banner3 from '@/app/images/b.png';
import ServicesScrollBar from '../components/servicesscrollbar';

const AuditAndAssurancePage = () => {
  const [isVisible, setIsVisible] = useState<{
    hero?: boolean;
    about?: boolean;
    services?: boolean;
    process?: boolean;
    benefits?: boolean;
    contact?: boolean;
  }>({});
  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove any non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    if (digitsOnly.length <= 10) {
      setPhone(digitsOnly);
      if (digitsOnly.length === 10) {
        setPhoneError('');
      } else if (digitsOnly.length > 0) {
        setPhoneError('Phone number must be exactly 10 digits');
      } else {
        setPhoneError('');
      }
    }
  };

  const handlePhoneBlur = () => {
    if (phone.length > 0 && phone.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
    } else {
      setPhoneError('');
    }
  };

  const auditServices = [
    {
      icon: FileCheck,
      title: "Financial Statement Audit",
      description: "Comprehensive examination of your financial statements to ensure accuracy, compliance, and transparency in financial reporting.",
      color: "from-[#E76524] to-[#d1551a]"
    },
    {
      icon: Shield,
      title: "Compliance Audit",
      description: "Verify adherence to regulatory requirements, industry standards, and internal policies to maintain legal compliance.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart,
      title: "Performance Audit",
      description: "Evaluate operational efficiency, effectiveness, and economy of your business processes and resource utilization.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: ClipboardList,
      title: "Internal Controls Assessment",
      description: "Review and assess the effectiveness of internal control systems to identify risks and improvement opportunities.",
      color: "from-[#E76524] to-[#d1551a]"
    },
    {
      icon: Target,
      title: "Risk-Based Audit",
      description: "Focus on high-risk areas with strategic audit planning to provide maximum value and insight.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Special Purpose Audit",
      description: "Tailored audit services for specific requirements including due diligence, forensic audits, and regulatory compliance.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const auditProcess = [
    {
      step: 1,
      title: "Planning & Risk Assessment",
      description: "We begin by understanding your business, identifying key risk areas, and developing a comprehensive audit plan tailored to your organization.",
      icon: Target
    },
    {
      step: 2,
      title: "Fieldwork & Testing",
      description: "Our experienced auditors conduct detailed testing of transactions, controls, and balances to gather sufficient audit evidence.",
      icon: FileCheck
    },
    {
      step: 3,
      title: "Analysis & Evaluation",
      description: "We analyze findings, evaluate internal controls, and assess compliance with applicable standards and regulations.",
      icon: BarChart
    },
    {
      step: 4,
      title: "Reporting & Recommendations",
      description: "We provide clear, actionable audit reports with recommendations to help improve your business processes and controls.",
      icon: ClipboardList
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Credibility",
      description: "Independent audit opinions enhance stakeholder confidence and credibility in your financial reporting."
    },
    {
      icon: TrendingUp,
      title: "Improved Operations",
      description: "Identify inefficiencies and opportunities for improvement in your business processes and controls."
    },
    {
      icon: Users,
      title: "Expert Insights",
      description: "Gain valuable insights from experienced auditors with deep industry knowledge and best practices."
    },
    {
      icon: CheckCircle,
      title: "Regulatory Compliance",
      description: "Ensure compliance with applicable laws, regulations, and accounting standards relevant to your industry."
    }
  ];

  return (
    <div className="min-h-screen text-white " style={{ backgroundColor: '#231F20' }}>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #231F20, #231F20, #231F20)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#E76524' }}></div>
          <div className="absolute top-40 right-32 w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: '#E76524' }}></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#E76524' }}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#E76524' }}></div>
        </div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transform transition-all duration-1000 ${
          isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="mb-8">
            <FileCheck className="w-20 h-20 mx-auto mb-6 animate-pulse" style={{ color: '#E76524' }} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#E76524' }}>
            Audit and Assurance Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Comprehensive audit and assurance services to ensure accuracy, compliance, and transparency in your financial reporting and business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #d1551a, #b84a15)'} onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #E76524, #d1551a)'}>
              <span className="flex items-center justify-center">
                Get Audit and Assurance Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="border-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105" style={{ borderColor: '#E76524' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E76524'; e.currentTarget.style.color = '#231F20'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = ''; }}>
              Learn More
            </button>
          </div>
        </div>
      </section>
      <ServicesScrollBar/>

      

      
    

      {/* Key Benefits */}
      <section id="benefits" className="py-20" style={{ backgroundColor: '#231F20' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.benefits ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#E76524' }}>
              Why Choose Our Audit and Assurance Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#E76524' }}>
              Ready to Get Started?
            </h2>
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 border border-gray-600">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#E76524' }}>Schedule Your Audit and Assurance Consultation</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our audit and assurance experts will assess your requirements and provide a comprehensive plan 
                    tailored to your organization's needs. Contact us today to discuss your audit and assurance requirements.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3" style={{ color: '#E76524' }} />
                      <span className="text-gray-300">+971-4-3584999</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3" style={{ color: '#E76524' }} />
                      <span className="text-gray-300">info@macnross.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3" style={{ color: '#E76524' }} />
                      <span className="text-gray-300">Dubai, UAE</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3" style={{ color: '#E76524' }} />
                      <span className="text-gray-300">Sun - Thu 09:00-18:00</span>
                    </div>
                  </div>
                </div>

                {/* Form Section */}
                <div className="rounded-xl p-6 backdrop-blur-sm" style={{ background: 'linear-gradient(to bottom right, rgba(231, 101, 36, 0.2), rgba(231, 101, 36, 0.2))' }}>
                  <form className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-md border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E76524]"
                      style={{ backgroundColor: '#231F20' }}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-md border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E76524]"
                      style={{ backgroundColor: '#231F20' }}
                      required
                    />
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={phone}
                        onChange={handlePhoneChange}
                        onBlur={handlePhoneBlur}
                        className={`w-full px-4 py-3 rounded-md border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E76524] ${
                          phoneError 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-700 focus:ring-[#E76524]'
                        }`}
                        maxLength={10}
                        pattern="[0-9]{10}"
                        required
                      />
                      {phoneError && (
                        <p className="mt-1 text-sm text-red-400">{phoneError}</p>
                      )}
                      {phone.length === 10 && !phoneError && (
                        <p className="mt-1 text-sm text-green-400">✓ Valid phone number</p>
                      )}
                    </div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your audit and assurance requirements..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E76524]"
                      style={{ backgroundColor: '#231F20' }}
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #d1551a, #b84a15)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #E76524, #d1551a)'}
                    >
                      Request Audit and Assurance Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditAndAssurancePage;

