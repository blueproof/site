
window.addEventListener("load", () => {
    let isOpenMobile = document.querySelector("nav").dataset.openMobile == "true";
    function scrollToEl(event, id) {
        event.preventDefault();
        event.stopPropagation();
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
    function openNavMobile(ev) {
        ev.stopPropagation();
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


    let res = window.matchMedia("only screen and (min-width: 1200px)")
    if (res.matches) {
        document.querySelector("#nav-items").ariaHidden = "false";
    } else {
        document.querySelector("#nav-items").ariaHidden = "true";
    }

    window.addEventListener("scroll", closeNavMobile);
    document.querySelector("#nav-close").addEventListener("click", closeNavMobile);
    document.querySelector("#nav-open").addEventListener("click", openNavMobile);

    const aLinks = document.querySelectorAll("a[data-target]");
    for (let a of aLinks) {
        a.addEventListener("click", (ev) => {
            scrollToEl(ev, a.getAttribute("data-target"))
        })
    }
})

