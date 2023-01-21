const Header = ({
    boardDimension,
    handleRows,
    handleColoumns,
    cellStatus,
    setCellStatus,
    setIsDfs,
}) => {
    return (
        <div id="header">
            <h1
                onClick={() =>
                    setCellStatus((node) => ({ ...node, clear: true }))
                }
            >
                FLOOD FILL
            </h1>
            <select
                name="algorithm"
                id="algorithm"
                disabled={cellStatus.checked || cellStatus.isFillMode}
            >
                <option value="dfs" onClick={() => setIsDfs(true)}>
                    DFS
                </option>
                <option value="bfs" onClick={() => setIsDfs(false)}>
                    BFS
                </option>
            </select>
            <form>
                <label htmlFor="rows">Rows : </label>
                <input
                    disabled={cellStatus.checked || cellStatus.isFillMode}
                    type="number"
                    name="rows"
                    id="rows"
                    value={boardDimension.rows}
                    onChange={(e) => handleRows(e)}
                />
            </form>
            <form>
                <label htmlFor="coloumns">Coloumns : </label>
                <input
                    disabled={cellStatus.checked || cellStatus.isFillMode}
                    type="number"
                    name="coloumns"
                    id="coloumns"
                    value={boardDimension.coloumns}
                    onChange={(e) => handleColoumns(e)}
                />
            </form>
            <button
                disabled={cellStatus.isFillMode}
                onClick={() =>
                    setCellStatus((fill) => ({ ...fill, isFillMode: true }))
                }
            >
                {cellStatus.isFillMode ? "FILL MODE" : "WALL MODE"}
            </button>
            <button
                onClick={() =>
                    setCellStatus((node) => ({ ...node, clear: true }))
                }
            >
                CLEAR BOARD
            </button>
        </div>
    );
};

export default Header;
