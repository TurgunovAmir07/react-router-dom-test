import React from "react";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";
import { FiveTitle } from "../components/FiveTitle";

const FifthPage = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/");
  };
  return (
    <div>
      <FiveTitle />
      <LinkButton onClick={goToNextPage} />
    </div>
  );
};

export default FifthPage;
