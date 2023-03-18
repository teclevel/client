const getWeeksArr = () => {
  let arr = [];
  for (let i = 1; i <= 52; i++) {
    arr.push(i.toString())
  }
  return arr;
}

export const getEmptyWeeksArr = () => {
  let arr = [];
  for (let i = 1; i <= 52; i++) {
    arr.push('')
  }
  return arr;
}

export const weeksInYear = getWeeksArr();
// export const emptySellsWeeks = getEmptyWeeksArr();

// export const setPeriodColor = (
//   position: number,
//   datesRepair: string[],
//   colorNumber: string,
//   setDateRepairs: (a: string[]) => void,
//   period:number,
//   repair:{[propertyName: string]:string}
// ) => {

//   datesRepair.splice(position, 1, colorNumber);
//   setDateRepairs([...datesRepair])

//   if (colorNumber === repair.b) {
//     const half1 = datesRepair.slice(0, position)
//     const half2 = datesRepair
//       .slice(position + 1, datesRepair.length + 1)
//       .map((i, index) => (index + 1) % period === Number(repair.a) ? repair.b : repair.c)
//     setDateRepairs([...half1, colorNumber, ...half2]);
//   }
// }
