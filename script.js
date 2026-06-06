document.getElementById("contactForm") .addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name") .value;
    let email = document.getElementById("email") .value;

    if(name.length < 3){
        alert("Name must be at least 3 characters.");
        return;
    }

    document.getElementById("response") .innerHTML = "Thank you " + name + ".Your message has been received.";

});