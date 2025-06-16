"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Award, Globe, TrendingUp, Mail, Phone, MapPin, Building, Clock, DollarSign, Briefcase, GraduationCap, Heart, Target, Star } from 'lucide-react';
import SuccessStories from '../components/ui/stats';

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Audit Manager",
      department: "Audit & Assurance",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "5-8 years",
      category: "audit",
      salary: "AED 15,000 - 25,000",
      description: "Lead audit engagements for diverse clients across various industries in the UAE market."
    },
    {
      id: 2,
      title: "VAT Consultant",
      department: "Tax Advisory",
      location: "Dubai, UAE", 
      type: "Full-time",
      experience: "3-5 years",
      category: "tax",
      salary: "AED 12,000 - 18,000",
      description: "Provide VAT consultancy services and ensure compliance with UAE VAT regulations."
    },
    {
      id: 3,
      title: "Corporate Tax Specialist",
      department: "Tax Advisory",
      location: "Dubai, UAE",
      type: "Full-time", 
      experience: "2-4 years",
      category: "tax",
      salary: "AED 10,000 - 15,000",
      description: "Handle UAE Corporate Tax matters and provide advisory services to clients."
    },
    {
      id: 4,
      title: "Management Consultant",
      department: "Advisory Services",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "4-6 years",
      category: "advisory",
      salary: "AED 13,000 - 20,000",
      description: "Provide strategic business advisory and management consultancy services."
    },
    {
      id: 5,
      title: "Junior Accountant",
      department: "Accounting Services",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "1-3 years",
      category: "accounting",
      salary: "AED 6,000 - 10,000",
      description: "Support accounting operations and maintain financial records for clients."
    },
    {
      id: 6,
      title: "Financial Analyst",
      department: "Corporate Finance",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "2-4 years",
      category: "finance",
      salary: "AED 8,000 - 14,000",
      description: "Analyze financial data and support corporate finance transactions."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health Insurance",
      description: "Comprehensive medical coverage for you and your family"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Professional Development",
      description: "Continuous learning opportunities and certification support"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and paid time off"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Market-competitive compensation packages"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognition Programs",
      description: "Performance-based bonuses and recognition"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Exposure",
      description: "Work with global clients through RT ASEAN Network"
    }
  ];

  const cultureValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, delivering exceptional value to our clients."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster an environment of mutual support and growth."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace new technologies and methodologies to stay ahead in the dynamic business landscape."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards and transparency in all our professional relationships."
    }
  ];

//   const stats = [
//     { number: "10+", label: "Years in UAE" },
//     { number: "500+", label: "Clients Served" },
//     { number: "50+", label: "Team Members" },
//     { number: "9", label: "Service Areas" }
//   ];

  const filteredJobs = activeTab === 'all' ? jobOpenings : jobOpenings.filter(job => job.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div 
            className="text-center transform transition-all duration-1000 opacity-0 translate-y-8"
            data-animate
            id="hero"
            style={{ 
              opacity: isVisible.hero ? 1 : 0,
              transform: isVisible.hero ? 'translateY(0)' : 'translateY(2rem)'
            }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Build Your Career with Mac & Ross
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Join UAE's leading chartered accountancy firm and shape the future of financial services in the region
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Explore Opportunities
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300">
                Learn About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      
            <SuccessStories/>
      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className="text-center mb-16 transform transition-all duration-1000"
            data-animate
            id="why-us-title"
            style={{
              opacity: isVisible['why-us-title'] ? 1 : 0,
              transform: isVisible['why-us-title'] ? 'translateY(0)' : 'translateY(2rem)'
            }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Mac & Ross?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a member of RT ASEAN Network and Forum of Firms, we offer unparalleled opportunities for professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group cursor-pointer"
                data-animate
                id={`culture-${index}`}
                style={{
                  opacity: isVisible[`culture-${index}`] ? 1 : 0,
                  transform: isVisible[`culture-${index}`] ? 'translateY(0)' : 'translateY(2rem)',
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className="text-center mb-12 transform transition-all duration-1000"
            data-animate
            id="jobs-title"
            style={{
              opacity: isVisible['jobs-title'] ? 1 : 0,
              transform: isVisible['jobs-title'] ? 'translateY(0)' : 'translateY(2rem)'
            }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">Discover exciting career opportunities across our service areas</p>
          </div>

          {/* Job Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'audit', 'tax', 'advisory', 'accounting', 'finance'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job, index) => (
              <div 
                key={job.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group cursor-pointer"
                data-animate
                id={`job-${job.id}`}
                style={{
                  opacity: isVisible[`job-${job.id}`] ? 1 : 0,
                  transform: isVisible[`job-${job.id}`] ? 'translateY(0)' : 'translateY(2rem)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{job.department}</p>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                  <div className="flex items-center text-green-600 font-semibold">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{job.description}</p>

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
                  Apply Now
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className="text-center mb-16 transform transition-all duration-1000"
            data-animate
            id="benefits-title"
            style={{
              opacity: isVisible['benefits-title'] ? 1 : 0,
              transform: isVisible['benefits-title'] ? 'translateY(0)' : 'translateY(2rem)'
            }}
          >
            <h2 className="text-4xl font-bold mb-4">Employee Benefits</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We invest in our people with comprehensive benefits and growth opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transform hover:scale-105 transition-all duration-500 group cursor-pointer"
                data-animate
                id={`benefit-${index}`}
                style={{
                  opacity: isVisible[`benefit-${index}`] ? 1 : 0,
                  transform: isVisible[`benefit-${index}`] ? 'translateY(0)' : 'translateY(2rem)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="text-blue-300 mb-4 group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className="text-center mb-12 transform transition-all duration-1000"
            data-animate
            id="contact-title"
            style={{
              opacity: isVisible['contact-title'] ? 1 : 0,
              transform: isVisible['contact-title'] ? 'translateY(0)' : 'translateY(2rem)'
            }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl text-gray-600">Get in touch with our HR team to learn more about opportunities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="space-y-8 transform transition-all duration-1000"
              data-animate
              id="contact-info"
              style={{
                opacity: isVisible['contact-info'] ? 1 : 0,
                transform: isVisible['contact-info'] ? 'translateX(0)' : 'translateX(-2rem)'
              }}
            >
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="bg-blue-600 p-4 rounded-full group-hover:bg-blue-700 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+971 4 XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="bg-blue-600 p-4 rounded-full group-hover:bg-blue-700 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">careers@macnross.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="bg-blue-600 p-4 rounded-full group-hover:bg-blue-700 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>

            <div 
              className="bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-1000"
              data-animate
              id="contact-form"
              style={{
                opacity: isVisible['contact-form'] ? 1 : 0,
                transform: isVisible['contact-form'] ? 'translateX(0)' : 'translateX(2rem)'
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Your CV</h3>
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <select className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                    <option>Select Position</option>
                    <option>Senior Audit Manager</option>
                    <option>VAT Consultant</option>
                    <option>Corporate Tax Specialist</option>
                    <option>Management Consultant</option>
                    <option>Junior Accountant</option>
                    <option>Financial Analyst</option>
                  </select>
                </div>
                <div>
                  <input 
                    type="file" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;