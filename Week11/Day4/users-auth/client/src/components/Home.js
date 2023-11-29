import {useState, useEffect} from "react";
import axios from "axios";

const Home = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[]);
    
    const getProducts = async()=> {
        try{
            const response = await axios.get('/products/all');
            setProducts(response.data);
        }catch(e){
            console.log(e);
        }
    }

    return(
        <div>
            <h2>Homepage</h2>
            {
                products.map((item)=>{

                })
            }
        </div>
    )
}

export default Home;