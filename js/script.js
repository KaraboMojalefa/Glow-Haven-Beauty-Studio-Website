alert("Javan loaded");
// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form using class name
    const form = document.querySelector(".contact-form");
    // Only run if form exists on the page
    if (form) {
        form.addEventListener("submit", function (event) {
            // Get iput values
            const fullName = document.querySelector("#fullname").value.trim();
            const email = document.querySelector("#email").value.trim();
            const phone = document.querySelector("#phone").value.trim();
            const message = document.querySelector("#message").value.trim();
            const messageType = document.querySelector("#messageType");
            //Basic validation checks
            if (fullName === "") {
                alert("Please enter your full name");
                event.preventDefault();
                return;
            }
            if (email === "") {
                alert( "Please enter your email");
                event.preventDefault();
                return;
            }
            // Simple email check
             if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address");
                event.preventDefault();
                return; 
             }
            if (phone === "" || phone.length < 10) {
                alert("Please enter a valid phone number (at least 10 digits)");
                event.preventDefault();
                return;
            }
            if (messageType.value === "") {
                alert("Please select a message type");
                event.preventDefault();
                return;
            }
            if (message.length < 10) {
                alert("Message must be at least 10 characters long");
                event.preventDefault();
                return;
            }
            // If everything is correct
            event.preventDefault();
            document.getElementById("contactResult").innerHTML =
            "Thank you! Your message has been sent succesfully.";
             document.getElementById("contactResult").style.color = "green";
            form.reset();
        });
    }
});
// Booking form validation
const bookingForm = document.querySelector("#bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.querySelector("#bookingName").value.trim();
        const email = document.querySelector("#bookingEmail").value.trim();
        const age = document.querySelector("#bookingAge").value.trim();
        const service = document.querySelector("#bookingService").value;
        const date = document.querySelector("#bookingDate").value;
        if (name === "") {
            alert("Please enter your name");
            event.preventDefault();
            return;
        }
         if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address");
                event.preventDefault();
                return;
        }
        if (age < 1) {
            alert("Age must be greater than 0");
            event.preventDefault();
            return;
        }
        if (service === "--Select an option--") {
            alert("Please select a service");
            event.preventDefault();
            return;
        }
        if (date === "") {
            alert("Please select a booking date");
            event.preventDefault();
            return;
        }
        document.querySelector("#bookingResponse").innerHTML = "Form submitted successfully. Thank you, " + name +
        ". Your booking request for " + service +
        " has been received.";
        document.querySelector("#bookingResponse").style.color = "green";
        bookingForm.reset();
    });
 }
 // Enquiry form validation
 const enquiryForm = document.querySelector(".enquiry-form");
 if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event){
        event.preventDefault();
        const name = document.querySelector("#enquiryName").value.trim();
        const service = document.querySelector("#enquiryService").value;
        if(name === ""){
            alert("Please enter your name");
            return;
        }
        if(service === ""){
            alert("Please select a service");
            return;
        }
        document.getElementById("enquiryResult").innerHTML = 
        "Thank you " + name +
        ". Our team will contact you shortly regarding " +
        service + ".";
         document.getElementById("enquiryResult").style.color = "green";
        enquiryForm.reset();
    });
 }
 // Search functionality for services page
 const searchBar = document.getElementById("searchBar");
 if (searchBar) {
     searchBar.addEventListener("keyup", function() {
        const value = searchBar.value.toLowerCase();
        const rows = document.querySelectorAll(".services-table tr");
        rows.forEach((row, index) => {
            if (index === 0) return; // Skip header row
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(value) ? "" : "none";
        });
    });
 }
 // Gallery Lightbox
 const galleryImages = document.querySelectorAll(".gallery-container img");
 const lightbox = document.getElementById("lightbox");
 const lightboxImage = document.getElementById("lightboxImage");
 const closeLightbox = document.getElementById("closeLightbox");
 galleryImages.forEach(function(image){
    image.addEventListener("click", function(event){
        event.preventDefault();
        lightbox.style.display = "flex";
        lightboxImage.src = image.src;
    });
 });
 if(closeLightbox){
    closeLightbox.addEventListener("click", function(){
        lightbox.style.display = "none";
    });
 }
 // Restrict users from selecting today's date or past dates when booking
 // Only feature bookings starting from tomorrow are allowed when booking
 const bookingDate = document.getElementById("bookingDate");
 if (bookingDate) {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let minDate = tomorrow.toISOString(). split("T")[0];
    bookingDate.min = minDate;
 }
 // Restrict users from selecting today's date or past dates when enquiring
 // Only feature bookings starting from tomorrow are allowed when enquiring
 const enquiryDate = document.getElementById("enquiryDate");
 if (enquiryDate) {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let minDate = tomorrow.toISOString(). split("T")[0];
    enquiryDate.min = minDate;
 }