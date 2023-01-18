const Header = ({
    boardDimension,
    setClearBoard,
    handleRows,
    handleColoumns,
    cellStatus,
    setCellStatus,
}) => {
    return (
        <div id="header">
            <h1 onClick={() => setClearBoard(true)}>FLOOD FILL</h1>
            <select
                disabled={cellStatus.checked}
                name="algorithm"
                id="algorithm"
            >
                <option value="dfs">DFS</option>
                <option value="bfs">BFS</option>
            </select>
            <input
                disabled={cellStatus.checked}
                type="number"
                name="rows"
                id="rows"
                value={boardDimension.rows}
                onChange={(e) => handleRows(e)}
            />
            <input
                disabled={cellStatus.checked}
                type="number"
                name="coloumns"
                id="coloumns"
                value={boardDimension.coloumns}
                onChange={(e) => handleColoumns(e)}
            />
            <button
                disabled={cellStatus.isFillMode}
                onClick={() =>
                    setCellStatus((fill) => ({ ...fill, isFillMode: true }))
                }
            >
                {cellStatus.isFillMode ? "FILL MODE" : "WALL MODE"}
            </button>
            <button onClick={() => setClearBoard(true)}>CLEAR BOARD</button>
            <button>START</button>
        </div>
    );
};

export default Header;
