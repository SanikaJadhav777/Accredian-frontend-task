import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LogIn() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
  } 
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/login', values)
    .then(res => {
        console.log(res);
        if(res.data === "Success") {
          alert("Login Successfully");
        }
        else{
          alert("Try Again");
        }
    })
    .catch(err => console.log(err));
    //validation([data.get('user_or_email'), data.get('password')]);
  };
   

  return (
    <FormControl action='' onSubmit={handleSubmit}> 
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} style={{ width: '50px', height: '50px', backgroundColor: '#da2c38'}}>
            <LockOutlinedIcon style={{ fontSize: '2rem' }} />
          </Avatar>
          <Typography component="h1" variant="h5" style={{fontFamily: '"serif garamond"', fontWeight: '800'}}>
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              style={{ fontFamily:'"serif garamond"' }}
              id="user_or_email"
              label="Username Or Email Address"
              onChange={handleInput}
              name="user_or_email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              style={{ fontFamily:'"serif garamond"' }}
              name="password"
              label="Password"
              onChange={handleInput}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              style={{ fontFamily:'"serif garamond"' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:'#38a3a5' }}
              style={{ fontFamily: '"serif-garamond"'}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
    </FormControl>

  );
}