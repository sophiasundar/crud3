import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TableStu from "./Student/Students";


import { useNavigate } from 'react-router';

const Dashboard=()=>{ 
    const navigate = useNavigate()
    return(
        <>
         
         
        <Container sx={{display: 'flex', marginTop: "90px" }}>

            <Card sx={{ maxWidth: 345, marginLeft: "140px"  }}>
           
                <CardHeader sx={{text: "center",marginLeft: "60px"}}
                        title="STUDENT LIST"/>

                <CardMedia
                    component="img"
                    height="200"
                    image="https://www.nicepng.com/png/detail/126-1269371_student-list-icon-png.png"
                    alt="Card image cap"
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                       This card directs to students list you can edit, delete and update students profile, click studentlist  button to 
                       see list of students.
                    </Typography>
                </CardContent>

                <CardActions disableSpacing sx={{marginLeft: "70px"}}>
                <Button variant="contained"  sx={{ color: '#fff' }}
                                onClick={()=>{
                                    navigate('/studentlist')
                                }}
                        >
                            STUDENT DASHBOARD
                        </Button>
                    
                </CardActions>
      
            </Card>

            <Card sx={{ maxWidth: 345, marginLeft: "200px"  }}>
           
                <CardHeader sx={{text: "center",marginLeft: "60px"}}
                        title="TEACHER LIST"/>

                <CardMedia
                    component="img"
                    height="200"
                    image="https://www.nicepng.com/png/detail/126-1269371_student-list-icon-png.png"
                    alt="Card image cap"
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This card directs to teachers list you can edit, delete and update teachers profile, click teacherlist  button to 
                       see list of teachers.
                    </Typography>
                </CardContent>

                <CardActions disableSpacing sx={{marginLeft: "70px"}}>
                <Button variant="contained"  sx={{ color: '#fff' }}
                                onClick={()=>{
                                    navigate('/teacherlist')
                                }}
                        >
                           TEACHER DASHBOARD 
                        </Button>
                    
                </CardActions>
      
            </Card>

        </Container>
        <TableStu></TableStu>
            

        </>
    )
}
export default Dashboard