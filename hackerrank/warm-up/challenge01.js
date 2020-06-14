const n = 9
const socks = [1,2,1,1,1,2,3,1,2]

howManyPair = (n,arr) => {
  let sorted = arr.sort((a,b) => a-b)
  console.log(sorted)
  let paired = 0
  for (let index = 0; index < sorted.length - 1; index++) {
    console.log('loop number'+index)
    if(sorted[index] === sorted[index + 1]){
      paired++
      index++
    }
  }
  return paired
}

console.log(howManyPair(n,socks))