
import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/features/FunctionalityPage.module.css';


import Image from 'next/image';

const FunctionalityPageHeader = ({title,source}) => {

  return (
    <div className={styles.headerContainer}>
            <h1 className={` ${styles.title}`}>{title}</h1>

      <div className={styles.imageContainer}>

      <Image 
          src={source} 
          alt={title} 
          layout="fill" 
          width={1024} 
          height={420} 
          objectFit="cover"
          className={styles.image} 
        />
      </div>
    </div>
  );
};

export default FunctionalityPageHeader;



  