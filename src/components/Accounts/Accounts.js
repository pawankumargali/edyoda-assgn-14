import React, { useState } from 'react';
import Avatar from './Avatar';
import Select from './Select';
import Settings from './Settings';

function Accounts() {

    const [role, setRole] = useState('');
    const handleRoleSelect = e => setRole(e.target.value);

    return (
        <div className="container mt-5">
            <div className="row tm-content-row">
            <Select onChangeHandler={handleRoleSelect}/>
        </div>
            <div className="row tm-content-row">
            <Avatar role={role}/>
            <Settings role={role} />
            </div>
        </div>
    );


}

export default Accounts;