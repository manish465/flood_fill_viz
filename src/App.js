import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";

const App = () => {
    const [rows, setRows] = useState(10);
    const [coloumns, setColoumns] = useState(10);
    const [fillMode, setFillMode] = useState(false);
    const [fillOnce, setFillOnce] = useState(1);

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
            />
            <Board
                rows={rows}
                coloumns={coloumns}
                fillOnce={fillOnce}
                setFillOnce={setFillOnce}
                fillMode={fillMode}
            />
        </main>
    );
};

export default App;
