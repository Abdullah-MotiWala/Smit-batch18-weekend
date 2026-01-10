function toggleTheme() {
  const body = document.getElementById("body");
  const isLightTheme = body.classList.contains("light-theme");
  if (isLightTheme) body.classList.replace("light-theme", "dark-theme");
  if (!isLightTheme) body.classList.replace("dark-theme", "light-theme");
}

const toggleButton = document.getElementById("toggle-btn");
toggleButton.addEventListener("click", toggleTheme);
