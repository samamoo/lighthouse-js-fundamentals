const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

startPosition = [0,0]
const finalPosition = function(moves) {
  var spot = [];
  for (const move of moves) {
    if (moves[0] === "north") {
      startPosition[0]+1;
    } else if (moves[0] === "south") {
      startPosition[0]-1;
    } else if (moves[0] === "east") {
      startPosition[1]+1;
    } else if (moves[0] === "west") {
      startPosition[1]-1
    }
  }
}

finalPosition(moves);

//Output:[-1, 4]

for (const move of moves) {
  switch(moves[0]){
    case "north":
      return startPosition[0]+=1;
    break;
    case "south":
      return startPosition[0]-=1;
    break;
    case "east":
      return startPosition[1]+=1;
    break;
    case "west":
      return startPosition[1]-=1;
    break;
  }
}


const moves = ["north", "north", "west", "west", "north", "east", "north"];

/*const finalPosition = function (moves) {
  let startPosition = [0,0];
  for (i=0; i<moves.length; i++) {
    switch (i) {
      case "north":
      startPosition[0] += 1;
      break;
      case "south":
      startPosition[0] -= 1;
      break;
      case "east":
      startPosition[1] += 1;
      break;
      case "west":
      startPosition[1] -= 1;
      break;
    }

  }return startPosition;
}
console.log(finalPosition());*/
const finalPosition=function(moves){
  let startPosition = [0,0];
  for(let move of moves){
  switch(move){
    case "north":
      startPosition[1]+=1;
      //console.log(startPosition);
      //return startPosition;
    break;
    case "south":
      startPosition[1]-=1;
      //console.log(startPosition);
      //return startPosition;
    break;
    case "east":
      startPosition[0]+=1;
      //console.log(startPosition);
      //return startPosition;
    break;
    case "west":
      startPosition[0]-=1;
      //console.log(startPosition);
      //return startPosition;
    break;
  }
 }return startPosition;
}

console.log(finalPosition(moves))