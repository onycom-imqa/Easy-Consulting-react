import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import TableLoader from '../../Shared/TableOrder/TableOrder';
import Order from './Order';
import './OrderList.css'
import {useIMQA} from "imqa-react-sdk";

const OrderList = () => {
    const IMQARef = useIMQA(); // 삽입
    const [orders, setOrders] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        axios.get('https://immense-river-40491.herokuapp.com/orders')
        .then(res => setOrders(res.data))
    },[isUpdated])

    const handleAction = (id, status) => {
        setIsUpdated(true)
        axios.patch(`https://immense-river-40491.herokuapp.com/statusUpdate/${id}`, {status: status })
        .then(res => res.data && setIsUpdated(false))
    }

    return (
        <div ref={IMQARef}>
        <div className="px-2">
            {
                orders.length === 0 ?
                <TableLoader/>
                :
                <div className="orderList">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <Order key={order._id} order={order} handleAction={handleAction}/>)
                            }
                        </tbody>
                    </Table>
                </div>
            }

        </div>
        </div>
    );
};

export default OrderList;
