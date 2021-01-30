import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditPost = (props) => {
    const { id } = useParams();
    const { register, handleSubmit, errors, setValue } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:4000/employees/${id}`).then(result => {
            setValue("id", result.data.id);
            setValue("first_name", result.data.first_name);
            setValue("last_name", result.data.last_name);
            setValue("email", result.data.email);
            setValue("gender", result.data.gender);
            setValue("status", result.data.status);
        })
    }, [id]);

    const onSubmit = data => {
        axios.put(`http://localhost:4000/employees/${id}`, data).then(result => {
            props.history.push("/posts");
        })
    };

    return(

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Novo Post</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                            <label>ID</label>
                            <input type="text" readOnly className="form-control" name="id" ref={register({ required: true })} />
                        </div>
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

                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default EditPost;