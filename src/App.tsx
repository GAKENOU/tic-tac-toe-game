import { PhoneDesign } from "./components/PhoneDesign";
import "./assets/css/style.css"
import { TicTacToe } from "./components/TicTacToe";

function App() {
    return (
        <div className="p-container">
            <PhoneDesign ticTactoeComponent={ TicTacToe } />
        </div>
    );
}

export default App;
