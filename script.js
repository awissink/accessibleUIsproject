$(document).ready(function() {

    const form = document.getElementById("survey");

    // Stores the data from the survey results
    var data = {};

    // Stores the resources based on results of the survey
    // Data structure: a list of dictionaries
    var resources = [];

    // Dictionary that stores resources to display to users
    // Data structure: a dictionary of dictionaries
    // Each dictionary corresponds to a "category" of resource
    // Each dictionary contains entries with the title of the resource as the key
    // and the value as a list, with list[0] containing the link and list[1] containing
    // the description of the resource
    var masterResourcesDict = {
        "webAppResources": {
            "Web Accessibility Initiative Development Tips": [
                "https://www.w3.org/WAI/tips/developing/",
                "This page introduces some basic considerations to help you get started developing \
                web content that is more accessible to people with disabilities. These tips are good \
                practice to help you meet Web Content Accessibility Guidelines (WCAG) requirements. \
                Follow the links to the related WCAG requirements, detailed background in the “Understanding” \
                document, guidance from Tutorials, user stories, and more."
            ]
        }
    };

    // EVENT LISTENERS
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        reset();

        // Validate form input
        let valid = true;
        // TODO: loop through questions and ensure there is input for all
        if (valid) {
            getData(form);
            window.location.href = "./resources.html"
            getResources();
            displayResources();
        }
    });

    // HELPER FUNCTIONS
    function getData(form) {
        var formData = new FormData(form);

        // Get form data and store in a dictionary
        for (const [name,value] of formData) {
            console.log(name, value);
            data[name] = value;
        }
    }

    function getResources() {
        for (const [key, value] of Object.entries(data)) {
            if (key == "appType") {
                if (value == "WEBAPP") {
                    resources.push(masterResourcesDict["webAppResources"]);
                }
            }
            // TODO: add rest of if-else logic with resources
        }
    }

    function displayResources() {
        // TODO: display resources on HTML page based on results of getResources()
    }

    function reset() {
        // Resets variables after form submission
        data = {};
        resources = [];
    }

});