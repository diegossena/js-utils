/**
 * @param {number[]} ratings
 */
 function countDecreasingRatings(ratings) {
  if (ratings.length <= 1 || ratings.length > 10 ** 5)
    throw Error('Invalid ratings length')
  if (ratings.filter(rating => rating > 0 && rating <= 10 ** 9).length !== ratings.length)
    throw Error('Invalid rating number')
    
  let count = ratings.length

  for (let group_length = 2; group_length < ratings.length; group_length++) {

    for (let rating_i = 0; rating_i <= ratings.length - group_length; rating_i++) {
      
      const group = ratings.slice(rating_i, rating_i + group_length)
      let isValid = true

      for (let group_i = 1; group_i < group.length; group_i++) {
        if (group[group_i] > group[group_i - 1]) {
          isValid = false
          break
        }
      }

      if (isValid)
        count++

    }

  }
  return count
}
