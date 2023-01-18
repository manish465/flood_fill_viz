import { useState, useEffect } from "react";
import Board from "./components/Board";
import Header from "./components/Header";

const App = () => {
    const [grid, setGrid] = useState([]);
    const [rows, setRows] = useState(10);
    const [coloumns, setColoumns] = useState(10);
    const [fillMode, setFillMode] = useState(false);
    const [fillOnce, setFillOnce] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [clearBoard, setClearBoard] = useState(false);

    const handleRows = (e) => {
        if (e.target.value < 35) {
            setRows(e.target.value);
        } else {
            setRows(35);
        }

        if (e.target.value > 2) {
            setRows(e.target.value);
        } else {
            setRows(2);
        }
    };

    const handleColoumns = (e) => {
        if (e.target.value < 20) {
            setColoumns(e.target.value);
        } else {
            setColoumns(20);
        }

        if (e.target.value > 2) {
            setColoumns(e.target.value);
        } else {
            setColoumns(2);
        }
    };

    const createGrid = (rows, coloumns) => {
        let initialGrid = [];

        for (let i = 0; i < rows; i++) {
            let rowArr = [];
            for (let j = 0; j < coloumns; j++) {
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
                    setClicked(true);
                    if (fillMode) {
                        // setFillPosX(i);
                        // setFillPosY(j);
                        if (fillOnce === 1) {
                            setFillOnce((fillTimes) => fillTimes - 1);

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
        setGrid(createGrid(rows, coloumns));
    }, [rows, coloumns, setGrid]);

    useEffect(() => {
        setFillMode(false);
        setFillOnce(1);
    }, [rows, coloumns, setFillMode, setFillOnce]);

    useEffect(() => {
        if (clearBoard) {
            setGrid(createGrid(rows, coloumns));
            setClicked(false);
            setFillMode(false);
            setRows(10);
            setColoumns(10);
            setClearBoard(false);
            setFillOnce(1);
        }
    }, [
        clearBoard,
        setClicked,
        setFillMode,
        setClearBoard,
        setColoumns,
        setRows,
        setFillOnce,
        coloumns,
        rows,
    ]);

    return (
        <main>
            <Header
                rows={rows}
                coloumns={coloumns}
                fillMode={fillMode}
                setFillMode={setFillMode}
                clicked={clicked}
                setClearBoard={setClearBoard}
                handleRows={handleRows}
                handleColoumns={handleColoumns}
            />
            <Board grid={grid} handleClick={handleClick} />
        </main>
    );
};

export default App;
