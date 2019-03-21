import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }
    async getWeatherData() {
        const weatherData = await axios(`http://localhost:3000/weather?search=${this.query}`);
        this.weather = weatherData.data;
    }
}
