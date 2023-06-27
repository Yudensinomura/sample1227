class User{

    consotructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(this.name);
    }
}

let user = new User("JOHN");
user.sayHi();