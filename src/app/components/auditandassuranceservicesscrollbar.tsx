"use client"
import React from 'react';
import Image from 'next/image';
import blogimg2 from "../assets/images/th.jpg"

import { useState, useEffect, useRef } from 'react';
import bg2 from '../../../public/images/bg2.png'
// import banner2 from "../images/bg4.png";
import { Timeline } from "./ui1/timeline";

import thinks from '../../app/images/service1.png'
import questionsG from '../../app/images/service2.png'
import questionsPana from '../../app/images/service3.png'
import undraw from '../../app/images/service4.png'
import service5 from '../../app/images/service1.png'

import AIAgentCustomization from './auditandassuranceservice';

export default function AuditAndAssuranceServicesScrollBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);


  const data = [
    {
       title: <Image src={thinks} alt="External Audit Services in UAE" width={300} height={250} className="block" />,
       content: (
        <div>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800">
            An external audit ensures your financial statements are true, fair, and compliant with UAE and international standards.
          </p>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] ">
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
    },
    {
      title: <Image src={questionsG} alt="Internal Audit Services" width={300} height={250} className="block" />,
      content: (
        <div>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800">
            Our internal audit services in UAE help organizations enhance governance, manage risks, and strengthen internal processes.
          </p>
          <p className="mb-2 text-[17px] font-normal text-neutral-900 md:text-[30px] ">
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
    },
    {
      title: <Image src={questionsPana} alt="IFRS Advisory Services" width={300} height={250} className="block" />,
      content: (
        <div> 
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800">
            Stay ahead of ever-changing accounting standards with our IFRS advisory services in UAE. Our experts guide you through the latest International Financial Reporting Standards and help ensure your organization's smooth transition.
          </p>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] ">
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
    },
    {
      title: <Image src={undraw} alt="Custom Audit Solutions" width={300} height={250} className="block" />,
      content: (
        <div>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800">
            Every business is unique and so are its audit needs. Our custom audit services are designed to give you a deeper understanding of your business processes and financial systems.
          </p>
          <p className="mb-2 text-[17px] font-normal text-neutral-900 md:text-[30px] ">
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
    },
    {
      title: <Image src={questionsPana} alt="Investigation Audit" width={300} height={250} className="block" />,
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-900 md:text-[30px] ">
            <strong>Investigation Audit</strong>
          </p>
          <p className="mb-4 text-[15px] md:text-[16px] text-gray-800">
            Our investigation audit services provide detailed financial analysis to uncover irregularities, fraud, or mismanagement.
          </p>
          <p className="text-[15px] md:text-[16px] text-gray-800">
            We use advanced audit techniques and deep industry knowledge to find facts and deliver actionable insights.
          </p>
        </div>
      ),
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div className="bg-white p-4 md:p-8 shadow-[0_-35px_60px_-12px_rgba(0,0,0,0.20)] " style={{ borderRadius: '160px 160px 0 0' }}>
    
             {/* Background Overlay */}
       {/* <div className="absolute inset-0 bg-[#576F9F]/10 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: `url(${bgimg.src})` }} 
       ></div> */}
      
      {/* Content */}
      <div 
          className={`text-center mb-6  transition-all duration-1000 ease-out transform `}
        >
          <h2 className="text-2xl md:text-5xl font-bold my-6 text-gray-800">
             <span className="text-gray-500">Our </span>Services
          </h2>
          <p className="text-sm font-normal text-neutral-800 md:text-[30px] ">
          Comprehensive Audit and Assurance Solutions</p>
        </div>
      <div className="relative z-10">

 <AIAgentCustomization/>
  {/* Bottom Section */}
  
      </div>
 
        
      
    </div>
  );
}
