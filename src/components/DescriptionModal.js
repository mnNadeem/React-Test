import React from "react";
import Modal from "./ResponsiveModal";
import Linkify from "react-linkify";
import FontAwesomeIcon from "./FontAwesomeIcon";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px;
  width: 600px;
`;

const SubContainer = styled.div`
  padding: 30px;
`;

const ModalTitle = styled.div`
  font-size: 28px;
  line-height: 28px;
  color: #333;
  font-weight: bold;
  text-align: center;
  margin: 0 30px 30px;
`;

const StyledScrollView = styled.div`
  height: 318px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const Description = styled.div`
  font-size: 15px;
  line-height: 27px;
  color: #333;
  white-space: pre-wrap;
  word-break: break-word;
`;

const CancelButtonContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
  cursor: pointer;
`;

const CancelButton = ({ onClick }) => (
  <CancelButtonContainer onClick={onClick}>X</CancelButtonContainer>
);

const DescriptionModal = ({ title, description, isVisible, onClose }) => {
  return (
    <Modal isVisible={isVisible} onBackdropClick={onClose}>
      <Container>
        <SubContainer>
          <ModalTitle>{title}</ModalTitle>
          <StyledScrollView>
            <Linkify
              properties={{ target: "_blank", rel: "noopener noreferrer" }}
            >
              <Description>{description}</Description>
            </Linkify>
          </StyledScrollView>
          <CancelButton onClick={onClose} />
        </SubContainer>
      </Container>
    </Modal>
  );
};

export default DescriptionModal;
