import React, {useState} from 'react';
import CVContainer from './containers/CVContainer';
import Data from  './datos/CV.json';
import {Paper, Grid, CssBaseline} from "@material-ui/core";
import {ThemeProvider,createMuiTheme} from "@material-ui/core/styles";
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './iconos.css';

function App () {
  const [darkMode, setDarkMode] = useState(true)
  const theme = createMuiTheme({
    palette:{
      type: darkMode ? "dark": "light",
      primary:{main:"#616161"}, 
      secondary:{main:"#616161"}
    }
  })
  const handleDarkMode = ()=>{
    setDarkMode(!darkMode)
  }

  const useStyles = makeStyles((theme) => ({
    root: {flexGrow: 1},
    title: {
      flexGrow: 1,  
      textAlign:"center",
      [theme.breakpoints.up("md")]:{textAlign:"left"}
    },
    offset: theme.mixins.toolbar,
      }));
  
  const classes = useStyles();

  return (
    <div  >
      <CssBaseline/>
      <ThemeProvider theme = {theme}> 
        <Paper elevation={10}  > 
          <AppBar position="sticky"  color="secondary"   elevation={5}  > 
              <Toolbar>
                  <Typography variant="h4" className={classes.title}  >
                    {Data.personal.nombre} {Data.personal.apellido}
                  </Typography>
                  <IconButton onClick = {handleDarkMode}  >
                      <Brightness4OutlinedIcon className="agrandar" />
                  </IconButton>
              </Toolbar>
          </AppBar>
          <Grid container >
            <Grid item xs={12} >
              <CVContainer datos={Data} />
            </Grid>
          </Grid>
        </Paper> 
      </ThemeProvider> 
    </div>
  )
}

export default App;
