function weightconverter(value){
    document.getElementById("pounds").innerHTML = value*2.2046;
    document.getElementById("grams").innerHTML = value*1000;
    document.getElementById("ounces").innerHTML = value*35.274;
    document.getElementById("stones").innerHTML = value*0.1574;
}