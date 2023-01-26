// Bindings
const sizeInput = document.getElementById('sizeInput');
const slider = document.getElementById('slider')
const picker = document.getElementById('picker')
const clearButton = document.getElementById('clearButton');
const canvas = document.querySelector('.canvas');
const root = document.querySelector(':root');


// Setup
let gridSize = 16;
let cellColor = "#005cc8"
root.style.setProperty('--grid-size', gridSize);
drawGrid(gridSize);

/* EVENT LISTENERS */
// Size Input
slider.addEventListener("change", () => {
    const value = slider.value;
    sizeInput.value = value;
    root.style.setProperty('--grid-size', value);
    gridSize = value;
    drawGrid(gridSize);
});

// Slider
sizeInput.addEventListener("change", () => {
    const value = sizeInput.value;
    slider.value = value;
    root.style.setProperty('--grid-size', value);
    gridSize = value;
    drawGrid(gridSize);
});

// Color Picker
picker.addEventListener("change", (event) => {
    cellColor = event.target.value;
});

// Clear Button
clearButton.addEventListener('click', () => {
    drawGrid(gridSize);
});

/* FUNCTIONS */
function drawGrid(width) {

    const cells = [];

    let numCells = width ** 2;
    for (let i = 0; i < numCells; i++) {
        // create cell
        let cell = document.createElement("div");
        cell.classList.add("cell");

        // attach event listener
        cell.addEventListener('mouseenter', colorCell);

        // Add cell to dom
        cells.push(cell);
    }

    canvas.replaceChildren(...cells);
}

function colorCell(event) {
    event.target.style.backgroundColor = cellColor;
}