/**
 * ```js
 * arrayGroupBy([6.5, 4.12, 6.8, 5.4], Math.floor): {
 *  '4': [ 4.12 ],
 *  '5': [ 5.4 ],
 *  '6': [ 6.5, 6.8 ]
 * }
 * arrayGroupBy(['one', 'two', 'three', 'four'], 'length'): {
 *  '3': [ 'one', 'two' ],
 *  '4': [ 'four' ],
 *  '5': [ 'three' ]
 * }
 * ```
 */
export function arrayGroupBy<T extends {}, K extends keyof T>(
  collection: T[],
  iteratee: K | ((value: Pick<T, K>) => any)
): { [key: string]: T } {
  return Object.values(collection)
    .reduce((obj, element) => {
      const key = iteratee instanceof Function
        ? iteratee(element)
        : element[iteratee]
      if (Object.hasOwn(obj, key))
        obj[key].push(element)
      else
        obj[key] = [element]
      return obj
    }, {})
}
