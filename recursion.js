const isEven = a => {
  if (a == 0) return true
  else if (a == 1) {
    return false
  }
  else 
   return a < 0 ? isEven(a+2) : isEven(a-2) 
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))