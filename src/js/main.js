import {clearPushListener, clearSearchText, setSearchFocus, showClearTextButton} from "./searchBar.js";
import {getSearchTerm, retrieveSearchResults} from "./dataFunctions.js";
import {deleteSearchResults,buildSearchResults, clearStatsLine, setStatsLine} from "./searchResults.js"


document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    //listeners to clear text
    const search = document.querySelector("#search");
    search.addEventListener('input',  showClearTextButton);
    const clear = document.querySelector("#clear");
    clear.addEventListener('click',  clearSearchText);
    clear.addEventListener('keydown',  clearPushListener);

    const form = document.querySelector('#searchBar');
    form.addEventListener('submit',  submitTheSearch);
};

// Procedural workflow function
const submitTheSearch = (event) => {
    
    event.preventDefault();
    // delete search results
    deleteSearchResults();
    // process the search
    processTheSearch();
    // set the focus
    setSearchFocus();
};

// prcedural process search
const processTheSearch = async () => {
    // clear stats line
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return; 
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    // set stats line
    setStatsLine(resultArray.length);
}

