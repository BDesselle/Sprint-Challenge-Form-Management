import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function DataList() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const url = "http://localhost:5000/api/restricted/data";
    console.log(data);
    if (token) {
      axios
        .get(url, {
          headers: {
            Authorization: token
          }
        })
        .then(res => {
          console.log("Response Recieved: ", res);
          setData(res.data);
        })
        .catch(err => {
          console.log("error", err.res);
        });
    }
    // eslint-disable-next-line
  }, []);

  if (!data) return <div>Loading</div>;

  return (
    <>
      <div className="friendHeader">
        <h1>My Favorite Dishes</h1>
      </div>

      {data.map(data => (
        <div className="friendList">
          <p className="friendName">Course: {data.course}</p>
          <p className="friendAge">Title: {data.name}</p>
          <p className="friendEmail">Technique: {data.technique}</p>
        </div>
      ))}
      {/*
      <button

      >
        Logout
      </button> */}
      <Link to="/">
        <button
          className="btn logoutButton"
          onClick={() => {
            localStorage.removeItem("token");
          }}
        >
          Logout
        </button>
      </Link>
    </>
  );
}

export default DataList;
