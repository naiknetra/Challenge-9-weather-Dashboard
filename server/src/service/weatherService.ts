import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  cityName: string;
  latitude: number;
  longitude: number;
  country: string;
  state: string;

}

/*

class className{
constructor(input1,...){
this.input1 = input1
....}
}

*/

// TODO: Define a class for the Weather object
class Weather {
  cityName: string
  date: string
  temp: number
  windSpeed: number
  humidity: number
  icon: string
  description: string
  constructor(
    cityName: string,
    date: string,
    temp: number,
    windSpeed: number,
    humidity: number,
    icon: string,
    description: string
  ) {
    this.description = description
    this.cityName = cityName
    this.date = date
    this.temp = temp
    this.windSpeed = windSpeed
    this.humidity = humidity
    this.icon = icon
  }

}



// TODO: Complete the WeatherService class
class WeatherService {
  private baseURL?: string;
  private APIkey?: string;
  private cityName: string;
  constructor() {
    this.baseURL = process.env.API_BASE_URL || "";
    this.APIkey = process.env.API_KEY || "";
    this.cityName = "";

  }


  // TODO: Define the baseURL, API key, and city name properties
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  private async fetchLocationData(query: string) {
    try {
      const response: Coordinates[] = await fetch(query)
        .then((res) => res.json())
        //.then((apiResult => {

          console.log(response)
          return response[0]
        //}))
    } catch (err) {
      console.log("Err", err)
      throw err
    }
  }


  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {
    const {
      cityName, latitude, longitude, country, state

    } = locationData
    const location: Coordinates = {
      cityName , latitude , longitude , country , state
    }
    return location
  }
  // TODO: Create buildGeocodeQuery method
    private buildGeocodeQuery(): string {
      const queryURL = `${this.baseURL}/data/2.5/weather?q=${this.cityName}&appid=${this.APIkey}`
      return queryURL 
      //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    }
  // TODO: Create buildWeatherQuery method
   private buildWeatherQuery(coordinates: Coordinates): string {
    const queryURL = `${this.baseURL}/data/2.3/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${this.APIkey}`
    return queryURL
    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
   }
  // TODO: Create fetchAndDestructureLocationData method
     private async fetchAndDestructureLocationData() {
      this.fetchLocationData(this.buildGeocodeQuery())
      // .then((result) => {
      //   console.log("API",result)
      //   return result
      .then((data) => {
         this.destructureLocationData(data)
       } )
     // let coordinates: Coordinates =  await this.fetchLocationData(this.buildGeocodeQuery())
        //return  this.destructureLocationData(coordinates)

      

     }
  // TODO: Create fetchWeatherData method
     private async fetchWeatherData(coordinates: Coordinates) {
      this.fetchLocationData(this.buildWeatherQuery(coordinates))
      .then((result) => {
        console.log("API",result)
        return result
      }).then(data => {
        this.destructureLocationData(data)
     })
    }
  // TODO: Build parseCurrentWeather method
      private parseCurrentWeather(response: any) {
        this.fetchLocationData(this.buildGeocodeQuery())
      .then((result) => {
        console.log("API",result)
        return result
      }).then(data => {
        this.destructureLocationData(data)
     })

      }
  // TODO: Complete buildForecastArray method
     private buildForecastArray(currentWeather: Weather, weatherData: any[]) {
      console.log()
     }
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
