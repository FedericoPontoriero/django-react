import Products from "./admin/Products";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import ProductsCreate from "./admin/ProductsCreate";
import ProductsEdit from "./admin/ProductsEdit";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/products/create" element={<ProductsCreate />} />
                <Route path="/admin/products/:id/edit" element={<ProductsEdit />} />
            </Routes>
        </div>
    );
}

export default App;
