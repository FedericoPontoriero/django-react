import Products from "./admin/Products";
import "./App.css";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Menu />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Routes>
                            <Route path="/admin/products" element={<Products />} />
                        </Routes>
                    </main>
                </div>
            </div>{" "}
        </div>
    );
}

export default App;
