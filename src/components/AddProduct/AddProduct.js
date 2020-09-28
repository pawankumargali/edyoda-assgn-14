import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';

function AddProduct() {
    const [formErr , setFormErr ] = useState([])
    return (
        <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12">
                  <h2 className="tm-block-title d-inline-block">Add Product</h2>
                </div>
              </div>
              <div className="row tm-edit-product-row">
                <ProductDetails setFormErr={setFormErr} />
                <ProductImage setFormErr={setFormErr} />
              </div>
              {formErr.length!==0 && formErr.map((err, index) =>
                  <div key={index} style={{marginTop:'10px', color:'#F79463'}}>
                    {'* '+err}
                  </div>
              )}
        </div>
      </div>
      </div>
      </div>
    )
}

export default AddProduct;