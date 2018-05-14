// Node object
const node = (val, rest) => ({
  value: val,
  rest: rest
})

const arrayToList = arr => {
  let list = node(arr[0], null) // list is also the first node

  for (let i = 1; i < arr.length; i++) {
    let p = list //pointer start from first node

    //iterate through list from first to last node
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
  
  //push the first value of  the list to array
  arr.push(list.value)
  
  //Iterate through the list
  while (list.rest != null) {
    list = list.rest
    arr.push(list.value)
  }

  return arr
}

const prepend = (el, list) => {

  //If list is not null, use auxiliary variable to remember the list
  if (list != null) {
    let tmp = list

    //prepend new element to the list
    list = node(el, tmp)
  } else {
    ///else it's a new list initialized with the parameter's element
    list = node(el, null)
  }

  return list
}


const nth = (list, pos) => {
  // let count = 0
  // let p = list
  // //Iterate through the list
  // while (p.rest != null) {
  //   //Count is the position of the current element
  //   //If count equals to the passed position => return value
  //   if (count == pos) {
  //     return p.value
  //   }
  //   //point to next element
  //   p = p.rest
  //   //increase the index counter
  //   count++
  // }

  //recursive function
  if (list == null) return undefined
  else if (pos == 0) return list.value  
  else return nth(list.rest, pos-1)
}


console.log(arrayToList([10, 20, 30]))
console.log(listToArray(arrayToList([10, 20, 30])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30, 40, 50]), 2));
