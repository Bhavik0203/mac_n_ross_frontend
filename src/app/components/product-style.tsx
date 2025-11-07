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
}

const ProductStyle: React.FC = () => {
  const productData: ProductData[] = [
   
    {
      id: 1,
      heading: 'Compliance Management Inbox',
      src: '/images/Rectangle.png',
      alt: 'Compliance Management Inbox',
      content: 'Stay ahead of evolving regulations with automated alerts, audit trails, and customizable compliance workflows that reduce risk and ensure peace of mind.',
      buttonText: 'compliance-inbox'
    },
    {
        id: 2,
        heading: 'Audit Flow Inbox',
        src: '/images/Rectangle2.png',
        alt: 'Audit Flow Inbox',
        content: 'Centralize your audit workflow with an intelligent inbox that prioritizes tasks, tracks progress, and ensures nothing falls through the cracks.',
        buttonText: 'audit-inbox'
      },
    {
      id: 3,
      heading: 'Financial Statement Inbox',
      src: '/images/Rectangle3.png',
      alt: 'Financial Statement Inbox',
      content: 'Generate professional financial statements with advanced reporting capabilities, automated calculations, and customizable templates that meet industry standards.',
      buttonText: 'financial-inbox'
    },
    
    {
        id: 4,
        heading: 'Analytics Inbox',
        src: '/images/Rectangle4.png',
        alt: 'Analytics Inbox',
        content: 'Data-Driven Decisions. Simplified. Analytics Inbox is a comprehensive MIS automation and business intelligence platform designed for small to mid-size organizations. Seamlessly integrates with popular ERP systems including Tally.ERP9, Tally Prime, SAP Business One, Microsoft NAV/Business Central, BUSY ERP, and various databases, enabling organizations to transform raw data into actionable insights through automated report generation and distribution.',
        buttonText: 'analytics-inbox'
      }
  ];

  return (
    <div className=' max-w-6xl mx-auto'>
    <div className={styles.stickyContainer}>
      {productData.map((product) => (
        <div key={product.id} className={styles.stickySquare}>
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