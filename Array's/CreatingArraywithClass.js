class MyArray{
    constructor(){
        this.length=0;
        this.data = {}
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length]=item
        this.length++
        return this.length;
    }
    pop(){
        delete this.data[this.length-1];
        this.length--;
        // return this.data
    }
    delete(index){   
        const item = this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index){
        for (let i = index;i<this.length;i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1]
        this.length--;
    }
}
const getArray = new MyArray()
getArray.push('Hi')
getArray.push('you')
getArray.push('there')
getArray.push('are')
getArray.push('awesome')
getArray.push('!')


// getArray.pop();
// getArray.pop();
getArray.delete(2)

console.log(getArray);

// console.log(getArray,getArray.get(1));
