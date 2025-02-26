function toggleMenu() {
    const menu = document.querySelector('.top-bar-menu');
    menu.classList.toggle('show');
}

// document.querySelector('a[href="#projects"]').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.querySelector('#projects').scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
// });
document.querySelector('a[href="#projects"]').addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector('#projects');
    const offset = 100; // Adjust this value based on the height of your navbar or any offset you need.

    // Get the position of the #projects section
    const position = target.offsetTop - offset;

    // Smooth scroll to the adjusted position
    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
});

 
function closeMenu() {
    // Uncheck the checkbox to close the hamburger menu
    document.getElementById('menu-toggle').checked = false;
}

function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}
function showSection(sectionId) {
    // Hide all sections
    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("experience").style.display = "none";
    document.getElementById("contact").style.display = "none";

    // Show the clicked section
    document.getElementById(sectionId).style.display = "block";

    // Optionally, update the navbar links to highlight the active section
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
        link.classList.remove('active');
    });
    document.querySelector('a[href="#' + sectionId + '"]').classList.add('active');
}

// Set the default section (About) to be visible on page load
window.onload = function() {
    showSection('about');
};



// function showSection(sectionId) {
//     // Hide all sections except the navbar
//     const sections = document.querySelectorAll('.main-content > div:not(#navbar)');
//     sections.forEach(section => {
//         section.style.display = 'none'; // Hide all sections except the navbar
//     });

//     // Show the selected section
//     const selectedSection = document.getElementById(sectionId);
//     if (selectedSection) {
//         selectedSection.style.display = 'block'; // Display the selected section
//     }
// }




  

// Accordion functionality
var acc = document.querySelectorAll('#accordion label');
acc.forEach(function(label) {
    label.addEventListener('click', function() {
        var input = this.previousElementSibling;
        var content = this.nextElementSibling;
        
        // Toggle the active class for accordion
        if (input.checked) {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});

// Optional: To close all sections when clicking another one, you can add this code:
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            checkboxes.forEach(function(box) {
                if (box !== checkbox) {
                    box.checked = false;
                }
            });
        }
    });
});
