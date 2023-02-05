import {  useState } from "react";
import DeleteModal from "./DeleteModal";
import FilterList from "./FilterList";

function TaskList({jobs,handleDelete,handleEdit,handleUpdateEdit,handleStatus,handleDeleteAll,handleDeleteForever,handleRestore}) {
  
    const [jobCurrent,setJobCurrent]=useState([]);
    const [jobIdCurrent,setJobIdCurrent]=useState([]);
    const [edit,setEdit]=useState([]);
    const [filter,setFilter]=useState('All');

    const Filter_Map={
        All:()=>true,
        Pending:(jobs)=>!jobs.status,
        Complete:(jobs)=>jobs.status,
    }
    const Filter_Name=Object.keys(Filter_Map);

  return (
    <div className="col-12">
        
            <FilterList handleRestore={handleRestore} handleDeleteForever={handleDeleteForever} jobs={jobs} handleDelete={handleDelete} handleDeleteAll={handleDeleteAll} filter={filter} setFilter={setFilter} Filter_Map={Filter_Map} Filter_Name={Filter_Name}/>

            <table className="table table-bordered" >
                <thead className="text-center">
                    <tr>
                        <td className="col-1">STT</td>
                        <td className="col-5">Danh sach cong viec</td>
                        <td className="col-2">Trang thai</td>
                        <td className="col-4" colSpan={3}>Tuy chon</td>
                    </tr>
                </thead>
                <tbody>
                    {jobs.filter(Filter_Map[filter]).filter((jobs)=>(!jobs.isDelete)).map((job,index)=>(
                            <tr key={index} style={job.status?{opacity:0.8}:{}}>
                                <td className="col-1  text-center">{index+1}. </td>
                                <td className="col-9" >
                                    <div className="row g-3">
                                        <div className="col" style={{marginLeft:"50px"}}>
                                                {job.isEditing?
                                                    <span>
                                                        <input type="text" onChange={(e)=>setEdit(e.target.value)} defaultValue={job.job} style={{width:"200px"}}/>                             
                                                        <span onClick={()=>handleUpdateEdit(job.id,edit)}>
                                                            <svg style={{width:"25px",height:"25px",fill:"lightgreen",marginLeft:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                <path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"/>
                                                            </svg>
                                                        </span>
                                                        <span onClick={()=>handleEdit(job.id,job.isEditing)}>
                                                            <svg style={{width:"25px",height:"25px",fill:"#dc3545",marginLeft:"10px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"/></svg>
                                                        </span>
                                                    </span>
                                                    :<span style={job.status?{textDecoration:'line-through'}:{}}> {job.job}</span>
                                                }

                                        
                                        </div>
                                    </div>
                                </td>
                                <td className="col-1 text-center">
                                    {job.status?<div style={{color:'black',fontWeight:"bold"}}>Hoan thanh</div>:"Chua xong"}
                                </td>
                                <td className="col-1">
                                    <div className="d-flex justify-content-center">
                                        {job.status
                                        ?<div style={{marginLeft:"10px"}} onClick={()=>handleStatus(job.id)}>
                                            <svg style={{width:"25px",height:"25px",fill:"lightgray"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/>
                                            </svg>
                                        </div>
                                        :<div style={{marginLeft:"10px"}} onClick={()=>handleStatus(job.id)}>
                                            <svg style={{width:"25px",height:"25px",fill:"lightgreen"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                            </svg>
                                        </div>} 

                                        <div style={{marginLeft:"10px"}} onClick={job.isEditing?"":()=>handleEdit(job.id,job.isEditing)}>
                                            <svg style={job.isEditing?{width:"25px",height:"25px",opacity:0.5}:{width:"25px",height:"25px",fill:"#ffc107"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                                            </svg>
                                        </div>
                                        <div style={{marginLeft:"10px"}} data-bs-toggle="modal" data-bs-target="#DeleteModal" onClick={()=>(setJobCurrent(job.job),setJobIdCurrent(job.id))}>
                                            <svg style={{width:"25px",height:"25px",fill:"rgb(232 12 56)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                        
                    ))}
                </tbody>
            </table>

            <DeleteModal handleDelete={handleDelete} id={jobIdCurrent} job={jobCurrent}/>
            
    
        
    </div>
  );
}

export default TaskList;
