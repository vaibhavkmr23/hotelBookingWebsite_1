
// pay now button activation

pay();
function pay() {
    if (localStorage.isLogin === "true") {
        document.querySelector("#pay-button").removeAttribute("disabled");
    }
    else {
        document.querySelector("#pay-button").setAttribute("disabled",0);
    }
}


// API USE


let urlParams = new URLSearchParams(window.location.search);
const API_URL = "https://travel-advisor.p.rapidapi.com/";
const travelAdvisorHost = "travel-advisor.p.rapidapi.com";
const travelAdvisorKey = "c45f413bedmsh85e0e65f3d3beb8p11aa3cjsna4a73ac771d5";

let fetchAPI = () => {
    let xhr = new XMLHttpRequest();
  
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            let result = JSON.parse(this.responseText).data[0];
  
            document.getElementById("radission-img").src = result.photo.images.medium.url;
            document.getElementById("hotelName").innerText = result.name;
            document.getElementById("ranking").innerHTML = "<b>" + result.ranking + "</b>";
            document.getElementById("address").innerText = result.address;
           
        //   document.getElementById("loader").style.display = "none";
        //   document.getElementById("wrapper").style.display = "block";
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
    // const stringTotal = urlParams.get("total");
  
    const fromDateArr = stringFromDate.split("-");
    const toDateArr = stringToDate.split("-");
  
    const fromDate = new Date(stringFromDate);
    const toDate = new Date(stringToDate);
  
    const noOfDays =
      (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24);
  
    const total = 1000 * noOfDays * parseInt(adults);
  
    // get ref to the html elements
   
    const refToName = document.getElementById("customerName");
    const refToAdults = document.getElementById("adults");
    const refToFromDate = document.getElementById("checkIn");
    const refToToDate = document.getElementById("checkOut");
    const refToTarrifBreakdown = document.getElementById("tariff");
    const refToTotalAmount = document.getElementById("total");
  
    // set the values for html references
    refToName.innerText = name;
    refToAdults.innerText = adults;
    refToFromDate.innerText = `${fromDateArr[2]}/${fromDateArr[1]}/${fromDateArr[0]}`;
    refToToDate.innerText = `${toDateArr[2]}/${toDateArr[1]}/${toDateArr[0]}`;
    refToTarrifBreakdown.innerText = `Rs.1000 x ${adults} Adults x ${noOfDays} Nights`;
    refToTotalAmount.innerText = `Rs.${total}`;
}
  
  
setCustomerAndPaymentDetails();
getAndSetHotelDetails();


// let payEnabled = `<div>
//         <a class="btn btn-success" id="pay-button" onclick="paymentFunc()" href="payment.html">Pay Now</a>
//         </div>`;
// let payDisabled = `<div>
//         <a class="btn btn-success disabled" id="pay-button" href="payment.html">Pay Now</a>
//         </div>`;


// let payDiv = document.getElementById("pay");


// if (localStorage.getItem("username") == "admin") {
//     headerElement.innerHTML = logoutHeader;
//     payDiv.innerHTML = payEnabled;
//     setHotelDetails();
//     setBookingDetails();
//     getHotelDetails();
// } 
// else {
//     headerElement.innerHTML = loginHeader;
//     payDiv.innerHTML = payDisabled;
//     setHotelDetails();
//     setBookingDetails();
//     getHotelDetails();
// }

// function checkUser() {
//     if (localStorage.getItem("username") == "admin") {
//         localStorage.removeItem("username");
//         headerElement.innerHTML = loginHeader;
//         payDiv.innerHTML = payDisabled;
//         // setBookingDetails();
        

//     }
// }
// function login() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     if (username == "admin" && password == "admin") {
//         localStorage.setItem("username", username);
//         headerElement.innerHTML = logoutHeader;
//         alert("Successfully loggedin");
//         payDiv.innerHTML = payEnabled;
//     } 
//     else {
//         alert("Username or password is wrong");
//     }
// }

// function paymentFunc(){
//     alert("Hi your booking is successfull !!");
// }


// const urlParams = new URLSearchParams(window.location.search);
// const hotelId = urlParams.get("id");
// const key = "5a7f461615msh8266e27f6cfc42ep1dd5ecjsn0d5bf7e1a24e";
// const xhr = new XMLHttpRequest();
// // xhr.withCredentials = false;
// const apiURL = `https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${hotelId}&checkin=2022-03-15&adults=1&lang=en_US&currency=USD&nights=2`;
