const urlParams = new URLSearchParams(window.location.search);
const hotelId = urlParams.get("city");

// var refToListView = document.getElementById("list-view");

let inList = hotelList =>{
    var refToListView = document.getElementById("list-view");
    hotelList.forEach(hotel => {
        let hotelLink = document.createElement("a");
        hotelLink.setAttribute("href",`detail.html?id=` +hotel.result_object.location_id);
        hotelLink.setAttribute("style","text-decoration: none; color: black;");
        
        // hotelLink = `<a href="detail.html" id="anchor" style="text-decoration: none; color: black;">`;
        refToListView.appendChild(hotelLink);
        let hotelContainerDiv = document.createElement("div");
        hotelContainerDiv.setAttribute("class","hotel-container");
        hotelLink.appendChild(hotelContainerDiv);
        // let hotelImg =`<img src= + ${hotel.result_object.photo.images.medium.url} alt=""  ${hotel.result_object.name} class ="hotel-img"/>`;
        let hotelImg = `<img src=" ${hotel.result_object.photo.images.medium.url}"  class="hotel-img" />`;
        hotelContainerDiv.innerHTML = hotelImg;
        debugger;
        let hotelDetailDiv = document.createElement("div");
        hotelDetailDiv.setAttribute("class","description-container");
        hotelContainerDiv.appendChild(hotelDetailDiv);
        // let hotelName = hotel.result_object.name;
        hotelDetailDiv.innerHTML = `<h4> ${hotel.result_object.name} <h4>`;
        hotelDetailDiv.innerHTML = hotelDetailDiv.innerHTML + `<div> ${hotel.result_object.rating} <span class="fa fa-star checked"></span></div>`;
        hotelDetailDiv.innerHTML = hotelDetailDiv.innerHTML +  "<p>" + hotel.result_object.address +"</p>";
        // debugger;
    
    })  
};
let fetchHotelList = () => {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            // console.log(this.responseText);
            // debugger;
            let responseFromServerInStringFormat = xhr.responseText;
            let jsonData = JSON.parse(responseFromServerInStringFormat).data;
            hotelList = jsonData.filter(item => item.result_type == "lodging");
            // var hotelLocations = [];
            // hotelList.forEach(item => {
            //     hotelLocations.push([item.result_object.name + "<br><a href=\detail.html?id =" + item.result_object.location_id + "\">Book Hotel</a>",item.result_object.latitude,item.result_object.longitude]);
                
            // });
            inList(hotelList);
        
        }
    });

    xhr.open("GET", "https://travel-advisor.p.rapidapi.com/locations/search?query=" + hotelId);
    xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "c45f413bedmsh85e0e65f3d3beb8p11aa3cjsna4a73ac771d5");

    xhr.send();

}
fetchHotelList();