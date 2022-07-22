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
