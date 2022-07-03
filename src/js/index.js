import "../scss/main.scss";

let isDark = false;

const switchModes = document.querySelector(".mode--js");

switchModes.addEventListener("click", () => {
  if (isDark) {
    document.documentElement.style.setProperty("--background-color", "#353a47");
    document.documentElement.style.setProperty("--text-color", "#9b384e");
    isDark = false;
  } else {
    document.documentElement.style.setProperty("--background-color", "#9b384e");
    document.documentElement.style.setProperty("--text-color", "#353a47");
    isDark = true;
  }
});
