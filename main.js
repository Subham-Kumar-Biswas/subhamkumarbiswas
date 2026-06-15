document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLists = document.querySelector(".nav-lists");
    const navLinks = document.querySelectorAll(".nav-lists a")

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navLists.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navLists.classList.remove("active");
        });
    });

    const yearSpan = document.querySelector(".footer-copyright .year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const form = document.getElementById("hire-me-form");

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const button = form.querySelector("button");
            const originalButtonText = button.textContent;

            button.textContent = "Sending...";
            button.disabled = true;

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert("Thank you! Your message has been sent successfully. Subham will connect with you soon!");
                    form.reset();
                } else {
                    alert("Oops! There was a problem submitting your form. Please try again.");
                }
            } catch (error) {
                alert("Oops! Network error. Please check your internet connection and try again.");
            } finally {
                button.textContent = originalButtonText;
                button.disabled = false;
            }
        })
    }
});