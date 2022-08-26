import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar,Paper, Grid,Box,TextField,Typography,Link, Button} from "@mui/material"
import React from "react"

const Login=({handleChange})=>{

    const papreStyle = {padding :20,height:'83vh',width:300,margin:"0 auto"}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const btnStyle={margin:'8px 0'}
    return (
       <Grid>
        <Paper style={papreStyle}>
            <Grid align='center'>
           <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Login</h2>
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
        <TextField
          required
          id="txtusername"
          label="Usename"
        />
        <TextField
        required
          id="txtpass"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
      </Box>
      <Typography  variant="caption" display="block" gutterBottom> Do you have an account ?
        <Link href="#" onClick={()=>handleChange("event",1)} >
            create a account            
        </Link>
       </Typography>
       <Button type='submit' colour='primary' variant='contained' style={btnStyle} fullWidth > login</Button>
            

             
        </Paper>
        
       </Grid>

    );
}
export default Login;