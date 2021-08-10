function ModalDelete({  handleDeleteFalse, handleDelete }) {
    return (
      <div className="alert alert-primary">
        <div>
          <p>Are you sure you want to delete the record?</p>
          <button onClick={handleDelete} type="button" className="btn btn-danger">Delete</button>
          <button onClick={handleDeleteFalse} type="button" className="btn btn-secondary">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default ModalDelete;