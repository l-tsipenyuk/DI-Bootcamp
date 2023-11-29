import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./shopSlice";
import { useEffect } from "react";

const Products = (props) => {
    const products = useSelector((state)=>state.name.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch]);

    return(
        <>
        <h2>Shop</h2>
            {products.map((product) => <p key={product.id}>{product.name}{product.price}</p>)}
        </>
    )
}

export default Products;