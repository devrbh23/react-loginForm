import React, {useState} from 'react';
import {Male, Female} from 'react-gender';

const Forms = () => {
  const [select, setSelect] = useState({selectedMenu: 'basicDetail'});
  const [show, setShow] = useState({hide: true});
  const [profileData, setProfile] = useState();
  const [detail, setDetail] = useState({
    image: {value: ''},
    hide: true,
    gender: '',
    name: '',
    phone: '',
    address: '',
    email: '',
  });

  const input = e => {
    setDetail({...detail, [e.target.name]: e.target.value});
    console.log(e.target.value);
  };
  const Gender = e => {
    setDetail({...detail, gender: e.currentTarget.value});
    console.log(e.currentTarget.value);
  };
  const onChange = e => {
    if (e.target.files.length !== 0) {
      setDetail({...detail, image: URL.createObjectURL(e.target.files[0])});
      setShow({hide: false});
    } else {
    }
  };
  const clearImage = e => {
    setDetail({...detail, image: {value: ''}});
    console.log(detail.image);
    setShow({hide: true});
    e.preventDefault();
  };

  const clickMe = e => {
    // if (
    //   detail.name === '' ||
    //   detail.phone === '' ||
    //   detail.address === '' ||
    //   detail.email === '' ||
    //   detail.image === '' ||
    //   detail.gender === ''
    // ) {
    // console.log(detail);
    // } else {
    setShow({hide: true});
    setProfile({...detail});
    setDetail({
      image: {value: ''},
      gender: {male: 'Mr', Female: 'Ms'},
      name: '',
      phone: '',
      address: '',
      email: '',
    });
    // }

    e.preventDefault();
  };

  const basicDetail = e => {
    setSelect({selectedMenu: 'basicDetail'});
    console.log(select.selectedMenu);
  };
  const interest = e => {
    setSelect({selectedMenu: 'interest'});
  };
  const social = e => {
    setSelect({selectedMenu: 'social'});
  };
  const work = e => {
    setSelect({selectedMenu: 'work'});
  };
  const setting = e => {
    setSelect({selectedMenu: 'setting'});
  };

  // console.log(profileData);
  return (
    <div className="flex">
      <form className="myForm" onSubmit={clickMe}>
        <h3 className="heading">My Profile</h3>
        <p className="paragraph">Name:</p>

        <input
          name="name"
          className="input"
          type="text"
          placeholder="full Name"
          value={detail.name}
          onChange={input}
        />

        <p className="paragraph">Phone:</p>
        <input
          name="phone"
          className="input"
          type="number"
          placeholder="Phone"
          value={detail.phone}
          onChange={input}
        />

        <p className="paragraph">Address:</p>
        <input
          name="address"
          className="input"
          type="text"
          placeholder="address"
          value={detail.address}
          onChange={input}
        />
        <p className="paragraph">Email:</p>
        <input
          name="email"
          className="input"
          type="email"
          placeholder="email"
          value={detail.email}
          onChange={input}
        />
        <select className="genderSelect" onChange={Gender}>
          <option selected disabled>
            Gender
          </option>
          <option name="male" value="male">
            Male
          </option>
          <option name="female" value="female">
            Female
          </option>
        </select>

        <span className=" btn-file">
          <input
            type="file"
            onChange={onChange}
            value={detail.image.value}
            className="photo"
          />
          {show.hide === false ? (
            <button onClick={clearImage} className="delButton">
              Delete
            </button>
          ) : (
            <div></div>
          )}
        </span>
        <div>
          {show.hide === false ? (
            <img src={detail.image} alt="" className="image1" />
          ) : (
            <div></div>
          )}
        </div>
        <input type="submit" className="button" value="submit" />
      </form>

      {profileData ? (
        <div className="container">
          <div className="detail">
            <ul>
              <div>
                <img src={profileData.image} alt="" className="image" />

                <li className="buttonDetail" onClick={basicDetail}>
                  Basic Details
                </li>
                <li className="buttonDetail" onClick={interest}>
                  Interest
                </li>
                <li className="buttonDetail" onClick={social}>
                  socila Life
                </li>
                <li className="buttonDetail" onClick={work}>
                  work & play
                </li>
                <li className="buttonDetail" onClick={setting}>
                  setting
                </li>
              </div>
            </ul>
          </div>
          <div className="selectMenu">
            <div className="userDetail">
              {select.selectedMenu === 'basicDetail' ? (
                <ul className="profile">
                  <p className="user">Name:</p>
                  <div className="mrMs">
                    <select className="men">
                      <option className="dropDown">
                        {profileData.gender === 'male'
                          ? detail.gender.male
                          : detail.gender.Female}
                      </option>
                    </select>
                    <div>
                      <li className="name">{profileData.name}</li>
                    </div>
                  </div>
                  <p className="user">Phone:</p>
                  <div className="mrMs">
                    <div className="gmail1">
                      <img
                        src={require('./phone.png')}
                        alt="ddd"
                        className="gmail"
                      />
                    </div>
                    <div>
                      <li className="name">{profileData.phone}</li>
                    </div>
                  </div>
                  <p className="user">Address:</p>
                  <div className="mrMs">
                    <div className="gmail1">
                      <img
                        src={require('./house.png')}
                        alt="ddd"
                        className="gmail"
                      />
                    </div>
                    <div>
                      <li className="name">{profileData.address}</li>
                    </div>
                  </div>
                  <p className="user">Email:</p>
                  <div className="mrMs">
                    <div className="gmail1">
                      <img
                        src={require('./dev.jpg')}
                        alt="ddd"
                        className="gmail"
                      />
                    </div>
                    <div>
                      <li className="name">{profileData.email}</li>
                    </div>
                  </div>
                  <p className="butn">Gender:</p>
                  <div className="genders">
                    {profileData.gender === 'male' ? (
                      <Male color="#419fcf" />
                    ) : (
                      <Female color="#f378ac" />
                    )}
                  </div>
                </ul>
              ) : null}
            </div>
            {/* /////// 
            ///////interst
                    ///// */}

            <div className="interest">
              {select.selectedMenu === 'interest' ? <h3> Interest </h3> : null}
            </div>

            {/* ///setting/// */}

            <div className="interest">
              {select.selectedMenu === 'setting' ? <h3> setting </h3> : null}
            </div>

            {/* ////social//// */}
            <div className="interest">
              {select.selectedMenu === 'social' ? <h3> social </h3> : null}
            </div>

            {/* /////Work//// */}
            <div className="interest">
              {select.selectedMenu === 'work' ? <h3> Work & Play </h3> : null}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Forms;
