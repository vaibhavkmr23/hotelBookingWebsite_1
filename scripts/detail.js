
function totalFunc(){
    var refToResultDiv = document.getElementById("result");
    var refToNoOfAdult = document.getElementById("NoOfAdults").value;
    var d2 = document.getElementById("toDate").value;
    var d1 = document.getElementById("fromDate").value;

    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/(1000 * 60 * 60 * 24));
    var result = days * parseInt(refToNoOfAdult) * 1000;
    refToResultDiv.value =  result;
}

