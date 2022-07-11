/**
 * @template T
 * @param {Promise<AxiosResponse<T>>} response
 * @template S
 * @param {(data: T) => S} handler
 * @return {Promise<S>}
 */
function responseHandler(response, handler) {
  return new Promise((resolve, reject) => {
    response
      .then(({ data }) => {
        if (handler)
          handler(data)
        resolve(data)
      })
      .catch(reject)
  })
}
