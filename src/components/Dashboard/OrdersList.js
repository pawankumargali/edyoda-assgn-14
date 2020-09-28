import React, { useState, useEffect } from 'react';

function OrdersList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(orders.length===0)
            loadOrders();
    },[]);

    const loadOrders = () => {
        // if(!localStorage.getItem('projectData')) return;
        const { dasbhoardPage: dasbhoardPage } = JSON.parse(localStorage.getItem('projectData'))
        const { orders } = dasbhoardPage;
        setOrders(orders);
        console.log(orders);
    }

    return (
    <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
    <h2 className="tm-block-title">Orders List</h2>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">ORDER NO.</th>
                <th scope="col">STATUS</th>
                <th scope="col">OPERATORS</th>
                <th scope="col">LOCATION</th>
                <th scope="col">DISTANCE</th>
                <th scope="col">START DATE</th>
                <th scope="col">EST DELIVERY DUE</th>
            </tr>
        </thead>
        <tbody>
            {orders.map(({orderNo, status, operators, location, distance, startDate, deliveryDate}, index) =>
                <tr key={index+status}>
                <th scope="row"><b>#{orderNo}</b></th>
                <td>
                    <div className={`tm-status-circle ${status.toLowerCase()}`}>
                    </div>{status}
                </td>
                <td><b>{operators}</b></td>
                <td><b>{location}</b></td>
                <td><b>{distance} km</b></td>
                <td>{startDate}</td>
                <td>{deliveryDate}</td>
            </tr>
            )}
        </tbody>
    </table>
    </div>
    )
}

export default OrdersList
