
// Function for Viewmore and viewLess  Starts


function myFunction(){
    
    let btnText = document.getElementById("view-more");
    let cityRead = document.getElementById("city2Column");
    if(cityRead.style.display != "none"){
        btnText.innerText = "View More";
        cityRead.style.display = "none";
    }
    else{
        btnText.innerText = "View Less";
        cityRead.style.display = "flex";
    }
}

// Function for Viewmore and viewLess  ends

//----------------------------------//

//Logic for search bar starts


const key = "1b5b48bbe7msha7b26d5c204e440p1fafe5jsn518136d4f29d";
const refToSearchBarDiv = document.getElementById("forminput");
searchCityEntered = () => {
    let cityToBeSearched = refToSearchBarDiv.value;
    if(cityToBeSearched.length >=3){
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                let jsonData = JSON.parse(this.responseText);
              
                parseResults(jsonData.data.Typeahead_autocomplete.results);
                
            }
        }
        const apiURL = `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${cityToBeSearched}&lang=en_US&units=km`;
        xhr.open("GET",apiURL);
        xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key" , key);
        xhr.send();
    }
    else {
        document.getElementById("searchResult").innerHTML = "";
    }
    parseResults = (data) => {
        let results = "";
        getResults = (item) => {
            if (item.detailsV2 != undefined && item.detailsV2.placeType == "CITY") {
                results = results + `
                <a href="list.html?city=${item.detailsV2.names.name}">${item.detailsV2.names.name}</a>`;
            }
        }
        data.forEach(getResults);
        document.getElementById("searchResult").innerHTML = results;
    }
}
refToSearchBarDiv.addEventListener("input", searchCityEntered);
disableLoader();// disabling loader

// logic for search bar ends


