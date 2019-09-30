// import React, {useState} from 'react';
// import {Male, Female} from 'react-gender';

// const Forms = () => {
//   const [profileData, setProfile] = useState();
//   const [detail, setDetail] = useState({
//     image: {value: ''},
//     ms: 'mr',
//     gender: 'male',
//     name: '',
//     phone: '',
//     address: '',
//     email: '',
//   });

//   const [hide, setHide] = useState({hide: false});
//   const [show, setShow] = useState({hide: true});

//   // const name = e => {
//   //   setDetail({...detail, name: e.target.value});
//   //   // console.log(e.target.value);
//   // };

//   // const phone = e => {
//   //   setDetail({...detail, phone: e.target.value});
//   //   // console.log(e.target.value);
//   // };
//   // const address = e => {
//   //   setDetail({...detail, [e.target.name]: e.target.value});
//   //   // console.log(e.target.value);
//   // };
//   const input = e => {
//     setDetail({...detail, [e.target.name]: e.target.value});
//     console.log(e.target.value);
//   };

//   const clickMe = e => {
//     console.log('dddd');
//     if (
//       detail.name === '' ||
//       detail.phone === '' ||
//       detail.address === '' ||
//       detail.email === '' ||
//       detail.image === '' ||
//       detail.gender === ''
//     ) {
//     } else {
//       setProfile({...detail});
//       setDetail({
//         ...detail,

//         name: '',
//         phone: '',
//         address: '',
//         email: '',
//       });
//     }

//     e.preventDefault();
//   };

//   const onChange = e => {
//     setDetail({...detail.image, value: e.target.value});
//     if (e.target.files.length !== 0) {
//       const img = URL.createObjectURL(e.target.files[0]);
//       setDetail({...detail, image: img});
//       setShow({hide: false});
//     } else {
//     }
//   };
//   const clearImage = e => {
//     setDetail({image: {value: ''}});
//     console.log(detail.image);
//     setShow({hide: true});
//     e.preventDefault();
//   };
//   const basicDetail = e => {
//     setHide({hide: true});
//     console.log(hide.hide);
//   };
//   const Gender = e => {
//     setDetail({...detail, [e.target.name]: e.currentTarget.value});
//     console.log(e.currentTarget.value);
//   };
//   const mrMs = e => {
//     setDetail({...detail, [e.target.name]: e.currentTarget.value});
//     console.log(e.currentTarget.value);
//   };
//   // console.log(profileData);
//   return (
//     <div className="flex">
//       <form className="myForm" onSubmit={clickMe}>
//         <h3 className="heading">My Profile</h3>
//         <p className="paragraph">Name:</p>

//         <div className="mrMs">
//           <select className="men" onChange={mrMs}>
//             <option name="mr" value="Mr">
//               Mr.
//             </option>
//             <option name="ms" value="Ms">
//               Ms.
//             </option>
//           </select>
//           <div>
//             <input
//               name="name"
//               className="input"
//               type="text"
//               placeholder="full Name"
//               value={detail.name}
//               onChange={input}
//             />
//           </div>
//         </div>

//         <p className="paragraph">Phone:</p>
//         <input
//           name="phone"
//           className="input"
//           type="number"
//           placeholder="Phone"
//           value={detail.phone}
//           onChange={input}
//         />

//         <p className="paragraph">Address:</p>
//         <input
//           name="address"
//           className="input"
//           type="text"
//           placeholder="address"
//           value={detail.address}
//           onChange={input}
//         />
//         <p className="paragraph">Email:</p>
//         <input
//           name="email"
//           className="input"
//           type="email"
//           placeholder="email"
//           value={detail.email}
//           onChange={input}
//         />
//         <select className="genderSelect" onChange={Gender}>
//           <option disabled>Gender</option>
//           <option name="male" value="male">
//             Male
//           </option>
//           <option name="female" value="female">
//             Female
//           </option>
//         </select>

//         <span className=" btn-file">
//           <input
//             type="file"
//             onChange={onChange}
//             value={detail.image.value}
//             className="photo"
//           />
//           {show.hide === false ? (
//             <button
//               onClick={clearImage}
//               value={detail.image}
//               className="delButton"
//             >
//               Delete
//             </button>
//           ) : (
//             <div></div>
//           )}
//         </span>
//         <div>
//           {show.hide === false ? (
//             <img src={detail.image} alt="" className="image1" />
//           ) : (
//             <div></div>
//           )}
//         </div>
//         <input type="submit" className="button" value="submit" />
//       </form>

//       {profileData ? (
//         <div className="container">
//           <div className="detail">
//             <ul>
//               <div>
//                 <img src={profileData.image} alt="" className="image" />

//                 <li className="buttonDetail" onClick={basicDetail}>
//                   Basic Details
//                 </li>
//                 <li className="buttonDetail">Interest</li>
//                 <li className="buttonDetail">socila Life</li>
//                 <li className="buttonDetail">work & play</li>
//                 <li className="buttonDetail">setting</li>
//               </div>
//             </ul>
//           </div>
//           <div className="userDetail">
//             {hide.hide === true ? (
//               <ul className="profile">
//                 <p className="user">Name:</p>
//                 <div className="mrMs">
//                   <select className="men">{profileData.ms}</select>
//                   <div>
//                     <li className="name">{profileData.name}</li>
//                   </div>
//                 </div>
//                 <p className="user">Phone:</p>
//                 <div className="mrMs">
//                   <div className="gmail1">
//                     <img
//                       src={require('./phone.png')}
//                       alt="ddd"
//                       className="gmail"
//                     />
//                   </div>
//                   <div>
//                     <li className="name">{profileData.phone}</li>
//                   </div>
//                 </div>
//                 <p className="user">Address:</p>
//                 <div className="mrMs">
//                   <div className="gmail1">
//                     <img
//                       src={require('./house.png')}
//                       alt="ddd"
//                       className="gmail"
//                     />
//                   </div>
//                   <div>
//                     <li className="name">{profileData.address}</li>
//                   </div>
//                 </div>
//                 <p className="user">Email:</p>
//                 <div className="mrMs">
//                   <div className="gmail1">
//                     <img
//                       src={require('./dev.jpg')}
//                       alt="ddd"
//                       className="gmail"
//                     />
//                   </div>
//                   <div>
//                     <li className="name">{profileData.email}</li>
//                   </div>
//                 </div>
//                 <p className="butn">Gender:</p>
//                 <div className="genders">
//                   {profileData.gender === 'male' ? (
//                     <Male color="#419fcf" />
//                   ) : (
//                     <Female color="#f378ac" />
//                   )}
//                   {profileData.gender}
//                 </div>
//               </ul>
//             ) : (
//               <div></div>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// };

// export default Forms;
