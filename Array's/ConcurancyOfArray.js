let Arr = [1,1,2,2,2,3,3,3,3,4,5,5,6];

function findOccu(Arr) {
  let occu = [];
  for (let i = 0; i < Arr.length; i++) {
    let counter = 0;
    if (occu[Arr[i]] !== undefined) continue;  // Skip already counted elements
    for (let j = 0; j < Arr.length; j++) {
      if (Arr[i] === Arr[j]) {
        counter++;
      }
    }
    occu[Arr[i]] = counter;  // Store the frequency of the element
  }
  return occu;
}

let result = findOccu(Arr);
console.log(result);
