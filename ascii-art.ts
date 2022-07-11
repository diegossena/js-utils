import alphabetPosition from './alphabetPosition'
const basicFont = [
  ' #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ###',
  '# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   #',
  '### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ##',
  '# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #      ',
  '# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  # '
]
/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 */
function asciiArt(font: string[]) {
  let x = 1
  while (++x < font[0].length) {
    let y = font.length
    while (--y) {
      if (font[y][x] !== ' ')
        break
    }
    if (!y)
      break
  }
  const height = font.length
  const width = x
  return (str: string) => (
    Array.from(Array(height), (_, y) => (
      Array.from(str, char => {
        char = char.toLowerCase().replace(/[^a-z]/g, '?')
        const char_index = char === '?' ? 26 : alphabetPosition(char)
        const letter_start = (
          char_index // spaces between letters
          + char_index * width
        )
        const letter_end = letter_start + width
        return font[y].slice(letter_start, letter_end)
      }).join(' ')
    )).join('\n')
  )
}
