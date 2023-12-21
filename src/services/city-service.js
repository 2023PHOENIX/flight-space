const { CityRepository } from "../repository/index.js";


class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (e) {
      console.log("something went wrong at service layer.");
      throw { error };
    }
  }

  async deleteCity(cityId) {

    try {
      const city = await this.CityRepository.deleteCity(cityId);
      return city;
    } catch (e) {
      console.log("something went wrong at service layer.");
      throw { error };
    }
  }

  async updateCity(cityId, data) {

    try {
      const city = await this.CityRepository.updateCity(cityId, data);
      return city;
    } catch (e) {
      console.log("something went wrong at service layer.");
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.CityRepository.getCity(cityId);
      return city;
    } catch (e) {
      console.log("something went wrong at service layer.");
      throw { error };
    }
  }
}


