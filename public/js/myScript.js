
const brandLogo = document.getElementById("brandLogo");

function goHome() {
    document.getElementById("home").scrollIntoView();
    myFunction()

}
function goAbout() {
    document.getElementById("about").scrollIntoView();
    myFunction()    
}
function goProducts() {
    document.getElementById("products").scrollIntoView();
    myFunction()
}
function goContact() {
    document.getElementById("contact").scrollIntoView();
    myFunction()
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
// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    var y = document.getElementById("navbar");
   
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        y.className = y.className.replace("fa-bars", "fa-close");
    } else {
        x.className = x.className.replace(" w3-show", "");
        y.className = y.className.replace("fa-close", "fa-bars");
    }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}