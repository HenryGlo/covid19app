import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import HotelIcon from '@material-ui/icons/Hotel';
import CountryFlag from "../countryFlag/index"

class MapResult extends Component {
    render() {
        return(
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                <CountryFlag country={this.props.country} className="country-flag"/>
                <div className="data-information-item">
                    <p className="title-data-information confirmed-color">Casos confirmados</p>
                    <Grid className="data-confirmed" container direction="row" alignItems="center" justify="center" spacing={3}>
                        <Grid item lg={6}>
                            <HotelIcon className="icon" />
                        </Grid>
                        <Grid item lg={6}>
                            <p className="value">{this.props.information.confirmed.toLocaleString()}</p>
                        </Grid>
                    </Grid>    
                </div>
                <div className="data-information-item">
                    <p className="title-data-information deadths-color">Muertes</p>
                    <Grid className="data-deaths" container direction="row" alignItems="center" justify="center" spacing={3}>
                        <Grid item lg={6}>
                            <SentimentVeryDissatisfiedIcon className="icon" />
                        </Grid>
                        <Grid item lg={6}>
                            <p className="value">{this.props.information.deadths.toLocaleString()}</p>
                        </Grid>
                    </Grid>   
                </div>
                <div className="data-information-item">
                    <p className="title-data-information recovery-color">Recuperados</p>
                    <Grid className="data-recovery" container direction="row" alignItems="center" justify="center" spacing={3}>
                        <Grid item lg={6}>
                            <InsertEmoticonIcon className="icon" />
                        </Grid>
                        <Grid item lg={6}>
                            <p className="value">{this.props.information.recovered.toLocaleString()}</p>
                        </Grid>
                    </Grid>  
                </div>
            </Box>
        );
    }
}

export default MapResult;