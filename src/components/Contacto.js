import React from 'react';
import { Avatar, makeStyles,Box } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn'; 
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
const useStyles= makeStyles(
    {
        md:{
            width:80,
            height:80
        },
        lg:{
            width:200,
            height:200
        },
        center:{
            textAlign:'center'
        }
    }
)

const Contacto = ({datos,objetivo}) => {
    const classes = useStyles();
    return (
        <div >
            <Box display="flex" justifyContent="center" >
                <Avatar alt="imgContacto"   className={classes.lg} src="/images/imgPerfil.jpg" />
            </Box>
            <Box className={classes.center}  m={1} justifyContent="center">
                 {objetivo}
            </Box>
            <Box className={classes.center} m={1}>
                 {datos.telefono_celular}
            </Box>
            <Box className={classes.center} m={1}>
                 {datos.email}
            </Box>
            <Box className={classes.center} m={1}>
                 {datos.residencia}
            </Box>
            <Box display="flex" justifyContent="center" >
                <IconButton href="https://www.facebook.com/leandro.dose" >
                    <FacebookIcon />
                </IconButton>
                <IconButton href="https://www.instagram.com/leandro.dose">
                    <InstagramIcon/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/leandro-dose-85897891/">
                    <LinkedInIcon/>
                </IconButton>
            </Box>
        </div>
    );
};

export default Contacto;