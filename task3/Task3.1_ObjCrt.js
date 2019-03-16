var myObj = {};
myObj.string = "String property";
myObj.number = 123;
myObj.forDel = "to delete";
myObj.boo = true;
myObj.nan = NaN;
myObj.undef = undefined;
myObj.nul = null;

console.log(myObj);
delete myObj.forDel;
console.log(myObj);

end = "end of script";