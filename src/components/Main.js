import { useState, useEffect } from "react";
import Board from "./Board";
import Header from "./Header";

const initialRows = 10;
const initialColoumns = 10;

const Main = () => {
    const [grid, setGrid] = useState([]);
    const [isDfs, setIsDfs] = useState(true);
    const [boardDimension, setBoardDimension] = useState({
        rows: initialRows,
        coloumns: initialColoumns,
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
            setBoardDimension({ rows: initialRows, coloumns: initialColoumns });
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
                    setCellStatus((node) => ({ ...node, checked: true }));
                    return { ...cell, isFill: true };
                }
                return cell;
            })
        );
        grid[x][y].isFill = true;
        setGrid(updatedGrid);
    };

    const depthFirstSearch = (grid, row, col) => {
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
                if (
                    !grid[current.x][current.y].isFill &&
                    !grid[current.x][current.y].isWall
                ) {
                    handelFill(current.x, current.y);

                    stack.push({ x: current.x + 1, y: current.y });
                    stack.push({ x: current.x - 1, y: current.y });
                    stack.push({ x: current.x, y: current.y + 1 });
                    stack.push({ x: current.x, y: current.y - 1 });
                }
            }
        }
    };

    const breadthFirstSearch = (grid, row, col) => {
        let queue = [];
        queue.push({ x: row, y: col });

        while (queue.length > 0) {
            let current = queue.offer();

            if (
                current.x >= 0 &&
                current.x < boardDimension.rows &&
                current.y >= 0 &&
                current.y < boardDimension.coloumns
            ) {
                if (
                    !grid[current.x][current.y].isFill &&
                    !grid[current.x][current.y].isWall
                ) {
                    handelFill(current.x, current.y);

                    queue.push({ x: current.x + 1, y: current.y });
                    queue.push({ x: current.x - 1, y: current.y });
                    queue.push({ x: current.x, y: current.y + 1 });
                    queue.push({ x: current.x, y: current.y - 1 });
                }
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
                setIsDfs={setIsDfs}
            />
            <Board
                grid={grid}
                insertWall={insertWall}
                depthFirstSearch={depthFirstSearch}
                floodFill={isDfs ? depthFirstSearch : breadthFirstSearch}
                cellStatus={cellStatus}
            />
        </main>
    );
};

export default Main;
