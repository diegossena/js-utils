import type { AxiosResponse } from 'axios'
/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 * @template T
 * @param {Promise<AxiosResponse<T>>} response
 * @template S
 * @param {(data: T) => S} handler
 * @return {Promise<S>}
 */
export default function responseHandler<T, S = T>(
  response: Promise<AxiosResponse<T>>,
  handler?: (data: T) => S
): Promise<S> {
  return new Promise((resolve, reject) => {
    response
      .then(({ data }) => {
        if (handler)
          handler(data)
        resolve(data as unknown as S)
      })
      .catch(reject)
  })
}

