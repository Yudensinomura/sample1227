let user ={
    name:"YUDEN",
    drink:"麦茶",
    amount: 50,  //objectと呼ばれる構成
    isTea: false,
    skill: "袈裟斬り",
    "likes birds": true,
};

let person = "鍬";
let drink = "炭酸ジュース";//プリミティヴと呼ばれる構成
let amount = 50;
let isTea = true;

console.log(user.name+drink);

user.skill = "袈裟斬り"
console.log(user.skill);

let animal = {};

animal["likes birds"] = true;

console.log("user=",user["likes birds"]);
console.log("animal=",animal["likes birds"]);