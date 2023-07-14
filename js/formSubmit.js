const EMAILER_API = "https://6oiufi1ce2.execute-api.eu-west-2.amazonaws.com/Prod/send";

window.addEventListener("load", () => {
    // function displayError() {

    // }
    const form = document.querySelector("#contact-form");
    if (form instanceof HTMLFormElement) {
        form.onsubmit = async (ev) => {
            ev.preventDefault();

            const formData = new FormData(form);
            const name = formData.get("name");
            const email = formData.get("email");
            // const budget = formData.get("budget");
            const description = formData.get("description");

            // if (!name || !email || !budget || !description) {
            if (!name || !email || !description) {
                console.error("Form does not contain all the required fields");
            }

            const subject = `Blueproof Contact Form - ${name}`
            // const message = `Contact form message from: ${name} | ${email}\n\nBudget: ${budget}\n\n${description}`
            const message = `Contact form message from: ${name} | ${email}\n\n${description}`
            try {
                const response = await fetch(EMAILER_API, {
                    method: "POST",
                    body: JSON.stringify({ subject, message })
                });
                if (!response.ok) {
                    const bodyText = await response.text();
                    console.error(bodyText);
                } else {
                    window.location.reload()
                }
            } catch (err) {
                console.error(err);
            }
        }
    }
});