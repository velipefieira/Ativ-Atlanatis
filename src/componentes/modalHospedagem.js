import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import './static/style.css'
import { ModalTitle } from "react-bootstrap";

export default function hospedagemsModal({ hospedagem, handleClose }) {
  return (
    <Modal show={Boolean(hospedagem)} onHide={handleClose}>
      <Modal.Header closeButton>
        <ModalTitle> Detalhes da acomodação </ModalTitle>
      </Modal.Header>
      <Modal.Body>
        {hospedagem && (
          <>
          <div className="hospedagemModal">
            <h4>{hospedagem.titulo}</h4>
            <p>
            <a href={hospedagem.link} target="_blank" rel="noopener noreferrer">
              <img src={hospedagem.img} alt={hospedagem.titulo} />
            </a>
            </p>
            <h6>{hospedagem.desc}</h6>
          </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}