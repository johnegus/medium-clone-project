import { handleErrors } from "./utils.js"

document.addEventListener("DOMContentLoaded", () => {
    const deleteStory = document.querySelector(".deleteStoryBtn");

    deleteStory.addEventListener('click', async () => {
        try {
            debugger
            let storyId = 35;
            const res = await fetch(`/api/stories/${storyId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "READIUM_ACCESS_TOKEN"
                        )}`,
                    },
                });
            if (!res.ok) {
                throw res;
            }
        } catch (err) {
            console.log("error")
        }
    });
});