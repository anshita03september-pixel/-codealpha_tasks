// ==========================
// PORTFOLIO WEBSITE JAVASCRIPT
// ==========================

// Welcome Message
window.addEventListener("load", function () {
    console.log("Portfolio Website Loaded Successfully!");
});

// ==========================
// SMOOTH SCROLLING
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ==========================
// STICKY NAVBAR EFFECT
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#08101d";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }

    else {

        header.style.background = "#111827";
        header.style.boxShadow = "none";

    }

});

// ==========================
// ACTIVE NAVIGATION LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// TYPING EFFECT
// ==========================

const typingText = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Enthusiast",
    "UI Developer"
];

let index = 0;
let charIndex = 0;

const heading = document.querySelector(".home-content h2");

function typeEffect() {

    if (!heading) return;

    if (charIndex < typingText[index].length) {

        heading.textContent += typingText[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 120);

    }

    else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        heading.textContent = typingText[index].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 70);

    }

    else {

        index++;

        if (index >= typingText.length)
            index = 0;

        setTimeout(typeEffect, 300);

    }

}

if (heading) {

    heading.textContent = "";

    typeEffect();

}

// ==========================
// CONTACT FORM VALIDATION
// ==========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

            }

        });

        if (!valid) {

            alert("Please fill all the fields.");

            return;

        }

        alert("Thank you! Your message has been submitted.");

        form.reset();

    });

}

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.padding = "12px 16px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.display = "none";
topBtn.style.fontSize = "20px";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// FADE-IN ANIMATION
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 1s";

    observer.observe(section);

});

// ==========================
// FOOTER YEAR
// ==========================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Your Name | All Rights Reserved`;

}