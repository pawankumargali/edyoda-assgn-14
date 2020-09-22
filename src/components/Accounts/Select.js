import React, { Component } from 'react'

function Select({onChangeHandler}) {

  const roles = ['Admin', 'Editor', 'Merchant', 'Customer'];
  return (
      <div class="col-12 tm-block-col">
      <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
        <h2 class="tm-block-title">List of Accounts</h2>
        <p class="text-white">Accounts</p>
        <select class="custom-select" onChange={onChangeHandler}>
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