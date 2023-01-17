const Header = () => {
    return (
        <div id="header">
            <h1>FLOOD FILL</h1>
            <input type="number" name="rows" id="rows" />
            <input type="number" name="coloumns" id="coloumns" />
            <button>WALL</button>
            <button>START</button>
        </div>
    );
};

export default Header;
