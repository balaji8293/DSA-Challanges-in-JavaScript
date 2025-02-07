const boxes = [1,2,3,4,5];

function logAllPairsOfArray(array) {
    console.log('this are numbers');
    array.forEach(element => {
        console.log(element)
    });
    console.log('this are some of pairs')
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i] + array[j]);
//     }
//   }
    array.forEach(firstNumber => {
        array.forEach((secondNumber)=>{
            console.log(firstNumber+secondNumber,'is addion of',firstNumber,'+',secondNumber,'pair');
        })
    });
}
logAllPairsOfArray(boxes);

// if nested for loop it becomes "*"
// O(n*n)   => O(n^2);      //Quadratic time 