(function () {
    const test = document.getElementsByTagName("path");

    // This handler will be executed only once when the cursor
    // moves over the unordered list
    for (let index = 0; index < test.length; index++) {
        test[index].addEventListener(
            "mouseenter",
            (event) => {
                // highlight the mouseenter target
                event.target.classList.add('featureHover');

                let featurePrefix = event.target.id.substring(0, event.target.id.indexOf("-"));
                if (featurePrefix == "") {
                    return;
                }
                let relatedFeaturesList = $("[id^=" + featurePrefix + "]");
                for (let featureIndex = 0; featureIndex < relatedFeaturesList.length; featureIndex++) {
                    const element = relatedFeaturesList[featureIndex].classList.add('featureHover');
                }
            },
            false,
        );

        test[index].addEventListener(
            "mouseleave",
            (event) => {
                // highlight the mouseenter target
                event.target.classList.remove('featureHover');

                let featurePrefix = event.target.id.substring(0, event.target.id.indexOf("-"));
                if (featurePrefix == "") {
                    return;
                }
                let relatedFeaturesList = $("[id^=" + featurePrefix + "]");
                for (let featureIndex = 0; featureIndex < relatedFeaturesList.length; featureIndex++) {
                    const element = relatedFeaturesList[featureIndex].classList.remove('featureHover');
                }
            },
            false,
        );
    }

})();

function LoadFeatureToBottomSheet(featureName) {
    // URL of the page you want to load
    const url = `FeatureContent/${featureName}`;

    // Use the fetch API to load the page content
    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
        .then(data => {
            // Inject the HTML content into the div with id 'content'
            document.getElementById('bottom-sheet-content').innerHTML = data;
            showBottomSheet();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
