

import React from 'react';
import Contacto from '../components/Contacto';
import EducacionListContainer from './EducacionListContainer';
import TrabajoListContainer from './TrabajoListContainer';
import IdiomaListContainer from './IdiomaListContainer';
import CursoListContainer from './CursoListContainer';
import ConocimientoListContainer from './ConocimientoListContainer';
import HobbieListContainer from './HobbieListContainer';
import {Grid , Typography , Accordion , AccordionSummary , AccordionDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import './accordion.css';

const CVContainer =  ({datos:{contacto,presentacion,social,educacional,laboral,idiomas,cursos,conocimientos,hobbies}})  => {
    
    const useStyles = makeStyles((theme) => ({
        root: {width: '100%'}
    }));
    
    const classes = useStyles();

    return (
        
        <div className={classes.root}>
            <br/>
            <Grid container spacing={3}>
                <Grid item sm={12} md={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Contacto datos={contacto} presentacion={presentacion} social={social} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12} md={8}>
                    <Grid container spacing={3}  >
                        <Grid item xs={12}>
                            <Accordion elevation={5} className="accordion" >
                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}  >
                                    <Typography   variant="subtitle1" >
                                        FORMACIÓN
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails  >
                                    <EducacionListContainer datos={educacional}/>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion elevation={5} className="accordion"  >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="subtitle1" >
                                        IDIOMAS
                                    </Typography>
                                    
                                </AccordionSummary>
                                <AccordionDetails>
                                    <IdiomaListContainer datos={idiomas}/>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion elevation={5}  className="accordion" >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="subtitle1" >
                                        EXPERIENCIA LABORAL
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TrabajoListContainer datos={laboral}/>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion elevation={5}  className="accordion">  
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="subtitle1" >
                                        CURSOS
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <CursoListContainer datos={cursos}/>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12} >
                            <Accordion  elevation={5}  className="accordion" >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <Typography variant="subtitle1" >
                                        CONOCIMIENTOS
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className={classes.root}>
                                        <ConocimientoListContainer datos={conocimientos}/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion  elevation={5}  className="accordion"  >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="subtitle1" >
                                        OTROS INTERESES
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails  >
                                    <div className={classes.root}>
                                        <HobbieListContainer datos={hobbies}  className="accordion"  />
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <br/>
        </div>
    )
};
export default CVContainer;