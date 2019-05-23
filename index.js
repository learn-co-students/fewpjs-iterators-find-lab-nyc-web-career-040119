const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arrOfObjs) => {
  const winObj = arrOfObjs.find(obj => obj.result === "W")

  return winObj ? winObj.year : undefined
}
