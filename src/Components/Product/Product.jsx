import './Product.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const Product = (props) => {
    let [product, setProduct] = useState({});
    let {productId} = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => setProduct(response.data))
        console.log(productId);
    },[]);

    let [likes, setLikes] = useState(10);
    let [dislikes, setDislikes] = useState(4);

    let navigate = useNavigate();

    const BackHandler = () => {
        navigate('/best-sellers');
    }

    const likeHandler = () => {
        setLikes(likes + 1);
    }

    const dislikeHandler = () => {
        setDislikes(dislikes + 1);
    }

    
    return (
        <div className='containerProduct'>
            <button onClick={BackHandler}>Back to Best Sellers...</button>
            {
                product.id ? <div className='Product'>
                        <img src={product.image} alt={product.title}/>
                        <div className='description'>
                            <h1>{product.title}</h1>
                            <h2>Price: {product.price}$</h2>
                            <p><b>Category: </b>{product.category}</p>
                            <p>{product.description}</p>
                            <p>Rating: {Math.round(likes / dislikes)}</p>
                            <div className='buttons'>
                            <button onClick={likeHandler}>Like {likes}</button>
                            <button onClick={dislikeHandler}>Dislike {dislikes}</button>
                            </div>
                            <Reviews reviews={props.reviews}/>
                        </div>
                    </div> : <h1>Loading...</h1>

            }
        </div>
    )
}

export default Product;