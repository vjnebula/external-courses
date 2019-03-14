function LogArray (Arr){
    for (var val of Arr){
        console.log(val);
    }
    console.log("Длинна массива "+Arr.length);
}
LogArray("Ann, Bill, Alice, Marry, Klod, Pol, Jack".split(", "));

end = "end of script";