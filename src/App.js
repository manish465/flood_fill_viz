import Board from "./components/Board";
import "./styles.scss";

const App = () => {
    return (
        <div className="app">
            <Board rows={30} cols={20} />
        </div>
    );
};

export default App;
