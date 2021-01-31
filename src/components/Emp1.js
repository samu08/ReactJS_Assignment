import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Link ,useHistory} from 'react-router-dom';





const Emp1=()  =>{


  let history = useHistory();
  
 
  const [Data, setData] = useState([]);
  


    useEffect(() => {
      axios.get('http://localhost:4000/employees').then(result => {
          setData(result.data);
      })
  }, []);
   

  
  

  const deleteUser = id =>{ setData(Data.filter(user => user.id !== id));
    console.log(Data)
    history.push('/posts')
  }

   
  
  return(
    
      <div>
          <h1>Hello there!</h1>
     
          <table class="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>status</th>
        <th>gender</th>
      </tr>
    </thead>
    <tbody>
          {
       Data.map(item=>{
         return <tr key={item.id}>
           <td>{item.first_name}</td> 
           <td>{item.last_name}</td>
           <td>{item.email}</td>
           <td>{item.status}</td>
           <td>{item.gender}</td>
           
           <Link to={`/edit/${item.id}`} className="btn btn-primary" >edit</Link>
           <button  type="button" class="btn btn-danger" onClick={()=> deleteUser(item.id)}>delete</button>
          
         
           </tr>
       }
    
       )
          }
          </tbody>
          </table>
      </div>
    
  )



  }
    export default Emp1