import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";


const BASE_URL = process.env.REACT_APP_BASE_URL

// const [prod, setProduct] = useState('');
// const params = useParams();

const Product = (props) => {
    const [product, setProduct] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const param = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductInfo();
    }, []);

    const getProductInfo = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/products/${param.id}`);
            const data = await res.json();
            setProduct(data);
            setName(data[0].name);
            setPrice(data[0].price);
        } catch (e) {
            console.log(e);
        }
    };

    const del = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/products/${param.id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
            // const data = await res.json();
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }


    const update = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/api/products/${param.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: name, price: price })
                });
            const data = await res.json();
            setProduct(data);
            setName(data[0].name);
            setPrice(data[0].price);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <h1>Product {param.id}</h1>
            <div>
                <form onSubmit={update}>
                    Name: <input value={name} onChange={(e) => setName(e.target.value)} />
                    Price: <input value={price} onChange={(e) => setPrice(e.target.value)} />
                    <input type="submit" value="Update" />
                </form>
            </div>
            <div>
                <h2>Delete Product</h2>
                <button onClick={del}>Delete</button>
            </div>
            {product.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>Product Name: {item.name}</h2>
                        <h4>Product Price: {item.price}</h4>
                    </div>
                );
            })}
            <Link to="/">Back to Shop</Link>
        </div>
    );
};
export default Product;