import { useEffect } from "react";

const Header = ({
    rows,
    coloumns,
    setRows,
    setColoumns,
    fillMode,
    setFillMode,
    setFillOnce,
}) => {
    useEffect(() => {
        setFillMode(false);
        setFillOnce(1);
    }, [rows, coloumns, setFillMode, setFillOnce]);

    return (
        <div id="header">
            <h1>FLOOD FILL</h1>
            <select name="algorithm" id="algorithm">
                <option value="dfs">DFS</option>
                <option value="bfs">BFS</option>
            </select>
            <input
                type="number"
                name="rows"
                id="rows"
                value={rows}
                onChange={(e) =>
                    setRows(e.target.value < 35 ? e.target.value : 35)
                }
            />
            <input
                type="number"
                name="coloumns"
                id="coloumns"
                value={coloumns}
                onChange={(e) =>
                    setColoumns(e.target.value < 20 ? e.target.value : 20)
                }
            />
            <button onClick={() => setFillMode(true)}>
                {fillMode ? "FILL MODE" : "WALL MODE"}
            </button>
            <button>CLEAR BOARD</button>
            <button>START</button>
        </div>
    );
};

export default Header;
