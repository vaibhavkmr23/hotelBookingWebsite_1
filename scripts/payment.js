
// pay now button activation

payFunc();
function payFunc() {
    if (localStorage.isLogin === "true") {
        document.querySelector("#pay-button").removeAttribute("disabled");
    }
    else {
        document.querySelector("#pay-button").setAttribute("disabled",0);
    }
}

//-----------------------------------//

// API usage for customer and hotel details starts


let urlParams = new URLSearchParams(window.location.search);
const API_URL = "https://travel-advisor.p.rapidapi.com/";
const travelAdvisorHost = "travel-advisor.p.rapidapi.com";
const travelAdvisorKey = "1b5b48bbe7msha7b26d5c204e440p1fafe5jsn518136d4f29d";

let fetchAPI = () => {
    let xhr = new XMLHttpRequest();
  
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            let result = JSON.parse(this.responseText).data[0];
            document.getElementById("radission-img").src = result.photo.images.medium.url;
            document.getElementById("hotelName").innerText = result.name;
            document.getElementById("ranking").innerHTML = "<b>" + result.ranking + "</b>";
            document.getElementById("address").innerText = result.address;
            disableLoader();// loader disabled//
        }
    });
  
    xhr.open("GET", API_URL + "hotels/get-details?lang=en_US&location_id=" + urlParams.get('id'));
    xhr.setRequestHeader("x-rapidapi-host", travelAdvisorHost);
    xhr.setRequestHeader("x-rapidapi-key", travelAdvisorKey);
  
    xhr.send();
}
  
fetchAPI();
  
  // set customer and payment details
function setCustomerAndPaymentDetails() {
    const name = urlParams.get("name");
    const adults = urlParams.get("adults");
   
    const stringFromDate = urlParams.get("fromdate");
    const stringToDate = urlParams.get("todate");
   
  
    const fromDateArr = stringFromDate.split("-");
    const toDateArr = stringToDate.split("-");
  
    const fromDate = new Date(stringFromDate);
    const toDate = new Date(stringToDate);
  
    const noOfDays =
      (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24);
  
    const total = 1000 * noOfDays * parseInt(adults);
  
   
    const refToName = document.getElementById("customerName");
    const refToAdults = document.getElementById("adults");
    const refToFromDate = document.getElementById("checkIn");
    const refToToDate = document.getElementById("checkOut");
    const refToTarrifBreakdown = document.getElementById("tariff");
    const refToTotalAmount = document.getElementById("total");
  
    // setting the values for html references
    refToName.innerText = name;
    refToAdults.innerText = adults;
    refToFromDate.innerText = `${fromDateArr[2]}/${fromDateArr[1]}/${fromDateArr[0]}`;
    refToToDate.innerText = `${toDateArr[2]}/${toDateArr[1]}/${toDateArr[0]}`;
    refToTarrifBreakdown.innerText = `Rs.1000 x ${adults} Adults x ${noOfDays} Nights`;
    refToTotalAmount.innerText = `Rs.${total}`;
}
    
setCustomerAndPaymentDetails();

// API usage for customer and hotel details ends


