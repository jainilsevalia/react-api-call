import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Profile.styles.css";

const Profile = () => {
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://express-t4.onrender.com/api/users/${id}`)
      .then((response) => {
        setUser(response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div class="container_profile">
        <div className="profile_pic">
          <img className="profile-pic_img" src={user.picture} alt="" />
        </div>
        <div>
          <span className="profile_user_name">{user.name}</span>
        </div>
        <div>
          <span className="company_name"> Works at {user.company}</span>
        </div>
        <div className="about_user_profile">
          <p>{user.about}</p>
        </div>
        <div>
          <label className="contact_info">Contact Information</label>
          <ul>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>Address: {user.address}</li>
          </ul>
        </div>
        <div>
          <label className="Personal_info">Personal Information</label>
          <ul>
            <li>Gender: {user.gender}</li>
            <li>Age: {user.age}</li>
            <li>Registered Date: {user.registered}</li>
            <li>Eye Color: {user.eyeColor}</li>
          </ul>
        </div>
        <div>
          <lable className="contact_info">Account Information</lable>
          <ul>
            <li>Account Balance: {user.balance}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
