console.log("Javascript file loaded!");

const menuToggleButton = document.getElementById("menu-toggle-button");

const navBarLinks = document.querySelector(".navbar-links");

menuToggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("open");
  menuToggleButton.classList.toggle("open");
});

const allNavLinks = document.querySelectorAll(".navbar-links li");

allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBarLinks.classList.remove("open");
    menuToggleButton.classList.remove("open");
  });
});
