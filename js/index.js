window.addEventListener("load", displayGreeting);

function displayGreeting() {
    let today = new Date();
    let hour = today.getHours();
    let greeting;
    let timey = document.getElementById('time');

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