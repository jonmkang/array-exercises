const Memory = require('./memory');
const memory = new Memory();

class Array {
    constructor(){
        this.length = 0;
        this.capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value){
        if(this.length >= this.capacity){
            this._resize((this.length+1) * Array.SIZE_RATIO)
        }
        
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    get(idx){
        if(idx < 0 || idx >= this.length){
            throw new Error('Index error')
        }

        return memory.get(idx+this.ptr)
    }

    pop(){
        if(this.length === 0){
            throw new Error('Index error')
        }

        const value = memory.get(this.ptr+this.length-1)
        this.length--;
        return value
    }

    insert(idx, value){
        if(idx < 0 || idx >= this.length){
            throw new Error('Index error')
        }

        if(this.length >= this.capacity){
            this._resize((this.length+1)  * Array.SIZE_RATIO)
        }

        memory.copy(this.length-idx, this.length-idx-1, this.length-idx)
        memory.set(this.ptr+idx, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

    _resize(size){
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size)
        if(this.ptr === null){
            throw new Error('Not enough memory')
        }

        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)

        this.capacity = size;
    }
}
// Array.SIZE_RATIO = 3;

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array


    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);


    arr.pop();
    arr.pop();
    arr.pop();
    
    arr.pop();
    arr.pop();
    arr.pop();

    arr.push('tauhida');

    console.log(arr.get(0));
}

module.exports = Array;

main()