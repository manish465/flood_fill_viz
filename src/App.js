import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import "./styles.scss";

const App = () => {
    const [rows, setRows] = useState(10);
    const [cols, setCols] = useState(10);
    const [wallMode, setWallMode] = useState(true);

    return (
        <div className="app">
            <Header
                rows={rows}
                cols={cols}
                setRows={setRows}
                setCols={setCols}
                wallMode={wallMode}
                setWallMode={setWallMode}
            />
            <Board
                rows={rows}
                cols={cols}
                wallMode={wallMode}
                setWallMode={setWallMode}
            />
        </div>
    );
};

export default App;
