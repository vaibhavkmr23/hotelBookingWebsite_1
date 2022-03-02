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
