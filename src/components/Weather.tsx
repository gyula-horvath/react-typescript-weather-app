import React, { Component } from 'react'

import weatherinfo from '../interfaces/Weather.interface';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Weather extends Component<weatherinfo> {
  weatherIcon: any;
  icon: string
  constructor(props: weatherinfo) {
    super(props);
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
    this.icon=''
  }

  private getCelsius(temp: number) {
    const celsius = Math.floor(temp - 273.15);
    return celsius;
  }

  private getWeatherIcon(id: number) {
    switch (true) {
      case id >= 200 && id <= 232:
          this.icon= this.weatherIcon.Thunderstorm
        break;
      case id >= 300 && id <= 321:
          this.icon= this.weatherIcon.Drizzle
        break;
      case id >= 500 && id <= 531:
          this.icon= this.weatherIcon.Rain
        break;
      case id >= 600 && id <= 622:
          this.icon= this.weatherIcon.Snow
        break;
      case id >= 700 && id <= 781:
          this.icon= this.weatherIcon.Atmosphere
        break;
      case id === 800:
          this.icon= this.weatherIcon.Clear
        break;
      case id >= 801 && id <= 804:
          this.icon= this.weatherIcon.Clouds
        break;
      default: 
        this.icon= this.weatherIcon.Clouds
        break;
    }
  }

  private minmaxTemp(min: number, max: number) {
    if(min && max){
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }
}

  render() {

    if(this.props.id!==undefined){
      this.getWeatherIcon(this.props.id)
    }
    
    return (

      <div className="container">
        <div className="cards pt-4 text-light">
          <h1>{this.props.city}</h1>
          <h5 className="py-4">
            <i className={`wi ${this.icon} display-1`}></i>
          </h5>

          {this.getCelsius(this.props.celsius) ? <h1 className="py-2">{this.getCelsius(this.props.celsius)}&deg;</h1> : null}

          {/* show max and min temperature */}
          {this.minmaxTemp(this.getCelsius(this.props.temp_min), this.getCelsius(this.props.temp_max))}

          <h4 className="py-3">{this.props.description}</h4>
        </div>
      </div>
    )
  }
}

export default Weather
