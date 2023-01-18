import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";

const App = () => {
    const [rows, setRows] = useState(10);
    const [coloumns, setColoumns] = useState(10);
    const [fillMode, setFillMode] = useState(false);
    const [fillOnce, setFillOnce] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [clearBoard, setClearBoard] = useState(false);

    return (
        <main>
            <Header
                rows={rows}
                coloumns={coloumns}
                setRows={setRows}
                setColoumns={setColoumns}
                fillMode={fillMode}
                setFillMode={setFillMode}
                setFillOnce={setFillOnce}
                clicked={clicked}
                setClicked={setClicked}
                clearBoard={clearBoard}
                setClearBoard={setClearBoard}
            />
            <Board
                rows={rows}
                coloumns={coloumns}
                fillOnce={fillOnce}
                setFillOnce={setFillOnce}
                fillMode={fillMode}
                setClicked={setClicked}
                clearBoard={clearBoard}
                setClearBoard={setClearBoard}
            />
        </main>
    );
};

export default App;
