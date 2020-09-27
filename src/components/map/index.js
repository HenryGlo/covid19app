import React, { Component } from "react";
import axios from 'axios';
import country from "world-map-country-shapes";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Grid from '@material-ui/core/Grid';
import MapResult from "../mapResult/index";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Button from '@material-ui/core/Button';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import "./styles.css"
class Map extends Component {
    constructor(props) {
        super(props);     
        this.zoomMap = this
            .zoomMap
            .bind(this);
        this.state = {
            selectedCountries: {},
            actualCountry: "",
            covidInformation: {},
            requestOn: true,
            positionMap: {},
            countryInfo: {}
            
        };
    }
    zoomMap = position =>{
        this.setState({
            positionMap:{scale:position[0],x: position[1], y: position[2]}
        })
        console.log("work")
    }
    apiRequest = country => {
        axios.get("https://covid19.mathdro.id/api/countries/"+country).then(res => {
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
    };
    componentDidMount() {
        this.setState({
            selectedCountries: {
                "VE": true
            },
            actualCountry: "VE"
        })
        this.apiRequest("VE")
    }
    toggleCountry = (country) => {
        const { selectedCountries } = this.state;
        this.setState({
            selectedCountries: {
                [country.id]: !selectedCountries[country.id]
            },
            actualCountry: country.id,
            requestOn: true
        });
        console.log(this)
        this.apiRequest(country.id)
    };

   
  render() {
    const { selectedCountries } = this.state;
    
    let actualCountry = this.state.actualCountry
    let dataInformation = this.state.covidInformation
    let pendingRequest = this.state.requestOn
    let mapZoom = this.state.positionMap
    let countryIn = this.state.countryInfo
    console.log(mapZoom)
    const mapCountries = country.map(country => (
    
      <path
        key={country.id}
        d={country.shape}
        style={{
          fill: this.state.selectedCountries[country.id] ? "tomato" : "#eee",
          cursor: "pointer",
          stroke: "#000",
        }}
        className="country-svg"
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
                        <TransformWrapper>
                            {({ zoomIn, zoomOut, resetTransform, positionX, positionY,scale, ...rest }) => (
                            <React.Fragment>
                                <div className="tools">
                                    <Grid container direction="row" justify="flex-start" spacing={1}>
                                        <Grid item lg={2}>
                                            <Button variant="contained" className="button-map" onClick={zoomIn} color="primary" endIcon={<ZoomInIcon>Acercar</ZoomInIcon>}>
                                                Acercar
                                            </Button>
                                        </Grid>
                                        <Grid item lg={2}>
                                            <Button variant="contained" className="button-map" onClick={zoomOut} color="secondary" endIcon={<ZoomOutIcon>Alejar</ZoomOutIcon>}>
                                                Alejar
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                                <TransformComponent>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="600px"
                                        width="100%"
                                        viewBox="0 0 2000 1001"
                                        onClick={() => this.zoomMap([scale,positionX, positionY])}
                                        className="svg-bakground-map"
                                    >   
                                        {mapCountries}
                                    </svg>
                                </TransformComponent>
                            </React.Fragment>
                            )}
                        </TransformWrapper>
                        </Grid>
                        <Grid item lg={4} className="data-information">
                            {pendingRequest ? <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" className="preloader-cont"><CircularProgress /></Box> : <MapResult country={actualCountry} information={dataInformation} countryInfo={countryIn}/>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
  }
}
 
export default Map;