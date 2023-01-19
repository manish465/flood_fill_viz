const Header = ({
    boardDimension,
    handleRows,
    handleColoumns,
    cellStatus,
    setCellStatus,
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
            <form>
                <label htmlFor="rows">Rows : </label>
                <input
                    disabled={cellStatus.checked}
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
                    disabled={cellStatus.checked}
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
