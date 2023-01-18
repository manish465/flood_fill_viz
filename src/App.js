import { useState, useEffect } from "react";
import Board from "./components/Board";
import Header from "./components/Header";

const App = () => {
    const [grid, setGrid] = useState([]);
    const [boardDimension, setBoardDimension] = useState({
        rows: 15,
        coloumns: 10,
    });
    const [cellStatus, setCellStatus] = useState({
        isFillMode: false,
        isFillChecked: false,
        fillPos: { x: -1, y: -1 },
        checked: false,
    });
    const [clearBoard, setClearBoard] = useState(false);

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

    const handleClick = (row, col) => {
        const newGrid = grid.map((rowArr, i) =>
            rowArr.map((cell, j) => {
                if (i === row && j === col) {
                    setCellStatus((cell) => ({ ...cell, checked: true }));
                    if (cellStatus.isFillMode) {
                        if (!cellStatus.isFillChecked) {
                            setCellStatus((node) => ({
                                ...node,
                                isFillChecked: true,
                                row: i,
                                col: j,
                            }));
                            return { ...cell, isFill: true, isWall: false };
                        }
                    } else {
                        return { ...cell, isFill: false, isWall: true };
                    }
                }
                return cell;
            })
        );
        setGrid(newGrid);
    };

    useEffect(() => {
        setGrid(createGrid());
    }, [boardDimension]);

    useEffect(() => {
        if (clearBoard) {
            setGrid(createGrid());
            setBoardDimension((dim) => ({ ...dim, rows: 15, coloumns: 10 }));
            setCellStatus((node) => ({
                ...node,
                isFillMode: false,
                checked: false,
                isFillChecked: false,
            }));
            setClearBoard(false);
        }
    }, [clearBoard]);

    return (
        <main>
            <Header
                boardDimension={boardDimension}
                handleRows={handleRows}
                handleColoumns={handleColoumns}
                cellStatus={cellStatus}
                setCellStatus={setCellStatus}
                setClearBoard={setClearBoard}
            />
            <Board grid={grid} handleClick={handleClick} />
        </main>
    );
};

export default App;
