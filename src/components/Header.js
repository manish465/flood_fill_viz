const Header = ({
    rows,
    coloumns,
    fillMode,
    setFillMode,
    clicked,
    setClearBoard,
    handleRows,
    handleColoumns,
}) => {
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
