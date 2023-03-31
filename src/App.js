import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Checkout } from "./Pages/Checkout/Checkout";
import { Home } from "./Pages/Home/Home";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </div>
    );
}

export default App;
