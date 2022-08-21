const typingText = document.querySelector(".typing-text p"),
inputField = document.querySelector(".wrapper .input-field");
mistakeTag = document.querySelector(".mistake span");
timeTag = document.querySelector(".time span b");
wpmTag = document.querySelector(".wpm span");
tryAgain = document.querySelector("button");

let charIndex = 0;
let mistakesMade = 0;
let timer = 60;
let maxTime = 10;
let timeLeft = maxTime;
let isTyping = false;

function randomParagraph() {
  let randomIndex = Math.floor(Math.random() * paragraphs.length);
  typingText.innerHTML = "";
  paragraphs[randomIndex].split("").forEach(span => {
    let spanTag = `<span>${span}</span>`;
    typingText.innerHTML += spanTag;
  });
  document.addEventListener("keydown", () => inputField.focus());
  typingText.addEventListener("click", () => inputField.focus());
}

function initTyping(event) {
  const characters = typingText.querySelectorAll("span");
  let typedChar = inputField.value.split("")[charIndex];

  if(charIndex < characters.length - 1 && timeLeft > 0) {
    if(!isTyping) {
      //Once timer starts it won't keep calling initTimer.
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }


    if(typedChar == null) {
      charIndex--;
      if(characters[charIndex].classList.contains("incorrect")) {
        mistakesMade--;
      }
      characters[charIndex].classList.remove("correct", "incorrect");
    }
    else {
      if(characters[charIndex].innerText === typedChar) {
        //adds correct to span class if correct, incorrect otherwise.
        characters[charIndex].classList.add("correct");
      }
      else {
        mistakesMade++;
        characters[charIndex].classList.add("incorrect");
      }
      charIndex++;
    }
    let wpm = Math.round((((charIndex - mistakesMade) / 5 ) / (maxTime - timeLeft)) * 60);
    //If wpm is any of these three, then it'll be set to zero.
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    mistakeTag.innerText = mistakesMade;
    wpmTag.innerText = wpm;
    //characters[charIndex].classList.add("active");
  }
  else {
    inputField.value = "";
    clearInterval(timer);
  }
  characters.forEach(span => span.classList.remove("active"));
  characters[charIndex].classList.add("active");
}

function initTimer() {
  if(timeLeft > 0) {
    timeLeft--;
    timeTag.innerText = timeLeft;
  }
  else {
    clearInterval(timer);
  }
}

function resetTyping() {
  randomParagraph();
  inputField.value = "";
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = 0;
  mistakesMade = 0;
  isTyping = false;
  timeTag.innerText = timeLeft;
  mistakeTag.innerText = mistakesMade;
  wpmTag.innerText = 0;
}

randomParagraph();
inputField.addEventListener("input", initTyping);
tryAgain.addEventListener("click", resetTyping);
