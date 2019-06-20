import React from 'react';
import Slider from "react-slick";
import "./home.css";


/* Image Imports */
// import Sunrise from "../../images/Johannes-Plenio.jpg";
// import SunsetWaves from "../../images/Yousef-Espanioly.jpg";
// import Snow from "../../images/Simon-Matzinger.jpg";

class Home extends React.Component {
  state = {
    searchTerm: "",
    forecast: [],
    error: null,
  };

  searchCity = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.searchTerm}&APPID=${process.env.REACT_APP_APPID}`)
      .then(res => res.json())
      .then(results => {
        this.setState({ forecast: results });
        console.log(this.state.forecast);
      })
      .catch(err => {
        this.setState({ error: err });
        console.log(err);
      });
  }

  handleChange = event => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state.searchTerm);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.searchCity();
  };

  render() {
    return (
      <div className="home__container">
        <form className = "search" onSubmit = {this.handleSubmit}>
          <input
            type = "text"
            name = "searchTerm"
            value = {this.state.searchTerm}
            onChange = {this.handleChange}
            className = "search__input"
            placeholder = "Enter Your Zip Code"
          />
          <button className = "search__button" onClick = {this.handleSubmit}>Search</button>
        </form>
      </div>
    );
  };

};

export default Home;