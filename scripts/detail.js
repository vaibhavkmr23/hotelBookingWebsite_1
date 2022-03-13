
// API usage for Hotel details


const url = window.location.search;
const urlParams = new URLSearchParams(url);
const id = urlParams.get("id");
const key = "1b5b48bbe7msha7b26d5c204e440p1fafe5jsn518136d4f29d";
getHotelDetailsFromApi = () => {//to get hotel details
    const xhr = new XMLHttpRequest();
    const apiURL = `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${id}&checkin=2022-03-15&adults=1&lang=en_US&currency=USD&nights=2`;
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var jsonData = JSON.parse(this.responseText);
            
            parseHotelDetailData(jsonData.data);
                
        }
    };
    xhr.open("GET", apiURL);
    xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", key);
    xhr.send();
}
getHotelImagesFromApi = () => {
    const xhr = new XMLHttpRequest();
    const apiURL = `https://travel-advisor.p.rapidapi.com/photos/list?location_id=${id}&currency=USD&limit=50&lang=en_US`;
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var jsonData = JSON.parse(this.responseText);
            
            parseHotelImagesData(jsonData.data);
            disableLoader();//disabling loader
        }
        
    };
    xhr.open("GET", apiURL);
    xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", key);
    xhr.send();
}
getHotelDetailsFromApi();
getHotelImagesFromApi();


parseHotelImagesData = data => {
    let carouselContentDiv = "";
    let isActive = "active";
    getImages = (item) => {
        const image = item.images.large.url;
        carouselContentDiv = carouselContentDiv + `
      <div class="carousel-item ${isActive}">
        <img
          src=${image}
          class="align-items-center reSize"
          alt="..."
        />
      </div>`
        isActive = "";
    }
    data.forEach(getImages);

    const refToCarousel = document.getElementById("carouselDiv");
    refToCarousel.innerHTML = carouselContentDiv;
}

parseHotelDetailData = (data) => {
    const name = data[0].name;
    const rating = data[0].rating;
    const description = data[0].description;
    const amenities = data[0].amenities;

    printHotelRatings(rating);
    const refToHotelName = document.getElementById("hotelName");
    refToHotelName.innerHTML = name;
    const refToAmenities = document.getElementById("hotelAmenities");

    //Constructing an unordered list from data

    let listData = "";
    for (i = 0; i < 10; i++) {
        listData = listData + `<li>${amenities[i].name}</li>`;
    }
    refToAmenities.innerHTML = listData;

    const refToDescription = document.getElementById("hotelDescription");
    refToDescription.innerHTML = description;
}

printHotelRatings = (rating) => {
    let ratingNum = parseInt(rating);
    let ratingString = "";
    let i = 0;
   
    const refToRating = document.getElementById("star");
    for (i = 0; i < ratingNum; i++) {
        ratingString = ratingString + `<span class="fa fa-star checked"></span>`;
    }
    if (rating.length > 1 && rating[2] != "0") {
        
        ratingString = ratingString + `<span class="fa-solid fa-star-half-stroke fill"></span>`;
        i++;
    }
    for (let j = i; j < 5; j++) {
        ratingString = ratingString + `<span class="fa-solid fa-star"></span>`;
    }
    refToRating.innerHTML = ratingString;
}

//---------------------------------------------------------//

//setting date pattern
var todayDate = new Date();
var dd1 = todayDate.getDate();
var mm1 = todayDate.getMonth() + 1; //January is taken 0//
var yy1 = todayDate.getFullYear();

// setting single digit day and month to two digits
if (dd1 < 10) {
  dd1 = '0' +dd1;
}

if (mm1 < 10) {
   mm1 = '0' + mm1;
} 
    
todayDate = yy1 + '-' + mm1 + '-' +dd1;
//setting min date to current date
document.querySelector("#fromDate").setAttribute("min",todayDate);
function totalFunc() {
    let bookingName = document.getElementById("name").value;
    let noOfAdults = document.getElementById("NoOfAdults").value;
    let refToFrom = document.getElementById("fromDate");
    let fromDate = new Date(refToFrom.value);
    
    let refToId = document.getElementById("id");
    refToId.value = id;
    var ddf = fromDate.getDate() + 1;//refers to next day//
    var mmf = fromDate.getMonth() + 1;//January is 0//
    var yyf = fromDate.getFullYear();
    if (ddf < 10) {
        ddf = '0' + ddf;
     }
     
     if (mm1 < 10) {
        mmf = '0' + mmf;
     } 
     minDate = yyf + '-' + mmf + '-' + ddf;
     document.querySelector("#toDate").setAttribute("min",minDate);//set min date//
     
     // price calculation
    let refToToDate = document.getElementById("toDate");
    let toDate = new Date(refToToDate.value);
    let refToTotal = document.getElementById("result");
    let diffInTime = toDate.getTime() - fromDate.getTime();
    let totalPrice= noOfAdults*1000*diffInTime/(1000 * 3600 * 24);
    if(totalPrice > 0){
        refToTotal.value = 'Rs. '+ totalPrice;
    }
}


