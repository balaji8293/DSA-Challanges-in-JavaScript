function mergeSortedArrays(arr1, arr2) {
    let mergeArray = [...arr1, ...arr2]
    // for assending order
    mergeArray.sort((a, b) => a - b)
    //for decending order
    mergeArray.sort((a, b) => b - a)

    console.log(mergeArray)
}
mergeSortedArrays([1, 2, 4, 31], [5, 7, 9, 10])