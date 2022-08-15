import '../assets/styles/cr-modal.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import CrForm from './CrForm';

const CrModal = ({ onChange }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (info) => {
    onChange(info);
  };

  return (
    <>
      <i className='fa-solid fa-pen-to-square' onClick={handleShow} role='button'></i>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Change info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CrForm onChange={handleSubmit} classColor='form__txt--dark'></CrForm>
        </Modal.Body>
        <Modal.Footer>
          <button className='modal__close' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

CrModal.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CrModal;
