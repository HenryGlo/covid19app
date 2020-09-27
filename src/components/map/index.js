import React, { Component } from "react";
import axios from 'axios';
import country from "world-map-country-shapes";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Grid from '@material-ui/core/Grid';
import MapResult from "../mapResult/index";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import "./styles.css"
class Map extends Component {
    state = {
        selectedCountries: {},
        actualCountry: "",
        covidInformation: {},
        requestOn: true,
        
    };
    componentDidMount() {
        this.setState({
            selectedCountries: {
                "VE": true
            },
            actualCountry: "VE"
        })
        axios.get("https://covid19.mathdro.id/api/countries/VE").then(res => {
            console.log(res)
            this.setState({
                covidInformation: {
                    confirmed: res.data.confirmed.value,
                    deadths: res.data.deaths.value,
                    recovered: res.data.recovered.value,
                },
                requestOn: false,
            });
        }).catch(err => {
            // what now?
            console.log(err);
        })
        
    }
    toggleCountry = country => {
        const { selectedCountries } = this.state;
        this.setState({
            selectedCountries: {
                [country.id]: !selectedCountries[country.id]
            },
            actualCountry: country.id,
            requestOn: true
        });
        axios.get("https://covid19.mathdro.id/api/countries/"+country.id).then(res => {
            console.log(res)
            this.setState({
                covidInformation: {
                    confirmed: res.data.confirmed.value,
                    deadths: res.data.deaths.value,
                    recovered: res.data.recovered.value,
                },
                requestOn: false,
            });
        })
    };
  
  render() {
    const { selectedCountries } = this.state;
    let actualCountry = this.state.actualCountry
    let dataInformation = this.state.covidInformation
    let pendingRequest = this.state.requestOn
    console.log( pendingRequest)
    const mapCountries = country.map(country => (
      <path
        key={country.id}
        d={country.shape}
        style={{
          fill: this.state.selectedCountries[country.id] ? "tomato" : "#eee",
          cursor: "pointer",
          stroke: "#000"
        }}
        onClick={() => this.toggleCountry(country)}
      />
    ));
    return (
        <React.Fragment>
            <Grid container direction="row" justify="center" spacing={3}>
                <Grid item lg={10}>
                    <div className="title-container">
                        <LocalHospitalIcon className="icon" />
                        <h1 className="title">Covid19 Consulta por Pais</h1>
                        <p className="subtitle">Haz click en un pais para obtener informacion acerca de su situacion con el Covid19</p>
                    </div>
                    <Grid container direction="row" justify="center" spacing={3}>
                        <Grid item lg={8} className="map-container">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="600px"
                                width="100%"
                                viewBox="0 0 2000 1001"
                            >
                                {mapCountries}
                            </svg>
                        </Grid>
                        <Grid item lg={4} className="data-information">
                            {pendingRequest ? <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" className="preloader-cont"><CircularProgress /></Box> : <MapResult country={actualCountry} information={dataInformation}/>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
  }
}
 
export default Map;