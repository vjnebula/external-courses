function CreateNoProtoObject() {
	var newobject = {};
	newobject.__proto__ = null;
	return newobject;
}//func CreateNoProtoObject

console.log(CreateNoProtoObject());

end = "end of script";