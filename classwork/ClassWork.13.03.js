function UserCrt(name, age){
	var NewUser = {
		UserName : name,
		UserAge : age
		}
return NewUser;
}

function getRI(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var hus = {};
var UserArr = [];
var UserNameArr = "Jim, Bill, Alice, Marry, Klod, Ann, Jack".split(", ")

for (var i = 0 ; i < UserNameArr.length; i++) {
	UserArr[i] = UserCrt(UserNameArr[i], getRI( 20, 25 ));
}



for (var val of UserArr) {
  if ( val.UserAge == 23 && val.UserName != "Marry" ) {
	val.UserName = "Pol";
	val.UserAge = 25;
	val.salary = 30000;
	hus = val;
break;
}//if val

  if ( val == UserArr[UserArr.length - 1] ) { console.log("age 23 not found"); }
}//for val

for ( var val2 of UserArr) {
  if ( val2.UserName == "Marry" ) {
	delete val2.UserAge;
	val2.husband = hus;
break;
}
if ( val2 == UserArr[UserArr.length - 1] ) { console.log("Marry not found"); }
}//for val2
console.log(UserArr);