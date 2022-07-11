const epoch = 1577836800000n
const maxSequence = 1023n
const node = 0n

let lastTimestamp = 0n
let sequence = 0n

/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 * @return {string}
 */
function getUniqueID() {
  const currentTime = BigInt(Date.now())
  const currentTimestamp = currentTime - epoch

  sequence = currentTimestamp === lastTimestamp
    ? (sequence + 1n) & maxSequence
    : 0n

  lastTimestamp = currentTimestamp

  const uid = currentTimestamp << 22n | (node << 10n) | sequence

  return uid.toString()
}
