const amounts1 = [22, 5, 4, 12,9,25];
 

getFinalOrder = (k, amounts) => {
  let indexFirstElements = [];
  let indexSecondElements = [];
  let results = [];
  let firstRemoves=[];
  

  amounts.map((it) => {
    if (it <= k) {
      indexFirstElements.push(amounts.indexOf(it));
      firstRemoves.push(it-it);
      
    } else {
      indexSecondElements.push(amounts.indexOf(it));
      results.push(it - k);
    }
  });
 while(indexSecondElements.length>0){
  for (i = 0; i < results.length; i++) {
    let temp = results[i];
    let itsIndex = indexSecondElements[i];
    if (temp <= k) {
      indexFirstElements.push(itsIndex);
      results.splice(i, 1);
      indexSecondElements.splice(i, 1);
      i--;
    } else {
      results[i] = results[i] - k;
  while (indexSecondElements.length > 0) {
    for (i = 0; i < results.length; i++) {
      let temp = results[i];
      let itsIndex = indexSecondElements[i];
      if (temp <= k) {
        indexFirstElements.push(itsIndex);
        results.splice(i, 1);
        indexSecondElements.splice(i, 1);
        i--;
      } else {
        results[i] = results[i] - k;
      }
    }
  }
}
//Result
console.log(indexFirstElements)
  for (let i = 0; i < indexFirstElements.length; i++) {
    indexFirstElements[i] = indexFirstElements[i] + 1;
  }
  //Result
  console.log(indexFirstElements);
};
getFinalOrder(8, amounts1);
 }
}