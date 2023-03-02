/**
 * Returns 9 useful positions (page coordinates) of a HTMLElement regarding the window object
 *
 *    topLeft      topCenter      topRight
 *           \ ________|________ /
 *            |                 |
 * middleLeft |   middleCenter  | middleRight
 *            |_________________|
 *           /         |         \
 * bottomLeft     bottomCenter    bottomRight
 *
 * @param {HTMLElement} node target node
 * @param {HTMLElement} relativeParent relative parent, instead of window
 * @returns {Object} Nine pair of page coordinates
 */
export const getAbsolutePosition = (node, relativeParent) => {
  const { top, left, width, height } = node.getBoundingClientRect()

  let [pageX, pageY] = [window.pageXOffset, window.pageYOffset]
  if (relativeParent) {
    // in order to calculate the relative parent position, we reuse this function,
    // using the parent regarding the window and substracting the topLeft corner (its relative position [0,0])
    const { topLeft: [parentX, parentY] } = getAbsolutePosition(relativeParent);
    [pageX, pageY] = [pageX - parentX, pageY - parentY]
  }

  return {
    topLeft: [pageX + left, pageY + top],
    topCenter: [pageX + left + width / 2, pageY + top],
    topRight: [pageX + left + width, pageY + top],
    middleLeft: [pageX + left, pageY + top + height / 2],
    middleCenter: [pageX + left + width / 2, pageY + top + height / 2],
    middleRight: [pageX + left + width, pageY + top + height / 2],
    bottomLeft: [pageX + left, pageY + top + height],
    bottomCenter: [pageX + left + width / 2, pageY + top + height],
    bottomRight: [pageX + left + width, pageY + top + height]
  }
}
