module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map((pair) => pair.join(''))
  for (let i = str.length; i >= 0; i--) {
    for (let j = 0; j < brackets.length; j++) {
      if (str.includes(brackets[j])) {
        str = str.replace(brackets[j], '')
        j = 0
      } else {
        j++
      }
    }
  }
  return str.length === 0
}
