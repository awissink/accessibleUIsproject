// Stores the data from the survey results
var data = {};

// Stores the resources based on results of the survey
// Data structure: a list of div IDs
var resources = [];

// Stores div IDs for all resources (for bookkeeping purposes)
// TODO: add all resources
var allResourceIds = ["webappresources", "iosresources", "androidresources"];

$(document).ready(function() {

    const form = document.getElementById("survey");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        reset();

        // Validate form input
        let valid = true;
        // TODO: loop through questions and ensure there is input for all
        if (valid) {
            getData(form);
            getResources();
            window.location.href = "./resources.html"
            displayResources();
        }
    });

    function getData(form) {
        var formData = new FormData(form);
    
        // Get form data and store in a dictionary
        for (const [name,value] of formData) {
            console.log(name, value);
            data[name] = value;
        }
    }
});

function getResources() {
    for (const [key, value] of Object.entries(data)) {
        if (key == "appType") {
            if (value == "WEBAPP") {
                // Push css class name
                resources.push("webappresources");
            }
        }
        // TODO: add rest of if-else logic with resources
    }
    console.log(resources)
}

function displayResources() {
    // Loop through all resources and add them to the HTML page
    for (i in resources) {
        var resourceName = resources[i];
        var resourcesToShow = document.getElementById(resourceName);
        resourcesToShow.style.display = "block";
    }
}

function reset() {
    // Resets variables after form submission
    data = {};
    resources = [];
}

function goBackButton() {
    // TODO: loop through all resources and hide them
    for (i in allResourceIds) {
        var resourceName = allResourceIds[i];
        var resourcesToShow = document.getElementById(resourceName);
        resourcesToShow.style.display = "none";
    }
    reset();
    window.location.href = "./form.html"
}