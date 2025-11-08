import React from 'react';
import Image from 'next/image';
import styles from './product-style.module.css';
import Link from 'next/link';

interface ProductData {
  id: number;
  heading: string;
  src: string;
  alt: string;
  content: string;
  buttonText: string;
  gradientStart: string;
  gradientEnd: string;
  accentColor: string;
}

const ProductStyle: React.FC = () => {
  const productData: ProductData[] = [
   
    {
      id: 1,
      heading: 'Compliance Management Inbox',
      src: '/images/Rectangle.png',
      alt: 'Compliance Management Inbox',
      content: 'Stay ahead of evolving regulations with automated alerts, audit trails, and customizable compliance workflows that reduce risk and ensure peace of mind.',
      buttonText: 'compliance-inbox',
      gradientStart: '#3b82f6', // Tailwind blue-500
      gradientEnd: '#7c3aed', // Tailwind purple-600
      accentColor: '#3b82f6'
    },
    {
        id: 2,
        heading: 'Audit Flow Inbox',
        src: '/images/Rectangle2.png',
        alt: 'Audit Flow Inbox',
        content: 'Centralize your audit workflow with an intelligent inbox that prioritizes tasks, tracks progress, and ensures nothing falls through the cracks.',
        buttonText: 'audit-inbox',
        gradientStart: '#22c55e', // Tailwind green-500
        gradientEnd: '#0d9488', // Tailwind teal-600
        accentColor: '#22c55e'
      },
    {
      id: 3,
      heading: 'Financial Statement Inbox',
      src: '/images/Rectangle3.png',
      alt: 'Financial Statement Inbox',
      content: 'Generate professional financial statements with advanced reporting capabilities, automated calculations, and customizable templates that meet industry standards.',
      buttonText: 'financial-inbox',
      gradientStart: '#f97316', // Tailwind orange-500
      gradientEnd: '#dc2626', // Tailwind red-600
      accentColor: '#f97316'
    },
    
    {
        id: 4,
        heading: 'Analytics Inbox',
        src: '/images/Rectangle4.png',
        alt: 'Analytics Inbox',
        content: 'Data-Driven Decisions. Simplified. Analytics Inbox is a comprehensive MIS automation and business intelligence platform designed for small to mid-size organizations. Seamlessly integrates with popular ERP systems including Tally.ERP9, Tally Prime, SAP Business One, Microsoft NAV/Business Central, BUSY ERP, and various databases, enabling organizations to transform raw data into actionable insights through automated report generation and distribution.',
        buttonText: 'analytics-inbox',
        gradientStart: '#a855f7', // Tailwind purple-500
        gradientEnd: '#db2777', // Tailwind pink-600
        accentColor: '#a855f7'
      }
  ];

  return (
    <div className=' max-w-6xl mx-auto'>
    <div className={styles.stickyContainer}>
      {productData.map((product) => (
        <div
          key={product.id}
          className={styles.stickySquare}
          style={
            {
              '--gradient-start': product.gradientStart,
              '--gradient-end': product.gradientEnd,
              '--accent-color': product.accentColor
            } as React.CSSProperties
          }
        >
          <div className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.src}
                alt={product.alt}
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.productContent}>
              <h2 className={styles.productHeading}>{product.heading}</h2>
              <p className={styles.contentText}>{product.content}</p>
              <Link href={`/${product.buttonText}`}>
              <button className={styles.learnMoreButton}>
              Learn More 
              </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductStyle;