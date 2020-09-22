import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';

function AddProduct() {
    const [formErr , setFormErr ] = useState([])
    return (
        <div class="container tm-mt-big tm-mb-big">
        <div class="row">
          <div class="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
            <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div class="row">
                <div class="col-12">
                  <h2 class="tm-block-title d-inline-block">Add Product</h2>
                </div>
              </div>
              <div class="row tm-edit-product-row">
                <ProductDetails setFormErr={setFormErr} />
                <ProductImage setFormErr={setFormErr} />
              </div>
        </div>
      </div>
      </div>
      </div>
    )
}

export default AddProduct;