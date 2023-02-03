import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

// import { withResponsive } from 'util/Responsive';

const StyledModal = styled(Modal)`
  :focus {
    outline: none;
  }
`;

const ResponsiveModal = ({
  children,
  isVisible,
  onBackdropClick,
  fullScreen,
  style,
  isPhone,
  ...rest
}) => {
  return (
    <StyledModal
      isOpen={isVisible}
      onRequestClose={onBackdropClick}
      htmlOpenClassName="ReactModal__Html--open"
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflowY: 'auto',
          ...(style && style.overlay),
        },
        content: {
          position: 'absolute',
          borderRadius: '5px',
          width: isPhone ? '100%' : 'auto',
          ...(fullScreen && {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 0,
          }),
          ...(style && style.content),
        },
      }}
      {...rest}
    >
      {children}
    </StyledModal>
  );
};

Modal.setAppElement('#root');

export default ResponsiveModal;
