// Redirects back to the home page when the return btn is clicked

const button = document.getElementById("return_btn");

button.addEventListener("click", function() {
    window.location.href = "index.html";
});
