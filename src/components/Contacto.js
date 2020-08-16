import React from 'react';
import { Avatar, makeStyles,Box ,Typography} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn'; 
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import imgPerfil from '../images/imgPerfil.jpg';
import './avatar.css';
import '../iconos.css';

const useStyles= makeStyles(
    {
        md:{
            width:120,
            height:120
        },
        lg:{
            width:200,
            height:200,
        },
        center:{
            textAlign:'center'
        }
    }
)

const Contacto = ({datos,presentacion,social}) => {
    const classes = useStyles();
    return (
        <div >
            <Typography component={'span'} variant="body1">
                <Box display="flex" justifyContent="center" >
                    <div className="avatarDiv">
                        <Avatar alt="imgContacto"   
                                className={`${classes.lg} ${'avatar'}` }  
                                src={imgPerfil} 
                                />
                    </div>
                </Box>
                <Box  className={classes.center}  m={1} justifyContent="center">
                    {presentacion}
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
                    <IconButton  href= {social.facebook} target="_blank" >
                        <FacebookIcon className="agrandar"/>
                    </IconButton>
                    <IconButton href={social.instagram} target="_blank">
                        <InstagramIcon className="agrandar"/>
                    </IconButton>
                    <IconButton href={social.linkedin} target="_blank">
                        <LinkedInIcon className="agrandar"/>
                    </IconButton>
                </Box>
            </Typography>
        </div>
    );
};

export default Contacto;