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
                    <p className="title-data-information confirmed-color">Confirmed Cases</p>
                    <Box display="flex" alignItems="center" justifyContent="center" className="data-confirmed">
                        <HotelIcon className="icon" />
                        <p className="value">{this.props.information.confirmed}</p>
                    </Box>
                </div>
                <div className="data-information-item">
                    <p className="title-data-information deadths-color">Deadths</p>
                    <Box display="flex" alignItems="center" justifyContent="center" className="data-deaths">
                        <SentimentVeryDissatisfiedIcon className="icon" />
                        <p className="value">{this.props.information.deadths}</p>
                    </Box>
                </div>
                <div className="data-information-item">
                    <p className="title-data-information recovery-color">Recovery</p>
                    <Box display="flex" alignItems="center" justifyContent="center" className="data-recovery">
                        <InsertEmoticonIcon className="icon" />
                        <p className="value">{this.props.information.deadths}</p>
                    </Box>
                </div>
            </Box>
        );
    }
}

export default MapResult;