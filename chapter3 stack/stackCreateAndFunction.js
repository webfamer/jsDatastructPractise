function stack() {
	// body...
	var item = [];
	this.push = function(element){
		item.push(element);
	}
	this.pop = function(){
		return item.pop();
	}
	this.peek = function(){
		return item[item.length-1];
	}
	this.isEmpty = function(){
				return item.length ==0;
	}
	this.size = function(){
				return item.length;
	}
	this.clear = function(){
				item = [];
	}
	this.print = function(){
				console.log(item.toString());
	}
}

// var stack = new stack();
//  console.log(stack.isEmpty());
//  stack.push(5);
//  stack.push(8);
//  console.log(stack.peek());
// stack.push(11);
// console.log(stack.size());
// console.log(stack.isEmpty());
// stack.push(15);
// stack.pop();
// stack.pop();
// console.log(stack.size());
// stack.print();


function divideBy2(decnumber,parameter){
	var numstack = new stack(),rem ,binarystring ='';
	var numarr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
	while(decnumber>0){
		rem = Math.floor(decnumber%parameter);
		numstack.push(numarr[rem]);
		decnumber = Math.floor(decnumber/parameter);
	}
	while(!numstack.isEmpty()){
		binarystring += numstack.pop().toString()
	}
	return binarystring;
}
console.log(divideBy2(200,16));
