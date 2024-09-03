'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from './HeroHeader.module.css';

export default function HeroHeader() {
  let today = new Date();
  let hour = today.getHours();
  let greeting;

  if(hour >= 18) {
      greeting = 'こんばんは';
  }
  else if(hour >= 12) {
      greeting = 'こんにちは';
  }
  else {
      greeting = 'おはようございます';
  }

  

  const [isHovered, setIsHovered] = useState(greeting);
  const checkGreet = () => {
    if (hour >= 18) {
      setIsHovered('Good Evening');
    } else if (hour >= 12) {
      setIsHovered('Good Afternoon');
    } else {
      setIsHovered('Good Morning');
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
                onMouseEnter={() => checkGreet()}
                onMouseLeave={() => setIsHovered(greeting)} style={{width:"50%"}}
              >{isHovered}</p>
            </div>
        </div>
    )
}