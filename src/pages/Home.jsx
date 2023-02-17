import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../assets/home.png";
import "../styles/Home.css";
import Footer from "../components/Footer";

function Home() {
  const { user } = useAuthContext;

  return (
    <>
      <div className="home">
        <div className="home-left">
          <h2>
            Welcome to <span>dostify.</span>
          </h2>
          <h3>Meet like minded people!</h3>
          <button className="btn">
            <Link to={user ? "users" : "signup"}>Get Started</Link>
          </button>
        </div>
        <div className="home-right">
          <img src={logo} alt="Expenses" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
