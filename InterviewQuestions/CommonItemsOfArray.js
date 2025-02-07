// Given 2 arrays,Create a function that let's user know (true/false) wether 2 array has common items
// For eg.
//     const arr = [1,2,3,4,5]
//     const arr2 = [6,7,8,9]
//     should return false

// For eg.
//     const arr1 =[1,2,3,4,5]
//     const arr2 =[5,6,7,8,9]
// should return true

function commonElements(arr1,arr2){
    for (element1 of arr1){
        for(element2 of arr2){
            if(element1 === element2){
                console.log(true)
                return;
            }
        }
    }
    console.log(false);
    return
}

commonElements([1,2,3,4,5],[6,7,8,9])