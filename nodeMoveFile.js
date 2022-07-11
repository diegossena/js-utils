/**
 * @author Diego Sena <diego.souza.sena10@gmail.com>
 * @param {string} src
 * @param {string} dest 
 * @return {Promise<void>}
 */
function moveFile(src, dest) {
  return new Promise((resolve, reject) => {
    const rs = fs.createReadStream(src)
    const ws = fs.createWriteStream(dest)
    function cleanup() {
      rs.off('error', handleError)
      ws.off('error', handleError)
      ws.off('close', done)
    }
    function done() {
      fs.unlinkSync(src)
      cleanup()
      resolve()
    }
    /**
     * @param {Error} error 
     */
    function handleError(error) {
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
