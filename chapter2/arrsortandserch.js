var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
number.reverse();
console.log(number);
console.log(number.sort(function (a,b) {
	// body...
	return a-b;
}));

var friends = [{
	name:'jone',
	age:30
},{
	name:'anne',
	age:20
},{
	name:'mike',
	age:15
}]
var sortage = friends.sort(function(a,b){
	return a.age-b.age;
})
console.log(sortage);//sort排序

