
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

function colorCell(e) {
    this.classList.add('hovered');
}