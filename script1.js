$(document).ready(function() {

    const form = document.getElementById("survey");
    var submitBtn = document.getElementById("submit");

    var theData = {};
    var theResources = [];

    if (submitBtn) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
    
            // Validate form input
            let valid = true;
            // TODO: loop through questions and ensure there is input for all
            if (valid) {
                getData(form);
                getResources();
                window.location.href = "./resources.html";
            }
        });
    }

    function getData(form) {
        var formData = new FormData(form);
    
        // Get form data and store in a dictionary
        for (const [name,value] of formData) {
            console.log(name, value);
            theData[name] = value;
        }
        $.cookie("data", JSON.stringify(theData));
    }

    function getResources() {
        for (const [key, value] of Object.entries(theData)) {
            if (key == "appType") {
                if (value == "WEBAPP") {
                    // Push css class name
                    theResources.push("webappresources");
                }
            }
            // TODO: add rest of if-else logic with resources
        }
        $.cookie("resources", JSON.stringify(theResources));
    }
});