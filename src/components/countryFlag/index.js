import React from "react"
import ReactCountryFlag from "react-country-flag"
 
class countryFlag extends React.Component {
    render() {
        return (
            <ReactCountryFlag countryCode={this.props.country} svg className="country-flag"/>            
        )
    }
}
 
export default countryFlag