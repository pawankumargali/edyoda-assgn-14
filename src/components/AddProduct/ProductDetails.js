import React, { useState } from 'react';

function ProductDetails({setFormErr}) {
    
    const [details, setDetails] = useState({name:'', description:'', category:'', expireDate:'', stock:'', unitSold:'' });
    
    const categories = ["New Arrival", "Latest Fashion", "Trending", "Christmas Special", "New Year Special"];
    const handleDetailsChange = e => setDetails({...details, [e.target.name]:e.target.value});

    const handleSubmit = e => {
        e.preventDefault();
        console.log(details);
        const errs=[];
       for(const field in details)
            if(!details[field]) errs.push(`${field} cannot be empty`);
       if(errs.length!==0) {
           setFormErr(errs);
           return;
        }
        if(!localStorage.getItem('projectData')) return;
        const projectData = JSON.parse(localStorage.getItem('projectData'));
        projectData.productsPage.products.push(details);
        console.log(projectData);
        localStorage.setItem('projectData',JSON.stringify(projectData));
    }

    return (
        <div className="col-xl-6 col-lg-6 col-md-12">
        <form action="" className="tm-edit-product-form">
          <div className="form-group mb-3">
            <label
              for="name"
              >Product Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control validate"
              value={details.name || ''}
              onChange={handleDetailsChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label
              for="description"
            >Description
            </label>
            <textarea
              className="form-control validate"
              name="description"
              type="text"
              value={details.description || ''}
              onChange={handleDetailsChange}
              rows="3"
              required
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label
              for="category"
            >Category
            </label>
            <select
              className="custom-select tm-select-accounts"
              id="category"
              name="category"
              value={details.category || ''}
              onChange={handleDetailsChange}
            >
              <option selected>Select category</option>
              {categories.map(cat => <option value={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="row">
              <div className="form-group mb-3 col-xs-12 col-sm-12">
                  <label
                    for="expireDate"
                    >Expiry Date
                  </label>
                  <input
                    id="expireDate"
                    name="expireDate"
                    type="date"
                    className="form-control validate"
                    value={details.expireDate || ''}
                    onChange={handleDetailsChange}
                    data-large-mode="true"
                  />
                </div>
                <div className="form-group mb-3 col-xs-12 col-sm-6">
                  <label
                    for="stock"
                    >Units In Stock
                  </label>
                  <input
                    id="stock"
                    name="stock"
                    type="number"
                    className="form-control validate"
                    value={details.stock || ''}
                    onChange={handleDetailsChange}
                    required
                  />
                </div>
                <div className="form-group mb-3 col-xs-12 col-sm-6">
                  <label
                    for="stock"
                    >Units Sold
                  </label>
                  <input
                    id="unitSold"
                    name="unitSold"
                    type="number"
                    className="form-control validate"
                    value={details.unitSold || ''}
                    onChange={handleDetailsChange}
                    required
                  />
                </div>
          </div>
          
      <div className="col-12">
        <button type="submit" className="btn btn-primary btn-block text-uppercase"
        onClick={handleSubmit}>Add Product Now</button>
      </div>
    </form>
    </div>
    );
}

export default ProductDetails;