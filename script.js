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

