import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.styles.css";

const Home = () => {
  const [userList, setUserList] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://express-t4.onrender.com/api/users")
      .then((response) => setUserList(response.data));
  }, []);
  const handleClick = (user_id) => {
    navigate(`/profile/${user_id}`);
  };
  console.log(userList);
  const handleSearch = (e) => {
    setSearchUser(e.target.value);
  };

  const filterUser = userList.filter((user) => {
    const [firstName, lastName] = user.name.split(" ");
    return (
      firstName.toLowerCase().startsWith(searchUser.toLowerCase()) ||
      lastName.toLowerCase().startsWith(searchUser.toLowerCase())
    );
  });

  return (
    <div>
      <div className="searchbox">
        <input
          placeholder="Search User"
          type="text"
          value={searchUser}
          onChange={handleSearch}
        />
      </div>
      <div className="main-container">
        <div className="container_users">
          {filterUser.map((user) => {
            return (
              <div>
                <div className="card" onClick={() => handleClick(user._id)}>
                  <div
                    className={`status-dot ${
                      user.isActive ? "online" : "offline"
                    }`}
                  >
                    <span></span>
                  </div>
                  <div className="title_card_user">
                    <div>
                      <img className="card_img" src={user.picture} alt=""></img>
                    </div>
                    <div className="title_text">
                      <div>
                        <span className="user_name">{user.name}</span>
                      </div>
                      <span className="user_phone">Phone: {user.phone}</span>
                      <span className="user_email">Email: {user.email}</span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div className="body_title">
                      <span>{user.company}</span>
                      <span>{user.balance}</span>
                    </div>
                    <div className="body_about">
                      <span>About: {user.about}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
