function space(tiles=0) { return tiles*1.4 }
function rimWorldImpressRoom(
  wealth = 0,
  space = 0,
  beauty = 0,
  cleanliness = 0,
) {
  const ceil = v => parseFloat(Math.ceil(v + 'e2') + 'e-2')
  const ln = v => ceil(Math.log(v))
  const Wb = ceil(wealth / 1500)
  const Bb = ceil(beauty / 3)
  const Sb = ceil(space / 125)
  const Cb = ceil(1 + (cleanliness / 2.5))
  const [Wm, Bm, Sm, Cm] = [Wb, Bb, Sb, Cb]
    .map(b => (
      b > 1
        ? 1 + ln(b)
        : b < -1
        ? (1 + ln(-b)) * -1
        : b
    ))
  const I = (65 * (Wm + Bm + Sm + Cm) / 4) + (35 * Math.min(Wm, Bm, Sm, Cm))
  const S = 500  * Sm
  return {
    Wm, Bm, Sm, Cm,
    Impressive: (
      I > S 
        ? 0.25 * I + 0.75 * S
        : I
    )
  }
}
