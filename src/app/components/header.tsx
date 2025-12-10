 
 "use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, ShoppingCart, Clock, Phone, Mail, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationFormData, setConsultationFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isConsultationModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isConsultationModalOpen]);

  const navigationItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Taxation', href: '/taxation', hasDropdown: true },
    { name: 'Cyber Security', href: '/cyber-security' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contactus' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
  };

  interface NavigationItem {
    name: string;
    href: string;
    active?: boolean;
    hasDropdown?: boolean;
  }

  const toggleMobileDropdown = (itemName: string) => {
    setOpenMobileDropdown(openMobileDropdown === itemName ? null : itemName);
  };

  const openConsultationModal = () => {
    setIsConsultationModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu when opening modal
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
    setPhoneError('');
  };

  const handleConsultationInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Special handling for phone field - only allow digits and limit to 10
    if (name === 'phone') {
      // Remove any non-digit characters
      const digitsOnly = value.replace(/\D/g, '');
      // Limit to 10 digits
      const phoneValue = digitsOnly.slice(0, 10);
      
      setConsultationFormData(prev => ({
        ...prev,
        [name]: phoneValue
      }));
      
      // Validate phone number
      if (phoneValue.length > 0 && phoneValue.length !== 10) {
        setPhoneError('Phone number must be exactly 10 digits');
      } else {
        setPhoneError('');
      }
    } else {
      setConsultationFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number before submission
    if (consultationFormData.phone.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
      return;
    }
    
    setPhoneError('');
    console.log('Consultation form submitted:', consultationFormData);
    // Add your form submission logic here
    // After successful submission, you might want to close the modal
    // closeConsultationModal();
  };

  const services = [
    'Audit & Assurance Services',
    'Actuarial Valuation',
    'Accounting Services',
    'Management Consultancy',
    'Corporate Finance',
    'Corporate Tax',
    'Company Formation',
    'VAT',
    'Excise Tax',
    'Economic Substance Regulation (ESR)',
    'Country by Country Reporting (CbCR)',
    'Others'
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-90 transition-all duration-300`}>
      {/* Top Bar - Hidden on mobile, only visible when not scrolled on desktop */}
      <div className={`hidden lg:block bg-white border-b transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            {/* Left side - Language and Location */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <span className="font-medium" style={{ color: '#E76524' }}>En</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium" style={{ color: '#E76524' }}>Dubai, UAE</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Sun - Thu 09:00-18:00</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+971-4-3584999</span>
              </div>
            </div>

            {/* Right side - Email and Social */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@macnross.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="w-4 h-4 text-gray-500 cursor-pointer" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''} />
                <div className="w-4 h-4 bg-pink-500 rounded cursor-pointer"></div>
                <Twitter className="w-4 h-4 text-gray-500 cursor-pointer" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''} />
                <Instagram className="w-4 h-4 text-gray-500 hover:text-pink-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#817c7c75] backdrop-blur-[28px] shadow-lg py-3' 
          : 'py-4'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Always visible */}
            {!isScrolled && (
            <div className="flex items-center">
              <a href="https://www.macnross.com/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-[4px] flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #E76524, #d1551a)' }}>
                  <div className="w-6 h-6 bg-white rounded transform rotate-12"></div>
                </div>
                <span className="text-white text-2xl font-bold">Mac & Ross</span>
              </a>
            </div>

            )}

            {/* Mobile Menu Button - Only visible on mobile when not scrolled */}
            {!isScrolled && (
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            )}

           
            {/* Trust Indicators - Only visible on desktop when not scrolled */}
            {!isScrolled && (
              <div className="hidden lg:flex items-center space-x-12 transition-all duration-300">
                <div className="text-center">
                  <div className="text-white font-bold text-sm">RT ASEAN</div>
                  <div className="text-sm" style={{ color: '#E76524' }}>Network Member</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-sm">Forum of Firms</div>
                  <div className="text-sm" style={{ color: '#E76524' }}>Member</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-sm">Over Decade</div>
                  <div className="text-sm" style={{ color: '#E76524' }}>Experience in UAE</div>
                </div>
              </div>
            )}
            
            {/* CTA Button - Only visible on desktop when not scrolled */}
            {!isScrolled && (
              <div className="hidden lg:block">
                <button 
                  onClick={openConsultationModal}
                  className="bg-[#a89f9f75] backdrop-blur-[28px] cursor-pointer hover:bg-[#FFFFFF42] hover:backdrop-blur-[28px] text-white px-6 py-2 rounded-[4px] font-semibold transition-colors duration-200"
                >
                  GET CONSULTATION
                </button>
              </div>
            )}
          </div>
            
          {/* Desktop Navigation */}
          <nav className={`hidden lg:block transition-all duration-300 ${
            isScrolled ? 'mt-2' : 'mt-4'
          }`}>
            <div className={`flex justify-center items-center rounded-[4px] mx-auto max-w-6xl ${
              isScrolled ? '' : 'bg-[#817c7c75] backdrop-blur-[18px] py-2'
            }`}>
              <ul className="flex space-x-8">
                {navigationItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <a 
                      href={item.href}
                      className={`flex items-center space-x-1 py-2 transition-colors duration-200 ${
                        item.active 
                          ? 'text-white font-medium' 
                          : 'text-white hover:text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </a>
                    
                    {/* Desktop Dropdown for Services */}
                    {item.hasDropdown && item.name === 'Services' && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mx-35 w-screen justify-center items-center rounded-[4px] max-w-5xl bg-white shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="px-6 py-2">
                          <div className="flex gap-8 px-8">
                            {/* Left Side - 1/3 width - Audit & Assurance */}
                            <div className="w-1/3 space-y-4 ">
                              <h3 className="text-xl font-bold text-white pb-2 border-b border-gray-200">
                                Audit & Assurance
                              </h3>
                              <div className="space-y-2">
                                <a href="externalaudit" className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E76524' }}></div>
                                  <div>
                                    <div className="text-white font-medium group-hover/item:text-[#E76524]">External Audit</div>
                                    <div className="text-gray-600 text-sm">Professional external audit services</div>
                                  </div>
                                </a>
                                <a href="#" className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E76524' }}></div>
                                  <div>
                                    <div className="text-black font-medium group-hover/item:text-[#E76524]">Internal Audit</div>
                                    <div className="text-gray-600 text-sm">Internal control assessments</div>
                                  </div>
                                </a>
                                <a href="#" className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E76524' }}></div>
                                  <div>
                                    <div className="text-black font-medium group-hover/item:text-blue-600">IFRS Advisory</div>
                                    <div className="text-gray-600 text-sm">International standards guidance</div>
                                  </div>
                                </a>
                                <a href="#" className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E76524' }}></div>
                                  <div>
                                    <div className="text-black font-medium group-hover/item:text-blue-600">Custom Audit</div>
                                    <div className="text-gray-600 text-sm">Tailored audit solutions</div>
                                  </div>
                                </a>
                                <a href="#" className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E76524' }}></div>
                                  <div>
                                    <div className="text-black font-medium group-hover/item:text-blue-600">Investigation Audit</div>
                                    <div className="text-gray-600 text-sm">Forensic and investigative services</div>
                                  </div>
                                </a>
                              </div>
                            </div>

                            {/* Right Side - 2/3 width - Business Services */}
                            <div className="w-2/3">
                              <div className="space-y-4">
                                <h3 className="text-xl font-bold text-black pb-2 border-b border-gray-200">
                                  Business Services
                                </h3>
                                <div className="grid grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                    <a href="#" className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 group-hover/item:bg-green-500"></div>
                                      <div>
                                        <div className="text-black font-medium group-hover/item:text-green-600">Accounting Services</div>
                                        <div className="text-gray-600 text-sm">Bookkeeping and financial management</div>
                                      </div>
                                    </a>
                                    <a href="#" className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 group-hover/item:bg-green-500"></div>
                                      <div>
                                        <div className="text-black font-medium group-hover/item:text-green-600">Management Consultancy</div>
                                        <div className="text-gray-600 text-sm">Strategic business consulting</div>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="space-y-2">
                                    <a href="#" className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 group-hover/item:bg-green-500"></div>
                                      <div>
                                        <div className="text-black font-medium group-hover/item:text-green-600">Corporate Finance</div>
                                        <div className="text-gray-600 text-sm">Financial planning and advisory</div>
                                      </div>
                                    </a>
                                    <a href="#" className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200">
                                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 group-hover/item:bg-green-500"></div>
                                      <div>
                                        <div className="text-black font-medium group-hover/item:text-green-600">Company Formation</div>
                                        <div className="text-gray-600 text-sm">Business setup and incorporation</div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* CTA Section */}
                          <div className="bg-gray-50 border-t border-gray-200 rounded-b-[8px] mt-4">
                            <div className="flex justify-between items-center px-6 py-4">
                              <div>
                                <h4 className="text-black font-semibold text-lg">Need Expert Consultation?</h4>
                                <p className="text-gray-600 text-sm">Get personalized advice from our experienced professionals</p>
                              </div>
                              <button 
                                onClick={openConsultationModal}
                                className="text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                                style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #d1551a, #b84a15)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #E76524, #d1551a)'}
                              >
                                Contact Us
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Desktop Dropdown for Taxation */}
                    {item.hasDropdown && item.name === 'Taxation' && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-5xl bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-8">
                            {/* Tax Services Column */}
                            <div>
                              <h3 className="text-gray-900 font-semibold text-sm mb-4 pb-2 border-b border-gray-200">Tax Services</h3>
                              <div className="space-y-3">
                                <a href="#" className="block text-gray-600 text-sm py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Value Added Tax (VAT)</a>
                                <a href="#" className="block text-gray-600 text-sm py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>UAE Corporate Tax</a>
                                <a href="#" className="block text-gray-600 text-sm py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Excise Tax</a>
                                <a href="#" className="block text-gray-600 text-sm py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Transfer Pricing</a>
                              </div>
                            </div>

                            {/* Compliance Services Column */}
                            <div>
                              <h3 className="text-gray-900 font-semibold text-sm mb-4 pb-2 border-b border-gray-200">Compliance Services</h3>
                              <div className="space-y-3">
                                <a href="#" className="block text-gray-600 text-sm py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Country by Country Reporting (CBCR)</a>
                                <a href="#" className="block text-gray-600 text-sm py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Ultimate Beneficial Ownership(UBO)</a>
                                <a href="#" className="block text-gray-600 text-sm py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Anti Money Laundering</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button onClick={toggleMobileMenu} className="p-2 hover:bg-gray-100 rounded-md">
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <a 
                    href={item.href}
                    className={`flex-1 py-3 px-4 rounded-lg transition-colors duration-200 ${
                      item.active 
                        ? 'font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    style={item.active ? { backgroundColor: '#fff5f0', color: '#E76524' } : {}}
                    onClick={!item.hasDropdown ? toggleMobileMenu : undefined}
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <button 
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="p-2 hover:bg-gray-100 rounded-md"
                    >
                      <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        openMobileDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown Content */}
                {item.hasDropdown && openMobileDropdown === item.name && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.name === 'Services' && (
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Audit & Assurance</h4>
                          <div className="space-y-1 ml-2">
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>External Audit</a>
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Internal Audit</a>
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>IFRS Advisory</a>
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Custom Audit</a>
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Investigation Audit</a>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Business Services</h4>
                          <div className="space-y-1 ml-2">
                            <a href="#" className="block text-sm text-gray-600 py-1 hover:text-green-600">Accounting Services</a>
                            <a href="#" className="block text-sm text-gray-600 py-1 hover:text-green-600">Management Consultancy</a>
                            <a href="#" className="block text-sm text-gray-600 py-1 hover:text-green-600">Corporate Finance</a>
                            <a href="#" className="block text-sm text-gray-600 py-1 hover:text-green-600">Company Formation</a>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.name === 'Taxation' && (
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Tax Services</h4>
                          <div className="space-y-1 ml-2">
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Value Added Tax (VAT)</a>
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>UAE Corporate Tax</a>
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Excise Tax</a>
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Transfer Pricing</a>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Compliance Services</h4>
                          <div className="space-y-1 ml-2">
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Country by Country Reporting (CBCR)</a>
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Ultimate Beneficial Ownership(UBO)</a>
                            <a href="#" className="block text-sm text-gray-600 py-1" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Anti Money Laundering</a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <div className="mt-8">
          
              <button 
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
                onClick={openConsultationModal}
              >
                GET CONSULTATION
              </button>
           
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+971-4-3584999</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@macnross.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Sun - Thu 09:00-18:00</span>
              </div>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-4 mt-4">
              <Facebook className="w-5 h-5 text-gray-500 cursor-pointer" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''} />
              <div className="w-5 h-5 bg-pink-500 rounded cursor-pointer"></div>
              <Twitter className="w-5 h-5 text-gray-500 cursor-pointer" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''} />
              <Instagram className="w-5 h-5 text-gray-500 hover:text-pink-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
        <>
          {/* Modal Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[100] transition-opacity duration-300 "
            onClick={closeConsultationModal}
          ></div>
          
          {/* Modal Content */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <div 
              className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto transform transition-all duration-300 hide-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 text-white px-6 py-4 rounded-t-lg flex justify-between items-center" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }}>
                <h2 className="text-2xl font-bold">Get Consultation</h2>
                <button
                  onClick={closeConsultationModal}
                  className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {/* <p className="text-gray-600 mb-6">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p> */}

                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={consultationFormData.name}
                        onChange={handleConsultationInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E76524] focus:border-transparent"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={consultationFormData.email}
                        onChange={handleConsultationInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E76524] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={consultationFormData.phone}
                        onChange={handleConsultationInputChange}
                        required
                        maxLength={10}
                        pattern="[0-9]{10}"
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
                          phoneError 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 focus:ring-[#E76524]'
                        }`}
                        placeholder="10 digits only"
                      />
                      {phoneError && (
                        <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={consultationFormData.company}
                        onChange={handleConsultationInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E76524] focus:border-transparent"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={consultationFormData.service}
                      onChange={handleConsultationInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={consultationFormData.message}
                      onChange={handleConsultationInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="flex justify-end space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={closeConsultationModal}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-md font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;