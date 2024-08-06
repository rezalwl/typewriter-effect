const divElem = document.getElementById("text");

let text = "سلام، من محمدرضا عزیزی هستم";
let index = 0;
const typeWriter = () => {
  if (index < text.length) {
    divElem.innerHTML = divElem.innerHTML + text[index];
    index++;
  }

  setTimeout(() => {
    typeWriter();
  }, 100);
};

typeWriter();
