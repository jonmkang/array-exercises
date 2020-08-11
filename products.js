function products(arr){
    let product_array = []
    let max_product = 1;
    for(let i = 0; i < arr.length; i++){
        max_product *= arr[i]
    }

    for(let i = 0; i < arr.length; i++){
        product_array.push(max_product / arr[i])
    }

    console.log(product_array)
    return product_array;
}

products([1, 3, 9, 4])