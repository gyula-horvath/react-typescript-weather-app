import React from 'react';
import Weather from './components/Weather'
import Form from './components/Form';
import searchWeather from './util/searchAPI';

import 'weather-icons/css/weather-icons.css';
import './App.css';

class App extends React.Component<{}, any> {
	constructor(props:any) {
		super(props)
		this.state = {
			weatherinfo: {
				city: '',
				id: undefined,
				celsius: undefined,
				temp_max: undefined,
				temp_min: undefined,
				description: '',
				error: false,
				icon: ''
			}
		}
		this.searchWeather = this.searchWeather.bind(this);
	}

	searchWeather(city: string, country: string) {
		searchWeather.search(city, country).then(forecast => {
			if(forecast !== undefined){
				this.setState({ weatherinfo: forecast})
			}
			
		})
	}

	render() {
		const WeatherProps = {
			weatherinfo:  {
				city: this.state.weatherinfo.city,
				country: this.state.weatherinfo.country,
				id: this.state.weatherinfo.id,
				celsius: this.state.weatherinfo.celsius,
				temp_max: this.state.weatherinfo.temp_max,
				temp_min: this.state.weatherinfo.temp_min,
				description: this.state.weatherinfo.description,
				error: this.state.weatherinfo.error,
				icon: ''
			}  
		}
		return (
			<div className="App">
				<Form getWeather={this.searchWeather} />
				<Weather {...WeatherProps.weatherinfo} />
			</div>
		);
	}
}



export default App;
