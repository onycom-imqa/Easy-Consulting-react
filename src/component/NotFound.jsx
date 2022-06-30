import React from 'react'
import NotFoundImg from '../Assets/404.svg';
import {useIMQA} from "imqa-react-sdk";

const NotFound = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <div className="d-flex justify-content-center align-items-center">
        <img src={`${NotFoundImg}`} alt="" style={{height: '80vh', padding: '2rem 0 0 0'}}/>
    </div>
    </div>
    )
}

export default NotFound
