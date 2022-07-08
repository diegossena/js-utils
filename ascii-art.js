let i = 0
const inputs = [
  '4',
  '5',
  'M@NH@TT@N',
  ' #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### ',
  '# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # ',
  '### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## ',
  '# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       ',
  '# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #  '
]
function readline() {
  return inputs[i++]
}

const L = parseInt(readline())
const H = parseInt(readline())
const T = readline().toUpperCase()

let answer = ''

for (let i = 0; i < H; i++) {
  const ROW = readline()
  for (const char of T) {
    const char_index = char.charCodeAt() === 63 || !/[a-z]/i.test(char)
      ? 26
      : char.charCodeAt() - 65
    answer += ROW.slice(char_index * L, char_index * L + L)
  }
  answer += '\n'
}
console.log(answer)
