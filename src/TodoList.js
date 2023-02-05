import {  useState } from "react";
import TaskList from "./TaskList.js";

function TodoList() {
    const [jobs,setJobs]=useState([]);
    const [job,setJob]=useState([]);

    const handleAdd=()=>{
        setJobs(prev=>[...prev,{id:jobs.length+1,job:job,isEditintg:false,status:false,isDelete:false}]);
        setJob('');
    }
    const handleDelete=(id)=>{
        const removeItem=jobs.filter((job)=>{
            if(job.id===id) job.isDelete=true;
            return job;
        })
        setJobs(removeItem);
    }
    const handleDeleteForever=(id)=>{
        const removeItem=jobs.filter((job)=>{
            return job.id!==id;
        })
        setJobs(removeItem);
    }
    const handleRestore=(id)=>{
        const removeItem=jobs.filter((job)=>{
            if(job.id===id) job.isDelete=false;
            return job;
        })
        setJobs(removeItem);
    }
    const handleEdit=(id,isEditing)=>{
        isEditing=!isEditing;
        const editItem=jobs.filter((job)=>{
            if(job.id===id) job.isEditing=isEditing;
            return job; 
        })
        setJobs(editItem);

    }
    const handleUpdateEdit=(id,value)=>{
        const updateItem=jobs.filter((job)=>{
            if(job.id===id) {
                job.job=value;
                job.isEditing=false;
            }
            return job; 
        })
        setJobs(updateItem);
    }
    const handleStatus=(id)=>{
        const updateItem=jobs.filter((job)=>{
            if(job.id===id) {
                job.status=!job.status;
            }
            return job; 
        })
        setJobs(updateItem);
    }
    const handleDeleteAll=()=>{
        setJobs([]);
    }


    return (
    <div className="container py-5 h-100" style={{marginTop:'50px'}}>
        <div className="card">
            <div className="card-body p-5">
                <div className="row text-center">
                    <h1 className="title">TodoList</h1>
                </div>
                
                <div className="row">
                    <div className="col-6 input-group mb-3">
                        <input type="text" className="form-control" placeholder="Action" 
                            value={job}
                            onChange={e => setJob(e.target.value)}
                            >
                        </input>
                        <button type="button" className="btn btn-primary" onClick={handleAdd}>
                            <svg style={{width:"25px",height:"25px",fill:"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="card" style={{marginTop:"20px"}}>
            {jobs.length?
            <div className="card-body p-5">
                <TaskList jobs={jobs} handleDelete={handleDelete} handleDeleteAll={handleDeleteAll} handleRestore={handleRestore}
                    handleEdit={handleEdit} handleUpdateEdit={handleUpdateEdit} handleStatus={handleStatus} handleDeleteForever={handleDeleteForever}/>
                
            </div>
            :
            <div className="col-12 d-flex justify-content-center">
                <img alt="Your list is empty" className="" style={{width:'400px',height:'400px'}} src="https://todo-app.erfjs.com/static/media/empty.c73c3c1281547d8e56d1a55dd92a682b.svg"></img>
                
            </div>  
            }
        </div> 
    </div>
    );
}

export default TodoList;
