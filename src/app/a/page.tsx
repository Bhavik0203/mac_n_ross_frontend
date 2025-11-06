"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Eye, Database, Users, FileText, Lock, Globe, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import image from '@/app/images/pics2.jpg'; // Adjust the path as necessary
const AuditandAssurance = () => {
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
    { id: 'external-audit', title: 'External Audit', icon: Shield },
    { id: 'internal-audit', title: 'Internal Audit', icon: Database },
    { id: 'IFRS-Advisory', title: 'IFRS Advisory', icon: Eye },
    { id: 'Custom-Audit', title: 'Custom Audit', icon: Users },
    { id: 'Investigation-Audit', title: 'Investigation Audit', icon: Lock },
   
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      
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
            
              <h2 className="text-5xl font-bold text-white">Audit and Assurance</h2>
            <p className="text-white mt-4">Mac &amp; Ross Chartered Accountants L.L.C</p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto  py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="sticky top-20">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Audit and Assurance</h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md hover:scale-105 ${
                          activeSection === section.id 
                            ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 shadow-md' 
                            : 'text-gray-600 hover:text-blue-600'
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
              <section
  id="external-audit"
  data-section="external-audit"
  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
>
  
  

  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Text Content */}
    <div className="prose prose-lg text-gray-600 leading-relaxed animate-fade-in-up transition-all duration-700">
      <p className="mb-4">
        The purpose of external audit is to enable the auditor to express an opinion on the financial statements of the organizations that are prepared by the organization’s management and presented for audit.
      </p>
      
    </div>

    {/* Image Section */}
    <div className="w-full h-48 mb-4 rounded-xl overflow-hidden shadow-md transform transition-transform duration-500 group-hover:scale-105">
      <img
        src="/images/audit.jpg" // change this to your actual image path
        alt="External Audit"
        className="object-cover w-full h-full"
      />
    </div>
     
  </div>
  <div className="bg-blue-50 border border-cyan-600 rounded-xl p-6">
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Ensuring that the financial statements are in accordance with the appropriate reporting framework.
        </li>
        <li>
          Ensuring that the financial statements are in compliance with the prevailing law.
        </li>
        <li>
          Providing assurance to stakeholders, lenders, regulators, and other readers regarding the health of the organization.
        </li>
        <li>
          Analyzing the overall performance of the organization and providing reports to the management.
        </li>
      </ul>
      </div>
</section>


              {/* Information We Collect */}
              <section id="internal-audit" data-section="information-we-collect" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-100 to-teal-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Full name and contact details</li>
                        <li>• Business information and company details</li>
                        <li>• Professional credentials and licenses</li>
                        <li>• Financial and accounting records</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
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
                    { title: 'Communication', desc: 'Contacting you about our services and updates', color: 'from-blue-500 to-cyan-500' },
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
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
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
              <section id="contact-us" data-section="contact-us" className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
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
                        <Mail className="h-5 w-5 text-blue-300" />
                        <span>privacy@macnross.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-300" />
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

export default AuditandAssurance;