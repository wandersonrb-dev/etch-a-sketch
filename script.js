const gridContainer = document.querySelector('.grid-container');
gridContainer.appendChild(createGrid(16));


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