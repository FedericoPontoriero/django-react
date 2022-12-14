import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

    const onDelete = async (id: number) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            await fetch(`http://localhost:8000/api/products/${id}`, {
                method: "DELETE",
            });
            setProducts(products.filter((p: Product) => p.id !== id));
        }
    };

    return (
        <Wrapper>
            <div className="table-responsive">
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link
                        to="/admin/products/create"
                        className="btn btn-sm btn-outline-secondary"
                    >
                        Add
                    </Link>
                </div>
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
                                    <td scope="col">
                                        <div className="btn-group mr-2">
                                            <a
                                                href="#"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => onDelete(p.id)}
                                            >
                                                Delete
                                            </a>
                                            <Link
                                                className="btn btn-sm btn-outline-secondary"
                                                to={`/admin/products/${p.id}/edit`}
                                            >
                                                Edit
                                            </Link>
                                        </div>
                                    </td>
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
