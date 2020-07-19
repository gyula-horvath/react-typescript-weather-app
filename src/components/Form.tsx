import React from 'react'

import getWeather from '../interfaces/getWeather.interface'
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.style.css'
export class Form extends React.Component<getWeather, any> {
  constructor(props: getWeather) {
    super(props);
    this.state = {
      city: '',
      country: ''
    };
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleCityChange(event:any) {
		this.setState({
			city: event.target.value
		});
	}

  handleCountryChange(event: any) {
		this.setState({
			country: (event.target.value)
		});
  }
  
  handleSearch(event: any) {
		this.props.getWeather(this.state.city, this.countryChecker(this.state.country));
		event.preventDefault();
  }
  
  private countryChecker(country: string){
    if(country.match(/Ireland/) || country.match(/ireland/)|| country.match(/Írország/)|| country.match(/Írország/)){
      return "ie";
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSearch}>
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <input name="city" autoComplete="off" className="form-control shadow-none bg-transparent text-white" placeholder="City" onChange={this.handleCityChange}/>
            </div>
            <div className="col-md-3">
              <input name="country" autoComplete="off" className="form-control shadow-none bg-transparent text-white" placeholder="Country" onChange={this.handleCountryChange} />
            </div>
            <div className="col-md-3 mt-md-0 py-2 text-md-left">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
