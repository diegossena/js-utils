/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 * @param {string} letter
 * @return {number}
 */
export default function alphabetPosition(letter: string): number {
  return letter.toLowerCase().charCodeAt(0) - 96
}
