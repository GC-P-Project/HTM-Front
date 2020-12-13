import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./pages/Header";
import Content from "./pages/Content";
import Footer from "./pages/Footer";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header />
                <Content />
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
