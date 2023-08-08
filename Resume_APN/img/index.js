let output = document.getElementById("roleDisplay");


let words=['Software Developer','Cryptographer','Web Developer']


let idx = 0;
let str = "";

function typeWrite() {
  if (idx >= words.length) idx = 0;

  let word = words[idx];
  let charInd = 0;
  let interval = setInterval(() => {
    if (charInd >= word.length) {
      clearInterval(interval);
      setTimeout(() => {
        idx++;
        str = "";
        typeWrite();
      }, 1000);  // <- Wait for 1 sec before printing next word
    }
    str += word.charAt(charInd);
    output.innerHTML = str;
    charInd++;
  }, 150); // <- Delay between each character
}

typeWrite();