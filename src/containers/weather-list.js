import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SparkChart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map( weather => weather.main.temp);
    const pressures = cityData.list.map( weather => weather.main.pressure);
    const humidities = cityData.list.map( weather => weather.main.humidity);
    const {lat, lon} = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td>
          <SparkChart data={temps} color="green" units="K"/>
        </td>
        <td>
          <SparkChart data={pressures} color="red" units="hPa"/>
        </td>
        <td>
          <SparkChart data={humidities} color="orange" units="%"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  };
}

export default connect(mapStateToProps)(WeatherList);
