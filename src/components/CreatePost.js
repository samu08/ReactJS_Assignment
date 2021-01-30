import React, { useState, useEffect } from 'react'  
import axios from 'axios';
import { useForm } from 'react-hook-form';
const CreatePost=(props)=>{

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios.post('  http://localhost:4000/employees', data).then(result => {
            props.history.push("/posts");
        })
    };
    return(

        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Enter your details</h3>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>first_name</label>
                            <input type="text" className="form-control" name="first_name" ref={register({ required: true })} />
                            
                        </div>
                        <div className="form-group">
                            <label>last_name</label>
                            <input type="text" className="form-control" name="last_name" ref={register({ required: true })} />
                        
                        </div>
                        <div className="form-group">
                            <label>email</label>
                            <input type="text" className="form-control" name="email" ref={register({ required: true })} />
                        
                        </div>
                        <div className="form-group">
                            <label>gender</label>
                            <input type="text" className="form-control" name="gender" ref={register({ required: true })} />
                            
                        </div>
                        <div className="form-group">
                            <label>status</label>
                            <input type="text" className="form-control" name="status" ref={register({ required: true })} />
                            
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default CreatePost;