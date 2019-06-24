import React from 'react';
import "./CurrentWeather.css";

class CurrentWeather extends React.Component {
  state = {
    forecast: [],
    loaded: false,
    error: null,
   }

   componentDidMount = () => {
     console.log(this.props.match.params.id);
     fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.props.match.params.id}&APPID=${process.env.REACT_APP_APPID}`)
      .then(res => res.json())
      .then(results => {
        this.setState({
          forecast: results,
          loaded: true
        });
        console.log(this.state.forecast);
      })
      .catch(err => {
        this.setState({
          error: err,
          loaded: false
        });
        console.log(err);
      });
   }

  render() {
    return (
      null
    );
  };
};

export default CurrentWeather;