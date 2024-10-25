/* eslint-disable react/prop-types */
import React from "react";
import { Modal } from "react-bootstrap";

const ResModal = ({ modalId, isOpen, onClose, modalContent, title }) => {
  return (
    <Modal
      id={modalId}
      show={isOpen}
      onHide={onClose}
      size="lg"
      dialogClassName="modal-lg"
    >
      <div className="modal-content">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-sm-12">{modalContent && modalContent()}</div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ResModal;
