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
console.log(NumStr("sgsdf"));
console.log(NumStr(2345));
console.log(NumStr2("sgsdf"));
console.log(NumStr2(2345));
console.log(NumStr(true));
console.log(NumStr2(false));
console.log(NumStr(undefined));
console.log(NumStr2(null));
console.log(NumStr2(NaN));

end = "end of script";