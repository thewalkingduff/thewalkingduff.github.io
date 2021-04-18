const toggleButton = document.querySelector(".toggle-button")
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

console.log(toggleButton)
console.log(navbarLinks)

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})