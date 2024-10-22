import dotenv from 'dotenv';
dotenv.config();
/*

class className{
constructor(input1,...){
this.input1 = input1
....}
}

*/
// TODO: Define a class for the Weather object
class Weather {
    constructor(cityName, date, temp, windSpeed, humidity, icon, description) {
        this.description = description;
        this.cityName = cityName;
        this.date = date;
        this.temp = temp;
        this.windSpeed = windSpeed;
        this.humidity = humidity;
        this.icon = icon;
    }
}
// TODO: Complete the WeatherService class
class WeatherService {
    constructor() {
        this.baseURL = process.env.API_BASE_URL || "";
        this.APIkey = process.env.API_KEY || "";
        this.cityName = "";
    }
    // TODO: Define the baseURL, API key, and city name properties
    // TODO: Create fetchLocationData method
    // private async fetchLocationData(query: string) {}
    async fetchLocationData(query) {
        try {
            const response = await fetch(query)
                .then((apiWeather) => apiWeather.json())
                .then((apiResult => {
                console.log(apiResult);
                return apiResult;
            }));
        }
        catch (err) {
            console.log("Err", err);
        }
    }
    // TODO: Create destructureLocationData method
    destructureLocationData(locationData) {
        const location = {
            cityName, latitude, longitude, country, state
        } = locationData;
        return location;
    }
    // TODO: Create buildGeocodeQuery method
    buildGeocodeQuery() {
        const queryURL = `${this.baseURL}/data/2.5/weather?q=${this.cityName}&appid=${this.APIkey}`;
        return queryURL;
        //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    }
    // TODO: Create buildWeatherQuery method
    buildWeatherQuery(coordinates) {
        const queryURL = `${this.baseURL}/data/2.3/forecast?q=${this.cityName}&appid=${this.APIkey}`;
        return queryURL;
        //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    }
    // TODO: Create fetchAndDestructureLocationData method
    async fetchAndDestructureLocationData() {
        this.fetchLocationData(this.buildGeocodeQuery())
            .then((result) => {
            console.log("API", result);
            return result;
        }).then(data => {
            this.destructureLocationData(data);
        });
    }
    // TODO: Create fetchWeatherData method
    async fetchWeatherData(coordinates) {
        this.fetchLocationData(this.buildWeatherQuery())
            .then((result) => {
            console.log("API", result);
            return result;
        }).then(data => {
            this.destructureLocationData(data);
        });
    }
    // TODO: Build parseCurrentWeather method
    parseCurrentWeather(response) {
        this.fetchLocationData(this.buildGeocodeQuery())
            .then((result) => {
            console.log("API", result);
            return result;
        }).then(data => {
            this.destructureLocationData(data);
        });
    }
    // TODO: Complete buildForecastArray method
    buildForecastArray(currentWeather, weatherData) {
        console.log();
    }
}
export default new WeatherService();
