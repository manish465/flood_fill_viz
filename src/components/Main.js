import { useState, useEffect } from "react";
import Board from "./Board";
import Header from "./Header";

const Main = () => {
    const [grid, setGrid] = useState([]);
    const [boardDimension, setBoardDimension] = useState({
        rows: 5,
        coloumns: 5,
    });
    const [cellStatus, setCellStatus] = useState({
        isFillMode: false,
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
        setGrid(() => {
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
        });

        if (cellStatus.clear) {
            setBoardDimension({ rows: 5, coloumns: 5 });
            setCellStatus((node) => ({
                ...node,
                isFillMode: false,
                checked: false,
                clear: false,
            }));
        }
    }, [boardDimension, cellStatus.clear]);

    const handelFill = (x, y) => {
        let updatedGrid = grid.map((rowArr, i) =>
            rowArr.map((cell, j) => {
                if (i === x && j === y && !grid[x][y].isWall) {
                    return { ...cell, isFill: true };
                }
                return cell;
            })
        );
        setGrid(updatedGrid);
        console.log(grid);
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
                console.log("filling", current.x, current.y);
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

export default Main;
