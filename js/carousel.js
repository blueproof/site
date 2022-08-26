window.addEventListener("load",
    () => {
        document.querySelectorAll(".carousel-btn").forEach(
            (el) => {
                const id_for = el.getAttribute("data-for");
                if (id_for == null) return;
                const carousel = document.querySelector("#" + id_for);
                if (carousel == null) return;
                const left = el.getAttribute("data-dir") === "left";

                let activeIndex = Number.parseInt(carousel.getAttribute("data-active-index"));
                const children = carousel.children.item(0).children;
                let activeChild = children.item(activeIndex);
                if (activeChild instanceof Element) activeChild.setAttribute("data-active", "true");

                el.addEventListener("click", () => {
                    let activeIndex = Number.parseInt(carousel.getAttribute("data-active-index"));
                    const children = carousel.children.item(0).children;
                    let activeChild = children.item(activeIndex);
                    if (activeChild instanceof Element) activeChild.setAttribute("data-active", "false");

                    if (left) {
                        activeIndex = (activeIndex - 1 + children.length) % children.length;
                    } else {
                        activeIndex = (activeIndex + 1) % children.length;
                    }
                    activeChild = children.item(activeIndex);
                    if (activeChild instanceof Element) activeChild.setAttribute("data-active", "true");
                    carousel.setAttribute("data-active-index", activeIndex);
                });
            }
        )
    }
);