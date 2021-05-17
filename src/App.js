import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RouterComponent from "./Components/RouterComponent";
import "./App.css";
import { Header } from "./Components/header";
import { Footer } from "./Components/footer";


function App() {
    return (
        <>
        <div>
        <Router>
            {/* NAV BAR COMPONENT */}

            <RouterComponent />
        </Router>
        </div>
        </>
    );
}

export default App;
