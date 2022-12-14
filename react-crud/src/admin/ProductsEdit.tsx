import { PropsWithRef, SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../interfaces/product";
import Wrapper from "./Wrapper";

const ProductsEdit = (props: PropsWithRef<any>) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `http://localhost:8000/api/products/${props.match.params.id}`
            );
            const product: Product = await response.json();
            setTitle(product.title);
            setImage(product.image);
        })();
    }, []);

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch(`http://localhost:8000/api/products/${props.match.params.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title,
                image,
            }),
        });
        setRedirect(true);
    };

    const navigate = useNavigate();
    if (redirect) navigate("/admin/products");

    return (
        <Wrapper>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={title}
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="text"
                        name="image"
                        defaultValue={image}
                        className="form-control"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default ProductsEdit;
