/**
 * React Component - weather_list.js created on 14/04/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

  constructor(props) {
    super(props);
  }

  renderWeatherRow(cityData) {
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
      </tr>
    );
  }

  render() {

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeatherRow)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {
    weather//sameAs weather: state.weather
  };
}

//Pramote BookList from a component to a container - as it needs to know
// dispatch and state methods available as props
export default connect(mapStateToProps)(WeatherList);
