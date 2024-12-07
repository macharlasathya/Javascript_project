
function toggleMenu() {
    var submenu = document.getElementById("submenu");
    // Toggle display: if it's hidden, show it, and vice versa
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}


