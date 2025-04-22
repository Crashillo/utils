/**
 * Converts an HTML table element (`<table>`) into a CSV-formatted string.
 *
 * This function extracts the table headers (`<th>`) and rows (`<td>`) from
 * the provided HTMLTableElement and converts them into a valid CSV string,
 * handling text escaping and custom separators.
 *
 * - Headers are extracted from `<th>` elements in the table.
 * - Line breaks in header cells are replaced with spaces.
 * - Quotes and special characters are escaped following CSV conventions.
 * - Only `<td>` data rows are included in the output (header rows are excluded).
 *
 * @param {HTMLTableElement} table - The HTML table element to convert to CSV.
 * @param {string} [separator=','] - Optional CSV column separator (defaults to comma).
 *                                    For example, use `;` for European-style CSV.
 * @returns {string} A string representing the contents of the table in CSV format.
 *
 * @example
 * const table = document.querySelector('table');
 * const csv = toCsv(table, ';');
 * console.log(csv);
 */
export function toCsv(table: HTMLTableElement, separator: string = ','): string {
  const escape = (text: string) => {
    const needsEscape = text.includes(separator) || text.includes('"') || text.includes('\n');
    const escaped = text.replace(/"/g, '""');
    return needsEscape ? `"${escaped}"` : escaped;
  };

  const tableHeaders: string = Array.from(table.querySelectorAll('th'))
    .map((item) =>
      escape(
        item.innerText
          .split('\n')
          .filter((str) => str !== '')
          .join(' ')
      )
    )
    .join(separator);

  const rows: string[] = Array.from(table.querySelectorAll('tr')).reduce(
    (arr: string[], currRow: HTMLTableRowElement) => {
      if (currRow.querySelector('th')) return arr;

      const cells: string = Array.from(currRow.querySelectorAll('td'))
        .map((item) => escape(item.innerText))
        .join(separator);
      return arr.concat([cells]);
    },
    []
  );

  return `${tableHeaders}\n${rows.join('\n')}`;
}
