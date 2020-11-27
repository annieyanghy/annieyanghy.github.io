// https://www.geeksforgeeks.org/how-to-convert-the-hamburger-icon-of-navigation-menu-to-x-on-click/


// select dom items 
const menuBtn =  
document.querySelector(".menu-btn"); 

const menu =  
document.querySelector(".menu"); 

const menuNav =  
document.querySelector(".menu-nav"); 

// const menuBranding =  
// document.querySelector(".menu-branding"); 

// const navItems =  
// document.querySelectorAll(".nav-item"); 

// Set the initial state of the menu 
let showMenu = false; 

menuBtn.addEventListener("click", toggleMenu); 

menuBtn.addEventListener("touch", toggleMenu); 

function toggleMenu(e) { 
if (!showMenu) { 
    menuBtn.classList.add("close"); 
    menu.classList.add("show"); 
    menuNav.classList.add("show"); 
    // menuBranding.classList.add("show"); 
    // navItems.forEach((item) => 
    //     item.classList.add("show")); 

    // Reset the menu state 
    showMenu = true; 
} else { 
    menuBtn.classList.remove("close"); 
    menu.classList.remove("show"); 
    menuNav.classList.remove("show"); 
    // menuBranding.classList.remove("show"); 
    // navItems.forEach((item) => 
    //     item.classList.remove("show")); 
    console.log(e)
    // Reset the menu state 
    showMenu = false; 
} 
} 

