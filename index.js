// first task

function convertFahrToCelsius(param) {
    const F = Number(param);
    if (typeof F !== "number" || isNaN(F)) return `${param} is not a valid number but a/an ${typeof param}.`;
    return ((F-32) * 5/9).toFixed(4);
  }

console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius(JSON.stringify([1,2,3])));
console.log(convertFahrToCelsius(JSON.stringify({temp:0})))




// second task

function checkYuGiOh(param) {
  let n;
  if (!Array.isArray(param)) {
    n = parseInt(param);
  }

  if (isNaN(n)) {
    return  `invalid parameter: ${JSON.stringify(param)}`
  }
  
  let arr = Array.from({length:param}, (_,i) => i + 1);
  let results = [];
  for(let i = 0; i < arr.length; i++){
    if((arr[i] % 2 === 0) && (arr[i] % 3 === 0) && (arr[i] % 5 === 0)){
      results.push("yu-gi-oh")
     } else if ((arr[i] % 2 === 0) && (arr[i] % 3 === 0)) {
      results.push("yu-gi")
     } 
     else if ((arr[i] % 2 === 0) && (arr[i] % 5 === 0)) {
      results.push("yu-gi")
     } 
     else if ((arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
      results.push("yu-oh")
     } 
     else if ((arr[i] % 2 === 0)) {
      results.push("yu")
     } 
     else if ((arr[i] % 3 === 0)) {
      results.push("gi")
     } 
     else if ((arr[i] % 5 === 0)) {
      results.push("oh")
     } 
     else{
      results.push(arr[i])  
      }
    }
    return results
   }
   console.log(checkYuGiOh(10));
   console.log(checkYuGiOh("5"));
   console.log(checkYuGiOh("fizzbuzz is meh"));

