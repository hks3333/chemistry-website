
const divselector = document.getElementById('periodic-table');
divselector.addEventListener('click', handleDivClick);
const iframe = document.getElementById('wiki');
const display = document.querySelector('.elements-wiki');
const animater = document.querySelector('.iframe-container');

function handleDivClick(event) {
  console.log("function working");
  const clickedDiv = event.target;
  if (clickedDiv.classList.contains('element')) {
    const elementname = clickedDiv.querySelector('.element-atomic-name').textContent;
    console.log(elementname);
    iframe.src = "https://en.wikipedia.org/wiki/"+elementname;
    display.classList.add('active');
    animater.classList.add('anim');
  }
}

display.addEventListener('click',closer);
function closer(event) {
    display.classList.remove('active');
    animater.classList.remove('anim');
} 

  