import { Fragment } from "react";


function BinModal({handleDelete,id,job}) {
    
  return (
       <Fragment>
        
        <div className="modal fade" id="BinModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ban co muon xoa cong viec ?</h5><br></br>
                            <span>{job}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Huy</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>handleDelete(id)}>Xoa</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
  );
}

export default BinModal;
