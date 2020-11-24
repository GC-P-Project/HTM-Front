import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./pages/Header";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header />
            </HashRouter>
        </div>
    );
}

export default App;
