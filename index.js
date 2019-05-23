// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]

const superbowlWin = (arrayObj) => {
  let win = arrayObj.find(array => {
    return array.result === 'W'
  })

  if (win){
    return win.year
  } else {
    return undefined
  }
}
