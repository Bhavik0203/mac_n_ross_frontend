"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Shield, FileText, Users, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

interface TermsSection {
    id: string;
    icon: React.ReactNode;
    title: string;
    content: string;
}

const toggleSection = (sectionId: string) => {
    setExpandedSections((prev: Record<string, boolean>) => ({
        ...prev,
        [sectionId]: !prev[sectionId]
    }));
};

  const termsData = [
    {
      id: 'acceptance',
      icon: <Shield className="w-6 h-6" />,
      title: 'Acceptance of Terms',
      content: `By accessing and using the services of Mac & Ross Chartered Accountants L.L.C ("Company", "we", "us", or "our"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms govern your use of our professional accounting, auditing, and consulting services. If you do not agree with any part of these terms, you must not use our services.`
    },
    {
      id: 'services',
      icon: <FileText className="w-6 h-6" />,
      title: 'Services Provided',
      content: `Mac & Ross Chartered Accountants L.L.C provides comprehensive professional services including but not limited to:
      
      • Audit and Assurance Services
      • VAT Consultancy and Compliance
      • UAE Corporate Tax Services
      • Excise Tax Management
      • Economic Substance Regulations
      • Accounting and Bookkeeping Services
      • Management Consultancy
      • Corporate Finance Solutions
      • Company Formation and Setup
      • Transfer Pricing Services
      
      All services are provided in accordance with International Standards on Auditing, UAE regulations, and professional accounting standards.`
    },
    {
      id: 'engagement',
      icon: <Users className="w-6 h-6" />,
      title: 'Client Engagement',
      content: `Professional services are provided based on formal engagement letters that outline:
      
      • Scope of work and deliverables
      • Timeline and milestones
      • Fee structure and payment terms
      • Responsibilities of both parties
      • Confidentiality agreements
      • Limitation of liability
      
      Each engagement is subject to our professional standards and regulatory requirements. Changes to the scope of work require written agreement and may result in additional fees.`
    },
    {
      id: 'confidentiality',
      icon: <Shield className="w-6 h-6" />,
      title: 'Confidentiality and Privacy',
      content: `We maintain strict confidentiality regarding all client information and documents. Our privacy policy includes:
      
      • Protection of sensitive financial data
      • Secure storage and transmission of information
      • Limited access on a need-to-know basis
      • Compliance with UAE data protection regulations
      • Professional ethical standards
      
      Client information may only be disclosed with written consent or as required by law, regulation, or professional standards.`
    },
    {
      id: 'fees',
      icon: <FileText className="w-6 h-6" />,
      title: 'Fees and Payment Terms',
      content: `Our fee structure is based on:
      
      • Complexity and scope of services
      • Time and resources required
      • Market rates for professional services
      • Value delivered to clients
      
      Payment terms are typically 30 days from invoice date unless otherwise agreed. Late payment may result in interest charges and suspension of services. All fees are subject to applicable UAE VAT.`
    },
    {
      id: 'liability',
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Limitation of Liability',
      content: `Our liability is limited to the extent permitted by law and professional regulations:
      
      • Services provided with reasonable care and skill
      • Liability limited to direct damages only
      • No liability for consequential or indirect losses
      • Total liability capped at engagement value
      • Professional indemnity insurance coverage
      
      Clients are responsible for providing accurate and complete information necessary for service delivery.`
    },
    {
      id: 'compliance',
      icon: <Shield className="w-6 h-6" />,
      title: 'Regulatory Compliance',
      content: `As a member of RT ASEAN Network and Forum of Firms, we adhere to:
      
      • International Standards on Auditing
      • International Ethics Standards Board guidelines
      • UAE Federal Tax Authority regulations
      • Dubai Financial Services Authority requirements
      • Anti-Money Laundering regulations
      • Economic Substance Regulations
      
      We maintain appropriate quality control standards and continuing professional education requirements.`
    },
    {
      id: 'termination',
      icon: <FileText className="w-6 h-6" />,
      title: 'Termination of Services',
      content: `Either party may terminate services with written notice:
      
      • 30 days notice for ongoing services
      • Immediate termination for breach of terms
      • Completion of work in progress
      • Final invoicing and payment
      • Return of client documents
      
      Termination does not affect accrued rights or obligations of either party.`
    },
    {
      id: 'intellectual',
      icon: <Shield className="w-6 h-6" />,
      title: 'Intellectual Property',
      content: `All methodologies, templates, and work products developed by Mac & Ross remain our intellectual property. Clients receive:
      
      • Right to use deliverables for intended purposes
      • Ownership of their underlying data and information
      • License to use our recommendations and advice
      • No right to redistribute our methodologies
      
      Third-party software or tools used in service delivery remain subject to their respective licensing terms.`
    },
    {
      id: 'governing',
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Governing Law',
      content: `These terms are governed by UAE law and subject to the jurisdiction of UAE courts. Any disputes will be resolved through:
      
      • Good faith negotiation
      • Mediation if required
      • Arbitration under UAE arbitration rules
      • Dubai International Financial Centre courts for DIFC matters
      
      Professional regulatory bodies may also have jurisdiction over service-related disputes.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Professional Services Agreement for Mac & Ross Chartered Accountants L.L.C
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-blue-200">
              <span className="text-sm">Last Updated: June 2025</span>
              <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
              <span className="text-sm">Version 2.1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {termsData.map((section, index) => (
            <div
              key={section.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="flex items-center justify-between p-8 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-gray-500 mt-1">Click to expand details</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`transform transition-transform duration-300 ${expandedSections[section.id] ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-500 ease-in-out ${
                expandedSections[section.id] 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-8 pb-8">
                  <div className="h-px bg-gradient-to-r from-blue-200 via-indigo-200 to-transparent mb-6"></div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className={`mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="text-blue-100 text-lg">Contact our professional team for clarification</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-blue-200 text-sm">+971 4 XXX XXXX</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-blue-200 text-sm">info@macnross.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-blue-200 text-sm">Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500 bg-white px-6 py-3 rounded-full shadow-lg">
            <Shield className="w-4 h-4" />
            <span className="text-sm">
              Mac & Ross Chartered Accountants L.L.C - Member of RT ASEAN Network
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;