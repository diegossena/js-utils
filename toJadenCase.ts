/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 * @param {string} str
 * @return {string}
 */
export default function toJadenCase(str: string): string {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}
