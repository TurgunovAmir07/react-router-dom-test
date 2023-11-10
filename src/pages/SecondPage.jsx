import React from "react";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";
import { TwoTitle } from "../components/TwoTitle";

const SecondPage = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/third-page");
  };
  return (
    <div>
      <TwoTitle />
      <LinkButton onClick={goToNextPage} />
    </div>
  );
};

export default SecondPage;
