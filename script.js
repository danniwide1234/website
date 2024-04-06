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

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form data
        const formData = new FormData(form);

        // Display form data (You can replace this with your desired action)
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        
        // Send form data to Formspree
        fetch('https://formspree.io/f/mjvnpkok', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful submission (e.g., show success message)
            console.log('Form submitted successfully:', data);
            // You can add additional actions here, such as showing a success message to the user
        })
        .catch(error => {
            // Handle errors (e.g., show error message)
            console.error('Error submitting form:', error);
            // You can add additional error handling here, such as showing an error message to the user
        });
    });
});

