 
 "use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Search, ShoppingCart, Clock, Phone, Mail, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
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
    setOpenMobileSubmenu(null); // Close submenu when opening/closing main dropdown
  };

  const toggleMobileSubmenu = (submenuName: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === submenuName ? null : submenuName);
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
                <ChevronDown className="w-4 h-4 text-gray-1000" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-medium" style={{ color: '#E76524' }}>Dubai, UAE</span>
                <ChevronDown className="w-4 h-4 text-gray-1000" />
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
                <Facebook className="w-4 h-4 text-gray-1000 cursor-pointer" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''} />
                <div className="w-4 h-4 bg-pink-500 rounded cursor-pointer"></div>
                <Twitter className="w-4 h-4 text-gray-1000 cursor-pointer" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''} />
                <Instagram className="w-4 h-4 text-gray-1000 hover:text-pink-600 cursor-pointer" />
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
              <Link href="https://www.macnross.com/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-[4px] flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #E76524, #d1551a)' }}>
                  <div className="w-6 h-6 bg-white rounded transform rotate-12"></div>
                </div>
                <span className="text-white text-2xl font-bold">Mac & Ross</span>
              </Link>
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
                  <div className="text-sm" style={{ color: '#fc8f58' }}>Network Member</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-sm">Forum of Firms</div>
                  <div className="text-sm" style={{ color: '#fc8f58' }}>Member</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-sm">Over Decade</div>
                  <div className="text-sm" style={{ color: '#fc8f58' }}>Experience in UAE</div>
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
                    <Link 
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
                    </Link>
                    
                    {/* Desktop Dropdown for Services */}
                    {item.hasDropdown && item.name === 'Services' && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-50 rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="flex">
                          {/* Left Column - Main Services */}
                          <div className="w-64 border-r border-gray-200">
                            <div className="p-4">
                              <h3 className="text-gray-900 font-bold text-sm mb-4">All Services</h3>
                              <div className="space-y-1">
                                <div className="relative group/submenu">
                                  <Link href="/audit-and-assurance" className="flex items-center justify-between px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 hover:text-[#E76524] transition-colors group">
                                    <span className="text-gray-900 text-sm group-hover:text-[#E76524]">Audit and Assurance</span>
                                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#E76524] group-hover:translate-x-1 transition-all" />
                                  </Link>
                                </div>
                                <Link href="/accounting-services" className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                                  <span className="text-gray-600 text-sm">Accounting Services</span>
                                </Link>
                                <Link href="/management-consultancy" className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                                  <span className="text-gray-600 text-sm">Management Consultancy</span>
                                </Link>
                                <Link href="/corporate-finance" className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                                  <span className="text-gray-600 text-sm">Corporate Finance</span>
                                </Link>
                                <Link href="/company-formation" className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                                  <span className="text-gray-600 text-sm">Company Formation</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          
                          {/* Right Column - Submenu for Audit and Assurance */}
                          <div className="w-64">
                            <div className="p-4">
                              <Link href="/audit-and-assurance" className="block text-gray-900 font-bold text-sm mb-4 px-3 py-2 rounded-md hover:bg-gray-200 hover:text-[#E76524] transition-colors">  <span > Audit and Assurance</span></Link>
                              <div className="space-y-1">
                                <Link href="/audit-and-assurance/externalaudit" className="block px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                                  <span className="text-gray-600 text-sm">External Audit</span>
                                </Link>
                                <Link href="/audit-and-assurance/internalaudit" className="block px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                                  <span className="text-gray-600 text-sm">Internal Audit</span>
                                </Link>
                                <Link href="/audit-and-assurance/ifrsadvisory" className="block px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                                  <span className="text-gray-600 text-sm">IFRS Advisory</span>
                                </Link>
                                <Link href="/audit-and-assurance/customaudit" className="block px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                                  <span className="text-gray-600 text-sm">Custom Audit</span>
                                </Link>
                                <Link href="/audit-and-assurance/investigationaudit" className="block px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                                  <span className="text-gray-600 text-sm">Investigation Audit</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Desktop Dropdown for Taxation */}
                    {item.hasDropdown && item.name === 'Taxation' && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="p-4">
                          <div className="space-y-2">
                            <Link href="#" className="block text-gray-600 text-sm py-2 hover:text-[#E76524] transition-colors">Value Added Tax (VAT)</Link>
                            <Link href="#" className="block text-gray-600 text-sm py-2 hover:text-[#E76524] transition-colors">UAE Corporate Tax</Link>
                            <Link href="#" className="block text-gray-600 text-sm py-2 hover:text-[#E76524] transition-colors">Excise Tax</Link>
                            <Link href="#" className="block text-gray-600 text-sm py-2 hover:text-[#E76524] transition-colors">Transfer Pricing</Link>
                            <Link href="#" className="block text-gray-600 text-sm py-2 hover:text-[#E76524] transition-colors">Country by Country Reporting (CBCR)</Link>
                            <Link href="#" className="block text-gray-600 text-sm py-2 hover:text-[#E76524] transition-colors">Ultimate Beneficial Ownership (UBO)</Link>
                            <Link href="#" className="block text-gray-600 text-sm py-2 hover:text-[#E76524] transition-colors">Anti Money Laundering</Link>
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
        <div className="lg:hidden fixed inset-0 bg-[#231F20] bg-opacity-50 z-40" onClick={toggleMobileMenu}></div>
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
                  <Link 
                    href={item.href}
                    className={`flex-1 py-3 px-4 rounded-lg transition-colors duration-200 ${
                      item.active 
                        ? 'font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={item.active ? { backgroundColor: '#fff5f0', color: '#E76524' } : {}}
                    onClick={!item.hasDropdown ? toggleMobileMenu : undefined}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <button 
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="p-2 hover:bg-gray-100 rounded-md"
                    >
                      <ChevronDown className={`w-4 h-4 text-gray-1000 transition-transform duration-200 ${
                        openMobileDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown Content */}
                {item.hasDropdown && openMobileDropdown === item.name && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.name === 'Services' && (
                      <>
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="block text-sm text-gray-600 py-2">Audit and Assurance</div>
                            <button 
                              onClick={() => toggleMobileSubmenu('audit')}
                              className="p-1 hover:bg-gray-100 rounded-md"
                            >
                              <ChevronDown className={`w-3 h-3 text-gray-600 transition-transform duration-200 ${
                                openMobileSubmenu === 'audit' ? 'rotate-180' : ''
                              }`} />
                            </button>
                          </div>
                          {openMobileSubmenu === 'audit' && (
                            <div className="ml-4 mt-1 space-y-1">
                              <Link href="externalaudit" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>External Audit</Link>
                              <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Internal Audit</Link>
                              <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>IFRS Advisory</Link>
                              <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Custom Audit</Link>
                              <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Investigation Audit</Link>
                            </div>
                          )}
                        </div>
                        <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Accounting Services</Link>
                        <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Management Consultancy</Link>
                        <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Corporate Finance</Link>
                        <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Company Formation</Link>
                      </>
                    )}

                    {item.name === 'Taxation' && (
                      <>
                        <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Value Added Tax (VAT)</Link>
                        <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>UAE Corporate Tax</Link>
                        <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Excise Tax</Link>
                        <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Transfer Pricing</Link>
                        <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Country by Country Reporting (CBCR)</Link>
                        <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Ultimate Beneficial Ownership (UBO)</Link>
                        <Link href="#" className="block text-sm text-gray-600 py-2 hover:text-[#E76524] transition-colors" onClick={toggleMobileMenu}>Anti Money Laundering</Link>
                      </>
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
              <Facebook className="w-5 h-5 text-gray-1000 cursor-pointer" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''} />
              <div className="w-5 h-5 bg-pink-500 rounded cursor-pointer"></div>
              <Twitter className="w-5 h-5 text-gray-1000 cursor-pointer" onMouseEnter={(e) => e.currentTarget.style.color = '#E76524'} onMouseLeave={(e) => e.currentTarget.style.color = ''} />
              <Instagram className="w-5 h-5 text-gray-1000 hover:text-pink-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
        <>
          {/* Modal Backdrop */}
          <div 
            className="fixed inset-0 bg-[#231F20] bg-opacity-50 z-[100] transition-opacity duration-300 "
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
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200"
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