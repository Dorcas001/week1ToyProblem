const speedLimit = 70;
let speed = 80;

let points = Math.floor((speed - 70) / 5)

function carspeed(speed){
   
    if (speed <=70){
        console.log('ok')
    }else if ((speed - speedLimit) / 5 <= 12){
        console.log(`Points: ${+ points}`)
    }else if ( (speed - speedLimit) / 5 > 12 ){
        console.log ('License suspended')
    }
}
carspeed(120)
