import React from 'react';
import userImg from '../../../Assets/user.svg';
import './Reviews.css';
import Fade from 'react-reveal/Fade';
import {useIMQA} from "imqa-react-sdk";

const Review = ({review}) => {
    const IMQARef = useIMQA(); // 삽입
    const {name, address, description, img} = review;
    return (
        <div ref={IMQARef}>
        <Fade bottom duration={1000} distance='40px'>
            <div className="review">
                { img ? <img src={img} alt=""/>:
                <img src={`${userImg}`} alt=""/>}
                <h5 className="testimonialName">{name}</h5>
                <h6 className="testimonialAddress">{address}</h6>
                <p><i>{description}</i></p>
            </div>
        </Fade>
        </div>
    );
};

export default Review;
