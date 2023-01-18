const Header = ({ rows, coloumns, setRows, setColoumns }) => {
    return (
        <div id="header">
            <h1>FLOOD FILL</h1>
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
            <button>WALL</button>
            <button>START</button>
        </div>
    );
};

export default Header;
