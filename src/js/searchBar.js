export const setSearchFocus = () => {
    document.querySelector("#search").focus();
}

export const showClearTextButton = () => {
    const search = document.querySelector("#search");
    const clear = document.querySelector("#clear");
    if (search.value.length) {
        clear.classList.remove("none");
        clear.classList.add("flex");
    } else {
        clear.classList.add("none");
        clear.classList.remove("flex");
    }
}
export const clearSearchText = (event) => {
    event.preventDefault();
    document.querySelector("#search").value = "";
    const clear = document.querySelector("#clear");
    clear.classList.add("none");
    clear.classList.remove("flex");
    setSearchFocus();
}

export const clearPushListener = (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        document.querySelector("#clear").click();
    }
}