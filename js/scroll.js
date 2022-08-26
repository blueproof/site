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
    })
}