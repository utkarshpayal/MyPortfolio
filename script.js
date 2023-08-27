let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");
let isDarkMode = true; // Set the initial mode to dark mode

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

const form = document.querySelector('form[name="contact"]');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        }).then(() => {
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Thank you for your message!';
            form.parentNode.replaceChild(successMessage, form);
        }).catch((error) => {
            console.error(error);
        });
    });
    
    
    
    
    
    function animatePills() {
    const pills = document.querySelectorAll('.common-pill');

    pills.forEach((pill, index) => {
      // Add a delay to each pill animation
      pill.style.animation = `fadeInUp 0.5s ${index * 0.1}s both`;
    });
  }
