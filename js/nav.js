let isOpenMobile = document.querySelector("nav").dataset.openMobile == "true";

window.addEventListener("load", () => {
    let res = window.matchMedia("only screen and (min-width: 1200px)")
    if (res.matches) {
        document.querySelector("#nav-items").ariaHidden = "false";
    } else {
        document.querySelector("#nav-items").ariaHidden = "true";
    }
})

function scrollToEl(id) {
    const el = document.querySelector("#" + id);
    if (el == null) return console.error("No element found with the given id");
    const elTop = el.offsetTop;
    const elHeight = el.offsetHeight;
    const screenHeight = window.innerHeight;
    const to = elTop - (screenHeight - elHeight) / 2;
    window.scrollTo({
        top: to,
        behavior: "smooth"
    });
    if (isOpenMobile) {
        closeNavMobile();
    }
}

function openNavMobile() {
    if (isOpenMobile) return;
    document.querySelector("#nav-items").ariaHidden = "false";
    document.querySelector("nav").dataset.openMobile = "true";
    isOpenMobile = true;
}
function closeNavMobile() {
    if (!isOpenMobile) return;
    document.querySelector("#nav-items").ariaHidden = "true";
    document.querySelector("nav").dataset.openMobile = "false";
    isOpenMobile = false;
}