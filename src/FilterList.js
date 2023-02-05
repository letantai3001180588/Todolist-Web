import { Fragment} from "react";


function FilterList({jobs,filter,setFilter,Filter_Map,Filter_Name,handleDeleteAll,handleDeleteForever,handleRestore}) {

    return (
        <div className="row" style={{marginBottom:"50px"}}>
                <div className="col-lg-6 col-sm-12">
                    {Filter_Name.map((jobs,index)=>(
                        <div className="form-check form-check-inline" key={index}>
                            <input className="form-check-input" type="radio" name="sort" id={Filter_Name[index]} value="option1" checked={filter===Filter_Name[index]}  onChange={()=>setFilter(Filter_Name[index])}/>
                            <label className="form-check-label" htmlFor={Filter_Name[index]}>Show {Filter_Name[index]}</label>
                        </div>
                    ))}
                </div>
                

            
            <div className="modal fade" id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5 className="modal-title" id="exampleModalLabel">Ban co muon xoa het cong viec ?</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Huy</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDeleteAll} >Xoa</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="BinModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="float-center" id="exampleModalLabel">Recycling</h5>
                        </div>
                        <div className="modal-body">
                                {jobs.map((job,i)=>(
                                    <div key={i}>
                                        {job.isDelete? 
                                        <div className="col-12">
                                            <div  className="alert float-start alert-primary col-10" role="alert" style={{marginBottom:"5px",width:"95%"}}>
                                                {job.job}
                                                <div className="float-end" onClick={()=>handleRestore(job.id)}>
                                                    <svg style={{width:"25px",height:"25px",fill:"darkgreen"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                        <path d="M53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32zm70.11-175.8l89.38-94.26a15.41 15.41 0 0 1 22.62 0l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8H256v112a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V320h-57.37c-14.26 0-21.4-18.18-11.32-28.8zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col-2 float-end" style={{marginTop:"15px",marginRight:"-60px"}} data-bs-dismiss={jobs.length<2?"modal":""} onClick={()=>handleDeleteForever(job.id)}>
                                                <svg style={{width:"20px",height:"20px",fill:"#dc3545"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                                                </svg>
                                                
                                            </div>
                                        </div>
                                        :""}
                                    </div>
                                ))}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Huy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterList;
