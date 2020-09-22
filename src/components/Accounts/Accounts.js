import React, { useState, useEffect} from 'react';
import Avatar from './Avatar';
import Select from './Select';
import Settings from './Settings';
import axios from 'axios';

function Accounts() {

    const [role, setRole] = useState('');

    useEffect(() => {
        if(!localStorage.getItem("projectData"))
            getData();
    }, []);

    const getData = async () => {
        const response = await axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json");
        localStorage.setItem("projectData", JSON.stringify(response.data));
    }
   
    const handleRoleSelect = e => setRole(e.target.value);

    return (
        <div class="container mt-5">
            <div class="row tm-content-row">
            <Select onChangeHandler={handleRoleSelect}/>
        </div>
            <div class="row tm-content-row">
            <Avatar role={role}/>
            <Settings role={role} />
            </div>
        </div>
    );


}

export default Accounts;