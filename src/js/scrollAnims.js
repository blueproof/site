import lax from "lax.js"

window.addEventListener("load", function () {
    lax.init()

    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

    const endPos = window.innerHeight / 4;
    lax.addElements('#hero-logo', {
        scrollY: {
            opacity: [
                [0, `${endPos}`],
                [1, 0],
                {
                    easing: "ease-in"
                }
            ],
            translateY: [
                [0, `${endPos}`],
                [0, `${endPos} - 100`],
            ],
        }
    });
    lax.addElements('#hero-stl', {
        scrollY: {
            opacity: [
                [0, `${endPos}`],
                [1, 0],
                {
                    easing: "ease-in"
                }
            ],
            translateY: [
                [0, `${endPos}`],
                [0, `${endPos} - 100`],
            ],
            "letter-spacing": [
                [0, `${endPos}`],
                [8, 9],
                {
                    cssFn: (val) => `${val}px`
                }
            ]
        }
    });
    lax.addElements('#hero-down-arrow', {
        scrollY: {
            opacity: [
                [0, `${endPos}`],
                [1, 0],
                {
                    easing: "ease-in"
                }
            ],
            translateY: [
                [0, `${endPos}`],
                [0, `${endPos} - 100`],
            ],
        }
    });
    this.document.querySelector("#hero-down-arrow-link").addEventListener("click", (ev) => {
        ev.preventDefault();
        this.document.querySelector("#what-we-do").scrollIntoView({ behavior: "smooth" })
    })

    lax.addElements('#nav-left', {
        scrollY: {
            translateX: [
                [`${endPos}`, `${endPos} + 200`],
                ["-elWidth*2", 0],
            ],
        }
    });
    lax.addElements('#nav-right', {
        scrollY: {
            translateX: [
                [`${endPos}`, `${endPos} + 200`],
                ["elWidth + 24", 0],
            ],
        }
    })
    lax.addElements('#nav-bg', {
        scrollY: {
            translateY: [
                [`${endPos}`, `${endPos} + 200`],
                ["-elHeight", 0],
            ],
        }
    })

    //Desktop or tablet
    if (!navigator.userAgent.toLowerCase().match(/mobile/i)) {
        // lax.addElements("#digitising-story > *", {
        //     scrollY: {
        //         translateY: [
        //             ["elInY", "elCenterY"],
        //             [300, 0]
        //         ]
        //     }
        // });
    }

    this.document.querySelectorAll(".main-nav").forEach((el) => {
        el.classList.remove("hidden");
    })
});