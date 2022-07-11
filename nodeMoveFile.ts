import { createReadStream, createWriteStream, unlinkSync } from 'fs'
/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 * @param {string} src
 * @param {string} dest
 * @return {Promise<void>}
 */
export default function moveFile(src: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const rs = createReadStream(src)
    const ws = createWriteStream(dest)
    function cleanup() {
      rs.off('error', handleError)
      ws.off('error', handleError)
      ws.off('close', done)
    }
    function done() {
      unlinkSync(src)
      cleanup()
      resolve()
    }
    /**
     * @param {Error} error
     */
    function handleError(error: Error) {
      cleanup()
      rs.pause()
      rs.unpipe(ws)
      ws.destroy()
      rs.destroy()
      reject(error)
    }
    rs.on('error', handleError)
    ws.on('error', handleError)
    ws.on('close', done)
    rs.pipe(ws)
  })
}
