import React, { Fragment, useState, useEffect } from 'react';
import LatestHits from './LatestHits';
import Performance from './Performance';
import StorageInfo from './StorageInfo'
import NotificationList from './NotificationList';
import OrdersList from './OrdersList';
import axios from 'axios';

function Dashboard() {
    const [isDataReceived, setIsDataReceived] = useState(false)
    useEffect(() => {
        if(!isDataReceived)
            getData();
    }, [isDataReceived]);

    const getData = async () => {
        const response = await axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json");
        localStorage.setItem("projectData", JSON.stringify(response.data));
        setIsDataReceived(true);
    }
   
    
    return (
        <Fragment>
        {isDataReceived &&
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="text-white mt-5 mb-5">Welcome back, <b>Admin</b></p>
                </div>
            </div>
            <div className="row tm-content-row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    <LatestHits />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    <Performance />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    <StorageInfo />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                    <NotificationList />
                </div>
                <div className="col-12 tm-block-col">
                    <OrdersList />
                </div>
            </div>
        </div>
        }
        </Fragment>
    );
}

export default Dashboard;