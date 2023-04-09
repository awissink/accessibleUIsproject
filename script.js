$(document).ready(function() {

    const form = document.getElementById("survey");
    var data = {};
    var resources = [];

    // EVENT LISTENERS
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validate form input
        let valid = true;
        // TODO: loop through questions and ensure there is input for all
        if (valid) {
            getData(form);
            // TODO: switch pages --> go to empty HTML page (which will have resources)
            // Display resources on page based on results of getResources()
        }
    });

    // HELPER FUNCTIONS
    function getData(form) {
        var formData = new FormData(form);

        // Get form data and store in a dictionary
        for (const [name,value] of formData) {
            console.log(name, value);
            data[name] = value
        }
    }

    function getResources(formData) {
        // TODO: will generate list of resources based on form responses
        return resources;
    }

    function displayResources() {
        // TODO: display resources on HTML page based on results of getResources()
    }

});