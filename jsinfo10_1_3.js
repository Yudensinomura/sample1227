let promise = new Promise(function(resoleve,reject){
 setTimeout(() => resoleve("done!"),1000)
});

promise.then(
    result => console.log(result),
    error => console.log(error)
);