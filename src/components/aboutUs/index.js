import React, { Component } from "react";
import InfoIcon from '@material-ui/icons/Info';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PeopleIcon from '@material-ui/icons/People';
import "./style.css";

class AboutUs extends Component {
    render() {
        return  (
            <div className="about-us-section"> 
                <div className="about-us-title">
                    <h2 className="title">Acerca de Covid19APP</h2>
                    <p  className="subtitle">No pertenecemos a ninguna organizacion, nuestro objetivo es ayudar a las personas a mantenerse informadas del actual Sars-Covid19</p>
                </div>
                <div className="information-items-container">
                    <Grid container direction="row" justify="center" spacing={3}>
                        <Grid item lg={4}>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <PeopleIcon className="icon"/>
                                <h2 className="title">Uso Publico</h2>
                                <p className="subtitle">Nuestra aplicacion esta planeada para ser usada por todas las personas que lo deseen, de forma gratis</p>
                            </Box>
                        </Grid>
                        <Grid item lg={4}>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <InfoIcon className="icon"/>
                                <h2 className="title">Datos(API REST)</h2>
                                <p className="subtitle">Toda nuestra informacion pertenece a la API gratuita https://github.com/mathdroid/covid-19-api</p>
                            </Box>
                        </Grid>
                    
                    </Grid>
                </div>
            </div>
        )
    }
}

export default AboutUs;