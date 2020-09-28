import React from 'react';

function Select({onChangeHandler}) {

  const roles = ['Admin', 'Editor', 'Merchant', 'Customer'];
  return (
      <div className="col-12 tm-block-col">
      <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
        <h2 className="tm-block-title">List of Accounts</h2>
        <p className="text-white">Accounts</p>
        <select className="custom-select" onChange={onChangeHandler}>
          <option value="">Select account</option>
          {roles.map((role, index) => 
          ( <option 
              key={index}
              value={role}
            >
              {role}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;