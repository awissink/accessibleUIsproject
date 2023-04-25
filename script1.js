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
        for (const [name, value] of formData) {
            theData[name] = value;
        }
        $.cookie("data", JSON.stringify(theData));
    }

    function getResources() {
        for (const [key, value] of Object.entries(theData)) {
            // Push CSS id name onto list
            if (key == "appType") {
                if (value == "WEBAPP") {
                    theResources.push("webappresources");
                } else if (value == "IOS") {
                    theResources.push("iosresources");
                } else if (value == "ANDROIDAPP") {
                    theResources.push("androidresources");
                } else if (value == "BROWSEREXTENSION") {
                    theResources.push("extensionresources");
                }
            } else if (key == "ageGroup5") {
                theResources.push("olderpeopleresources");
            } else if (key == "group1") {
                theResources.push("visuallyimpairedresources");
            } else if (key == "group2") {
                theResources.push("deafresources");
            } else if (key == "group3") {
                theResources.push("neuroresources");
            } else if (key == "productArea") {
                if (value == "socialNetworking") {
                    theResources.push("socialresources");
                } else if (value == "Gaming") {
                    theResources.push("gamingresources");
                } else if (value == "Education") {
                    theResources.push("educationresources");
                } else if (value == "travelLeisure") {
                    theResources.push("travelresources");
                } else if (value == "Entertainment") {
                    theResources.push("entertainmentresources");
                } else if (value == "News") {
                    theResources.push("newsresources");
                } else if (value == "Shopping") {
                    theResources.push("shoppingresources");
                }
            }
        }
        $.cookie("resources", JSON.stringify(theResources));
    }
});