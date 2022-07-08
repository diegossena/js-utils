function linguaDoP(frase = '') {
  const vogais = ['a', 'e', 'i', 'o', 'u']
  const others = ['r', 'l']
  return frase.split(' ')
    .map(palavra => {
      const letras = palavra.split('')
      let palavraComP = ''
      for (let i = 0; i < letras.length; i++) {
        const letra0 = letras[i]
        const letra1 = letras[i + 1]
        const letra2 = letras[i + 2]
        if (
          !vogais.includes(letra0)
          && vogais.includes(letra1)
        ) {
          palavraComP += letra0 + letra1
            + 'p' + letra1
          i++
        } else if (
          !vogais.includes(letra0)
          && others.includes(letra1)
          && vogais.includes(letra2)
        ) {
          palavraComP += letra0
            + letra1
            + letra2
            + 'p' + letra1 + letra2
          i += 2
        } else
          palavraComP += letra0
      }
      return palavraComP
    })
    .join(' ')
}
[
  'frase de teste',
  'outra frase para teste'
].map(linguaDoP)
