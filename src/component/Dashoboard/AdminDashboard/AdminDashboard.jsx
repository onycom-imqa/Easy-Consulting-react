import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import OrderList from '../OrderList/OrderList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import { useIMQA } from "imqa-react-sdk"; // 삽입

const AdminDashboard = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="orderList" element={<OrderList />} />
            <Route path="addService" element={<AddService />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="manageServices" element={<ManageServices />} />
        </Routes>
        </div>
    );
};

export default AdminDashboard;
