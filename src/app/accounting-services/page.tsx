"use client";
import React, { useState, useEffect } from 'react';
import { Calculator, FileText, TrendingUp, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, BarChart, ClipboardList, Target, Award, Clock, DollarSign, Receipt, Shield } from 'lucide-react';

const AccountingServicesPage = () => {
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
    const digitsOnly = value.replace(/\D/g, '');
    
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

  const accountingServices = [
    {
      icon: FileText,
      title: "Bookkeeping & Accounting",
      description: "Comprehensive bookkeeping services to maintain accurate financial records, track transactions, and ensure compliance with accounting standards.",
      color: "from-[#E76524] to-[#d1551a]"
    },
    {
      icon: Calculator,
      title: "Financial Statement Preparation",
      description: "Professional preparation of financial statements including balance sheets, income statements, and cash flow statements in accordance with IFRS.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart,
      title: "Management Accounting",
      description: "Strategic management accounting services to support decision-making with detailed financial analysis, budgeting, and forecasting.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Receipt,
      title: "Accounts Payable & Receivable",
      description: "Efficient management of accounts payable and receivable to optimize cash flow and maintain healthy vendor and customer relationships.",
      color: "from-[#E76524] to-[#d1551a]"
    },
    {
      icon: DollarSign,
      title: "Payroll Processing",
      description: "Accurate and timely payroll processing services including salary calculations, tax deductions, and compliance with labor regulations.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: ClipboardList,
      title: "Financial Reporting & Analysis",
      description: "Comprehensive financial reporting and analysis to provide insights into business performance and support strategic planning.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const accountingProcess = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "We begin by understanding your business structure, accounting needs, and current financial processes to develop a tailored solution.",
      icon: Target
    },
    {
      step: 2,
      title: "System Setup & Integration",
      description: "We set up and integrate accounting systems that align with your business operations and ensure seamless data flow.",
      icon: FileText
    },
    {
      step: 3,
      title: "Ongoing Accounting Services",
      description: "We provide continuous bookkeeping, transaction recording, and financial record maintenance to keep your books accurate and up-to-date.",
      icon: Calculator
    },
    {
      step: 4,
      title: "Reporting & Advisory",
      description: "We deliver regular financial reports and provide strategic advice to help you make informed business decisions.",
      icon: BarChart
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Accurate Financial Records",
      description: "Maintain precise and up-to-date financial records that comply with accounting standards and regulatory requirements."
    },
    {
      icon: TrendingUp,
      title: "Better Decision Making",
      description: "Access timely financial information and insights to make informed strategic decisions for your business growth."
    },
    {
      icon: Users,
      title: "Expert Accounting Team",
      description: "Work with experienced accountants who understand your industry and provide personalized accounting solutions."
    },
    {
      icon: Shield,
      title: "Compliance Assurance",
      description: "Ensure full compliance with accounting standards, tax regulations, and financial reporting requirements."
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
         
          <h1 className="text-5xl md:text-7xl font-bold md-4 mt-16" style={{ color: '#E76524' }}>
            Accounting Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Professional accounting services to maintain accurate financial records, ensure compliance, and support your business growth with expert financial management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #d1551a, #b84a15)'} onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #E76524, #d1551a)'}>
              <span className="flex items-center justify-center">
                Get Accounting Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="border-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105" style={{ borderColor: '#E76524' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E76524'; e.currentTarget.style.color = '#231F20'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = ''; }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{ backgroundColor: '#231F20' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#E76524' }}>
              Our Accounting Services
            </h2>
            <p className="text-center text-gray-300 mb-16 text-lg">
              Comprehensive accounting solutions tailored to your business needs
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accountingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-[#E76524] transition-all duration-300 transform hover:scale-105">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#E76524' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20" style={{ backgroundColor: '#1a1718' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.process ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#E76524' }}>
              Our Accounting Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accountingProcess.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-[#E76524] to-[#d1551a]">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#E76524' }}>
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="py-20" style={{ backgroundColor: '#231F20' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.benefits ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#E76524' }}>
              Why Choose Our Accounting Services?
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
      <section id="contact" className="py-20 bg-[#231F20]">
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
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#E76524' }}>Schedule Your Accounting Consultation</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our accounting experts will assess your requirements and provide a comprehensive plan 
                    tailored to your organization's needs. Contact us today to discuss your accounting requirements.
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
                <div className="rounded-xl p-6 backdrop-blur-sm bg-white" >
                  <form className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-md border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E76524]"
                     
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-md border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E76524]"
                     
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
                      placeholder="Tell us about your accounting requirements..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E76524]"
                     
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #d1551a, #b84a15)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #E76524, #d1551a)'}
                    >
                      Request Accounting Consultation
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

export default AccountingServicesPage;

