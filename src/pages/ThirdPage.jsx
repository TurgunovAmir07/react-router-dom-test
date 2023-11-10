import React from "react";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";
import { ThirdTitle } from "../components/ThreeTitle";

const ThirdPage = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/fourth-page");
  };
  return (
    <div>
      <ThirdTitle />
      <LinkButton onClick={goToNextPage} />
    </div>
  );
};

export default ThirdPage;
