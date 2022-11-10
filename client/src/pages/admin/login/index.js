import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import api from '../../../services/api';
import {setNomeUsuario, login, setIdUsuario, setTipoUsuario } from '../../../services/auth';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        JCF Autoparts
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

const [ email, setEmail ] = useState('');
const [ senha, setSenha ] = useState('');
const [ showPassword, setShowPassword ] = useState(false);


async function handleSubmit(){
        
    await api.post('/api/usuarios/login',{email,senha})
    .then(res => {
        if(res.status===200){
            if(res.data.status===1){
                login(res.data.token);
                setIdUsuario(res.data.id_client);
                setNomeUsuario(res.data.user_name);
                setTipoUsuario(res.data.user_type);

                window.location.href= '/admin'
            }else if(res.data.status===2){
                alert('Atenção: '+res.data.error);
            }
            // setLoading(false);
        }else{
            alert('Erro no servidor');
            // setLoading(false);
        }
    })
}
  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Digite seu email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Digite sua senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={senha}
            onChange={e => setSenha(e.target.value)}
            /> */}

        <FormControl fullWidth variant="standard">
          <InputLabel htmlFor="campoSenha">Digite sua senha</InputLabel>
          <Input
            id="campoSenha"
            type={showPassword ? 'text' : 'password'}
            value={senha}
            onChange={e => setSenha(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={e => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
            
            <Button
              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            
            >
              Entrar
            </Button>
            
          </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}