import { useEffect, useState } from "react";
import { Product } from "../interfaces/product";
import Wrapper from "./Wrapper";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8000/api/products");
            const data = await response.json();
            setProducts(data);
        })();
    }, []);

    return (
        <Wrapper>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Likes</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p: Product) => {
                            return (
                                <tr key={p.id}>
                                    <td scope="col">
                                        <img src={p.image} height="180" />
                                    </td>
                                    <td scope="col">{p.title}</td>
                                    <td scope="col">{p.likes}</td>
                                    <td scope="col"></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
};

export default Products;
