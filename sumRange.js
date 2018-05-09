const range = (start, end, step) => {
  let arr = []
  if (!step)
    step = 1
  if (step < 0)
    for (let i = start; i >= end; i+=step)
      arr.push(i)
  else if (step > 0)
    for (let i = start; i <= end; i+=step)
      arr.push(i)
  return arr
}

const sum = arr => arr.reduce((count, num) => count + num, 0)

console.log(range(2, 5))
console.log(range(5, 2, -1))