import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RouterComponent from "./Components/RouterComponent";
import "./App.css";

function App() {
    return (
        <Router>
            {/* NAV BAR COMPONENT */}
            <RouterComponent />
        </Router>
    );
}

export default App;
