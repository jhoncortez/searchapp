import {setSearchFocus} from "./searchBar.js";
import {getSearchTerm, retrieveSearchResults} from "./dataFunctions.js";
import {deleteSearchResults,buildSearchResults, clearStatsLine, setStatsLine} from "./searchResults.js"


document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    // 3 listeners clear text

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

