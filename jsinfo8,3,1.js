"use strict"

let user = {
    name:"john",
};

Object.defineProperty(user,"name",{
    writable:false
});

user.name = "pote"

console.log(user.name);