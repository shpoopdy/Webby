document.getElementById('time').addEventListener("mouseover", englishGreet);
document.getElementById('time').addEventListener("mouseleave", displayGreeting);
let timey = document.getElementById('time');


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

displayGreeting();
