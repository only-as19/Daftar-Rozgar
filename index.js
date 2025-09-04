// Select the hamburger and nav options
const hamburger = document.querySelector('.hamburger');
const navOptions = document.querySelector('.nav-options');

// Add click event to toggle the menu visibility
hamburger.addEventListener('click', () => {
    navOptions.classList.toggle('active');
});



let emp = document.querySelector(".emp");
let emr = document.querySelector(".emr");

// Function to show employee terms
function showEmployeeTerms() {
    document.querySelector('.show1').style.display = 'block'; // Show employee terms
    document.querySelector('.show2').style.display = 'none';  // Hide employer terms
}

// Function to show employer terms
function showEmployerTerms() {
    document.querySelector('.show1').style.display = 'none';  // Hide employee terms
    document.querySelector('.show2').style.display = 'block'; // Show employer terms
}

// Add event listeners for button clicks
emp.addEventListener('click', function(){
    showEmployeeTerms();
});

emr.addEventListener('click', function(){
    showEmployerTerms();
});

// Initially show employee terms on page load
window.onload = function() {
    showEmployeeTerms();
};


