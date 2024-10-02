// Example: Custom behavior for the navbar toggler
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".navbar-toggler");
    const navList = document.querySelector(".navbar-collapse");
    const nav = document.querySelector("nav");
    const navItems = document.querySelectorAll(".nav-item");

    menuButton.addEventListener("click", function() {
        if (window.innerWidth < 992) {
            if (navList.classList.contains("show")) {
                navList.style.cssText="background-color:#abd8bc;position:absolute;right:70px;top:15px;width:100px;z-index:1;";
                nav.style.cssText="position:relative";
                navItems.forEach(item => {
                    item.style.paddingLeft = "18px";
                });
                navList.classList.remove("show");

                navItems.addEventListener("click",()=>{
                  navList.classList.remove();
                })
            } 
            else {
                navList.classList.add("show");
            }
        }
    });

    // Optionally, you can add a resize event listener to close the menu if the window is resized
    window.addEventListener("resize", function() {
        if (window.innerWidth >= 992) {
            navList.classList.remove("show");
        }
    });
});



let toggle = document.querySelector("body");
let tit=document.querySelector(".h4-tit");
let isDarkMode = true; // Set the default to dark mode

// Apply dark mode settings by default
toggle.style.backgroundColor = "rgb(13, 13, 13)";
toggle.classList.add("style1");

let mode = () => {
    if (isDarkMode) {
        // Set light mode
        toggle.style.backgroundColor = "white";
        toggle.classList.remove("style1");
        tit.style.color = "red";
        isDarkMode = false;
    } else {
        // Set dark mode
        toggle.style.backgroundColor = "rgb(13, 13, 13)";
        toggle.classList.add("style1");
        isDarkMode = true;
    }
};

