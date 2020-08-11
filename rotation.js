function rotate(str1, str2){
    let idx = 1;
    while(idx < str1.length){
        let b = str1.slice(-(str1.length-idx)) + str1.slice(0, idx)
        if(str2 === b){
            return true;
        }
        idx++;
    }
    

    return false
}

console.log(rotate('amazon', 'azonam' ))
console.log(rotate('amazon', 'azonma'))