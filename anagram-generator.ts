/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 */
interface PermuteOptions {
  input: string[]
  usedChars: string[]
  permutes: string[]
}
function permute(opt: PermuteOptions) {
  const { input, permutes, usedChars } = opt
  // Loop through every letter
  for (let i = 0; i < input.length; i++) {
    // Splice the character at the index we need
    const ch = input.splice(i, 1)[0]
    // Push the character into the used category
    usedChars.push(ch)
    // We've run out of characters, push this combination into storage
    if (input.length === 0)
      permutes.push(usedChars.join(''))
    // Recursively run the input without the characters we've removed
    permute(opt)
    // Inject and shift our stored letter at the appropriate index, this is how arrange for all possible combinations
    input.splice(i, 0, ch)
    // Remove the last used character as we've exhausted its potential
    usedChars.pop()
  }
  return permutes
}
/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 */
function anagrams(str: string) {
  return permute({ input: Array.from(str), permutes: [], usedChars: [] })
}
