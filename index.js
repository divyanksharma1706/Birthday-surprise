document.getElementById("celebrateBtn").addEventListener("click", function(event) {

    event.preventDefault();

    const plane = document.getElementById("paperPlane");
    const transition = document.querySelector(".page-transition");

    // Plane fly
    plane.classList.add("fly");

    // Screen transition
    setTimeout(function() {
        transition.classList.add("show");
    }, 900);

    // Open second webpage
    setTimeout(function() {
        window.location.href = "Surprise1.html";
    }, 1800);

});