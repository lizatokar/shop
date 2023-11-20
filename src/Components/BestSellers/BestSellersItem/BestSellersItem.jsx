import './BestSellersItem.css';
import {useNavigate} from "react-router-dom";

const BestSellersItem = (props) => {
    const navigate = useNavigate();
    const ShowMoreHandler = () => {
        navigate(`/product/${props.product.id}`);
    }

    return (
        <div className='BestSellersItem'>
            <img src={props.product.image} alt={props.product.title}/>
            <h2>{props.product.title}</h2>
            <h3>{props.product.price}$</h3>
            <button onClick={ShowMoreHandler}>Show more...</button>
        </div>
    )
}

export default BestSellersItem;