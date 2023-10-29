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
let brandLogo = document.getElementById("brandLogo");

function goHome() {
    document.getElementById("home").scrollIntoView();

}
function goAbout() {
    document.getElementById("about").scrollIntoView();
}
function goProducts() {
    document.getElementById("products").scrollIntoView();
}
function goContact() {
    document.getElementById("contact").scrollIntoView();
}


window.onscroll = function () { runOnscroll() };

function runOnscroll() {
    if (window.innerWidth > 600) {
        if (document.documentElement.scrollTop > 900) {
            navInner.classList.add("w3-black");
            // navInner.style.opacity = "0.5";
            brandLogo.style.opacity = "1";

        } else {
            navContainer.classList.add("nav-back");
            navInner.classList.remove("w3-black");
            brandLogo.style.opacity = "1";
        }
    } else {
        if (document.documentElement.scrollTop > 245) {
            navInner.classList.add("w3-black");
            // navInner.style.opacity = "0.5";
            brandLogo.style.opacity = "1";
        } else {
            navContainer.classList.add("nav-back");
            navInner.classList.remove("w3-black");
            brandLogo.style.opacity = "1";
        }
    }
}