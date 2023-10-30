import Card from './pCard';
import React from 'react';


const testData = [
    {
        "name": "Twitter Bot",
        "Image": "/images/twitterBot.png",
        "Link": "https://github.com/shpoopdy/TwitterBot",
        "text": "A twitter bot that tweets info from approved twitter pages."
    },
    {
        "name": "Night Watch App",
        "Image": "/images/nightWatch.png",
        "Link": "https://github.com/shpoopdy/Night-Watch",
        "text": "A todo app created for the iPhone that utilizes SwiftUI"
    },
    {
        "name": "Towered",
        "Image": "/images/towered.png",
        "Link": "https://github.com/shpoopdy/Towered",
        "text": "Tower defense game made with the Unity game engine."
    },
    {
        "name": "Cipher Site",
        "Image": "/images/cipherHack.png",
        "Link": "https://github.com/shpoopdy/Hackathon2023",
        "text": "A website that allows you to try and crack a Vigenère Cipher."
    }
]

export default function pCardList(props) {
    return (
        <div>
            <Card {...testData[0]}/>
            <Card {...testData[1]}/>
        </div>
    )
}