// Function expression to select elements
const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
  // Toggle the nav on menu icon click
  selectElement(".nav-list").classList.toggle("active");

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });

  //Burger Animation
  selectElement(".burger-menu-icon").classList.toggle("toggle");
});

//close navbar on nav link click

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    
    if ( state_2 === "menu" ) {
      openMenuAnimation_2();
      state_2 = "cross";
      crossDisappearComplete_2 = false;
          menuAppearComplete_2 = false;
    } else if ( state_2 === "cross" ) {
      closeMenuAnimation_2();
      state_2 = "menu";
      menuDisappearComplete_2 = false;
          crossAppearComplete_2 = false;
    }
    selectElement(".burger-menu-icon").classList.toggle("toggle");
  });
});
