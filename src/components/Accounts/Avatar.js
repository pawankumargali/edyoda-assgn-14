import React, { useState, useEffect, useRef } from 'react'
import defaultAvatar from '../../assets/img/default-avatar.png';

function Avatar({role}) {

  const [profilePic, setProfilePic] = useState('');
  const fileInput = useRef(null);
  useEffect(() => {
    if(role!=='')
      updateProfilePic();
    else 
      setProfilePic('');
  }, [role]);


  const updateProfilePic = () => {
    if(!localStorage.getItem("projectData")) return;
    const { accountsPage } = JSON.parse(localStorage.getItem("projectData"));
    setProfilePic(accountsPage[role].profilePic);
  }

  const deleteProfilePic = () => {
    setProfilePic(defaultAvatar);
    const projectData = JSON.parse(localStorage.getItem("projectData"));
    projectData.accountsPage[role].profilePic='';
    localStorage.setItem('projectData', JSON.stringify(projectData));
  }

  const handlePhotoUploadBtnClick = () => fileInput.current.click();

  const handlePhotoChange = e => {
    const newImgURL = URL.createObjectURL(e.target.files[0]);
    setProfilePic(newImgURL);
    if(!localStorage.getItem("projectData")) return;
    const projectData = JSON.parse(localStorage.getItem("projectData"));
    projectData.accountsPage[role].profilePic=newImgURL;
    localStorage.setItem('projectData', JSON.stringify(projectData));
  }
  
  return (
    <div class="tm-block-col tm-col-avatar">
      <div class="tm-bg-primary-dark tm-block tm-block-avatar">
        <h2 class="tm-block-title">Change Avatar</h2>
        <div class="tm-avatar-container">
          <img
            src={profilePic==='' ? defaultAvatar : profilePic}
            alt="Avatar"
            class="tm-avatar img-fluid mb-4"
          />
          <span class="tm-avatar-delete-link" onClick={deleteProfilePic}>
            <i class="far fa-trash-alt tm-product-delete-icon"></i>
          </span>
        </div>
        <input type="file" hidden ref={fileInput} onChange={handlePhotoChange}/>
        <button class="btn btn-primary btn-block text-uppercase"   
          onClick={handlePhotoUploadBtnClick} 
        >
          Upload New Photo
        </button>
      </div>
    </div>
  );
}

export default Avatar;