/**
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
export default function twoSum(numbers: number[], target: number): number[] {
  for (let num1_i = 0; num1_i < numbers.length; num1_i++) {
    const num1 = numbers[num1_i]
    for (let num2_i = 0; num2_i < numbers.length; num2_i++) {
      const num2 = numbers[num2_i]
      if (num2_i !== num1_i && num1 + num2 === target) {
        return [num1_i, num2_i]
      }
    }
  }
}
