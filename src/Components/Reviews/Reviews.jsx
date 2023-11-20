import Review from "./Review/Review";
import {useEffect, useState} from "react";
// import axios from "axios";
import './Reviews.css';

const Reviews = (props) => {
    let [reviews, setReviews] = useState(props.reviews);
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => setReviews(response.data))
    // }, []);
    let [currentReview, setCurrentReview] = useState('');
    let [currentUser, setCurrentUser] = useState('');
    let [currentTitle, setCurrentTitle] = useState('');

    const currentReviewHandler = (e) => {
        let currentReview = e.currentTarget.value;
        setCurrentReview(currentReview);
    }

    const addReviewHandler = () => {

        let review = {
            userId: currentUser,
            id: 4,
            title: currentTitle,
            body: currentReview,
            date: new Date().toLocaleString()
        }
        setReviews([review, ...reviews]);
    }

    const userHandler = (e) => {
        let user = e.currentTarget.value;
        setCurrentUser(user);
    }

    const currentTitleHandler = (e) => {
        setCurrentTitle(e.currentTarget.value);
    }

    return (
        <div className="Reviews">
            <h2>Add a review:</h2>
            <div className='containerInput'>
                <textarea name="" id="" cols="30" rows="10" onChange={currentReviewHandler}></textarea>
                <h2>Add your name:</h2>
                <input type='text' onChange={userHandler}/>
                <h2>Add a title:</h2>
                <input type='text' onChange={currentTitleHandler}/>
            </div>
            <button onClick={addReviewHandler}>Add review</button>
            <h2>Reviews:</h2>
            {
                reviews.map(review => <Review review={review} key={review.id}/>)
            }
        </div>
    )
}

export default Reviews;