const typingText = document.querySelector(".typing-text p"),
inputField = document.querySelector(".wrapper .input-field");
mistakeTag = document.querySelector(".mistake span");

let charIndex = 0;
let mistakesMade = 0;

function randomParagraph() {
  let randomIndex = Math.floor(Math.random() * paragraphs.length);
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
  mistakeTag.innerText = mistakesMade;

  //characters[charIndex].classList.add("active");
}

randomParagraph();
inputField.addEventListener("input", initTyping);
