import React, { useState, useEffect} from 'react'


function Settings({ role }) {

  const [settings, setSettings] = useState({name:'', email:'', password:'', password2:'', phone:''});
  const [showUpdateSuccessfulPopUp, setShowUpdateSuccessfulPopUp] = useState(false);
  useEffect(() => {
    if(role!=='')
      updateSettings();
  }, [role]);

  const updateSettings = () => {
    if(!localStorage.getItem("projectData")) return;
    const { accountsPage } = JSON.parse(localStorage.getItem("projectData"));
    setSettings(accountsPage[role]);
  }

  const handleSettingsChange = e => {
    const updated = {...settings, [e.target.name]: e.target.value};
    console.log(updated);
    setSettings(updated);
  }

  const updateProfile = e => {
    e.preventDefault();
    if(settings.password!==settings.password2) return;
    if(!localStorage.getItem("projectData")) return;
    const projectData = JSON.parse(localStorage.getItem("projectData"));
    let details = projectData.accountsPage[role];
    const updated = {...details,...settings};
    projectData.accountsPage[role] = updated;
    localStorage.setItem('projectData', JSON.stringify(projectData));
    setShowUpdateSuccessfulPopUp(true);
    setTimeout(() => {
      setShowUpdateSuccessfulPopUp(false);
    },3000);
  }

  const popUpStyles = {
    position:'fixed', bottom:'10px', right:'10px', 
    backgroundColor:'#fff', width:'300px', height:'100px', 
    display:'flex', justifyContent:'center', alignItems:'center', color:'#000'};
  const profileUpdateSuccessfullPopUp = ()  => (
    <div style={popUpStyles}>
      <div>Information Updated Successfully</div>
      <div style={{position:'relative', top:'-2rem', right:'-0.8rem'}}>
        <button 
          className="btn btn-primary" 
          style={{padding:'5px 10px'}}
          onClick={() =>setShowUpdateSuccessfulPopUp(false)}>x</button>
      </div>
    </div>
  );

    return (     
      <div className="tm-block-col tm-col-account-settings">
      <div className="tm-bg-primary-dark tm-block tm-block-settings">
        <h2 className="tm-block-title">Account Settings</h2>
        <form action="" className="tm-signup-form row">
          <div className="form-group col-lg-6">
            <label htmlFor="name">Account Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control validate"
              value={settings.name || ''}
              onChange={handleSettingsChange}
            />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="email">Account Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control validate"
              value={settings.email || ''}
              onChange={handleSettingsChange}
            />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control validate"
              value={settings.password || ''}
              onChange={handleSettingsChange}
            />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="password2">Re-enter Password</label>
            <input
              id="password2"
              name="password2"
              type="password"
              className="form-control validate"
              value={settings.password2 || ''}
              onChange={handleSettingsChange}
            />
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="form-control validate"
              value={settings.phone || ''}
              onChange={handleSettingsChange}
            />
          </div>
          <div className="form-group col-lg-6">
            <label className="tm-hide-sm">&nbsp;</label>
            <button
              type="submit"
              className="btn btn-primary btn-block text-uppercase"
              onClick={updateProfile}
            >
              Update Your Profile
            </button>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary btn-block text-uppercase"
            >
              Delete Your Account
            </button>
          </div>
        </form>
      </div>
      {showUpdateSuccessfulPopUp && profileUpdateSuccessfullPopUp()}
    </div>
      );
}

export default Settings;