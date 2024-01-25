import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { useNavigate } from 'react-router';



const NavBarMUI=()=>{
    const navigate = useNavigate()
    return(
    

    <Box sx={{ display: 'flex', marginBottom: "10px" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
        
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Student-Teacher Profile
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
           
              <Button  sx={{ color: '#fff' }}
                    onClick={()=>{
                        navigate('/')
                            }}
              >
              DASHBOARD
              </Button>
              <Button  sx={{ color: '#fff' }}
                    onClick={()=>{
                        navigate('/addstudent')
                    }}
              >
                  ADD STUDENT
              </Button>
              <Button  sx={{ color: '#fff' }}
                   onClick={()=>{
                    navigate('/addteacher')
                }}
              >
                ADD TEACHER
              </Button>

          </Box>
          </Toolbar>
      </AppBar>
      </Box>
    
    
    )
}

export default NavBarMUI