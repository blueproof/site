const intersectionObserver = new IntersectionObserver((entries) => {
    for (let entry of entries) {
        if (entry.isIntersecting) {
            if (entry.target instanceof HTMLElement) {
                entry.target.style.opacity = "1";
                intersectionObserver.unobserve(entry.target)
            }
        }
    }
}, {
    root: null,
    rootMargin: "0px",
    threshold: 0
})
document.querySelectorAll<HTMLElement>("*[data-fade-in]").forEach((el) => {
    el.style.opacity = "0";
    el.style.transitionProperty = `${el.style.transitionProperty} opacity`
    el.style.transitionDuration = '1s'
    el.style.transitionTimingFunction = 'ease-in-out'
    intersectionObserver.observe(el)
});