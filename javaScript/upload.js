var currentPage = 1;
var totalPages = document.getElementsByClassName("page").length;
const progress = document.getElementById("progress");

function showPage(pageNumber) {
  // Hide all pages
  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }

  // Show the current page
  var currentPageElement = document.getElementById("page" + pageNumber);
  currentPageElement.style.display = "block";

  localStorage.setItem("currentPage", pageNumber);

  // Update progress bar
  updateProgressBar(pageNumber);
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function previousPage() {
  if (currentPage > 1) {
    // Remove "progress-step-active" class from the current step
    var progressSteps = document.getElementsByClassName("progress-step");
    progressSteps[currentPage - 1].classList.remove("progress-step-active");

    currentPage--;
    showPage(currentPage);
  }
}

// Show the first page initially
showPage(1);

function updateProgressBar(currentPageNumber) {
  const progressSteps = document.querySelectorAll(".progress-step");

  // Add "progress-step-active" class to the corresponding step
  if (currentPageNumber <= progressSteps.length) {
    progressSteps[currentPageNumber - 1].classList.add("progress-step-active");
  }
  // Calculate the width of the progress bar
  let progressWidth = 0;

  if (currentPageNumber >= progressSteps.length) {
    progressWidth = 100;
  } else if (currentPageNumber > 1) {
    progressWidth = ((currentPageNumber - 1) / (progressSteps.length - 1)) * 100;
  }

  progress.style.width = progressWidth + "%";
}

// Retrieve the current page from localStorage on page load
window.addEventListener("load", function() {
  currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
  showPage(currentPage);
});

// Call the updateProgressBar() function whenever the page changes
window.addEventListener("hashchange", function() {
  currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
  showPage(currentPage);
});

window.addEventListener('DOMContentLoaded', function() {
  var parentElement = document.querySelector('.parent');
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;
  console.log(screenWidth);
  if (screenWidth <= 1200) {
    parentElement.style.backgroundColor = 'red';
  }
});
