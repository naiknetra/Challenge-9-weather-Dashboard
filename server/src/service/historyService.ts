import fs from "node:fs/promises"
import { v4 as uid } from "uuid"
// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;
  constructor(name: string, id: string) {
    this.name = name
    this.id = id
  }

}

// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  // private async read() {}
  private async read() {
    return await fs.readFile("./db/db.json")

  }

  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}
  private async write(cities: City[]) {
    return await fs.writeFile("./db/db.json", JSON.stringify(cities, null, '/t'))
  }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
  async getCities() {
    return await this.read()
      .then((savedCities:any) => {
        let parsedSavedCities: City[]
        parsedSavedCities = JSON.parse(savedCities) || []
        return parsedSavedCities
      })

  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  async addCity(city: string) {
    const newCity: City = {
      name: city, id: uid()
    }
    console.log(city, "Add city")
    let previousSearchCities:City[] = await this.getCities()
    previousSearchCities.push(newCity)
    this.write(previousSearchCities)
    return newCity

  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
  async removeCity(id: string) {
    let previousSearchCities:City[] = await this.getCities()
    let cityList : any = previousSearchCities.filter(city => city.id !== id)
       
      
    
    await this.write(cityList)
    return  cityList
  }
}

export default new HistoryService();
