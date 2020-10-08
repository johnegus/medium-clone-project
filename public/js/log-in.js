const logInForm = document.querySelector(".log-in-form");

logInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(logInForm);
  const email = formData.get("email");
  const password = formData.get("password");
  const body = { email, password };
  try {
    const res = await fetch("api/users/token", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw res;
    }
    const {
      token,
      user: { id },
    } = await res.json();

    localStorage.setItem("READIUM_ACCESS_TOKEN", token);
    localStorage.setItem("READIUM_CURRENT_USER_ID", id);

    window.location.href = "/login"
  } catch (err) {
    // if (err.status >= 400 && err.status < 600) {
    //   const errorJSON = await err.json();
    //   const errorsContainer = document.querySelector(".errors-container");
    //   let erro
    // }
  }
})