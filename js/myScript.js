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
    if (y.style.display === "block"){
        y.style.display = "none";
        y.className += " responsive";
    }
}


