let str = ''
let isSharp = false
let count = 0

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (isSharp) {
      str += '#'
      isSharp = false
    }
    else {
      str += ' '
      isSharp = true 
    }
    if (j == 7) {
      str += '\n'
      isSharp = !isSharp
    }
  }
}

console.log(str)
  