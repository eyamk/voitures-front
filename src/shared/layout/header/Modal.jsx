import React from 'react';
import HeaderWrapper from './headerWrapper';

const Modal = ({ children, show, setShow }) => (
  show && (
    <HeaderWrapper>
      <div className="modal">
        <div className="modal-body">{children}</div>
      </div>
    </HeaderWrapper>
  )
);

export default Modal;
