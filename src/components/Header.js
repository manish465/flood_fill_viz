const Header = ({ rows, cols, setRows, setCols, wallMode, setWallMode }) => {
    return (
        <div className="top-bar">
            <select name="algo" id="select-algo" disabled={!wallMode}>
                <option value="dfs">DFS</option>
                <option value="bfs">BFS</option>
            </select>
            <input
                type="number"
                name="rows"
                id="rows"
                value={rows}
                onChange={(e) => setRows(e.target.value)}
                disabled={!wallMode}
            />
            <input
                type="number"
                name="cols"
                id="cols"
                value={cols}
                onChange={(e) => setCols(e.target.value)}
                disabled={!wallMode}
            />
            <button
                disabled={!wallMode}
                onClick={() => setWallMode((wallMode) => !wallMode)}
            >
                {wallMode ? "WALL" : "FILL"}
            </button>
            <button disabled={wallMode}>Fill</button>
        </div>
    );
};

export default Header;
