import { useState, useEffect } from "react";

const Products = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        all();
    }, [])

    const all = async () => {
        try {
            const res = await fetch('http://localhost:3001/api/products');
            const data = await res.json();
            setProducts(data);

        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <h1>Shop</h1>
            {products.map(item => {
                return (
                    <div key={item.id} style={{
                        display: 'inline-block',
                        border: '1px solid blue',
                        margin: '5px'
                    }}>
                        <h4>{item.name}</h4>
                    </div>
                )
            })}
        </>
    )
}
export default Products;
