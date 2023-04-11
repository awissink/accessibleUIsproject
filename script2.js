$(document).ready(function() {

    var goBackBtn = document.getElementById("goback");
    var theResources = $.cookie("resources");
    theResources = JSON.parse(theResources);
    var theData = $.cookie("data");

    console.log(theResources);
    console.log(theData);

    displayResources();

    if (goBackBtn) {
        goBackBtn.addEventListener("click", (e) => {
            for (i in allResourceIds) {
                var resourceName = allResourceIds[i];
                var resourcesToShow = document.getElementById(resourceName);
                if (resourcesToShow) {
                    resourcesToShow.style.display = "none";
                }
            }
            reset();
            window.location.href = "./form.html"
        })
    }

    function reset() {
        // Resets variables after form submission
        theData = {};
        theResources = [];
        $.cookie("data", JSON.stringify(theData));
        $.cookie("resources", JSON.stringify(theResources));
    }

    function displayResources() {
        // Loop through all resources and add them to the HTML page
        for (i in theResources) {
            var resourceName = theResources[i];
            console.log(resourceName);
            var resourcesToShow = document.getElementById(resourceName);
            resourcesToShow.style.display = "block";
        }
    }

});