var initialPrice=document.querySelector('#initial-price');
var stocksQuantity=document.querySelector('#stocks-quantity');
var currentPrice=document.querySelector('#current-price');
var submitBtn=document.querySelector('#submit-btn');
var outputBox=document.querySelector('#output');

submitBtn.addEventListener('click',submitHandler);
function submitHandler(){
    var ip=Number(initialPrice.value);
    var qty=Number(stocksQuantity.value);
    var curr=Number(currentPrice.value);
    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial,quantity, current){
if(initial && quantity && current !==""){
    if(initial >0 && quantity > 0 && current > 0){
    if(initial>current){
        var loss=(initial-current)*quantity;
        var lossPercentage=((loss/initial)*100).toFixed(2);
        outputBox.style.color = "red";
        outputBox.innerText=`Hey the loss is ${loss} and the loss percentage is ${lossPercentage}`;
    }
else if(current>initial){
   
var profit=(current-initial)*quantity;
var profitPercentage=((profit/initial)*100).toFixed(2);
outputBox.style.color = "green";
outputBox.innerText=`Hey the profit is ${profit} and the profit percentage is ${profitPercentage}`;

}
else{
    outputBox.style.color = "purple";
    outputBox.innerText=` Om Shanti No Pain No Gain &&& No Gain No Pain `;
}}
else{
    outputBox.style.color = "purple";
    outputBox.innerText=`Please Provide Inputs Greater Than Zero`; 
}
}
else{
    outputBox.style.color = "blue";
    outputBox.innerText=`Please Provide All the Inputs `;
}

}