import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";

const App = () => {
    const [rows, setRows] = useState(5);
    const [coloumns, setColoumns] = useState(5);

    return (
        <main>
            <Header
                rows={rows}
                coloumns={coloumns}
                setRows={setRows}
                setColoumns={setColoumns}
            />
            <Board rows={rows} coloumns={coloumns} />
        </main>
    );
};

export default App;
