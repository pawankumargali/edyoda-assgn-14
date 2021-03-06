import React, { useState, useRef } from 'react';
const acceptedFileTypes=["jpg", "png","bmp","svg","webp"];

function ProductImage() {

  const [productPic, setProductPic] = useState(null);
  const fileInput = useRef(null);

  const handlePhotoChange = e => {
    if(Number(e.target.files[0].size)/Math.pow(10,6) > 1) return;
    const fileType=e.target.files[0].type.split("/")[1];
    
    if(!acceptedFileTypes.includes(fileType)) return;
    console.log(e.target.files);
    const newImgURL = URL.createObjectURL(e.target.files[0]);
    setProductPic(newImgURL);
  }
  const handlePhotoUploadBtnClick = () => fileInput.current.click();

    return (
        <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
            <div className="tm-product-img-dummy mx-auto" onClick={handlePhotoUploadBtnClick}>
            <img src={productPic || ''}  alt="product-pic" style={{width:'100%'}}/>
            <i className="fas fa-cloud-upload-alt tm-upload-icon" ></i>
            </div>
            <div className="custom-file mt-3 mb-3">
                <input type="file" hidden ref={fileInput} onChange={handlePhotoChange}/>
                <button className="btn btn-primary btn-block text-uppercase"   
                    onClick={handlePhotoUploadBtnClick} 
                >
                    Upload Product Image
                </button>
            </div>
        </div>
    );
}

export default ProductImage;