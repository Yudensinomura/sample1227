"use strict"

let user = {
    name: "john",
    surname: "Smith",

    get fullName(){
     return `${this.name} ${this.surname}`;
    },

    set fullName(value){
        [this.name, this.surname] = value.split(" ")
    }    
};

user.fullName = "Alice copper";

console.log(user.name);
console.log(user.surname);