window.addEventListener("load", () => {
    const form = document.querySelector("#contact-form");
    if (form instanceof HTMLFormElement) {
        form.onsubmit = (ev) => {
            ev.preventDefault();

            const formData = new FormData(form);
            const name = formData.get("name");
            const email = formData.get("email");
            const budget = formData.get("budget");
            const description = formData.get("description");
            console.log("NOT YET IMPLEMENTED");
        }
    }
});