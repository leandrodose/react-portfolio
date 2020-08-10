import React from 'react';
import { Avatar, makeStyles,Box } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn'; 
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import imgPerfil from '../images/imgPerfil.jpg';

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

const Contacto = ({datos,objetivo,social}) => {
    const classes = useStyles();
    return (
        <div >
            <Box display="flex" justifyContent="center" >
                <Avatar alt="imgContacto"   className={classes.lg} src={imgPerfil} />
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
                <IconButton href= {social.facebook} >
                    <FacebookIcon />
                </IconButton>
                <IconButton href={social.instagram}>
                    <InstagramIcon/>
                </IconButton>
                <IconButton href={social.linkedin}>
                    <LinkedInIcon/>
                </IconButton>
            </Box>
        </div>
    );
};

export default Contacto;