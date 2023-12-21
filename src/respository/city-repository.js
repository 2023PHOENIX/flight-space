const { City } = require("../models/index.js");

class CityRespository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name: name });
            return city;
        } catch (e) {
            throw e;
        }
    }

    async deleteCity({ cityId }) {
        try {
            await City.destroy({
                where: {
                    id: cityId,
                },
            });
        } catch (e) {
            console.log(e.message);
        }
    }
    async getCity({ cityId }) {
        const city = await City.findOne({ cityId });
        return city;
    }

    async updateCity(cityId, data) {
        try {
            await City.update(data, {
                where: {
                    id: cityId,
                },
            });
        } catch (e) {
            console.log(e.message);
        }
    }
}

module.exports = CityRespository;
