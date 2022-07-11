/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 */
 function arrayMoveElement<T>(array: T[], old_index: number, new_index: number) {
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
