class MobileNavbar {
  constructor(mobileMenu, navlist, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navlist = document.querySelector(navlist);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      let delay = index / 7 + 0.3;
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.3s ease forwards ${delay}s`);
    });
  }

  handleClick() {
    this.navlist.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    console.log(this);
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu ",
  ".nav-list",
  ".nav-list li"
);

mobileNavbar.init();

window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  loading.style.display = "none";
  document.body.classList.remove("hidden");
});
