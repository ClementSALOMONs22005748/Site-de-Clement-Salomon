function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  function isLower(str) {
    return str.length === 1 && str === str.toLowerCase();
  }
  
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("p").onmouseover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if (index < iterations) {
                return event.target.dataset.value[index];
            } else {
                if (isLetter(letter)) {
                    if (isLower(letter)) {
                        return alphabet[Math.floor(Math.random()*26)];
                    } else {
                        return ALPHABET[Math.floor(Math.random()*26)];
                    }
                } else {
                    return letter;
                }
            }
        })        
        .join("");
        if(iterations >= event.target.dataset.value.length) {
            clearInterval(interval);
        }
        iterations += 1/3;
        }, 30);
  }
});

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
      const h3Element = document.querySelector("h3");
      h3Element.innerText = h3Element.innerText
        .split("")
        .map((letter) => {
          return ALPHABET[Math.floor(Math.random() * 26)];
        })
        .join("");
    }, 25);
  });

  document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
      const h3Element = document.querySelector("h4");
      h3Element.innerText = h3Element.innerText
        .split("")
        .map((letter) => {
          return ALPHABET[Math.floor(Math.random() * 26)];
        })
        .join("");
    }, 100);
  });
  