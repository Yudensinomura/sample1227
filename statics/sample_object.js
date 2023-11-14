let user = {
    name:"John",
    age:79,
    deadage:57,
    isAdmin:true,
};

let person = "YUDEN";

for(let key in user){
    console.log( user[key])
};
let admin = user;

admin.name ='google';

console.log("name is ",user.name)