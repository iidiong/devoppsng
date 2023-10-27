/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
        x.style.display = "none";
        // document.getElementById('largeMenu').innerHTML = "";
    } else {
        x.className = "topnav";
        x.style.display = "block";
    }

}

function closeSidebar() {
    let y = document.getElementById("myTopnav");
    if (y.style.display === "block") {
        y.style.display = "none";
        y.className += " responsive";
    }
}
let navContainer = document.getElementById("navContainer");
let navInner = document.getElementById("navInner");
let brandLogo = document.getElementsByClassName("brand-logo");

function goHome() {
    document.getElementById("home").scrollIntoView()
    // navContainer.classList.add("nav-back");
    // navInner.classList.remove("w3-black");
    // brandLogo.style.opacity = "1";
   
}
function goAbout() {
    document.getElementById("about").scrollIntoView()
    // navInner.classList.add("w3-black");
    // navInner.style.opacity = "0.5";
    // brandLogo.style.opacity = "1";
}
function goProducts() {
    document.getElementById("products").scrollIntoView()
    // navInner.classList.add("w3-black");
    // navInner.style.opacity = "0.5";
    // brandLogo.style.opacity = "1";
}
function goContact() {
    document.getElementById("contact").scrollIntoView()
    // navInner.classList.add("w3-black");
    // navInner.style.opacity = "0.5";
    // brandLogo.style.opacity = "1";
}


