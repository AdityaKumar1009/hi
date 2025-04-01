function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById("get-joke-btn").addEventListener("click", async function() {
  const jokeDisplay = document.getElementById("joke-display");
  jokeDisplay.textContent = "...on it...";

  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
    const data = await response.json();

    if (data.type === "single") {
      jokeDisplay.textContent = data.joke;
    } else {
      jokeDisplay.textContent = `${data.setup} - ${data.delivery}`;
    }
  } catch (error) {
    jokeDisplay.textContent = "Sorry, couldn't fetch a joke at the moment.";
  }
});




