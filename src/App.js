import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Checkout } from "./Pages/Checkout/Checkout";
import { Home } from "./Pages/Home/Home";
import { SuccessPage } from "./Pages/Shared/SuccessPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </div>
    );
}

export default App;
