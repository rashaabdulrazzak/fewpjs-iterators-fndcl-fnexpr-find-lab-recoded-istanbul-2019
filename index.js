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
 
  const res = record.find(({ result }) => result === 'W' );
  if(fi.isWinner){
    return res.year
  }
  else return undefined;
}
superbowlWin(record)