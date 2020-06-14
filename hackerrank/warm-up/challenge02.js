const n = 12
const s = 'DDUUDDUDUUUD'

countingValley = (n,s) => {
  const split = s.split('')
  const changeToNumber = split.map(s => {
    if(s === 'U') return 1
    if(s === 'D') return -1
  })
  const step = []
  let journey = 0
  changeToNumber.forEach(element => {
    journey = journey + element
    step.push(journey)
  });
  let count = 0
  for (let index = 1; index < n; index++) {
    console.log(`${step[index]} and ${step[index-1]}`)
    if(step[index] === 0 && step[index]>step[index-1]){
      count++
    }
  }
  console.log(split)
  console.log(changeToNumber)
  console.log(step)
  console.log(count)
  return count
}

countingValley(n,s)