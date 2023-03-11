const getWeeksArr = () => {
  let arr = [];
  for (let i = 1; i <= 52; i++) {
    arr.push(i.toString())
  }
  return arr;
}

const getEmptyWeeksArr= () => {
  let arr = [];
  for (let i = 1; i <= 52; i++) {
    arr.push('')
  }
  return arr;
}

export const weeksInYear= getWeeksArr(); 
export const emptySellsWeeks = getEmptyWeeksArr();