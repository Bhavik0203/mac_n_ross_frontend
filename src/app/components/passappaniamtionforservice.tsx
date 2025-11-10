import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import zzzz5Gif from '../../app/images/zzzz5.gif';
import zzzz2Gif from '../../app/images/zzzz2.gif';
import zzzz1Gif from '../../app/images/zzzz1.gif';
import zzzzGif from '../../app/images/zzzz.gif';

const AIAgentCustomization = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    {
      id: 0,
      title: "Proactive Security and Monitoring",
      description: (
        <div>
         
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800">
            We provide continuous threat detection and real-time security event analysis.</li>
            <li className="text-[15px] md:text-[16px] text-gray-800"> Our proactive incident response capabilities ensure robust defense mechanisms are maintained across your entire IT environment.
            
            </li>
           
           
          </ul>
         
         
        </div>
      ),
      image: zzzz5Gif
    },
    {
      id: 1,
      title: "Advanced Antivirus and Anti-Malware Management",
      description: (
        <div>
          {/* <p className="mb-2 text-[17px] font-normal text-neutral-900 md:text-[30px] ">
            <strong></strong>
          </p> */}
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800">
            Our program implements multi-layered protection strategies using advanced threat detection technologies.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800"> We use automated response systems to identify, quarantine, and eliminate malicious software before it can compromise your systems. 
              </li>
              <li className="text-[15px] md:text-[16px] text-gray-800"> maintain current threat intelligence databases and deploy signature updates across all endpoints to protect against known and emerging threats.
            </li>
           
           
          </ul>
        </div>
      ),
      image: zzzz2Gif
    },
    {
      id: 2,
      title: "Systematic Security Patch Management",
      description: (
        <div className="max-"> 
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] ">
            <strong>Systematic Security Patch Management</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800">
            We ensure all critical security updates are evaluated, tested, and deployed in a timely manner. 
          </li>
            <li className="text-[15px] md:text-[16px] text-gray-800"> Our process addresses vulnerabilities across operating systems, applications, and network infrastructure components.
               </li>
              <li className="text-[15px] md:text-[16px] text-gray-800">  We use comprehensive testing protocols to minimize operational disruption while maintaining security integrity. </li>
           
           
          </ul>
        </div>
      ),
      image: zzzz1Gif
    },
    {
      id: 3,
      title: "Advanced Firewall Management",
      description: (
        <div>
          {/* <p className="mb-2 text-[17px] font-normal text-neutral-900 md:text-[30px] ">
            <strong>Advanced Firewall Management</strong>
          </p> */}
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800"> Our services include the configuration, monitoring, and maintenance of your network security perimeters. </li>
            <li className="text-[15px] md:text-[16px] text-gray-800"> We implement rule-based access controls and intrusion detection and prevention systems. </li>
           
            <li className="text-[15px] md:text-[16px] text-gray-800"> Our continuous monitoring protocols establish secure network boundaries to prevent unauthorized access while enabling legitimate data flow.  </li>
             
          </ul>
        </div>
      ),
      image: zzzzGif
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = parseInt(entry.target.getAttribute('data-section-id') || '0');
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className=" flex flex-col lg:flex-row">
      {/* Left Side - Sticky with Dynamic Image - Desktop Only */}
      <div className="hidden lg:block w-1/2 h-screen sticky top-0">
        <div className="h-full flex items-center justify-center relative overflow-hidden">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                activeSection === index 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="text-center">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={400}
                  height={500}
                  className="rounded-lg object-cover animate-sway-4px pause-on-hover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {section.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Scrollable Content */}
      <div className="w-full lg:w-1/2">
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              data-section-id={section.id}
              className={`min-h-screen flex flex-col justify-center transition-all duration-500 ${
                activeSection === index ? 'blur-0' : 'blur-sm'
              }`}
            >
              <div className="mb-6 lg:mb-8">
                {/* Mobile Image - Show only on mobile */}
                <div className="block lg:hidden mb-6">
                  <div className="flex justify-center">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={300}
                      height={250}
                      className="rounded-lg object-cover w-full max-w-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                    activeSection === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                  }`} />
                  <span className="text-sm text-gray-500 font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                  {section.title}
                </h2>
                <div className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                  {section.description}
                </div>
              </div>
              
              {/* Additional content for each section */}
              {/* <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Features
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Intelligent automation</li>
                    <li>• Real-time monitoring</li>
                    <li>• Advanced analytics</li>
                  </ul>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAgentCustomization;