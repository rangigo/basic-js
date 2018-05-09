// Node object
const node = (val, rest) => ({
  value: val,
  rest: rest
})

const arrayToList = arr => {
  let list = node(arr[0], null) // list is also the first node

  for (let i = 1; i < arr.length; i++) {
    let p = list //pointer start from first node

    //iterate through from first to last node
    while (p.rest != null) {
      p = p.rest
    }
    //next to last node is null => assigned new value
    p.rest = node(arr[i], null)
  }

  return list
}

const listToArray = list => {
  let arr = []

  arr.push(list.value)
  while (list.rest != null) {
    list = list.rest
    arr.push(list.value)
  }
  return arr
}

const prepend = (el, list) => {
  if (list != null) {
    let tmp = list
    list = node(el, tmp)
  } else {
    list = node(el, null)
  }
  return list
}

const nth = (list, el) => {
  let count = 0
  let p = list

  while (p.rest != null) {
    if (count == el) {
      return p.value
    }
    count++
    p = p.rest
  }
}

console.log(arrayToList([10, 20, 30]))
console.log(listToArray(arrayToList([10, 20, 30])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 4));
