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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
  } 
  const navigate  = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    /*console.log({
      email: data.get('email'),
      password: data.get('password'),
    });*/
    axios.post('http://localhost:5000/signup', values)
    .then(res => {
        navigate('/login');
    })
    .catch(err => console.log(err));
  };

  

  return (
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
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                margin="normal"
                required
                fullWidth
                style={{ fontFamily:'"serif garamond"' }}
                id="username"
                label="Username"
                onChange={handleInput}
                name="username"
                autoComplete="username"
                autoFocus
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={handleInput}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  onChange={handleInput}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm Password"
                  type="confirm-password"
                  id="confirm-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}