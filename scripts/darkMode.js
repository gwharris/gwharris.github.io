// Graham Harris
// darkMode.js - converts between dark and light modes

// Code adapted from
// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    
var darkOn;
var sections = ["aboutMe", "workExp", ]

function changeTheme() {
    // For every section that has dark mode enabled, add/remove "dark-theme"
    for (i=0; i<sections.length; i++) {
        document.getElementById(sections[i]).classList.toggle("dark-theme");
    }
}

// Method that toggles dark mode
function toggleDark() {

    // If the user already prefers dark mode:
    if (prefersDark.matches) {
        // "Body" is treated differently because its an HTML tag and not a class
        document.body.classList.toggle("dark-theme");
        // Change the theme of class elements
        changeTheme();
        darkOn = false;
    } 
    else if (!prefersDark.matches) {
        darkOn = false;
    } 
    else if (darkOn) {
        document.body.classList.toggle("dark-theme");
        changeTheme();
        darkOn = false;
    }
    // If the user doesn't prefer dark mode or toggles it off:
    else {
        document.body.classList.toggle("dark-theme");
        changeTheme();
        darkOn = true;
    }
}

// Instantiate the method so that there's an initial toggle on website load
toggleDark();