const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")

menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("!right-0");
    menuIcon.classList.toggle("cross");
    document.body.classList.toggle("overFlowHidden")
})

// back-to-top

const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})

topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;

})
// function topfuncition() {
//     window.scrollTo({ behavior: "smooth" });
// }
