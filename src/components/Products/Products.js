import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories]=useState([]);
    const [rowsToDelete, setRowsToDelete] = useState([]);
    useEffect(() => {
        loadProductsAndCategories();
    }, []);

    useEffect(() => {
        updateProducts();
    },[products.length]);


    const loadProductsAndCategories = () => {
        if(!localStorage.getItem('projectData')) return;
        const { productsPage } = JSON.parse(localStorage.getItem('projectData'));
        const { categories, products } = productsPage;
        console.log(categories, products);
        setProducts(products);
        setCategories(categories);
    }

    const updateProducts = () => {
        const { productsPage } = JSON.parse(localStorage.getItem('projectData'));
        const { products } = productsPage;
        setProducts(products);
    }

    const handleProductDelete = index => {
        if(products.length===0) return;
        const updatedProducts = products.filter((prod, ind) => ind!==index);
        setProducts(updatedProducts);
        const projectData = JSON.parse(localStorage.getItem('projectData'));
        projectData.productsPage.products=updatedProducts;
        localStorage.setItem('projectData', JSON.stringify(projectData));
    }

    const handleRowsToDelete = (e, index) => {
        console.log(e.target.checked,index);
        let delRows = rowsToDelete;
        if(e.target.checked) 
            delRows.push(index);
        else
            delRows=delRows.filter((row, ind) => ind!==index);
        setRowsToDelete(delRows);
        console.log(rowsToDelete);
    }

    const handleMultipleDelete = () => {
        const updatedProducts = products.filter((prod, index) => !rowsToDelete.includes(index))
        setRowsToDelete([]);
        setProducts(updatedProducts);
        const projectData = JSON.parse(localStorage.getItem('projectData'));
        projectData.productsPage.products=updatedProducts;
        localStorage.setItem('projectData', JSON.stringify(projectData));
    }

    let delRows=[];
    return (
        <div className="container mt-5">
        <div className="row tm-content-row">
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-products">
              <div className="tm-product-table-container">
                <table className="table table-hover tm-table-small tm-product-table">
                  <thead>
                    <tr>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">PRODUCT NAME</th>
                      <th scope="col">UNIT SOLD</th>
                      <th scope="col">IN STOCK</th>
                      <th scope="col">EXPIRE DATE</th>
                      <th scope="col">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length!==0 && products.map( ( {name, unitSold, stock, expireDate}, index ) =>
                    <tr key={name+index}>
                      <th scope="row">
                        <input type="checkbox"
                            className="delete-row-checkbox"
                            value={rowsToDelete.includes(index) ? true : false}
                            onChange={e => handleRowsToDelete(e,index)}
                        />
                      </th>
                      <td className="tm-product-name">{name}</td>
                      <td>{unitSold}</td>
                      <td>{stock}</td>
                      <td>{expireDate}</td>
                      <td>
                        <button className="tm-product-delete-link"
                            onClick={() => handleProductDelete(index)}
                        >
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </button>
                      </td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* <!-- table container --> */}
              <Link to='/product/add'>
                <button className="btn btn-primary btn-block text-uppercase mb-3">
                    Add new product
                </button>
                </Link>
              <button className="btn btn-primary btn-block text-uppercase"
                onClick={handleMultipleDelete}
              >
                Delete selected products
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-product-categories">
              <h2 className="tm-block-title">Product Categories</h2>
              <div className="tm-product-table-container">
                <table className="table tm-table-small tm-product-table">
                  <tbody>
                    <tr>
                      <td className="tm-product-name">Product Category 1</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 2</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 3</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 4</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 5</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 6</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 7</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 8</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 9</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 10</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tm-product-name">Product Category 11</td>
                      <td className="text-center">
                        <a href="#" className="tm-product-delete-link">
                          <i className="far fa-trash-alt tm-product-delete-icon"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- table container --> */}
              <button className="btn btn-primary btn-block text-uppercase mb-3">
                Add new category
              </button>
            </div>
          </div>
        </div>
      </div>   
    )
}

export default Products;
