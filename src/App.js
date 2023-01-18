import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";

const App = () => {
    const [rows, setRows] = useState(10);
    const [coloumns, setColoumns] = useState(10);
    const [fillMode, setFillMode] = useState(true);

    return (
        <main>
            <Header
                rows={rows}
                coloumns={coloumns}
                setRows={setRows}
                setColoumns={setColoumns}
                fillMode={fillMode}
                setFillMode={setFillMode}
            />
            <Board rows={rows} coloumns={coloumns} fillMode={fillMode} />
        </main>
    );
};

export default App;
