//this function finds the standard deviation of a given array
function standardDev(num){
  total = 0
  for(let i=0; i < num.length; i++){
    total = total + num[i]
  }
  mean = total / num.length
  //console.log(mean)
  total2 = 0
  for(let i=0; i < num.length; i++){
    //console.log((num[i] - mean) * (num[i] - mean))
    total2 = total2 + (num[i] - mean) * (num[i] - mean)
  }
  total3 = total2 / (num.length - 1)

  stdD = Math.sqrt(total3)
  
  console.log(stdD.toFixed(3))

}standardDev([82,93,98,89,88])