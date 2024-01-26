
import Context from "../Context";
import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const TableStu = (data)=>{
    const ContextData = useContext(Context);
    //   const navigate = useNavigate();
      const handleDelete=(student)=>{
        ContextData.setStudents(ContextData.students.filter((e)=>student.id!==e.id))
    }
    // students.name etc 
    return(
      <>
                    <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">BATCH</th>
                <th scope="col">YEAR</th>
                <th scope="col">VIEW</th>
                <th scope="col">EDIT</th>
                <th scope="col">DELETE</th>
                </tr>
            </thead>
            <tbody>
            {data.map((student)=> {
                return(
                <>
                <tr key ={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.batch}</td>
                <td>{student.year}</td>
                <td><IconButton size="small">
                    <VisibilityIcon fontSize="small" sx={{color: "#f44336"}} 
                       
                    />
                    </IconButton></td>
                <td><IconButton size="small">
                    <EditIcon fontSize="small"  
                    
                    />
                    </IconButton></td>
                <td><IconButton size="small">
                    <DeleteIcon fontSize="small" sx={{color: "#aa2e25"}}
                         onClick={()=>handleDelete(student)}
                    />
                    </IconButton></td>
                </tr>
                </>
            )} )}
            </tbody>
            </table>
      </>
    )
}

export default TableStu