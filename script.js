
function fibRecursive(num, array = []) {
    if(num == 0) return []
    else if(num === 1) array = [0]
    else if(num === 2) array = [0].concat(1)
    else {
        array = fibRecursive(num - 1)
        array = array.concat(array[array.length -1] + array[array.length - 2])
    }  
    return array
}
console.log(fibRecursive(4))


//mergeSort
function mergeSort(array) {
    let sortedLeft, sortedRight
    if(array.length === 1) return array
    else {
         let leftArray = array.slice(0, (array.length)/2)
         console.log(`left ${leftArray}`)
        let rightArray = array.slice((array.length)/2)
        console.log(`right: ${rightArray}`)
        sortedLeft = mergeSort(leftArray)
        sortedRight = mergeSort(rightArray)
    }
    return merge(sortedLeft,sortedRight)
}
function merge(left, right) {
    let i=j=0;
    let result = []
   while (i < left.length+1 && j < right.length) {
        if (left[i] < right[j]){
           result.push(left[i])
            i += 1
        } else{
            result.push(right[j])
            j += 1
        }
    }
    result.push(...left.slice(i));
    result.push(...left.slice(j))
    return result
}
console.log(mergeSort([7,5,1,9,2,58,10,0]))