const one = '0'
const zero = '00'
/**
 * @param {string} str
 * @return {string}
 */
export function encode(str: string): string {
  const bin = Array.from(str, char => {
    const bin = char.charCodeAt(0).toString(2)
    return '00000000'.slice(bin.length) + bin
  }).join('')
  console.log({ bin })
  let code = ''
  let i = 0
  do {
    const current = bin[i]
    code += ' ' + (current === '0' ? zero : one) + ' '
    do {
      code += '0'
    } while (current === bin[++i] && i < bin.length)
  } while (i < bin.length)
  return code.slice(1)
}
/**
 * @param {string} code
 * @return {string}
 */
export function decode(code: string): string {
  const bin = code
    .split(' ')
    .map((sequence, i, array) => (
      i % 2
        ? Array(sequence.length)
          .fill(array[i - 1] === zero ? 0 : 1)
          .join('')
        : null
    ))
    .filter(o => o)
    .join('')
  return Array
    .from(
      Array(bin.length / 8),
      (_, i) => {
        const start = i * 8
        console.log(i, bin.slice(start, start + 8))
        return String.fromCharCode(
          parseInt(
            bin.slice(start, start + 8),
            2
          )
        )
      }
    ).join('')
}
