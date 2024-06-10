// FunctionalityPageHeader.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/features/FunctionalityPage.module.css';



// components/FunctionalityPageHeader.js
import Image from 'next/image';

const FunctionalityPageHeader = ({title,source}) => {

  return (
    <div className={styles.headerContainer}>
            <h1 className={styles.title}>{title}</h1>

      <div className={styles.imageContainer}>

      <Image 
          src={source} 
          alt={title} 
          layout="responsive" 
          width={1024} 
          height={683} 
          objectFit="contain"
          className={styles.image} 
        />
      </div>
    </div>
  );
};

export default FunctionalityPageHeader;



  