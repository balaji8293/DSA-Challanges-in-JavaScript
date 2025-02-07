function reverse(str){
    const backwords = [];
    if(!str || str.length<2 || typeof str !=='string'){
        console.log('umm not a sting');
        return 'umm not a sting';
    }
    let totalLength = str.length-1;
    for (let i = totalLength;i>=0;i--){
        backwords.push(str[i])
    }
    console.log(backwords.join(''))
    return backwords.join('');
}
// with built in JavaScript function

function reverse2(str){
    console.log(str.split('').reverse().join(''))
    return str.split('').reverse().join('');
}
// in with arrow function of JavaScript

const reverse3 = (str) =>console.log(str.split('').reverse().join(''));

const reverse4 = (str) =>console.log([...str].reverse().join(''));

reverse4("Balaji sanap")