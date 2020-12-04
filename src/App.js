import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./pages/Header";
import Content from "./pages/Content";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header />
                <Content />
            </HashRouter>
        </div>
    );
}

export default App;
