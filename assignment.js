// feetToMile
function feetToMile(feet) {
    var mile = feet*0.00018939;
    if(feet<0){
        return "please input a positive value";
    }else{
        return mile;
    }
}
var result = feetToMile(1);
console.log(result);

// woodCalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount = bed*5;
    var totalWood = chairCount + tableCount + bedCount;

    if(chair<0 || table<0 || bed<0){
        return "please enter a positive value"
    }else{
        return totalWood;
    }
}
    var woodResult = woodCalculator(2,3,2);
    console.log(woodResult);

// brickCalculator

    function brickCalculator(floor) {
        if (floor <= 10) {
            var bricks = (floor * 15 * 1000);
            return bricks;
        } else if (floor > 10 && floor <= 20) {
            var bricks = (10 * 15 * 1000) + (floor - 10) * 12 * 1000;
            return bricks;
        } else if (floor > 20) {
            var bricks = (10 * 15 * 1000) + (10 * 12 * 1000) + (floor - 20) * 10 * 1000;
            return bricks;
        } 
    }

var story = brickCalculator(15);
console.log(story);

// tinyFriend

function tinyFriend(names){
    var tiny = names[0];
    for(var i=0; i<names.length; i++){
        var currentName = names[i];
        if(currentName.length<tiny.length){
            tiny = currentName;
        }
    }
    return tiny;
}
var myFriend = tinyFriend(["Ashik", "Opu", "Topu", "Ri", "mashuk"]);
console.log(myFriend);
