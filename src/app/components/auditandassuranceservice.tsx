import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import zzzz5Gif from '../../app/images/zzzz5.gif';
import zzzz2Gif from '../../app/images/zzzz2.gif';
import zzzz1Gif from '../../app/images/zzzz1.gif';
import zzzzGif from '../../app/images/zzzz.gif';
import zzzz5Gif1 from '../../app/images/zzzz5.gif';

const AIAgentCustomization = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    {
      id: 0,
      title: "External Audit Services in UAE",
      description: (
        <div>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800">
            An external audit ensures your financial statements are true, fair, and compliant with UAE and international standards.
          </p>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[20px]">
            <strong>Our external audit services include:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Verifying financial statements according to IFRS and applicable laws.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Ensuring accuracy and transparency in financial reporting.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Evaluating internal systems and financial controls.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Providing assurance to stakeholders, investors, and regulators.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Delivering performance analysis reports for better management decisions.
            </li>
          </ul>
          <p className="mt-4 text-[15px] md:text-[16px] text-gray-800 font-medium">
            Build trust with transparent and compliant financial reports.
          </p>
        </div>
      ),
      image: zzzz5Gif
    },
    {
      id: 1,
      title: "Internal Audit Services",
      description: (
        <div>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800">
            Our internal audit services in UAE help organizations enhance governance, manage risks, and strengthen internal processes.
          </p>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[20px]">
            <strong>We assist you with:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Reviewing operational, compliance, and financial processes.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Evaluating internal controls to prevent fraud and inefficiency.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Identifying and mitigating business risks.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Ensuring adherence to company policies and legal requirements.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Providing actionable recommendations to improve performance.
            </li>
          </ul>
          <p className="mt-4 text-[15px] md:text-[16px] text-gray-800 font-medium">
            Our goal is to help you run your business with confidence, control, and compliance.
          </p>
        </div>
      ),
      image: zzzz2Gif
    },
    {
      id: 2,
      title: "IFRS Advisory Services",
      description: (
        <div>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800">
            Stay ahead of ever-changing accounting standards with our IFRS advisory services in UAE. Our experts guide you through the latest International Financial Reporting Standards and help ensure your organization's smooth transition.
          </p>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[20px]">
            <strong>Our IFRS services include:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Customized IFRS training and workshops.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Guidance on implementation and compliance.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Advisory support during transitions or audits.
            </li>
          </ul>
          <p className="mt-4 text-[15px] md:text-[16px] text-gray-800 font-medium">
            Stay compliant, transparent, and globally aligned with our IFRS expertise.
          </p>
        </div>
      ),
      image: zzzz1Gif
    },
    {
      id: 3,
      title: "Custom Audit Solutions",
      description: (
        <div>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800">
            Every business is unique and so are its audit needs. Our custom audit services are designed to give you a deeper understanding of your business processes and financial systems.
          </p>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[20px]">
            <strong>We specialize in:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Operating and accounting systems reviews.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Enterprise risk management assessments.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Business process audits and performance benchmarking.
            </li>
            <li className="text-[15px] md:text-[16px] text-gray-800">
              Recommendations to enhance efficiency and compliance.
            </li>
          </ul>
          <p className="mt-4 text-[15px] md:text-[16px] text-gray-800 font-medium">
            We tailor every audit to strengthen your operations and help you make informed decisions.
          </p>
        </div>
      ),
      image: zzzzGif
    },
    {
      id: 4,
      title: "Investigation Audit",
      description: (
        <div>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800">
            Our investigation audit services provide detailed financial analysis to uncover irregularities, fraud, or mismanagement.
          </p>
          <p className="text-[15px] md:text-[16px] text-gray-800">
            We use advanced audit techniques and deep industry knowledge to find facts and deliver actionable insights.
          </p>
        </div>
      ),
      image: zzzz5Gif1
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