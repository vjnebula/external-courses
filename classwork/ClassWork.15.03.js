var UserProto = {
	getAge: function (){
		return this.age;
	},
	getName: function (){
		return this.name;
	},
	changeName: function (name){
		this.name = name;
	},
	changeAge: function (age){
		this.age = age;
	}

};

var EmplProto = {
	getJobTitle: function (){
		return this.jobTitle;
	},
	getSalary: function (){
		return this.salary;
	},
	promote: function (jobTitle, salary){
		this.jobTitle = jobTitle;
		this.salary = salary;
	}

};

var Man1, Man2, Ma3, Ma4 = {
	name: "",
	salary: 30000,
	jobTitle: "",
	age: 25
};

Man1 = Object.assign({}, UserProto, EmplProto);
Man2 = Object.assign({}, UserProto, EmplProto);
Man3 = Object.assign({}, UserProto, EmplProto);
Man4 = Object.assign({}, UserProto, EmplProto);

Man1.changeName("Mary");
console.log(Man1.getName());
Man2.changeAge(30);
console.log(Man2.getAge());
Man3.promote("Senior Developer",100500);
console.log(Man3.getJobTitle() + " salary " + Man3.getSalary());

end = "end of script";