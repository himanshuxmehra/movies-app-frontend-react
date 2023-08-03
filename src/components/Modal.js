import ReactModal from 'react-modal';
import React from 'react';
import styled from 'styled-components';

const StyledModal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 400px;
  width: 90%;
  outline: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      overlayClassName="modal-overlay"
    >
      <CloseButton onClick={onRequestClose}>&times;</CloseButton>
      {children}
    </StyledModal>
  );
};