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
      heading: 'Audit and Assurance Services in UAE',
      src: 'https://picsum.photos/seed/audit-accounting/500/300',
      alt: 'Audit and Assurance Services in UAE',
      content: 'At MAC & ROSS Chartered Accountants, we are a leading audit firm in UAE, approved by the Ministry of Economy and recognized by multiple Free Zones. With years of trusted experience, we help businesses of all sizes from startups and SMEs to multinational corporations strengthen their financial reporting, compliance, and internal controls. Our expert auditors deliver accurate, transparent, and timely audit and assurance services that meet both local and international standards. We go beyond numbers providing insights that help you improve performance, minimize risks, and ensure regulatory compliance.',
      buttonText: 'audit-assurance-services',
      gradientStart: '#E76524', // Orange
      gradientEnd: '#d1551a', // Darker orange
      accentColor: '#E76524'
    },
    {
        id: 2,
        heading: 'Accounting Services',
        src: 'https://picsum.photos/seed/accounting-bookkeeping/500/300',
        alt: 'Accounting Services',
        content: 'We provide end-to-end bookkeeping and accounting services that keep your business financially organized and compliant. From day-to-day transactions to financial reporting, our team ensures accuracy, transparency, and timely insights.',
        buttonText: 'accounting-services',
        gradientStart: '#E76524', // Orange
        gradientEnd: '#d1551a', // Darker orange
        accentColor: '#E76524'
      },
    {
      id: 3,
      heading: 'Management Consultancy',
      src: 'https://picsum.photos/seed/business-consulting/500/300',
      alt: 'Management Consultancy',
      content: 'Our strategic business consulting services help organizations optimize operations, improve efficiency, and achieve growth. We advise on structure, performance, and governance to align your business strategy with market opportunities.',
      buttonText: 'management-consultancy',
      gradientStart: '#E76524', // Orange
      gradientEnd: '#d1551a', // Darker orange
      accentColor: '#E76524'
    },
    
    {
        id: 4,
        heading: 'Corporate Finance',
        src: 'https://picsum.photos/seed/corporate-finance/500/300',
        alt: 'Corporate Finance',
        content: 'We assist in financial planning, investment advisory, and capital restructuring to help businesses achieve financial stability and expansion. Our corporate finance experts provide practical, data-driven guidance for sustainable success.',
        buttonText: 'corporate-finance',
        gradientStart: '#E76524', // Orange
      gradientEnd: '#d1551a', // Darker orange
      accentColor: '#E76524'
      },
      {
        id: 5,
        heading: 'Company Formation',
        src: 'https://picsum.photos/seed/company-startup/500/300',
        alt: 'Company Formation',
        content: 'Starting a business in the UAE? Our company formation services simplify the process — from choosing the right business structure to completing legal registrations and licensing. We help entrepreneurs set up efficiently and compliantly.',
        buttonText: 'company-formation',
        gradientStart: '#E76524', // Orange
        gradientEnd: '#d1551a', // Darker orange
        accentColor: '#E76524'
      }
  ];

  return (
    <div className=' max-w-6xl mx-auto '>
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
                unoptimized
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