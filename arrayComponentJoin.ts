/// <reference types="react" />
/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 * @template T
 * @param {T[]} array
 * @param {(key: number) => JSX.Element} separatorMap
 * @param {(element: T, key: number) => JSX.Element} elementMap
 * @return {JSX.Element[]}
 */
export default function arrayComponentJoin<T>(
  array: T[],
  separatorMap: (key: number) => JSX.Element,
  elementMap: (element: T, key: number) => JSX.Element
): JSX.Element[] {
  return array.length !== 0
    ? Array.from(
      Array(array.length * 2 - 1),
      (_e, index) => index % 2
        ? separatorMap(index)
        : elementMap(array[index / 2], index)
    )
    : []
}
