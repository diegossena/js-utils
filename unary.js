const message = 'CC'

const binary = [...message]
  .map(char => {
    let binary = char.charCodeAt().toString(2)
    if (binary.length < 7) {
      binary = Array(7 - binary.length).fill(0).join('') + binary
    }
    return binary
  })
  .join('')
let encoded_chars = []
let current_binary_char_i = 0
do {
  const current_binary_char = binary[current_binary_char_i]
  const binary_value = current_binary_char == 1
  const next_binary_char_i = binary.indexOf(
    binary_value ? 0 : 1,
    current_binary_char_i
  )
  const binary_char_interval = binary.slice(
    current_binary_char_i,
    next_binary_char_i === -1 ? Infinity : next_binary_char_i
  )
  encoded_chars.push(
    (binary_value ? '0' : '00')
    + ' '
    + Array(binary_char_interval.length).fill('0').join('')
  )
  current_binary_char_i += binary_char_interval.length
} while (current_binary_char_i < binary.length)
const encoded_message = encoded_chars.join('')
console.log(encoded_message)
