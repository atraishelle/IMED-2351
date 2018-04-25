// JavaScript Document

// When the user clicks on div, open the popup
function myFunction3() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

//menu buttons//
function myFunction() {
    var x = document.getElementById("myAbout");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction1() {
    var x = document.getElementById("myDesign");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction2() {
    var x = document.getElementById("container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
