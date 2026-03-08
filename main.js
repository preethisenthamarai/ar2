document.addEventListener("DOMContentLoaded", function () {

    const marker = document.querySelector("a-marker");

    marker.addEventListener("markerFound", function () {
        console.log("Flashcard detected");
    });

    marker.addEventListener("markerLost", function () {
        console.log("Flashcard removed");
    });

});
