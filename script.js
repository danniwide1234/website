window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display");
    }, 6000);
}

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});

function toggleVisibility(elementId, buttonId) {
    var element = document.getElementById(elementId);
    var button = document.getElementById(buttonId);
    if (element.style.display === "none" || !element.style.display) {
        element.style.display = "block";
        button.textContent = "Collapse"; // Change button text to "Collapse"
    } else {
        element.style.display = "none";
        button.textContent = "Read More"; // Change button text to "Read More"
    }
}
