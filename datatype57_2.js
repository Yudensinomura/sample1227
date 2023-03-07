let person =  {
    name: "john",
    age: 30
};



let lessonList = new Map(Object.entries(person));


console.log( lessonList.get('age'));