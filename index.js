// const testVar = {}
//
// function testFunc() {
//   return "hi"
// }

function superbowlWin(record) {
  let winYears = record.find( team => {
    return team.result === 'W'
  })

  if (winYears) {
    return winYears.year
  }
  else {
    return 'not defined'
  }
}
