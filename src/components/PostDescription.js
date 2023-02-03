import React, { useState } from "react";
import styled from "styled-components";
import DescriptionModal from "./DescriptionModal";

const ViewProfileButton = styled.div`
  width: 122px;
  height: 26px;
  background: linear-gradient(91.9deg, #5863f8 8.87%, #6c63ff 99.29%);
  border-radius: 34.4381px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  color: chartreuse;
`;

const PostDescription = ({ title, description }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ViewProfileButton onClick={() => setShowModal(true)}>Show</ViewProfileButton>
      <DescriptionModal
        isVisible={showModal}
        title={title}
        description={description}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default PostDescription;
