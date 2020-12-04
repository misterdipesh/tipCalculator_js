function calculateTip(){
let bill=parseInt(document.getElementById('billAmount').value);
let people=parseInt(document.getElementById('peopleSize').value);
let serviceSatisfaction=parseInt(document.getElementById('service').value);
let result=bill/people*serviceSatisfaction/100;
console.log(result);
document.getElementById('calculatedResult').innerText=result;
}