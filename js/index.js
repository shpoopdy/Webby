document.getElementById('time').addEventListener("mouseover", englishGreet);
document.getElementById('time').addEventListener("mouseleave", displayGreeting);
document.getElementById('theme').addEventListener("click", themeSwitch);
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

function themeSwitch() {
    let theme = document.getElementById('theme');
    let pList = document.querySelectorAll('p');
    let h1List = document.querySelectorAll('h1');
    let h3List = document.querySelectorAll('h3');
    let liList = document.querySelectorAll('a');
    if (theme.checked == true) {
        document.body.style.background = '#E7DEA8';
        for (let i = 0; i <pList.length; i++) {
            pList[i].style.color = 'black';
        }
        for (let j = 0; j < h1List.length; j++) {
            h1List[j].style.color = 'black';
        }
        for (let k = 0; k < h3List.length; k++) {
            h3List[k].style.color = 'black';
        }
        for (let l = 0; l < liList.length; l++) {
            liList[l].style.color = 'black';
        }
        //document.getElementById('body-text').style.color = 'black';
    } else {
        document.body.style.background = '#0B1117';
        for (let i = 0; i < pList.length; i++) {
            pList[i].style.color = 'white';
        }
        for (let j = 0; j < h1List.length; j++) {
            h1List[j].style.color = 'white';
        }
        for (let k = 0; k < h3List.length; k++) {
            h3List[k].style.color = 'white';
        }
        for (let l = 0; l < liList.length; l++) {
            liList[l].style.color = 'white';
        }
    }
}

displayGreeting();
