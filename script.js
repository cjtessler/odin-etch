
const canvas = document.querySelector('.canvas');
let numCells = 16*16;

for (let i = 0; i < numCells; i++) {
    // create cell
    let cell = document.createElement("div");
    cell.classList.add("cell");

    // attach event listener
    cell.addEventListener('mouseenter', colorCell);

    // Add cell to dom
    canvas.append(cell);
}
// Clear Button
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    console.log(canvas.children);
    const children = canvas.children;
    for (const child of children) {
        child.classList.remove('hovered');
    }
});

/* FUNCTIONS */
function colorCell(e) {
    this.classList.add('hovered');
}