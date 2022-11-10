/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const mdTheme = createTheme();

function DashboardContent() {

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>

        
        <MenuAdmin title={'USUÁRIOS'}/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 10, mb: 10}}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper sx={{ p: 4 }}>

                <h2>Formulário de cadastro</h2>
                <Grid container spacing={3}>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="nome"
                      name="nome"
                      label="Nome completo"
                      fullWidth
                      autoComplete="nome"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      autoComplete="email"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="labelTipo">Tipo</InputLabel>
                    <Select
                      labelId="labelTipo"
                      id="tipo"
                      // value={age}
                      // label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value={1}>Administrador</MenuItem>
                      <MenuItem value={2}>Funcionarios</MenuItem>
                    </Select>
                  </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      type="password"
                      id="senha"
                      name="senha"
                      label="Senha"
                      autoComplete="senha"
                      variant="standard"
                    />
                  </Grid>
                </Grid>

              </Paper>
            </Grid>

        
            </Grid>
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default function UsuarioCadastrar() {
return <DashboardContent />;
}