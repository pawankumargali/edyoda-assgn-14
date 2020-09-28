import React, { useEffect, useState } from 'react';

function NotificationList() {

    const [notifs, setNotifs] = useState([]);

    useEffect(() => {
        if(notifs.length===0)
            loadNotifications();
    },[]);


    const loadNotifications = () => {
        // if(!localStorage.getItem('projectData')) return;
        const { dasbhoardPage: dasbhoardPage } = JSON.parse(localStorage.getItem('projectData'))
        const { notifications } = dasbhoardPage;
        setNotifs(notifications);
        // console.log(notifications);
    };

    return (
        <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
            <h2 className="tm-block-title">Notification List</h2>
            <div className="tm-notification-items">
                {notifs.map(({message,pic,time}, index) =>
                <div key={index+message.split('and')[0]} className="media tm-notification-item">
                    <div className="tm-gray-circle">
                        <img src={pic} alt="Avatar Image" className="rounded-circle notif-img" />
                    </div>
                    <div className="media-body">
                        <p className="mb-2"><b>{message.split('and')[0]}</b> and <b>6 others</b> sent you new <a href="#"
                            className="tm-notification-link">product updates</a>. Check new orders.</p>
                        <span className="tm-small tm-text-color-secondary">{time} ago.</span>
                    </div>
                </div>
                )}
            </div>
        </div>  
      
    );
}

export default NotificationList;
