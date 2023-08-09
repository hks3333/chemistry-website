document.getElementById("arrow").addEventListener("click", function() {
    // Fade in effect
    document.getElementById("header").style.opacity = 1;

    // Redirect to Page 2 after the fade-in effect is complete
    setTimeout(function() {
        window.location.href = "index.html";
    }, 1000); // 1000ms = 1 second, adjust as needed
});