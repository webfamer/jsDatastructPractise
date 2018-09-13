var number =[0,1,2,3,4,5,6,7,8,9];
for(var i=number.length;i>=0;i--){
	number[i] = number[i-1];
}
number[0] =-1;
console.log(number)//模仿unshif

var number1 =[0,1,2,3,4,5,6,7,8,9];
for(var i=0;i<number1.length;i++){
	number1[i] =number1[i+1];
}
console.log(number1)//模仿shift()

var number2 =[0,1,2,3,4,5,6,7,8,9];
number2.splice(3,0,2)
console.log(number2)//splite(开始的索引，删除的个数，插入的项)

var doublearry = [];
doublearry[0] = [];
doublearry[0][0]=1;
doublearry[0][1]=2;
doublearry[1]=[];
doublearry[1][0]=3;
doublearry[1][1]=4;
console.log(doublearry)

function lookarr(argument) {
	// body...
	for(var i=0;i<argument.length;i++){
		for(var j=0;j<argument[i].length;j++){
			console.log(argument[i][j]);
		}
	}
}
lookarr(doublearry);

var zero =0;
var positivenumber =[1,2,3];
var negativenumber = [-3,-2,-1]
var result = positivenumber.concat(zero,negativenumber);
console.log(result.toString());//数组concat用法
var isEven = function(x){
	console.log(x);
	return(x%2 ==0)?true:false
};
var numarr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numarr.every(isEven));//every用法
console.log(numarr.some(isEven));//every用法
numarr.forEach(function(x){
	console.log((x%2==0))
})//forEach 遍历数组
console.log('-----------------------')
console.log(numarr.map(isEven));//map方法
console.log('-----------------------')
console.log(numarr.filter(isEven));//filter方法
console.log('-----------------------')
console.log(numarr.reduce(function(previous,current,index){
	return previous+current;
}))
