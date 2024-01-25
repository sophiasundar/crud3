import { useContext } from 'react';
// import { useNavigate } from 'react-router';
import Context from '../Context';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';

 
  const StudentList=({datas})=>{
     const ContextData = useContext(Context)
     

    //  const navigate = useNavigate()

     const handleDelete=(stud)=>{
        ContextData.setStudents(
            ContextData.students.filter(
                (e)=>stud.id!==e.id)
            )
     }
      console.log(ContextData)
    return(
      <>
            <div className="App">
            
            <Card sx={{ width: "310px", marginBottom: "20px" }}> 
            
        
             { datas.map((stud)=>
            <CardHeader 
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="id">
                    {stud.id}
                </Avatar>
                }

            />
            
            )}

            <Button variant="contained"
               datas={ContextData.students}
            >cards</Button>

                  {handleDelete()}
            </Card>
             
            </div>
      </>
    )

  }

  export default StudentList;