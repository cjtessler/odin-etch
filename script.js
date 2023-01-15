
const canvas = document.querySelector('.canvas');
let numCells = 16*16;

for (let i = 0; i < numCells; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.append(cell);
}

