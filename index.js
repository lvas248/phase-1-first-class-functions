function receivesAFunction(callBack){
    callBack();
    return;
}
function returnsANamedFunction(){
    const namedFunction = () => "correct";
    return namedFunction;
}
function returnsAnAnonymousFunction(){
    return function (){console.log('correct')};
}