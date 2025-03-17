console.log("Script loaded successfully"); //this is to test if the js is loaded (useful for debugging)

document.addEventListener("DOMContentLoaded", function () { 
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const images = document.querySelectorAll(".slider-image");
    let index = 0;

    function updateGallery() {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", function () {
            index = (index > 0) ? index - 1 : images.length - 1;
            updateGallery();
        });

        nextBtn.addEventListener("click", function () {
            index = (index < images.length - 1) ? index + 1 : 0;
            updateGallery();
        });
    }

    updateGallery(); // Initialize gallery
});

document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let isValid = true;

    // Function to clear previous error messages
    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(error => error.textContent = "");
    }

    clearErrors(); // Clear errors before validating

    if (name === "") {
        displayError("name", "Name is required.");
        isValid = false;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        displayError("name", "Name must contain only letters.");
        isValid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        displayError("email", "Enter a valid email address.");
        isValid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        displayError("phone", "Enter a valid 10-digit phone number.");
        isValid = false;
    }

    if (message.length < 10) {
        displayError("message", "Message must be at least 10 characters long.");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Function to display error messages
function displayError(fieldId, message) {
    let field = document.getElementById(fieldId);
    let errorSpan = document.createElement("span");
    errorSpan.className = "error-message text-red-500 text-sm";
    errorSpan.textContent = message;
    field.insertAdjacentElement("afterend", errorSpan);
}

