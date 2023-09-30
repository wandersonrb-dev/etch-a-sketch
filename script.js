const DEFAULT_GRID_SIZE = 16;
const DEFAULT_BC_COLOR = '#f2f2f2';
const gridContainer = document.querySelector('.grid-container');
gridContainer.appendChild(createGrid(DEFAULT_GRID_SIZE));

const rangeInput = document.querySelector('#grid-size');
rangeInput.addEventListener('input', updateGridSize);

const clearGridButton = document.querySelector('.clear-btn');
clearGridButton.addEventListener('click', clearGrid)
draw();



function createGrid(rows) {
    const grid = document.createElement('div');
    for (let i = 0; i < rows; i++) {
        const row = createRow(rows);
        grid.appendChild(row);
    }
    grid.classList.add('grid');
    return grid;
}

function createRow(cells) {
    const row = document.createElement('div');
    for (let i = 0; i < cells; i++) {
        const cell = createCell();
        row.appendChild(cell);
    }
    row.classList.add('row');
    return row;
}

function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

function updateGridSize(event) {
    deleteGrid();
    const gridContainer = document.querySelector('.grid-container');
    const newGridSize = event.target.value;
    gridContainer.appendChild(createGrid(newGridSize));
    updateGridDisplaySize(newGridSize);
    draw();
}

function deleteGrid() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.removeChild(gridContainer.firstChild);
}

function updateGridDisplaySize(newGridSize) {
    const sizeDisplay = document.querySelector('.grid-display-size');
    sizeDisplay.textContent = `${newGridSize}x${newGridSize}`
}

function clearGrid(event) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = DEFAULT_BC_COLOR);
}

function startPaintCell() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', paintCell));
}

function stopPaintCell() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.removeEventListener('mouseover', paintCell));
}

function paintCell(event) {
    event.target.style.backgroundColor = 'red';
}

function draw() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mousedown', paintCell));
    cells.forEach(cell => cell.addEventListener('mousedown', startPaintCell));
    cells.forEach(cell => cell.addEventListener('mouseup', stopPaintCell));
}