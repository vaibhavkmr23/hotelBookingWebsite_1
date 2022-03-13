
// API calls for List view and Map view starts


const url = window.location.search;
const urlParams = new URLSearchParams(url);
const city = urlParams.get("city");
const apiURL = `https://travel-advisor.p.rapidapi.com/locations/search?query=${city}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`;
const key = "1b5b48bbe7msha7b26d5c204e440p1fafe5jsn518136d4f29d";
const xhr = new XMLHttpRequest();
let mapDetails = [{ lat: 0.0, lng: 0.0 }];
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var jsonData = JSON.parse(this.responseText);
    getListView(jsonData.data);
   
    initMap();
    // debugger;
    disableLoader();// disabling loader
  }
};

xhr.open("GET",apiURL);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key" , key);
xhr.send();


// Setting data for list view

let getListView = (data) => {
  let name, img, address, locationId, rating;
  let hotel ="";
  mapDetails = [];
  const DataToPopulate = (item) => {
    if (item.result_type == "lodging") {
      name = item.result_object.name;
      img = item.result_object.photo.images.large.url;
      address = item.result_object.address;
      locationId = item.result_object.location_id;
      rating = item.result_object.rating;
      mapDetails.push({
        lat: parseFloat(item.result_object.latitude),
        lng: parseFloat(item.result_object.longitude),
        locationId: locationId,
        name: name,
        address: address,
      });
      hotel = hotel + `
        <a href="detail.html?id=${locationId}" style="text-decoration: none; color: black;">
            <div class="hotel-container" id="hotel-1">
            <img src="${img}" alt="${name}"class="hotel-img" />

            <div class="description-container">
                <div id="detail-1">

                    <h3>${name}</h3>
                    <p>${rating}<span class="fa fa-star checked"></span></p>
                    <p>${address}</p>

                </div>
            </div>
        </div>
    </a>`;
    }
  };

  data.forEach(DataToPopulate);//populate data

  let listView = document.getElementById("list-view");
  listView.innerHTML = hotel;
};

// Setting data for map view 

initMap = () => {
    var options = {
        center: { lat: mapDetails[0].lat, lng: mapDetails[0].lng },
        zoom: 8,
    };
    var map = new google.maps.Map(document.getElementById("map-view"), options);

  // adding markers
  for (let i = 0; i < mapDetails.length; i++) {
      addMarker(mapDetails[i]);
  }

  function addMarker(data) {
      let marker = new google.maps.Marker({
          position: { lat: data.lat, lng: data.lng },
          map: map,
    });
    //adding info window with markers
    let infoWindow = new google.maps.InfoWindow({
        content: `<p>${data.name}</p>
                <a href="detail.html?id=${data.locationId} " class="mapDetail" style=" color: black;">Book Now</a>`,
    });

    marker.addListener("click", function () {
        infoWindow.open(map, marker);
    });
  }
}

// API calls for List view and Map view ends
