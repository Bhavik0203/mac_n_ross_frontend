"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Eye, Database, Users, FileText, Lock, Globe, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('data-section') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'overview', title: 'Overview', icon: Shield },
    { id: 'information-we-collect', title: 'Information We Collect', icon: Database },
    { id: 'how-we-use', title: 'How We Use Information', icon: Eye },
    { id: 'information-sharing', title: 'Information Sharing', icon: Users },
    { id: 'data-security', title: 'Data Security', icon: Lock },
    { id: 'your-rights', title: 'Your Rights', icon: FileText },
    { id: 'international-transfers', title: 'International Transfers', icon: Globe },
    { id: 'contact-us', title: 'Contact Us', icon: Mail }
  ];

interface Section {
    id: string;
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50" style={{ background: 'linear-gradient(to bottom right, #f8f9fa, #fff5f0)' }}>
      {/* Header */}
      <div className={`bg-white shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }}>
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-1">Mac &amp; Ross Chartered Accountants L.L.C</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto  py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group hover:shadow-md hover:scale-105 ${
                            activeSection === section.id
                            ? 'shadow-md' 
                            : 'text-gray-600'
                        }`}
                        style={activeSection === section.id ? { background: 'linear-gradient(to right, #fff5f0, #ffe8d6)', color: '#E76524' } : {}}
                        onMouseEnter={(e) => { if (activeSection !== section.id) { e.currentTarget.style.background = 'linear-gradient(to right, #fff5f0, #ffe8d6)'; e.currentTarget.style.color = '#E76524'; } }}
                        onMouseLeave={(e) => { if (activeSection !== section.id) { e.currentTarget.style.background = ''; e.currentTarget.style.color = ''; } }}
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-sm font-medium">{section.title}</span>
                        <ChevronRight className="h-3 w-3 ml-auto transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-8">
              {/* Overview Section */}
              <section id="overview" data-section="overview" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }}>
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Privacy Policy Overview</h2>
                </div>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    At Mac &amp; Ross Chartered Accountants L.L.C, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our professional services.
                  </p>
                  <p className="mb-4">
                    As a member of RT ASEAN Network and the Forum of Firms, we adhere to the highest international standards of confidentiality and data protection, ensuring that your information is handled with the utmost care and professionalism.
                  </p>
                  <div className="p-4 rounded-r-lg" style={{ backgroundColor: '#fff5f0', borderLeftColor: '#E76524', borderLeftWidth: '4px' }}>
                    <p className="font-medium" style={{ color: '#E76524' }}>Last Updated: June 2025</p>
                  </div>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="information-we-collect" data-section="information-we-collect" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Full name and contact details</li>
                        <li>• Business information and company details</li>
                        <li>• Professional credentials and licenses</li>
                        <li>• Financial and accounting records</li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(to bottom right, #fff5f0, #ffe8d6)', borderColor: '#E76524' }}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Information</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li>• IP address and browser information</li>
                        <li>• Website usage and navigation data</li>
                        <li>• Cookies and tracking technologies</li>
                        <li>• Device and system information</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section id="how-we-use" data-section="how-we-use" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Service Delivery', desc: 'Providing audit, accounting, and consulting services', color: 'from-purple-500 to-pink-500' },
                    { title: 'Communication', desc: 'Contacting you about our services and updates', color: 'from-[#E76524] to-[#d1551a]' },
                    { title: 'Compliance', desc: 'Meeting legal and regulatory requirements', color: 'from-green-500 to-emerald-500' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                      <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Information Sharing */}
              <section id="information-sharing" data-section="information-sharing" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
                </div>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    We maintain strict confidentiality and do not sell, trade, or transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <span>With RT ASEAN Network partners for collaborative service delivery</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <span>When required by UAE federal or local regulatory authorities</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <span>With trusted service providers under strict confidentiality agreements</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                        <span>To protect our legal rights or comply with legal processes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section id="data-security" data-section="data-security" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Security Measures</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Encryption', desc: 'End-to-end encryption for all data transmission and storage' },
                    { title: 'Access Controls', desc: 'Multi-factor authentication and role-based access' },
                    { title: 'Regular Audits', desc: 'Continuous monitoring and security assessments' },
                    { title: 'Secure Infrastructure', desc: 'Enterprise-grade security protocols and firewalls' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Your Rights */}
              <section id="your-rights" data-section="your-rights" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Privacy Rights</h2>
                </div>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="mb-6">Under UAE data protection laws and our commitment to transparency, you have the following rights:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Right to access your personal information',
                      'Right to correct inaccurate data',
                      'Right to request data deletion',
                      'Right to restrict data processing',
                      'Right to data portability',
                      'Right to withdraw consent',
                      'Right to file complaints',
                      'Right to be informed about data breaches'
                    ].map((right, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors duration-300">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">{right}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* International Transfers */}
              <section id="international-transfers" data-section="international-transfers" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to right, #E76524, #d1551a)' }}>
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">International Data Transfers</h2>
                </div>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    As part of the RT ASEAN Network, we may transfer your information to other network members in different jurisdictions to provide comprehensive services. All transfers are conducted under strict safeguards:
                  </p>
                  <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
                    <ul className="space-y-3">
                      <li>✓ Adequate protection measures in place</li>
                      <li>✓ Contractual safeguards with all partners</li>
                      <li>✓ Compliance with international standards</li>
                      <li>✓ Regular monitoring and auditing</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Contact Us */}
              <section id="contact-us" data-section="contact-us" className="rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(to bottom right, #231F20, #231F20)' }}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-100 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="h-6 w-6 text-gray-900" />
                  </div>
                  <h2 className="text-2xl font-bold">Contact Our Privacy Team</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                    <p className="text-gray-300 mb-6">
                      For any privacy-related questions or to exercise your rights, please contact our dedicated privacy team.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5" style={{ color: '#E76524' }} />
                        <span>privacy@macnross.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5" style={{ color: '#E76524' }} />
                        <span>+971 4 XXX XXXX</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-lg font-semibold mb-4">Office Address</h3>
                    <p className="text-gray-300">
                      Mac &amp; Ross Chartered Accountants L.L.C<br />
                      Dubai, United Arab Emirates<br />
                      <br />
                      Member of RT ASEAN Network<br />
                      Member of Forum of Firms
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;