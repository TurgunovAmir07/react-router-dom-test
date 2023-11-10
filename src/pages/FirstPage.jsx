import React from "react";
import { OneTitle } from "../components/OneTitle";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";

const FirstPage = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/second-page");
  };
  return (
    <div>
      <OneTitle />
      <LinkButton onClick={goToNextPage} />
    </div>
  );
};

export default FirstPage;
