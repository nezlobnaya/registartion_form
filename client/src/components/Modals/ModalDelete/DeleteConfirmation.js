import { Modal, Button } from "react-bootstrap";
 
const DeleteConfirmation = ({ showModal, hideModal, confirmModal, id, message }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
        {message === "Record deleted successfully!" ? 
          null:
        <Modal.Footer>
          <Button variant="danger" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="outline-danger" onClick={() => confirmModal(id) }>
            Delete
          </Button>
        </Modal.Footer>
        }
      </Modal>
    )
}
 
export default DeleteConfirmation;

