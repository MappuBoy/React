import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { Avatar, Grid, Paper,Typography,TextField,Box ,Button} from "@mui/material";
import React from "react";
const Signup = () =>{
    const papreStyle={padding :20,width:300,margin:"0 auto"}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    return(
        <Grid>
            <Paper style={papreStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><ControlPointOutlinedIcon/></Avatar>
                <h2 style={headerStyle}>Sign in</h2>
                <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField required id="txtname" label="name"/>
        <TextField required id="txtemail" label="email"/>
        <TextField required id="password" label="password"/>
        <TextField required id="conpassword" label="Conform password"/>
      </div>
      </Box>
      <Button type='submit' variant='contained' color='primary'>Sign up</Button>
            </Paper>
        </Grid>
    )
}
export default Signup;