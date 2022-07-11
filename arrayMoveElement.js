/**
 * @template T
 * @param {T[]} array
 * @param {number} old_index
 * @param {number} new_index
 * @returns {T[]}
 */
function arrayMoveElement(array, old_index, new_index) {
  array.splice(
    new_index,
    0,
    ...(
      new_index >= array.length
        ? [
          ...Array(new_index - array.length + 1).fill(undefined),
          array.splice(old_index, 1)[0]
        ]
        : [array.splice(old_index, 1)[0]]
    )
  )
  return array
}
