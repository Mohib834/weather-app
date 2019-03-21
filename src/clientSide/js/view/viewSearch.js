import { elements } from "./base";

export const clearContainer = () => {
    elements.weatherContainer.innerHTML = '';
}
export const renderData = weatherData => {
    const markup = `
    <div class="row">
        <div class="col-1-of-3">
            <div class="weather-content">
                <i class="fas fa-sun weather-icon"></i>
            </div>
        </div>
        <div class="col-1-of-3">
            <div class="weather-content ">
                Sunny
                <span class="temp">${weatherData.temp}&deg;C</span>
                <span class="location">${weatherData.location}</span>
            </div>
        </div>
        <div class="col-1-of-3">
            <div class="weather-content">
                <ul class="other-detail">
                    <li>Humidity <span class="humidity">${weatherData.humidity}%</span></li>
                    <li>Dew Pt. <span class="dew">${weatherData.dewPoint}</span></li>
                    <li>UV Index <span class="uv">${weatherData.uvIndex}</span></li>
                    <li>Visibility <span class="visibility">${weatherData.visibility}</span></li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `;
    elements.weatherContainer.insertAdjacentHTML('afterbegin',markup);
}