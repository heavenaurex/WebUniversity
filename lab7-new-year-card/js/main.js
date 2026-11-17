const wishButton = document.querySelector(".wish-button");
const wish = document.querySelector("#wish");
const wishButtonLabel = document.querySelector(".wish-button__label");

wishButton.addEventListener("click", () => {
  const isExpanded = wishButton.getAttribute("aria-expanded") === "true";

  wishButton.setAttribute("aria-expanded", String(!isExpanded));
  wish.hidden = isExpanded;
  wishButtonLabel.textContent = isExpanded
    ? "Відкрити побажання"
    : "Сховати побажання";
});
