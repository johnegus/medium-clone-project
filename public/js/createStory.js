import { handleErrors } from "./utils.js"

document.addEventListener("DOMContentLoaded", () => {
    const createStoryForm = document.querySelector('.create-story-form');

    createStoryForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(createStoryForm);
        const title = formData.get("title")
        const subtitle = formData.get("subtitle")
        const body = formData.get("body")
        const genreId = formData.get("genreId")
        const story = { title, subtitle, body, genreId };
        try {
            const res = await fetch('/api/stories', {
                method: "POST",
                body: JSON.stringify(story),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                        "READIUM_ACCESS_TOKEN"
                    )}`,
                },
            });
            if (!res.ok) {
                throw res;
            }
            formData.reset();
        } catch (err) {
            handleErrors(err);
        }
    })
});