const DEFAULT_GRID_SIZE = 16;
const gridContainer = document.querySelector('.grid-container');
gridContainer.appendChild(createGrid(DEFAULT_GRID_SIZE));

const rangeInput = document.querySelector('#grid-size');
rangeInput.addEventListener('input', updateGridSize);


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
    gridContainer.appendChild(createGrid(event.target.value));
}

function deleteGrid() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.removeChild(gridContainer.firstChild);
}