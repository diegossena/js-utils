/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 * @template T
 * @param {T[]} array
 * @param {T} separator
 * @return {T[]}
 */
function arrayJoin<T>(array: T[], separator: T): T[] {
  return array.flatMap((element, i) => i ? [separator, element] : [element])
}
