const countBs = str => (str.match(/[A-Z]/g) || []).length

const countChar = (str, comparedChar) => (str.match(new RegExp(comparedChar, 'g')) || []).length

console.log(countBs('BBC'))
console.log(countChar('kakkerlak', 'k'))
