const fillCell = (row, col, grid) => {
    const newGrid = grid.map((rowArr, i) =>
        rowArr.map((cell, j) => {
            if (i === row && j === col) {
                return { ...cell, isFill: true };
            }
            return cell;
        })
    );

    return newGrid;
};

const depthFirstSearch = (grid, setGrid, row, col) => {
    if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length) {
        if (!grid[row][col].isFill) {
            setGrid(fillCell(row, col, grid));
            depthFirstSearch(grid, setGrid, row + 1, col);
            depthFirstSearch(grid, setGrid, row - 1, col);
            depthFirstSearch(grid, setGrid, row, col + 1);
            depthFirstSearch(grid, setGrid, row, col - 1);
        }
    }
};

export default depthFirstSearch;
