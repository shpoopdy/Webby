'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from './HeroHeader.module.css';

export default function HeroHeader() {
  
  let today = new Date();
  let hour = today.getHours();
  let greeting;

  if(hour >= 18) {
      greeting = 'Good Evening';
  }
  else if(hour >= 12) {
      greeting = 'Good Afternoon';
  }
  else {
      greeting = 'Good Morning';
  }

  

  const [isHovered, setIsHovered] = useState(greeting);
  const checkGreet = () => {
    if (hour >= 18) {
      setIsHovered('こんばんは');
    } else if (hour >= 12) {
      setIsHovered('こんにちは');
    } else {
      setIsHovered('おはようございます');
    }
  }

  //setIsHovered(checkGreet());

    return (
        <div className={styles.heroContain}>
            <div>
              <Image src="/images/me.png" alt="Mikey's Image" width={250} height={250} className={styles.hero_image} />
            </div>
        
            <div className={styles.hero_feature}>
              <h1>Mikey</h1>
              <p
                onMouseEnter={() => setIsHovered(greeting)}
                onMouseLeave={() => checkGreet()}
              >{isHovered}</p>
            </div>
        </div>
    )
}