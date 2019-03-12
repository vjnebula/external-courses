function NumStr (b){
    if (typeof(b) == "number"){
        return typeof(b);
    }
    if (typeof(b) == "string"){
        return typeof(b);
    }
    return undefined
}
function NumStr2 (c){
    return ((typeof(c) == "number")||(typeof(c) == "string")) ? typeof(c) : undefined;
    }
alert(NumStr(prompt("Enter argument","")));
