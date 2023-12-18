// initialize speedlimit to 70
const speedLimit = 70;
// initialize speed to 80
let speed = 80;
// calculate the demerit points
let points = Math.floor((speed - 70) / 5)
let total = 0

function carspeed(speed){
   
    if (speed <=70){
        console.log('ok')
        // if the speed is less than 12 .return total points
    }else if ((speed - speedLimit) / 5 <= 12){
        console.log('Points :' + points)
    }else if ( (speed - speedLimit) / 5 > 12 ){
        console.log ('License suspended')
    }
        
    
}
carspeed(120)
