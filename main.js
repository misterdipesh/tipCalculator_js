function calculateTip(){
let bill=parseInt(document.getElementById('billAmount').value);
let people=parseInt(document.getElementById('peopleSize').value);
let serviceSatisfaction=parseInt(document.getElementById('service').value);
let result=bill/people*serviceSatisfaction/100;
if (isNaN(result)){
document.getElementById('calculatedResult').innerHTML=
`<p style="color:red;">Please fill the corresponding vlaues</p>`;
}
else{
document.getElementById('calculatedResult').innerHTML=
`<p>${result} is the tip </p>`;
}


}