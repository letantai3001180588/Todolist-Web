import { Fragment } from "react";


function DeleteModal({handleDelete,id,job}) {
    
    return (
        <Fragment>
            <div className="modal fade" id="DeleteModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Do you want to delete this job ?</h5><br></br>
                        </div>
                        <div className="modal-body text-center">
                            <span>{job}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>handleDelete(id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default DeleteModal;
