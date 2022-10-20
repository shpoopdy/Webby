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

displayGreeting();
