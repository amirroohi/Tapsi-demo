// NAVBAR
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", () => {
  navbar.classList.toggle("nav__expanded");
});
// TABS
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTabContent = document.querySelector(
      `#${tab.dataset.tabTarget}`
    );
    // remove pre state
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));
    // add new state
    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});

