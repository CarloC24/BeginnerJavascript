import { handleResult } from "./handlers";
import { colorsByLength, isDark } from "./colors";

const colorsEl = document.querySelector(".colors");

function displayColors(colors) {
  return colors
    .map(color => {
      return `<span class="color ${color} ${
        isDark(color) ? "dark" : ""
      }" style="background: ${color}">${color}</span>`;
    })
    .join("");
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
function start() {
  //see if their browser supports this
  if (!("SpeechRecognition" in window)) {
    alert("Sorry your browser does not recognize speech recognition");
    return;
  }
  //it does work
  console.log("Starting...");
  //make a new speech recognition
  const recognition = new SpeechRecognition();
  //it continuously gets your speech and wont stop listening
  recognition.continuous = true;
  //give results as you are speaking
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
