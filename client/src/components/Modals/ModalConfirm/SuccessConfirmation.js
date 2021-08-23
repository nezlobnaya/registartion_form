import { Modal, Button } from "react-bootstrap";
 
const SuccessConfirmation = ({ showModal, hideModal, message }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>All set!</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-primary">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => hideModal() }>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
 
export default SuccessConfirmation;

