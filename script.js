// Grid Size Slider
const sizeInput = document.getElementById('sizeInput');
const slider = document.getElementById('slider')
const canvas = document.querySelector('.canvas');
const root = document.querySelector(':root');

// Setup
root.style.setProperty('--grid-size', 16);
drawGrid(16);

slider.oninput = () => {
    const value = slider.value;
    sizeInput.value = value;
    root.style.setProperty('--grid-size', value);
    drawGrid(sizeInput.value);
};

sizeInput.onchange = () => {
    const value = sizeInput.value;
    slider.value = value;
    root.style.setProperty('--grid-size', value);
    drawGrid(value);
}


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

// Clear Button
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    const children = canvas.children;
    for (const child of children) {
        child.classList.remove('hovered');
    }
});

/* FUNCTIONS */
function colorCell(e) {
    this.classList.add('hovered');
}