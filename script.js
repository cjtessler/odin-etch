// Bindings
const sizeInput = document.getElementById('sizeInput');
const slider = document.getElementById('slider')
const picker = document.getElementById('picker')
const clearButton = document.getElementById('clearButton');
const canvas = document.querySelector('.canvas');
const root = document.querySelector(':root');

// Setup
root.style.setProperty('--grid-size', 16);
drawGrid(16);

/* EVENT LISTENERS */
// Size Input
slider.addEventListener("change", () => {
    const value = slider.value;
    sizeInput.value = value;
    root.style.setProperty('--grid-size', value);
    drawGrid(sizeInput.value);
});

// Slider
sizeInput.addEventListener("change", () => {
    const value = sizeInput.value;
    slider.value = value;
    root.style.setProperty('--grid-size', value);
    drawGrid(value);
});

// Color Picker
picker.addEventListener("change", (event) => {
    root.style.setProperty("--cell-color", event.target.value);
});

// Clear Button
clearButton.addEventListener('click', () => {
    const children = canvas.children;
    for (const child of children) {
        child.classList.remove('hovered');
    }
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
        // canvas.append(cell);
    }

    canvas.replaceChildren(...cells);
}

function colorCell(e) {
    this.classList.add('hovered');
    // this.style.backgroundColor()
}