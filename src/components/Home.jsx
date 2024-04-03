import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ width: "100%", height: "100vh", backgroundColor: "#9ED5F0" }}
    >
      <button
        type="button"
        class="btn btn-outline-dark fs-1"
        onClick={() => navigate("/search/1/Breakfast")}
      >
        Go to Search Page
      </button>
    </div>
  );
};

export default Home;
