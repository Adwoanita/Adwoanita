
document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to my portfolio website!");
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach(function (testimonial, i) {
            testimonial.classList.remove("active");
            if (i === index) {
                testimonial.classList.add("active");
            }
        });
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === 

testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });
});
