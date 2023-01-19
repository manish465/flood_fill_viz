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
        if (e.target.value < 35) {
            setBoardDimension((dim) => ({ ...dim, rows: e.target.value }));
        } else {
            setBoardDimension((dim) => ({ ...dim, rows: 35 }));
        }

        if (e.target.value > 2) {
            setBoardDimension((dim) => ({ ...dim, rows: e.target.value }));
        } else {
            setBoardDimension((dim) => ({ ...dim, rows: 2 }));
        }
    };

    const handleColoumns = (e) => {
        if (e.target.value < 20) {
            setBoardDimension((dim) => ({ ...dim, coloumns: e.target.value }));
        } else {
            setBoardDimension((dim) => ({ ...dim, coloumns: 20 }));
        }

        if (e.target.value > 2) {
            setBoardDimension((dim) => ({ ...dim, coloumns: e.target.value }));
        } else {
            setBoardDimension((dim) => ({ ...dim, coloumns: 2 }));
        }
    };

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

    const insertWall = (row, col) => {
        const newGrid = grid.map((rowArr, i) =>
            rowArr.map((cell, j) => {
                if (i === row && j === col) {
                    setCellStatus((node) => ({ ...node, checked: true }));
                    return { ...cell, isFill: false, isWall: true };
                }
                return cell;
            })
        );
        setGrid(newGrid);
    };

    useEffect(() => {
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

    const floodFill = (row, col) => {};

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
