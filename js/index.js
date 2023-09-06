document.getElementById('time').addEventListener("mouseover", englishGreet);
document.getElementById('time').addEventListener("mouseleave", displayGreeting);
let myName = document.getElementById('name');
let timey = document.getElementById('time')

function englishGreet() {
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

        timey.innerHTML = greeting;
}

function displayGreeting() {
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

    timey.innerHTML = greeting;
}

function fillPage() {
    let projectTextOne = document.getElementById('project-text-one');
    let projectTextTwo = document.getElementById('project-text-two');
    let projectTextThree = document.getElementById('project-text-three');
    let projectTextFour = document.getElementById('project-text-four');
    let bodyText = document.getElementById('body-text');
    bodyText.innerHTML = 'Hello! My name is Michael and I currently have a B.S. degree in Computer Science. I enjoy facing new challenges and diving into the deep end to start figuring things out. <br><br> I have done projects using languages like C++, C#, JavaScript, Python, and PHP. I have also done some personal projects outside of class that have allowed me to gain a deeper understanding of what I\'ve been learning, most of which can be viewed on my GitHub page. In my free time I like to play chess, piano, study the violin, play video games, make YouTube videos, go hiking, and just socialize with people.'
    projectTextOne.innerHTML = 'A twitter bot that tweets info from approved twitter pages.';
    projectTextTwo.innerHTML = 'A todo app created for the iPhone that utilizes SwiftUI';
    projectTextThree.innerHTML = 'Tower defense game made with the Unity game engine.';
    projectTextFour.innerHTML = 'A website that allows you to try and crack a Vigenère Cipher.';
}

/*
function themeSwitch() {
    const mainNav = document.getElementsByTagName("ul");
    const bg = document.getElementsByTagName("body");
    if (bg[0].className == "darkTheme") {
        bg[0].className = "lightTheme";
        mainNav[0].className = "main-nav-light";
    } else {
        bg[0].className = "darkTheme";
        mainNav[0].className = "main-nav";
    }
}
*/
myName.innerHTML = "Mikey";
fillPage();
displayGreeting();
