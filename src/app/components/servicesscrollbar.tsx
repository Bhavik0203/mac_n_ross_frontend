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

import AIAgentCustomization from './passappaniamtionforservice';

export default function ServicesScrollBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);


  const data = [
    {
       title: <Image src={thinks} alt="Proactive Security and Monitoring" width={300} height={250} className="block" />,
       content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-800 md:text-[30px] ">
            <strong>Proactive Security and Monitoring</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800">
            We provide continuous threat detection and real-time security event analysis.</li>
            <li className="text-[15px] md:text-[16px] text-gray-800"> Our proactive incident response capabilities ensure robust defense mechanisms are maintained across your entire IT environment.
            
            </li>
           
           
          </ul>
         
         
        </div>
      ),
    },
    {
      title: <Image src={questionsG} alt="Advanced Antivirus and Anti-Malware Management" width={300} height={250} className="block" />,
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-900 md:text-[30px] ">
            <strong>Advanced Antivirus and Anti-Malware Management</strong>
          </p>
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
    },
    {
      title: <Image src={questionsPana} alt="Security Updates and Patch Management" width={300} height={250} className="block" />,
      content: (
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
    },
    {
      title: <Image src={undraw} alt="Advanced Firewall Management" width={300} height={250} className="block" />,
      content: (
        <div>
          <p className="mb-2 text-[17px] font-normal text-neutral-900 md:text-[30px] ">
            <strong>Advanced Firewall Management</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-[15px] md:text-[16px] text-gray-800"> Our services include the configuration, monitoring, and maintenance of your network security perimeters. </li>
            <li className="text-[15px] md:text-[16px] text-gray-800"> We implement rule-based access controls and intrusion detection and prevention systems. </li>
           
            <li className="text-[15px] md:text-[16px] text-gray-800"> Our continuous monitoring protocols establish secure network boundaries to prevent unauthorized access while enabling legitimate data flow.  </li>
             
          </ul>
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
          Your Complete Cybersecurity Defense</p>
        </div>
      <div className="relative z-10">

 <AIAgentCustomization/>
  {/* Bottom Section */}
  
      </div>
 
        
      
    </div>
  );
}
