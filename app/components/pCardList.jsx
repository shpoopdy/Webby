import React from 'react';
import styles from './pCardList.module.css';

// Components
import Card from './pCard';

const projectData = [
    {
        "id": 1,
        "name": "Twitter Bot",
        "Image": "/images/twitterBot.png",
        "Link": "https://github.com/shpoopdy/TwitterBot",
        "text": "A twitter bot that tweets info from approved twitter pages."
    },
    {
        "id": 2,
        "name": "Night Watch App",
        "Image": "/images/nightWatch.png",
        "Link": "https://github.com/shpoopdy/Night-Watch",
        "text": "A todo app created for the iPhone that utilizes SwiftUI"
    },
    {
        "id": 3,
        "name": "Towered",
        "Image": "/images/towered.png",
        "Link": "https://github.com/shpoopdy/Towered",
        "text": "Tower defense game made with the Unity game engine."
    },
    {
        "id": 4,
        "name": "Cipher Site",
        "Image": "/images/cipherHack.png",
        "Link": "https://github.com/shpoopdy/Hackathon2023",
        "text": "A website that allows you to try and crack a Vigenère Cipher."
    }
]

export default function pCardList() {
    return (
        <div className={styles.grid_container}>
            {projectData.map(project => <Card key={project.id} {...project}/>)}
        </div>
    )
}