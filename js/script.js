document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
});
document.querySelector('.more-btn').addEventListener('click', () => {
  window.location.href = 'products.html';
});
