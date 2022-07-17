
function rimWorldImpressRoom(
  wealth = 0,
  beauty = 0,
  space = 0,
  cleanliness = 0,
) {
  const Wb = wealth / 1500
  const Bb = beauty / 3
  const Sb = space / 125
  const Cb = 1 + (cleanliness / 2.5)
  const [Wm, Bm, Sm, Cm] = [Wb, Bb, Sb, Cb]
    .map(b => (
      b > 1
        ? 1 + Math.log(b)
        : b < -1
        ? (1 + Math.log(-b)) * -1
        : 0
    ))
  return (65 * (Wm + Bm + Sm + Cm) / 4) + (35 * Math.min(Wm, Bm, Sm, Cm))
}
