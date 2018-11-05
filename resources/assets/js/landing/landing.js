import "./benefit";
import fullpage from "fullpage.js";

window.fullpage = fullpage;

const fp = new fullpage("#slide-container", {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  onLeave(origin, destination, direction) {
    if (origin.index === 0) {
      document.querySelector(".header-overlay").classList.remove("visible");
      document.querySelector(".header-overlay").classList.add("not-visible");
    }
    if (origin.index === 1 && direction === "up") {
      document.querySelector(".header-overlay").classList.remove("not-visible");
      document.querySelector(".header-overlay").classList.add("visible");
    }
  }
});

document.querySelector("#menu").addEventListener("click", e => {
  document.querySelector("#nav-menu").classList.toggle("show-nav");
});
