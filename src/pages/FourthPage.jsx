import React from "react";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";
import { FourTitle } from "../components/FourTitle";

const FourthPage = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/fifth-page");
  };
  return (
    <div>
      <FourTitle />
      <LinkButton onClick={goToNextPage} />
    </div>
  );
};

export default FourthPage;
