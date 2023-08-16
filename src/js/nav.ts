
window.addEventListener("load", () => {

    const navEl = document.querySelector("nav");
    const navItemsEl = document.querySelector<HTMLUListElement>("#nav-items");
    const navCloseEl = document.querySelector<HTMLButtonElement>("#nav-close")
    const navOpenEl = document.querySelector<HTMLButtonElement>("#nav-open")
    if (!navEl || !navItemsEl || !navCloseEl || !navOpenEl) return;

    let isOpenMobile = navEl.dataset.openMobile == "true";

    const scrollToEl = (event: Event, id: string) => {
        event.preventDefault();
        event.stopPropagation();
        const el = document.querySelector("#" + id);
        if (el == null) return console.error("No element found with the given id");
        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        if (isOpenMobile) {
            closeNavMobile();
        }
    }
    const openNavMobile = (ev: MouseEvent) => {
        ev.stopPropagation();
        if (isOpenMobile) return;
        navItemsEl.ariaHidden = "false";
        navEl.dataset.openMobile = "true";
        isOpenMobile = true;
    }
    const closeNavMobile = () => {
        if (!isOpenMobile) return;
        navItemsEl.ariaHidden = "true";
        navEl.dataset.openMobile = "false";
        isOpenMobile = false;
    }

    let res = window.matchMedia("only screen and (min-width: 1200px)")
    if (res.matches) {
        navItemsEl.ariaHidden = "false";
    } else {
        navItemsEl.ariaHidden = "true";
    }

    window.addEventListener("scroll", closeNavMobile);
    navCloseEl.addEventListener("click", closeNavMobile);
    navOpenEl.addEventListener("click", openNavMobile);
    const aLinks = document.querySelectorAll("a[data-target]");

    for (let a of aLinks) {
        a.addEventListener("click", (ev) => {
            const target = a.getAttribute("data-target");
            if (!target) return;
            scrollToEl(ev, target)
        })
    }
})

