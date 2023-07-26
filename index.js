const divselector = document.getElementById('periodic-table');
divselector.addEventListener('click', handleDivClick);


function handleDivClick(event) {
    console.log("function working");
    const clickedDiv = event.target;
    if (clickedDiv.classList.contains('element')) {
        console.log("if working");
        const elementname = clickedDiv.querySelector('.element-atomic-name').textContent;
        console.log(elementname);
    }
}