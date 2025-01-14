function receivesAFunction(callback) {
    return callback();
}

receivesAFunction(function(){return "I am stored in the callback varialbe!"});


function returnsANamedFunction(){
    return function fn(){};
};

function returnsAnAnonymousFunction() {
    return function(){};
}