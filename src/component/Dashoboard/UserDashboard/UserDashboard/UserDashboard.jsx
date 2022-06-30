import React from 'react'
import Profile from '../../Profile/Profile'
import { Routes, Route } from 'react-router-dom'
import BookList from '../BookList/BookList'
import Book from '../Book/Book'
import Review from '../AddReview/Review';
import ReviewForm from '../AddReview/ReviewFrom'
import {useIMQA} from "imqa-react-sdk";
const UserDashboard = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="book" element={<Book />} />
            <Route path="book/:id" element={<Book />} />
            <Route path="booking" element={<BookList />} />
            <Route path="review" element={<Review />} />
            <Route path="review/:id" element={<ReviewForm />} />
        </Routes>
        </div>
    )
}

export default UserDashboard
