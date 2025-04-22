/**
 * Triggers a client-side download of a file represented by a Blob.
 *
 * This function creates a temporary URL for the given Blob object,
 * creates an anchor element with a download attribute, and
 * programmatically clicks it to start the file download in the browser.
 * The temporary URL is revoked after the download is initiated to
 * free up memory.
 *
 * @param {Blob} blob - The binary data to be downloaded, typically representing a file.
 * @param {string} title - The desired filename for the downloaded file, including extension.
 *
 * @example
 * const blob = new Blob(["Hello, world!"], { type: 'text/plain' });
 * download(blob, "greeting.txt");
 */
export function download(blob: Blob, title: string) {
  // Create a temporary URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a link and set its href to the temporary URL
  const link = document.createElement('a');
  link.href = url;

  // Set the link attributes for downloading
  link.setAttribute('download', title);

  // Programmatically click the link to initiate the download
  link.click();

  // Clean up the temporary URL
  URL.revokeObjectURL(url);
}
