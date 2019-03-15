function NumStr (b){
	var Btype = typeof(b);
    if (Btype == "number"){
        return Btype;
    }
    if (Btype == "string"){
        return Btype;
    }
    return undefined
}
function NumStr2 (c){
	var Ctype = typeof(c);
    return ((Ctype == "number")||(Ctype == "string")) ? Ctype : undefined;
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