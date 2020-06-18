const field = [0,0,1,0,0,1,0]
const field2 = [0,0,0,1,0,0]

counting = c => {
  let count = -1
  for (let index = 0; index < c.length; index++) {
      count++
      if(c[index+2] !== 1 && index+2 <= (c.length-1)){
        index=index+1
      }
  }

  return count
}

console.log(counting(field2))