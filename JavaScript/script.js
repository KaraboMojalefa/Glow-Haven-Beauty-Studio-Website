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
            document.getElementById("contactResult").innerHTML = "Thank you! Your message has been sent succesfully.";
            form.reset();
        });
    }
});
// Booking form validation
const bookingForm = document.querySelector("#bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(event){
        event.preventDefault();
        const name = document.querySelector("#bookingName").value.trim();
        const email = document.querySelector("#bookingEmail").value.trim();
        const age = document.querySelector("#bookingAge").value.trim();
        const service = document.querySelector("bookingService").value;
        const date = document.querySelector("#bookingDate").value;
        if (name === "") {
            alert("Please enter your name");
            return;
        }
         if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address");
                return;
        }
        if (age < 1) {
            alert("Age must be greater than 0");
            return;
        }
        if (service === "--Select an option--") {
            alert("Please select a service");
            return;
        }
        if (date = "") {
            alert("Please select a booking date");
            return;
        }
        document.querySelector("#bookingResponse").innerHTML = "Thank you, " + name +
        ". Your booking request for " + service +
        " has been received.";
        bookingForm.reset();
    });
    }
}