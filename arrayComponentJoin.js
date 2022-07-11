/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 * @template T
 * @param {T[]} array
 * @param {(key: number) => JSX.Element} separatorMap
 * @param {(element: T, key: number) => JSX.Element} elementMap
 * @return {JSX.Element[]}
 */
function arrayComponentJoin(array, separatorMap, elementMap) {
  return array.length !== 0
    ? Array.from(
      Array(array.length * 2 - 1),
      (_e, index) => index % 2
        ? separatorMap(index)
        : elementMap(array[index / 2], index)
    )
    : []
}
