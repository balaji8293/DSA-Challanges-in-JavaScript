//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// can read more about hash table is here --- https://softwaremaniacs.org/blog/2020/02/05/dicts-ordered/en/

function firstRecurringCharacter(input) {
    for (let i = 0;i<input.length-1;i++){
        for(let j = i+1; j<input.length-1;j++){
            if(input[i] === input[j]){
                return input[i]; 
            }
        }
    }
}       //O(n^2);
        //O(1) is space complexity of it

// we can store array item as a key and check if key is already present if present will return it as a recurring number

function firstRecurringCharacter2(input){
    let map={};
    for(let i = 0;i<input.length;i++){
        if(map[input[i]] !== undefined){
            return input[i]
        }else{
            map[input[i]]=i
        }
        console.log(map)
    }
    return undefined;
}       //O(n)
        //O(n) is space complexity of it



console.log(firstRecurringCharacter2([2,1,3,2,3,5,1,2,4]))
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2