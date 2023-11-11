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


window.onload = function () {
    var span = document.createElement('span');

    span.className = 'fa';
    span.style.display = 'none';
    document.body.insertBefore(span, document.body.firstChild);
    document.body.removeChild(span);

    // This code add whatsApp message link to page
    // (function (d, script) {
    //     script = d.createElement('script');
    //     script.type = 'text/javascript';
    //     script.async = true;
    //     script.src = 'https://w.app/widget-v1/j6l0GT.js';
    //     d.getElementsByTagName('head')[0].appendChild(script);
    // }(document));
};

