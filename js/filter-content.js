const HIDDEN_CSS_CLASS = "hidden";

function handleTabClick({ target }) {
  const parent = target.closest(`[data-filter]`);
  const { value } = target;

  if (parent) {
    [...parent.querySelectorAll(`[data-filter-target]`)].map((x) =>
      !x.textContent.match(new RegExp(value, "i")) ? x.classList.add(HIDDEN_CLASS) : x.classList.remove(HIDDEN_CLASS)
    );
  }
}

export default function filterContent() {
  const selectors = document.querySelectorAll("[data-filter]");
  selectors.forEach((container) => container.addEventListener("input", handleTabClick));
}
