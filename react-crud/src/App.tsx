import Products from "./admin/Products";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./main/Main";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/admin/products" element={<Products />} />
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    );
}

export default App;
