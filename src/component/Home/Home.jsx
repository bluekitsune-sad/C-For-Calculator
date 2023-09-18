import React from "react";
import { Link } from "react-router-dom";
import GradientButton from "../GradiantButton/GradientButton";

function Home() {
  return (
    <div>
      <Link to={"/calculator"}>
        <GradientButton name={"Start"} />
      </Link>
    </div>
  );
}

export default Home;
