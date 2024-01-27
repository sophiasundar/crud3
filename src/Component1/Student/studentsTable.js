 import TableStu from "./Students";
 import Context from "../Provider";
 import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';


const studentsTable = ()=> {
    const ContextData= useContext(Context)
    // const navigate = useNavigate();
          return(
             <>
                <TableStu data={ContextData.students}/>
             
             </>
          )
}

export default studentsTable ;