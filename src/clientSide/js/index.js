import Search from './model/Search';
import * as viewSearch from  './view/viewSearch';
import { elements} from  './view/base'
const styles = require('../styles/style.scss');

const state = {};

const controllSearch = async () => {
    //1)Get the user input
    const userInput = elements.searchInput.value;
    elements.searchInput.value ='';
    //2)make the search query new object
    state.search = new Search(userInput);
    
    await state.search.getWeatherData();
    console.log(state.search.weather);

    //3)Prepare UI 
    viewSearch.clearContainer();
    //4)Render Data on Ui
    viewSearch.renderData(state.search.weather);
}


elements.searchInput.addEventListener('keypress', e => {
    if(e.which === 13){
        e.preventDefault();
        controllSearch();
    }
});
