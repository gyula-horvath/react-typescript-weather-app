const API_KEY = 'fd9fb084a09d8b5949e8d196f037950d';

const searchWeather = {
    async search(city: string, country: string) {
        return await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`).then(response => {
            return response.json()
        }).then(jsonResponse => {
            console.log(jsonResponse)
            if(jsonResponse){
                return {
                    city: `${jsonResponse.name}, ${jsonResponse.sys.country}`,
                    celsius: jsonResponse.main.temp,
                    temp_min: jsonResponse.main.temp_min,
                    temp_max: jsonResponse.main.temp_max,
                    description: jsonResponse.weather[0].description,
                    id: jsonResponse.weather[0].id,
                    error: false
                }
            }
        })
    }
}

export default searchWeather;