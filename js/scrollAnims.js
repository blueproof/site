window.addEventListener("load", function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

    // Add animation bindings to elements
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
                [5, 15],
                {
                    cssFn: (val) => `${val}px`
                }
            ]
        }
    });
    lax.addElements('.main-nav .left', {
        scrollY: {
            translateX: [
                [`${endPos}`, `${endPos} + 300`],
                ["-elWidth-18", 0],
            ],
        }
    });
    lax.addElements('.main-nav .right', {
        scrollY: {
            translateX: [
                [`${endPos}`, `${endPos} + 200`],
                ["elWidth + 24", 0],
            ],
        }
    })
});