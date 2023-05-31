import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Reserve from "../images/Reserve.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Reserve})` }}>
        <div className="headerContainer">
          <h2>Secure your seats,</h2>
          <h2>Savor every bite</h2>
          <Link to="/reserve">
            <button>Reserve Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
