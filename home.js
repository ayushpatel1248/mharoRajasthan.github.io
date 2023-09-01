console.log(window.screenTop)

const navbar = document.getElementById("nav")


document.addEventListener("scroll", () => {
    if (window.scrollY > 382) {
        navbar.classList.add("backgroundGray")
        console.log("addbg")
        console.log(navbar.classList)
    }
    else {
        navbar.classList.remove("backgroundGray")
        console.log("removebg")
        console.log(navbar.classList)
    }
})
