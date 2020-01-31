const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]
function isWinner (obj){
  return obj.result === "W";
}
function superbowlWin(record){
 
  const result = record.find(({ result }) => result === 'W' );
  if(result !== false){
    return result.year
  }
  else return undefined;
}
superbowlWin(record)