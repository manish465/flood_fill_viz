import Board from "./components/Board";
import Header from "./components/Header";

const App = () => {
    return (
        <main>
            <Header />
            <Board rows={5} coloumns={10} />
        </main>
    );
};

export default App;
