var purchasePriceInput=document.querySelector("#purchase-price");
var stockQuantityInput=document.querySelector("#stock-quantity");
var currentPriceInput=document.querySelector("#current-price");
var checkButton=document.querySelector("#check-btn");
var outputEl=document.querySelector("#message");

function lossCalculator(loss,cost){
  var lossPercentage=(loss/cost)*100;
  outputEl.style.color="red";
  outputEl.innerHTML=`Sorry for your loss, you have lost ${lossPercentage.toFixed(2)}% which is ${loss} .`
}
function profitCalculator(profit,cost){
    var profitPercentage=(profit/cost)*100;
  
    outputEl.innerHTML=`Congratulations you have gained a profit of ${profitPercentage.toFixed(2)}% which is ${profit} .`
    outputEl.style.color = "green"
}

checkButton.addEventListener("click",clickHandler);

function clickHandler(){
    if(purchasePriceInput.value===""||stockQuantityInput.value===""||currentPriceInput.value===""){
        alert("Please fill all the required fields");
    }
    var purchasePrice=Number(purchasePriceInput.value);
    var stockQuantity=Number(stockQuantityInput.value);
    var currentPrice=Number(currentPriceInput.value);
  if(purchasePrice>currentPrice){
      var priceDiff=purchasePrice-currentPrice;
      var totalCostOfBuying=purchasePrice*stockQuantity;
      var loss=purchasePrice*stockQuantity-currentPrice*stockQuantity;
      lossCalculator(loss.toFixed(2),priceDiff.toFixed(2),totalCostOfBuying.toFixed(2));
  }else if(purchasePrice===currentPrice){
    outputEl.innerHTML="You have neither gained nor lost anything please check again after few days.";
    outputEl.style.color = "yellow"
}else{
    var priceDiff=currentPrice-purchasePrice;
    var totalCostOfBuying=purchasePrice*stockQuantity;
    var profit=currentPrice*stockQuantity-purchasePrice*stockQuantity;
    console.log(profit,priceDiff,totalCostOfBuying);
    profitCalculator(profit.toFixed(2),priceDiff.toFixed(2),totalCostOfBuying.toFixed(2));
  }
}

