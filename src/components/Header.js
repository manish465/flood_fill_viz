import { useEffect } from "react";

const Header = ({
    rows,
    coloumns,
    setRows,
    setColoumns,
    fillMode,
    setFillMode,
    setFillOnce,
    clicked,
    setClicked,
    clearBoard,
    setClearBoard,
}) => {
    useEffect(() => {
        setFillMode(false);
        setFillOnce(1);
    }, [rows, coloumns, setFillMode, setFillOnce]);

    useEffect(() => {
        if (clearBoard) {
            setClicked(false);
            setFillMode(false);
            setRows(10);
            setColoumns(10);
            setClearBoard(false);
        }
    }, [clearBoard, setClicked, setFillMode]);

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

    return (
        <div id="header">
            <h1 onClick={() => setClearBoard(true)}>FLOOD FILL</h1>
            <select disabled={clicked} name="algorithm" id="algorithm">
                <option value="dfs">DFS</option>
                <option value="bfs">BFS</option>
            </select>
            <input
                disabled={clicked}
                type="number"
                name="rows"
                id="rows"
                value={rows}
                onChange={(e) => handleRows(e)}
            />
            <input
                disabled={clicked}
                type="number"
                name="coloumns"
                id="coloumns"
                value={coloumns}
                onChange={(e) => handleColoumns(e)}
            />
            <button disabled={fillMode} onClick={() => setFillMode(true)}>
                {fillMode ? "FILL MODE" : "WALL MODE"}
            </button>
            <button onClick={() => setClearBoard(true)}>CLEAR BOARD</button>
            <button>START</button>
        </div>
    );
};

export default Header;
