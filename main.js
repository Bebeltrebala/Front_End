document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const btn = document.getElementById("accept-cookies");

  if (localStorage.getItem("cookiesAccepted") === "true") {
    banner.classList.add("hidden");
  }

  btn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.classList.add("hidden");
  });
});
