/**
 * Use [data-filter] tag in some parent node relative of the input search and the content to filter
 * Use [data-filter-target] tag in the nodes to filter
 *
 * @example
 *  <div data-filter>
 *    <input type="text">
 *    <div data-filter-target>...</div>
 *    <div data-filter-target>...</div>
 *    <div data-filter-target>...</div>
 *  </div>
 */
const HIDDEN_CSS_CLASS = "is-hidden";

function handleTabClick({ target }) {
  const parent = target.closest(`[data-filter]`);
  const { value } = target;

  if (parent) {
    [...parent.querySelectorAll(`[data-filter-target]`)].map((x) =>
      !x.textContent.match(new RegExp(value, "i")) ? x.classList.add(HIDDEN_CSS_CLASS) : x.classList.remove(HIDDEN_CSS_CLASS)
    );
  }
}

export default function filterContent() {
  const selectors = document.querySelectorAll("[data-filter]");
  selectors.forEach((container) => container.addEventListener("input", handleTabClick));
}
