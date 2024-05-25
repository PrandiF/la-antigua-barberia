import "./ModalCl.scss";
import { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Reveal from "../Reveal";

const ModalCl = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // variant="light"

  return (
    <div className="modalCliente">
      <button onClick={handleShow} className="button1">
        CLIENTES
      </button>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header  onClick={handleClose}>
          <div className="headerContainer">
            <IoClose className="closeModalButton" onClick={handleClose} />
          </div>
        </Modal.Header>
        <img src="./laAntiguaLogo.png" alt="img2" className="logo"></img>
        <Row className="two-columns-grid"  onClick={handleClose}>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./cliente1.png" alt="img1"></img>
              </Modal.Body>
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./cliente2.png" alt="img2"></img>
              </Modal.Body>
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./cliente3.png" alt="img3"></img>
              </Modal.Body>
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./cliente4.png" alt="img4"></img>
              </Modal.Body>
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./cliente7.png" alt="img7"></img>
              </Modal.Body>
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./cliente5.png" alt="img5"></img>
              </Modal.Body>
            </Reveal>
          </Col>
          <Col md={6}>
            <Reveal>
              <Modal.Body>
                <img src="./cliente6.png" alt="img6"></img>
              </Modal.Body>
            </Reveal>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default ModalCl;
