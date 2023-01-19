import { useState, useEffect } from "react";
import Board from "./components/Board";
import Header from "./components/Header";

const App = () => {
    const [grid, setGrid] = useState([]);
    const [boardDimension, setBoardDimension] = useState({
        rows: 5,
        coloumns: 5,
    });
    const [cellStatus, setCellStatus] = useState({
        isFillMode: false,
        isFillChecked: false,
        checked: false,
        clear: false,
    });

    const handleRows = (e) => {
        setBoardDimension((dim) => ({ ...dim, rows: e.target.value }));
    };

    const handleColoumns = (e) => {
        setBoardDimension((dim) => ({ ...dim, coloumns: e.target.value }));
    };

    const insertWall = (row, col) => {
        const newGrid = grid.map((rowArr, i) =>
            rowArr.map((cell, j) => {
                if (i === row && j === col) {
                    setCellStatus((node) => ({ ...node, checked: true }));
                    return { ...cell, isWall: true };
                }
                return cell;
            })
        );
        setGrid(newGrid);
    };

    useEffect(() => {
        const createGrid = () => {
            let initialGrid = [];

            for (let i = 0; i < boardDimension.rows; i++) {
                let rowArr = [];
                for (let j = 0; j < boardDimension.coloumns; j++) {
                    rowArr.push({
                        isWall: false,
                        isFill: false,
                        position: { row: i, col: j },
                    });
                }
                initialGrid.push(rowArr);
            }

            return initialGrid;
        };

        setGrid(createGrid());
        if (cellStatus.clear) {
            setBoardDimension((dim) => ({ ...dim, rows: 5, coloumns: 5 }));
            setCellStatus((node) => ({
                ...node,
                isFillMode: false,
                checked: false,
                isFillChecked: false,
                clear: false,
            }));
        }
    }, [boardDimension, cellStatus.clear]);

    const handelFill = (x, y) => {
        const newGrid = grid.map((rowArr, i) =>
            rowArr.map((cell, j) => {
                if (i === x && j === y) {
                    setCellStatus((node) => ({ ...node, checked: true }));
                    return { isFill: true, ...cell };
                }
                return cell;
            })
        );
        setGrid(newGrid);
        console.log(grid[x][y].isFill);
    };

    const floodFill = (row, col) => {
        let stack = [];
        stack.push({ x: row, y: col });

        while (stack.length > 0) {
            let current = stack.pop();

            if (
                current.x >= 0 &&
                current.x < boardDimension.rows &&
                current.y >= 0 &&
                current.y < boardDimension.coloumns
            ) {
                console.log("filling", grid[current.x][current.y].isFill);
                handelFill(current.x, current.y);
                console.log("filled", grid[current.x][current.y].isFill);
            }
        }
    };

    return (
        <main>
            <Header
                boardDimension={boardDimension}
                handleRows={handleRows}
                handleColoumns={handleColoumns}
                cellStatus={cellStatus}
                setCellStatus={setCellStatus}
            />
            <Board
                grid={grid}
                insertWall={insertWall}
                floodFill={floodFill}
                cellStatus={cellStatus}
            />
        </main>
    );
};

export default App;
