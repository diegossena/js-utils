/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 * @param {string} text}
 */
function alphabetPosition(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .map(letter => letter.charCodeAt(0) - 96)
    .join(' ')
}
