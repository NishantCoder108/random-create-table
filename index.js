const tBody = document.getElementById("tbody");
const maxMinNum = document.getElementById("maxNum");
const sumDiffNum = document.getElementById("col-sum");
const shortBody = document.getElementById("shortbody");

//Input by User given
const rows1 = document.getElementById('rows1');
const cols1 = document.getElementById('cols1');
const btn = document.querySelector('button');

btn.addEventListener('click',userCreateTable);


//User Create Table Function
function userCreateTable(){    
//Automatic Create Table
const rows = rows1.value !=='' ?Math.abs(rows1.value ) : 9;
const cols = cols1.value !== '' ?Math.abs( cols1.value) : 9;
const totalNum = (rows * cols);

const arr = new Array(totalNum)
  .fill(0)
  .map(_ => Math.ceil(Math.random() * totalNum));

function tableCreate(rows, cols) {
  let arrTable = "";
  for (let i = 0; i < rows; i++) {
    arrTable += "<tr>";

    for (let j = 0; j < cols; j++) {
      arrTable += `<td>${arr[i * cols + j]}</td>`;
    }
    arrTable += "</tr>";
  }

  return arrTable;
}
//Creating Random Table
tBody.innerHTML = tableCreate(rows, cols);

console.log(arr);

//Max Min Random Number of this TAble
function minMax(arr,func) {
 return arr.reduce(func)
}

let minNum = minMax(arr,(a,b) =>Math.min(a,b)); //here arr will be sort.
let maxNum = minMax(arr,(a,b) => Math.max(a ,b));
console.log("minNum is :", minNum);
console.log("MaxNum is :", maxNum);

console.log("Array is sort :", arr); //checking , Array is sort

maxMinNum.innerHTML = `<h1>Maximum and Minimum Number </h1> 
                       <p>Maximum Number of this table = ${maxNum}</p>
                       <p>Minimum Number of this table = ${minNum}</p>
                       `;



// The Sum of Columnns Elements

function diffSumNum(func) {
    console.log('Arr in diifsum is :',arr)
    return arr.slice(0, cols).reduce(func);
   
}
const sumColNum = diffSumNum((a, b) => a + b);
const diffColNum = diffSumNum((a, b) => a - b);
console.log("The sum of cols elements is :", sumColNum);
console.log("The Difference of cols elements is :", diffColNum);


sumDiffNum.innerHTML = `<h1>Summation and Difference of Cols Elements</h1>
                       <p>The Sum of first ${cols} elements
                        is :${sumColNum}
                        </p>
                        <p>The Difference of first ${cols} elements is : ${diffColNum}
                        </p>
                         `;




//Sorting Random Table
arr.sort((a,b) => a-b)

shortBody.innerHTML = tableCreate(rows, cols);                         
console.log(arr)    

}




(function adsf(){
  
    shortBody.textContent ='Short Your Random Table'
    tBody.textContent = "Create Your Random Table"
 
}
)()