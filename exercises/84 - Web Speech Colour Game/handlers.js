import { isValidColor } from "./colors";

function logWords(results) {
  console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;

  let color = words.toLowerCase();
  //strip any spaces out
  color = color.replace(/\s/g, "");
  //check if it is a valid color
  if (!isValidColor(color)) return;
  //if it is show the UI
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add("got");
}
