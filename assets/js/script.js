"use strict"; // Enables strict mode to catch common coding errors and unsafe actions.

// Select modal elements using data attributes
const modal = document.querySelector("[data-modal]"); // Selects the modal element using a data attribute.
const modalCloseBtn = document.querySelector("[data-modal-close]"); // Selects the close button for the modal.
const modalCloseOverlay = document.querySelector("[data-modal-overlay]"); // Selects the overlay element that closes the modal.

// Function to close the modal
const modalCloseFunc = function () {
  modal.classList.add("closed"); // Adds the "closed" class to the modal, which hides it via CSS.
};

// Event listeners for closing the modal
modalCloseOverlay.addEventListener("click", modalCloseFunc); // Closes the modal when the overlay is clicked.
modalCloseBtn.addEventListener("click", modalCloseFunc); // Closes the modal when the close button is clicked.

// Select notification toast elements
const notificationToast = document.querySelector("[data-toast]"); // Selects the notification toast element.
const toastCloseBtn = document.querySelector("[data-toast-close]"); // Selects the button to close the notification toast.

// Event listener for closing the notification toast
toastCloseBtn.addEventListener("click", function () {
  notificationToast.classList.add("closed"); // Hides the toast by adding the "closed" class to it.
});

// Select mobile menu elements
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
); // Selects all buttons that open the mobile menu.
const mobileMenu = document.querySelectorAll("[data-mobile-menu]"); // Selects all mobile menu elements.
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
); // Selects all buttons that close the mobile menu.
const overlay = document.querySelector("[data-overlay]"); // Selects the overlay element for the mobile menu.

// Loop through each mobile menu button
for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // Iterates over each mobile menu open button.

  // Function to close the mobile menu
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active"); // Removes the "active" class from the current mobile menu, hiding it.
    overlay.classList.remove("active"); // Removes the "active" class from the overlay, hiding it.
  };

  // Event listener for opening the mobile menu
  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active"); // Adds the "active" class to the current mobile menu, making it visible.
    overlay.classList.add("active"); // Adds the "active" class to the overlay, making it visible.
  });

  // Event listeners for closing the mobile menu
  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc); // Closes the mobile menu when the close button is clicked.
  overlay.addEventListener("click", mobileMenuCloseFunc); // Closes the mobile menu when the overlay is clicked.
}

// Select accordion elements
const accordionBtn = document.querySelectorAll("[data-accordion-btn]"); // Selects all accordion buttons.
const accordion = document.querySelectorAll("[data-accordion]"); // Selects all accordion content elements.

// Loop through each accordion button
for (let i = 0; i < accordionBtn.length; i++) {
  // Iterates over each accordion button.

  // Adds an event listener to each accordion button
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active"); // Checks if the accordion content is already active (visible).

    // Loop through all accordion content elements
    for (let i = 0; i < accordion.length; i++) {
      // Iterates through all accordion content items.
      if (clickedBtn) break; // If the clicked button's content is already active, exit the loop (no action needed).

      if (accordion[i].classList.contains("active")) {
        // If any other accordion content is active, hide it.
        accordion[i].classList.remove("active"); // Removes the "active" class, hiding the accordion content.
        accordionBtn[i].classList.remove("active"); // Removes the "active" class from the corresponding accordion button.
      }
    }

    // Toggle the active state of the clicked button and its corresponding content
    this.nextElementSibling.classList.toggle("active"); // Toggles the "active" class on the next sibling (accordion content) of the clicked button.
    this.classList.toggle("active"); // Toggles the "active" class on the clicked accordion button itself.
  });
}

// Define a function to show or hide the "scroll up" button based on scroll position
const scrollUp = () => {
  // Get the "scroll up" button element by its ID
  const scrollUp = document.getElementById("scroll-up");

  // Check if the current vertical scroll position (this.scrollY) is greater than or equal to 350 pixels
  this.scrollY >= 350
    ? // If true, add the class 'show-scroll' to the scrollUp element
      scrollUp.classList.add("show-scroll")
    : // If false, remove the class 'show-scroll' from the scrollUp element
      scrollUp.classList.remove("show-scroll");
};

// Add an event listener to the window object that triggers the scrollUp function on scroll
window.addEventListener("scroll", scrollUp);
