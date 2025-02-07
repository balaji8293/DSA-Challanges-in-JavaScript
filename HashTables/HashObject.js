let user={
    age:27,
    name:'kylie',
    magic:true,
    scream:function(){
        console.log('ahhhhh!');
    }
}
console.log(user.name)      //O(1)
user.name                   //O(1)
user.spell="ada kadabara"   //O(1)
console.log(user);  