document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const nav = document.querySelector("nav")

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener("click", () => {
      nav.classList.toggle("active")
    })
  }

  // Collapsible sections
  const collapsibles = document.querySelectorAll(".collapsible")

  collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", function () {
      this.classList.toggle("active-collapsible")
      const content = this.nextElementSibling

      if (content.style.maxHeight) {
        content.style.maxHeight = null
      } else {
        content.style.maxHeight = content.scrollHeight + "px"
      }
    })
  })

  // Year sections in publications
  const yearTitles = document.querySelectorAll(".year-title")

  yearTitles.forEach((title) => {
    title.addEventListener("click", function () {
      this.classList.toggle("active")
      const publications = this.nextElementSibling
      publications.classList.toggle("active")
    })
  })
})
